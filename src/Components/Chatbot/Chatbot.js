
import React, { useState } from 'react';
import './chatbot.css'; 
import botIcon from '../../images/bot.png'; 

const predefinedQuestions = {
  "What services do you offer?": "We offer Workspace Design & Planning.",
  "How can I contact you?": "You can reach us via email at sales@603thecoworkingspace.com",
  "What are your business hours?": "We are available from 9 AM to 6 PM, Monday to Friday.",
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);  // to toggle chatbot open/close
  const [messages, setMessages] = useState([]); // Chat message state

  const handleQuestionClick = (question) => {
    setMessages([...messages, { sender: 'user', text: question }]);

    const botResponse = predefinedQuestions[question];
    setMessages((prev) => [...prev, { sender: 'bot', text: botResponse }]);
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);  // Toggle between open and close states
  };

  return (
    <div className="chatbot-container">
      {/* Bot icon with text */}
      <div className="chatbot-toggle" onClick={toggleChatbot}>
        <img src={botIcon} alt="Chatbot" />
        <span className="chatbot-toggle-text">
          {isOpen ? "Close chat" : "Open chat"}
        </span>
      </div>

      {/* Chat window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                <strong>{msg.sender === 'user' ? 'You' : 'Bot'}:</strong> {msg.text}
              </div>
            ))}
          </div>

          {/* Predefined questions */}
          <div className="predefined-questions">
            {Object.keys(predefinedQuestions).map((question, index) => (
              <button key={index} onClick={() => handleQuestionClick(question)}>
                {question}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
