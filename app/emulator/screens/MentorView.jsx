import React, { useState, useRef, useEffect } from "react";
import { GraduationCap, Sparkles, Lightbulb, Code, ClipboardList, Map, Send, ChevronLeft, RefreshCw, ChevronRight } from "lucide-react";

export default function MentorView({ messages, onSendMessage, onClearMessages }) {
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    {
      id: "explain",
      title: "Explain a Concept",
      desc: "Get plain-English explanations with clean examples.",
      icon: Lightbulb,
      prompt: "Explain how React state and useEffect work together.",
    },
    {
      id: "code",
      title: "Review my Code",
      desc: "Send a snippet to find bugs or improve efficiency.",
      icon: Code,
      prompt: "Review this code snippet and suggest optimizations:\n\n```javascript\nfunction fetchData() {\n  fetch('/api/data')\n    .then(res => res.json())\n    .then(data => console.log(data));\n}\n```",
    },
    {
      id: "quiz",
      title: "Quiz Me",
      desc: "Test your knowledge on the current topic module.",
      icon: ClipboardList,
      prompt: "Quiz me on modern JavaScript ES6 features.",
    },
    {
      id: "next",
      title: "What's Next?",
      desc: "Check recommendation for what topic to tackle next.",
      icon: Map,
      prompt: "What is my recommended next learning topic based on my path?",
    },
  ];

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSend = (text) => {
    if (!text.trim()) return;
    setInputText("");
    
    // Add user message
    onSendMessage({ sender: "user", text, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) });
    
    // Trigger typing simulation
    setIsTyping(true);
    
    // Mock response after delay
    setTimeout(() => {
      setIsTyping(false);
      let responseText = "";
      
      if (text.toLowerCase().includes("react state")) {
        responseText = "### React State & useEffect\n\nIn React, **state** is local memory. When state updates, React re-renders the component.\n\n`useEffect` lets you run side-effects (like APIs, subscriptions) after rendering. For example:\n\n```javascript\nconst [data, setData] = useState([]);\n\nuseEffect(() => {\n  fetch('/api/tech')\n    .then(res => res.json())\n    .then(resData => setData(resData));\n}, []); // runs once on mount\n```";
      } else if (text.toLowerCase().includes("review this code")) {
        responseText = "### Code Review Notes\n\n1. **Error Handling**: You should add a `.catch()` block to catch network errors.\n2. **Modernize**: Use async/await syntax for cleaner readability:\n\n```javascript\nasync function fetchData() {\n  try {\n    const res = await fetch('/api/data');\n    const data = await res.json();\n    console.log(data);\n  } catch (err) {\n    console.error('Fetch failed:', err);\n  }\n}\n```";
      } else if (text.toLowerCase().includes("quiz")) {
        responseText = "### Modern JS Quiz Question\n\n**Q: What is the main difference between `==` and `===` in JavaScript?**\n\n*   `==` compares values with **type coercion** (converts types if they differ).\n*   `===` compares values **strictly** (both value and type must match).\n\n*Type your answer or ask for more questions!*";
      } else if (text.toLowerCase().includes("recommended next")) {
        responseText = "### Your Personalized Next Step\n\nBased on your selected learning path, you should focus on **DOM Manipulation Basics** next.\n\nIt is the foundation of turning static HTML layouts into dynamic web pages. Check out Phase 2 of your Roadmap tab!";
      } else {
        responseText = "Hello! I am your **AI Learning Mentor**. I am here to explain concepts, review your coding assignments, or quiz you to solidify your understanding.\n\nAsk me anything about HTML/CSS, JavaScript, or React, and I'll walk you through it!";
      }

      onSendMessage({
        sender: "ai",
        text: responseText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      });
    }, 1500);
  };

  const renderFormattedText = (text) => {
    // Simple mock markdown formatter
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      // Monospace block start/end
      if (line.startsWith("```")) {
        return null; // Handled as grouped code blocks
      }
      
      // Headers
      if (line.startsWith("### ")) {
        return <h4 key={idx} style={{ fontSize: "15px", fontWeight: "800", color: "var(--emu-navy)", margin: "12px 0 6px" }}>{line.replace("### ", "")}</h4>;
      }
      if (line.startsWith("**Q:")) {
        return <p key={idx} style={{ fontWeight: "700", color: "var(--emu-navy)", margin: "8px 0" }}>{line}</p>;
      }

      // Bullet lists
      if (line.startsWith("* ") || line.startsWith("- ")) {
        return (
          <li key={idx} style={{ marginLeft: "14px", listStyleType: "disc", margin: "4px 0" }}>
            {line.substring(2)}
          </li>
        );
      }

      // Code blocks (very basic regex replacement to display inline code)
      let formattedLine = line;
      
      return (
        <p key={idx} style={{ margin: "4px 0", wordBreak: "break-word" }}>
          {/* basic bold format */}
          {formattedLine.split("**").map((part, pIdx) => 
            pIdx % 2 === 1 ? <strong key={pIdx}>{part}</strong> : part
          )}
        </p>
      );
    });
  };

  const isWelcome = messages.length === 0;

  return (
    <div className="mentor-screen">
      {/* Chat Header */}
      {!isWelcome && (
        <div className="mentor-chat-header">
          <button className="mentor-chat-back" onClick={onClearMessages}>
            <ChevronLeft size={16} />
          </button>
          <div className="mentor-chat-info">
            <div className="mentor-chat-dot" />
            <span className="mentor-chat-title">AI Mentor</span>
          </div>
          <button className="mentor-chat-action" onClick={onClearMessages}>
            <RefreshCw size={14} />
          </button>
        </div>
      )}

      {isWelcome ? (
        /* Welcome State */
        <div className="mentor-welcome">
          <div className="mentor-card">
            <div className="mentor-icon-wrap">
              <div className="mentor-icon-circle">
                <GraduationCap size={24} />
              </div>
              <div className="mentor-online-dot" />
            </div>
            <div>
              <div className="mentor-name">AI Learning Mentor</div>
              <div className="mentor-status">
                Status: <span className="online">Online</span>
              </div>
            </div>
          </div>

          <div className="mentor-insight">
            <Sparkles className="sparkle" size={16} style={{ color: "var(--emu-primary)" }} />
            <p>
              Hi Sohel! I've analyzed your onboarding preferences. Ask me to break down web layers, debug components, or construct mock interview questions!
            </p>
          </div>

          <div className="mentor-section-label">Quick Help</div>

          {/* Quick Prompts */}
          {quickPrompts.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="mentor-quick-card"
                onClick={() => handleSend(item.prompt)}
              >
                <div className="mentor-quick-icon">
                  <Icon size={18} />
                </div>
                <div className="mentor-quick-text">
                  <div className="mentor-quick-title">{item.title}</div>
                  <div className="mentor-quick-desc">{item.desc}</div>
                </div>
                <ChevronRight className="mentor-quick-arrow" size={16} />
              </div>
            );
          })}
        </div>
      ) : (
        /* Chat Messages State */
        <div className="mentor-messages">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`mentor-msg-row ${msg.sender === "user" ? "user" : ""}`}
            >
              {msg.sender === "ai" && (
                <div className="mentor-ai-icon">
                  <GraduationCap size={14} />
                </div>
              )}
              <div className={`mentor-bubble ${msg.sender === "user" ? "user-b" : "ai-b"}`}>
                {msg.sender === "user" ? (
                  <p>{msg.text}</p>
                ) : (
                  <div>
                    {renderFormattedText(msg.text)}
                    {/* Basic check if message contains code block */}
                    {msg.text.includes("```") && (
                      <pre
                        style={{
                          backgroundColor: "#1E293B",
                          color: "#38BDF8",
                          padding: "10px",
                          borderRadius: "10px",
                          fontSize: "11px",
                          fontFamily: "monospace",
                          marginTop: "8px",
                          overflowX: "auto",
                          whiteSpace: "pre-wrap",
                          wordBreak: "break-all",
                        }}
                      >
                        <code>
                          {msg.text.split("```")[1] ? msg.text.split("```")[1].replace(/^[a-z]+/i, "") : ""}
                        </code>
                      </pre>
                    )}
                  </div>
                )}
                <div className="mentor-msg-time">{msg.time}</div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="mentor-msg-row">
              <div className="mentor-ai-icon">
                <GraduationCap size={14} />
              </div>
              <div className="mentor-typing-bubble">
                <div className="mentor-typing-dot" />
                <div className="mentor-typing-dot" />
                <div className="mentor-typing-dot" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Input Bar */}
      <div className="mentor-input-bar">
        <input
          type="text"
          className="mentor-input"
          placeholder="Ask your mentor anything..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend(inputText)}
        />
        <button
          className={`mentor-send-btn ${inputText.trim() ? "active" : "inactive"}`}
          onClick={() => handleSend(inputText)}
          disabled={!inputText.trim()}
          style={{ border: "none", outline: "none" }}
        >
          <Send size={14} />
        </button>
      </div>
    </div>
  );
}
