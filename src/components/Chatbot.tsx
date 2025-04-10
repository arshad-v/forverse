import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaPaperPlane, FaTimes, FaSpinner } from "react-icons/fa";

interface Message {
  text: string;
  isBot: boolean;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! How can I help you today?", isBot: true }
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Add loading state
  const messageEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages appear
  useEffect(() => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = async () => {
    const userMessage = inputText.trim();
    if (userMessage === "") return;

    // Add user message immediately
    setMessages(prev => [...prev, { text: userMessage, isBot: false }]);
    setInputText("");
    setIsLoading(true); // Set loading state

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error(`API error: ${response.statusText}`);
      }

      const data = await response.json();
      
      // Add bot response
      setMessages(prev => [...prev, { text: data.reply || "Sorry, I couldn't get a response.", isBot: true }]);

    } catch (error) {
      console.error("Chatbot error:", error);
      // Add error message to chat
      setMessages(prev => [...prev, { text: "Sorry, something went wrong. Please try again later.", isBot: true }]);
    } finally {
      setIsLoading(false); // Clear loading state
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col items-end z-50">
      {isOpen && (
        <div className="bg-white shadow-xl rounded-lg w-80 md:w-96 overflow-hidden border border-gray-200 flex flex-col transition-all duration-300 ease-in-out">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <FaRobot className="text-white mr-2" size={20} />
              <h2 className="text-lg font-bold text-white">Forverse.AI Assistant</h2>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition"
            >
              <FaTimes size={18} />
            </button>
          </div>
          
          {/* Messages area */}
          <div className="p-4 h-80 overflow-y-auto bg-gray-50">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-3 flex ${msg.isBot ? "justify-start" : "justify-end"}`}
              >
                <div 
                  className={`max-w-3/4 px-4 py-2 rounded-lg ${
                    msg.isBot 
                      ? "bg-gray-200 text-gray-800 rounded-bl-none" 
                      : "bg-blue-600 text-white rounded-br-none"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {/* Optional: Show loading indicator */}
            {isLoading && (
              <div className="flex justify-start mb-3">
                 <div className="bg-gray-200 text-gray-800 rounded-lg px-4 py-2 rounded-bl-none inline-flex items-center">
                   <FaSpinner className="animate-spin mr-2" /> Thinking...
                 </div>
              </div>
            )}
            <div ref={messageEndRef} />
          </div>
          
          {/* Input area - Fixed text visibility */}
          <div className="border-t border-gray-200 p-3 bg-white">
            <div className="flex items-center">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-grow p-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800"
                placeholder="Type your message..."
                rows={2}
                style={{ color: '#333' }}
              />
              <button
                onClick={handleSend}
                disabled={inputText.trim() === "" || isLoading} // Disable button when loading
                className={`ml-2 p-2 rounded-full ${
                  inputText.trim() === "" || isLoading
                    ? "bg-gray-300 cursor-not-allowed" 
                    : "bg-blue-600 hover:bg-blue-700"
                } text-white transition`}
              >
                {isLoading ? <FaSpinner className="animate-spin" size={16} /> : <FaPaperPlane size={16} />}
              </button>
            </div>
          </div>
        </div>
      )}
      
      {/* Chat button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${
          isOpen ? "bg-blue-700" : "bg-blue-600 hover:bg-blue-700"
        } text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-all duration-300`}
        aria-label="Toggle chat"
      >
        <FaRobot size={24} />
      </button>
    </div>
  );
};

export default Chatbot;
