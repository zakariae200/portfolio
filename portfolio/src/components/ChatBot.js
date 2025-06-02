import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaPaperPlane, FaTimes } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import cvData from '../data/zakariae-cv.json';
// Import the images
import hiImage from '../images/3d hi bg.png';
import computerImage from '../images/computer bg.png';

const popIn = keyframes`
  0% { transform: scale(0); opacity: 0; }
  70% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const ChatBubbleContainer = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 120px;
  height: 120px;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
  
  @media (max-width: 992px) {
    width: 110px;
    height: 110px;
  }
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
    width: 90px;
    height: 90px;
  }
  
  @media (max-width: 480px) {
    width: 80px;
    height: 80px;
    bottom: 15px;
    right: 15px;
  }
  
  @media (max-height: 600px) {
    width: 70px;
    height: 70px;
  }
`;

const ChatBubbleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3));
  animation: ${pulse} 3s ease-in-out infinite;
  transition: opacity 0.3s ease-in-out;
`;

const SpeechBubble = styled.div`
  position: absolute;
  top: -30px;
  left: -15px;
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  color: #1a1a5e;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  animation: ${popIn} 0.5s ease-out, ${bounce} 2.5s ease-in-out 0.5s infinite;
  z-index: 1001;
  border: 1px solid rgba(26, 26, 94, 0.1);
  letter-spacing: 0.3px;
  display: ${props => props.isOpen ? 'none' : 'block'};
  
  &::after {
    content: '';
    position: absolute;
    bottom: -7px;
    left: 20px;
    width: 14px;
    height: 14px;
    background: linear-gradient(135deg, #ffffff, #f8f9fa);
    transform: rotate(45deg);
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.1);
    z-index: -1;
    border-right: 1px solid rgba(26, 26, 94, 0.1);
    border-bottom: 1px solid rgba(26, 26, 94, 0.1);
  }
  
  @media (max-width: 768px) {
    top: -25px;
    left: -10px;
    padding: 5px 10px;
    font-size: 12px;
  }
`;

const ChatWindow = styled.div`
  position: fixed;
  bottom: 150px;
  right: 30px;
  width: 350px;
  height: 450px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;
  transition: all 0.3s ease;
  transform: ${props => props.isOpen ? 'scale(1)' : 'scale(0)'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  transform-origin: bottom right;
  
  @media (max-width: 992px) {
    width: 320px;
    height: 420px;
  }
  
  @media (max-width: 768px) {
    bottom: 120px;
    right: 20px;
    width: calc(100% - 40px);
    max-width: 350px;
    height: 400px;
  }
  
  @media (max-width: 480px) {
    bottom: 110px;
    right: 10px;
    width: calc(100% - 20px);
    height: 60vh;
    max-height: 400px;
  }
  
  @media (max-height: 600px) {
    height: 70vh;
    bottom: 110px;
  }
`;

const ChatHeader = styled.div`
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  color: #1a1a5e;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(26, 26, 94, 0.1);
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background: linear-gradient(135deg, #f8f9fa, #f0f0f0);
  }
  
  @media (max-width: 480px) {
    padding: 12px 15px;
  }
`;

const ChatTitle = styled.h3`
  margin: 0;
  font-size: 1.1rem;
  font-weight: bold;
  color: #1a1a5e;
  letter-spacing: 0.3px;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #1a1a5e;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 0.8;
    transform: scale(1.1);
  }
`;

const ChatBody = styled.div`
  flex: 1;
  padding: 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  @media (max-width: 768px) {
    padding: 15px;
    gap: 12px;
  }
  
  @media (max-width: 480px) {
    padding: 12px 10px;
    gap: 10px;
  }
  
  @media (max-height: 600px) {
    padding: 10px;
    gap: 8px;
  }
`;

const Message = styled.div`
  max-width: 80%;
  padding: 10px 15px;
  border-radius: 15px;
  font-size: 0.95rem;
  line-height: 1.4;
  word-break: break-word;
  
  ${props => props.isBot ? `
    align-self: flex-start;
    background-color: #f0f0f0;
    border-bottom-left-radius: 5px;
    color: #333;
  ` : `
    align-self: flex-end;
    background: linear-gradient(135deg, #1a1a5e, #00b8d4);
    border-bottom-right-radius: 5px;
    color: white;
  `}
  
  /* Markdown styling */
  p {
    margin: 0.5em 0;
  }
  
  ul, ol {
    margin: 0.5em 0;
    padding-left: 1.5em;
  }
  
  li {
    margin: 0.25em 0;
  }
  
  strong {
    font-weight: 600;
  }
  
  code {
    background-color: ${props => props.isBot ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.15)'};
    padding: 0.1em 0.3em;
    border-radius: 3px;
    font-family: monospace;
  }
  
  h1, h2, h3, h4, h5, h6 {
    margin: 0.5em 0;
    font-weight: 600;
  }
  
  a {
    color: ${props => props.isBot ? '#1a1a5e' : 'white'};
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    max-width: 85%;
    padding: 9px 13px;
    font-size: 0.92rem;
  }
  
  @media (max-width: 480px) {
    max-width: 90%;
    padding: 8px 12px;
    font-size: 0.9rem;
    line-height: 1.3;
  }
  
  @media (max-height: 600px) {
    padding: 6px 10px;
    font-size: 0.85rem;
    line-height: 1.2;
    border-radius: 12px;
  }
`;

const ChatFooter = styled.div`
  padding: 15px;
  border-top: 1px solid #f0f0f0;
  display: flex;
  gap: 10px;
  
  @media (max-width: 768px) {
    padding: 12px;
    gap: 8px;
  }
  
  @media (max-width: 480px) {
    padding: 10px 8px;
    gap: 6px;
  }
  
  @media (max-height: 600px) {
    padding: 8px;
    gap: 6px;
  }
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 10px 15px;
  border: 1px solid #e0e0e0;
  border-radius: 20px;
  font-size: 0.95rem;
  
  &:focus {
    outline: none;
    border-color: #1a1a5e;
  }
  
  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.9rem;
  }
`;

const SendButton = styled.button`
  background: linear-gradient(135deg, #1a1a5e, #00b8d4);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
`;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: Date.now(), text: "Hi there! I'm Zakariae's virtual assistant. How can I help you today?", isBot: true }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatBodyRef = useRef(null);
  
  // Scroll to bottom of chat when messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  
  const handleSendMessage = async () => {
    if (inputText.trim() === '' || isLoading) return;
    
    // Add user message
    const userMessageText = inputText;
    const userMessage = { text: userMessageText, isBot: false, id: Date.now() + 1 }; // Unique ID for user message
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputText('');
    setIsLoading(true);

    const botMessagePlaceholder = { text: "", isBot: true, id: Date.now() }; // Unique ID for bot placeholder
    setMessages(prevMessages => [...prevMessages, botMessagePlaceholder]);
    
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Send previous messages (excluding the new placeholder) + current user message
          messages: [
            ...messages.filter(msg => msg.id !== botMessagePlaceholder.id).map(msg => ({ // Filter out placeholder if it got added early
              role: msg.isBot ? 'assistant' : 'user',
              content: msg.text
            })),
            { role: 'user', content: userMessageText }
          ],
          cvData: cvData
        })
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to get response from AI. Status: ${response.status}. Details: ${errorText}`);
      }

      if (!response.body) {
        throw new Error('Response body is null');
      }

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });

        let eolIndex;
        while ((eolIndex = buffer.indexOf('\n')) >= 0) {
          const line = buffer.substring(0, eolIndex).trim();
          buffer = buffer.substring(eolIndex + 1);

          if (line.startsWith('data:')) {
            try {
              const jsonStr = line.substring(5);
              if (jsonStr === '[DONE]') { // Explicit DONE message check (optional, as stream end also works)
                break;
              }
              const data = JSON.parse(jsonStr);
              if (data.token) {
                setMessages(prevMessages =>
                  prevMessages.map(msg =>
                    msg.id === botMessagePlaceholder.id
                      ? { ...msg, text: msg.text + data.token }
                      : msg
                  )
                );
              } else if (data.error) {
                setMessages(prevMessages =>
                  prevMessages.map(msg =>
                    msg.id === botMessagePlaceholder.id
                      ? { ...msg, text: msg.text + "Error: " + data.error }
                      : msg
                  )
                );
                console.error('Streaming error from backend:', data.error);
                return; // Stop processing further tokens on error
              }
            } catch (e) {
              console.error('Error parsing streamed JSON:', e, 'Original line:', line);
              // Optionally update UI to show a parsing error for this specific message
            }
          }
        }
      }
    } catch (error) {
      console.error('Error getting AI response:', error);
      setMessages(prevMessages =>
        prevMessages.map(msg =>
          msg.id === botMessagePlaceholder.id
            ? { ...msg, text: "I'm sorry, we're experiencing technical difficulties. Please try again. Details: " + error.message }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  return (
    <>
      <ChatBubbleContainer onClick={toggleChat}>
        <SpeechBubble isOpen={isOpen}>Hi! 👋</SpeechBubble>
        {isOpen ? (
          <ChatBubbleImage src={computerImage} alt="I'm listening" />
        ) : (
          <ChatBubbleImage src={hiImage} alt="Chat with me" />
        )}
      </ChatBubbleContainer>
      
      <ChatWindow isOpen={isOpen}>
        <ChatHeader onClick={toggleChat}>
          <ChatTitle>Zakariae's Assistant</ChatTitle>
          <CloseButton>
            <FaTimes />
          </CloseButton>
        </ChatHeader>
        
        <ChatBody ref={chatBodyRef}>
          {messages.map((message) => (
            <Message key={message.id} isBot={message.isBot}>
              {message.isBot ? (
                <ReactMarkdown>{message.text}</ReactMarkdown>
              ) : (
                message.text
              )}
            </Message>
          ))}
          {isLoading && (
            <Message isBot={true}>
              <TypingIndicator>
                <Dot delay="0s" />
                <Dot delay="0.1s" />
                <Dot delay="0.2s" />
              </TypingIndicator>
            </Message>
          )}
        </ChatBody>
        
        <ChatFooter>
          <ChatInput 
            type="text" 
            placeholder="Type your message..." 
            value={inputText} 
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            disabled={isLoading}
          />
          <SendButton onClick={handleSendMessage} disabled={isLoading || inputText.trim() === ''}>
            <FaPaperPlane />
          </SendButton>
        </ChatFooter>
      </ChatWindow>
    </>
  );
};

const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Dot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #666;
  animation: bounce 1.5s infinite;
  animation-delay: ${props => props.delay};
  
  @keyframes bounce {
    0%, 60%, 100% {
      transform: translateY(0);
    }
    30% {
      transform: translateY(-5px);
    }
  }
`;

export default ChatBot;
