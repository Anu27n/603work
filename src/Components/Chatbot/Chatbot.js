import React, { useState, useRef, useEffect } from "react";
import "./chatbot.css";
import botIcon from "../../images/bot.png";

// 🧠 Predefined bot responses
const predefinedQuestions = {
  "What services do you offer?": "We offer Workspace Design & Planning, Interior Solutions, and Coworking Management.",
  "How can I contact you?": "You can reach us via email at sales@603thecoworkingspace.com or call +91 91360 36603.",
  "What are your business hours?": "We’re open Monday to Friday, from 9:00 AM to 6:00 PM.",
  "Where are you located?": "Our office is at Makhija Arcade, 35th Rd, Khar West, Mumbai, Maharashtra 400052.",
};

// 🎯 Chatbot Component
const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const messagesEndRef = useRef(null);

  // 🔄 Auto-scroll to bottom when new messages appear
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // 🧩 Toggle chatbot visibility
  const toggleChatbot = () => setIsOpen((prev) => !prev);

  // 💬 Handle user sending a message
  const handleSendMessage = () => {
    const trimmedInput = userInput.trim();
    if (!trimmedInput) return;

    // Add user message
    setMessages((prev) => [...prev, { sender: "user", text: trimmedInput }]);
    setUserInput("");

    // Simulate bot response with slight delay
    const botResponse =
      predefinedQuestions[trimmedInput] ||
      "🤖 I’m still learning! Please try asking something else.";
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 600);
  };

  // ⚡ Handle quick question click
  const handleQuestionClick = (question) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", text: question },
      {
        sender: "bot",
        text:
          predefinedQuestions[question] ||
          "🤖 I'm still learning! Try another question.",
      },
    ]);
  };

  // 🎛 Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSendMessage();
  };

  return (
    <div className="chatbot-container">
      {/* Floating chatbot toggle */}
      <button
        className="chatbot-toggle"
        onClick={toggleChatbot}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
      >
        <img src={botIcon} alt="Chatbot Icon" className="bot-icon" />
        <span className="chatbot-toggle-text">
          {isOpen ? "Close Chat" : "Chat with us"}
        </span>
      </button>

      {/* Chat window */}
      {isOpen && (
        <div
          className="chat-window"
          role="dialog"
          aria-labelledby="chatbot-title"
          aria-live="polite"
        >
          <h2 id="chatbot-title" className="sr-only">
            Chatbot Conversation
          </h2>

          {/* Message Display */}
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <strong>
                  {msg.sender === "user" ? "You:" : "Bot:"}
                </strong>{" "}
                {msg.text}
              </div>
            ))}

            {isTyping && (
              <div className="message bot typing">
                <em>Bot is typing...</em>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="chat-input">
            <input
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Chat message input"
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>

          {/* Quick Questions */}
          <div className="predefined-questions">
            <p>Try asking:</p>
            {Object.keys(predefinedQuestions).map((q, i) => (
              <button
                key={i}
                onClick={() => handleQuestionClick(q)}
                aria-label={`Ask: ${q}`}
              >
                {q}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
