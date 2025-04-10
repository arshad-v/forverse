import type { VercelRequest, VercelResponse } from '@vercel/node';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

// --- Website Context ---
// This context is derived from src/pages/Home.tsx and src/pages/Services.tsx
const websiteContext = `
Forverse.ai is an AI Innovation Partner focused on transforming businesses.
Key Services:
- AI Development: Custom AI solutions, machine learning models, neural networks.
- Autonomous Agents: Intelligent agents for automating complex tasks and workflows with advanced decision-making. Focus on Agentic AI that can think, learn, and act independently.
- Process Automation: Streamlining operations, reducing manual work, increasing efficiency. Seamless workflow automation.
- Data Analytics: Transforming raw data into actionable insights with advanced analytics, visualization, and machine learning.
- Chatbot Solutions: Intelligent conversational AI for customer service and engagement. AI Chatbot Innovation delivering personalized responses.
- Database Solutions: Robust database design, management, AI-powered optimization, and scaling.
- Custom Development: Full-stack development tailored to specific business requirements. Includes scalable front-end interfaces and robust back-end systems. Custom AI solutions for unique needs.
- API Integration: Connecting systems with modern API architectures.
- Security Solutions: AI-powered security measures to protect data and systems.
- Software Development: Crafting scalable, user-friendly front-end interfaces and robust back-end systems.

Company Focus:
- Enterprise-grade AI solutions solving real business challenges.
- Enhancing operations and creating competitive advantage.
- Agentic AI and Generative AI are key areas. Generative AI for content creation, marketing, design, personalization, and optimization.
- High client satisfaction (97%), serving 10+ enterprise clients, achieving significant efficiency gains (avg. 68%) and ROI (avg. 3.1x).
- Testimonials highlight success in customer service improvement, workflow automation, and custom generative AI solutions.
- Integrates with existing client ecosystems.

Instructions for the AI:
- You are the Forverse.AI Assistant.
- Your primary goal is to answer user questions based *only* on the provided Forverse.ai context above.
- Be helpful, informative, and concise.
- If a question is about a topic not covered in the context (e.g., pricing details not mentioned, specific technical implementation details, asking about competitors), state that you don't have that specific information but can answer questions about Forverse.ai's services and focus areas based on the provided context. Do not invent information.
- Do not mention that you are an AI model or that you have limitations unless directly asked or when declining to answer an off-topic question.
- Keep responses focused on Forverse.ai.
`;
// --- End Website Context ---

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('GEMINI_API_KEY environment variable not set.');
    return res.status(500).json({ error: 'API key not configured.' });
  }

  const { message } = req.body;

  if (!message || typeof message !== 'string') {
    return res.status(400).json({ error: 'Invalid request body. "message" string is required.' });
  }

  try {
    const genAI = new GoogleGenerativeAI(apiKey);
    // Using gemini-1.5-pro-latest as a stable, powerful model.
    // Gemini 2.5 Pro Exp is not a standard available model name via the API currently.
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro-latest" }); 

    const generationConfig = {
      temperature: 0.7, // Adjust for creativity vs. factuality
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      { category: HarmCategory.HARM_CATEGORY_HARASSMENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
      { category: HarmCategory.HARM_CATEGORY_HATE_SPEECH, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
      { category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
      { category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT, threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE },
    ];

    // Construct the prompt including context and user message
    const prompt = `${websiteContext}\n\nUser Question: ${message}\n\nForverse.AI Assistant Answer:`;

    const result = await model.generateContent({
        contents: [{ role: "user", parts: [{ text: prompt }] }],
        generationConfig,
        safetySettings,
    });

    if (result.response) {
      const text = result.response.text();
      res.status(200).json({ reply: text });
    } else {
      // Handle cases where the response might be blocked or empty
      console.error('Gemini API response was empty or blocked.', result);
      res.status(500).json({ error: 'Failed to get response from AI model. It might have been blocked due to safety settings or other issues.' });
    }

  } catch (error) {
    console.error('Error calling Gemini API:', error);
    res.status(500).json({ error: 'Internal Server Error processing chat request.' });
  }
}
