import React, { useEffect, useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(input);
      const botMessage = { sender: "bot", text: result.response.text() };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Error:", error);
    }

    setInput("");
  };

  return (
    <div style={{ width: "400px", margin: "auto", textAlign: "center" }}>
      <h2>Chat with Gemini AI</h2>
      <div style={{ maxHeight: "300px", overflowY: "auto", border: "1px solid #ccc", padding: "10px" }}>
        {messages.map((msg, i) => (
          <p key={i} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
            <strong>{msg.sender === "user" ? "You:" : "Gemini:"}</strong> {msg.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "80%", padding: "5px" }}
      />
      <button onClick={sendMessage} style={{ padding: "5px", marginLeft: "5px" }}>Send</button>
    </div>
  );
};