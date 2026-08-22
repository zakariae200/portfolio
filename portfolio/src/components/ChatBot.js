import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FiSend, FiX } from 'react-icons/fi';
import ReactMarkdown from 'react-markdown';
// Import the images
import hiImage from '../images/3d hi bg.png';
import computerImage from '../images/computer bg.png';

// Empty in development: package.json "proxy" forwards /api to the backend.
// In production this is set to the deployed API URL at build time.
const API_URL = process.env.REACT_APP_API_URL || '';

const popIn = keyframes`
  0% { transform: scale(0); opacity: 0; }
  70% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 1; }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.04); }
  100% { transform: scale(1); }
`;

const ChatBubbleContainer = styled.div`
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 110px;
  height: 110px;
  cursor: pointer;
  z-index: 1000;
  transition: transform 0.25s ease;
  outline: none;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    transform: scale(1.06);
  }

  @media (max-width: 992px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 768px) {
    bottom: 18px;
    right: 18px;
    width: 88px;
    height: 88px;
  }

  @media (max-width: 480px) {
    width: 76px;
    height: 76px;
    bottom: 14px;
    right: 14px;
  }

  @media (max-height: 600px) {
    width: 68px;
    height: 68px;
  }
`;

const ChatBubbleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 6px 18px rgba(15, 23, 42, 0.18));
  animation: ${pulse} 3s ease-in-out infinite;
  transition: opacity 0.3s ease-in-out;
`;

const SpeechBubble = styled.div`
  position: absolute;
  top: -26px;
  left: -12px;
  background: #ffffff;
  color: #0f172a;
  padding: 6px 14px;
  border-radius: 18px;
  font-size: 13px;
  font-weight: 600;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  animation: ${popIn} 0.45s ease-out, ${float} 3s ease-in-out 0.5s infinite;
  z-index: 1001;
  border: 1px solid #f1f5f9;
  letter-spacing: 0.2px;
  display: ${props => props.isOpen ? 'none' : 'block'};

  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 22px;
    width: 12px;
    height: 12px;
    background: #ffffff;
    transform: rotate(45deg);
    border-right: 1px solid #f1f5f9;
    border-bottom: 1px solid #f1f5f9;
  }

  @media (max-width: 768px) {
    top: -22px;
    left: -8px;
    padding: 5px 11px;
    font-size: 11px;
  }
`;

const ChatWindow = styled.div`
  position: fixed;
  bottom: 140px;
  right: 28px;
  width: 360px;
  height: 480px;
  background: #ffffff;
  border-radius: 18px;
  border: 1px solid #e2e8f0;
  box-shadow: 0 12px 40px rgba(15, 23, 42, 0.1), 0 2px 8px rgba(15, 23, 42, 0.04);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  z-index: 1000;
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
  transform: ${props => props.isOpen ? 'scale(1) translateY(0)' : 'scale(0) translateY(20px)'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  transform-origin: bottom right;
  backdrop-filter: blur(10px);

  @media (max-width: 992px) {
    width: 330px;
    height: 440px;
  }

  @media (max-width: 768px) {
    bottom: 115px;
    right: 18px;
    width: calc(100% - 36px);
    max-width: 360px;
    height: 420px;
  }

  @media (max-width: 480px) {
    bottom: 105px;
    right: 10px;
    width: calc(100% - 20px);
    height: 62vh;
    max-height: 420px;
    border-radius: 16px;
  }

  @media (max-height: 600px) {
    height: 72vh;
    bottom: 105px;
  }
`;

const ChatHeader = styled.div`
  background: #ffffff;
  color: #0f172a;
  padding: 14px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f5f9;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background: #f8fafc;
  }

  @media (max-width: 480px) {
    padding: 12px 14px;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const StatusDot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #00b8d4;
  box-shadow: 0 0 0 3px rgba(0, 184, 212, 0.18);
`;

const ChatTitle = styled.h3`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.01em;

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: #94a3b8;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 8px;
  transition: all 0.2s ease;

  &:hover {
    color: #0f172a;
    background: #f1f5f9;
    transform: rotate(90deg);
  }
`;

const ChatBody = styled.div`
  flex: 1;
  padding: 18px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 14px;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: #e2e8f0;
    border-radius: 4px;
  }

  @media (max-width: 768px) {
    padding: 14px;
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
  max-width: 82%;
  padding: 10px 14px;
  border-radius: 16px;
  font-size: 0.9rem;
  line-height: 1.5;
  word-break: break-word;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);

  ${props => props.isBot ? `
    align-self: flex-start;
    background: #f1f5f9;
    border-bottom-left-radius: 4px;
    color: #334155;
  ` : `
    align-self: flex-end;
    background: #00b8d4;
    border-bottom-right-radius: 4px;
    color: #ffffff;
  `}

  /* Markdown styling */
  p { margin: 0.4em 0; }
  ul, ol { margin: 0.4em 0; padding-left: 1.3em; }
  li { margin: 0.2em 0; }
  strong { font-weight: 600; }
  code {
    background-color: ${props => props.isBot ? 'rgba(15,23,42,0.06)' : 'rgba(255,255,255,0.2)'};
    padding: 0.15em 0.35em;
    border-radius: 4px;
    font-family: ui-monospace, SFMono-Regular, monospace;
    font-size: 0.85em;
  }
  h1, h2, h3, h4, h5, h6 { margin: 0.4em 0; font-weight: 600; font-size: 1em; }
  a {
    color: ${props => props.isBot ? '#00b8d4' : 'rgba(255,255,255,0.9)'};
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    max-width: 86%;
    padding: 9px 12px;
    font-size: 0.88rem;
  }

  @media (max-width: 480px) {
    max-width: 90%;
    padding: 8px 11px;
    font-size: 0.86rem;
    line-height: 1.35;
  }

  @media (max-height: 600px) {
    padding: 6px 10px;
    font-size: 0.82rem;
    line-height: 1.25;
    border-radius: 14px;
  }
`;

const ChatFooter = styled.div`
  padding: 12px 16px;
  border-top: 1px solid #f1f5f9;
  display: flex;
  align-items: center;
  gap: 10px;
  background: #ffffff;

  @media (max-width: 768px) {
    padding: 10px 12px;
    gap: 8px;
  }

  @media (max-width: 480px) {
    padding: 9px 8px;
    gap: 6px;
  }

  @media (max-height: 600px) {
    padding: 8px;
    gap: 6px;
  }
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #e2e8f0;
  border-radius: 22px;
  font-size: 0.92rem;
  color: #0f172a;
  background: #ffffff;
  transition: all 0.2s ease;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #00b8d4;
    box-shadow: 0 0 0 3px rgba(0, 184, 212, 0.12);
  }

  &:disabled {
    background: #f8fafc;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 0.88rem;
  }
`;

const SendButton = styled.button`
  background: #00b8d4;
  color: #ffffff;
  border: none;
  border-radius: 50%;
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.25s ease;
  box-shadow: 0 2px 8px rgba(0, 184, 212, 0.25);

  &:hover:not(:disabled) {
    background: #0f172a;
    transform: scale(1.08);
    box-shadow: 0 4px 12px rgba(0, 184, 212, 0.35);
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }

  @media (max-width: 480px) {
    width: 34px;
    height: 34px;
  }
`;

const TypingIndicator = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 2px;
`;

const dotBounce = keyframes`
  0%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-5px); }
`;

const Dot = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #00b8d4;
  animation: ${dotBounce} 1.4s infinite ease-in-out;
  animation-delay: ${props => props.delay};
`;

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm Zakariae's virtual assistant. How can I help you today?", isBot: true }
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
    const userMessage = inputText;
    const updatedMessages = [...messages, { text: userMessage, isBot: false }];
    setMessages(updatedMessages);
    setInputText('');
    setIsLoading(true);

    try {
      // Call backend API without exposing the system prompt
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            ...messages.map(msg => ({
              role: msg.isBot ? 'assistant' : 'user',
              content: msg.text
            })),
            { role: 'user', content: userMessage }
          ]
        })
      });

      if (!response.ok) {
        throw new Error('Failed to get response from AI');
      }

      const data = await response.json();
      // Backend returns a clean { reply: "..." } shape.
      let botResponse = "Sorry, I couldn't process your request.";

      if (typeof data.reply === 'string' && data.reply.trim()) {
        botResponse = data.reply.trim();
      }

      // Add bot response to messages
      setMessages([...updatedMessages, { text: botResponse, isBot: true }]);
    } catch (error) {
      console.error('Error getting AI response:', error);

      // Simple error message instead of fallback responses
      setMessages([...updatedMessages, {
        text: "I'm sorry, we're experiencing technical difficulties at the moment. Please try again later.",
        isBot: true
      }]);
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
          <HeaderLeft>
            <StatusDot />
            <ChatTitle>Zakariae's Assistant</ChatTitle>
          </HeaderLeft>
          <CloseButton aria-label="Close chat">
            <FiX />
          </CloseButton>
        </ChatHeader>

        <ChatBody ref={chatBodyRef}>
          {messages.map((message, index) => (
            <Message key={index} isBot={message.isBot}>
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
                <Dot delay="0.15s" />
                <Dot delay="0.3s" />
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
            <FiSend size={17} />
          </SendButton>
        </ChatFooter>
      </ChatWindow>
    </>
  );
};

export default ChatBot;
