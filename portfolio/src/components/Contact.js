import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaTimes, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import characterImage from '../images/email smile.png';
import errorImage from '../images/error.png';

const SectionContainer = styled.section`
  padding: 5rem 10%;
  background-color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(26, 26, 94, 0.03) 0%, transparent 70%);
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 5%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a1a5e;
  margin-bottom: 3rem;
  text-align: center;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: linear-gradient(to right, #1a1a5e, #00b8d4);
    border-radius: 2px;
  }
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding: 1.5rem;
  background-color: #f8f9fa;
  border-radius: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.05);
  }
`;

const IconContainer = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a1a5e, #3a3a8e);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const ContactDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactType = styled.h3`
  font-size: 1.1rem;
  color: #1a1a5e;
  margin: 0 0 0.5rem 0;
`;

const ContactValue = styled.p`
  color: #666;
  margin: 0;
  font-size: 0.95rem;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  position: relative;
  z-index: 1;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 0.95rem;
  color: #1a1a5e;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  
  &:focus {
    outline: none;
    border-color: #1a1a5e;
    box-shadow: 0 0 0 2px rgba(26, 26, 94, 0.1);
  }
  
  @media (max-width: 768px) {
    font-size: 16px; /* Prevents zoom on iOS */
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  
  &:focus {
    outline: none;
    border-color: #1a1a5e;
    box-shadow: 0 0 0 2px rgba(26, 26, 94, 0.1);
  }
  
  @media (max-width: 768px) {
    font-size: 16px; /* Prevents zoom on iOS */
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #1a1a5e, #3a3a8e);
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
  -webkit-tap-highlight-color: transparent; /* Removes tap highlight on mobile */
  
  &:hover {
    background: linear-gradient(135deg, #0f0f3d, #2a2a7e);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem 1rem; /* Larger touch target on mobile */
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;


const SuccessPopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  padding: 20px;
  pointer-events: none;
  
  &.active {
    opacity: 1;
    visibility: visible;
    animation: ${fadeIn} 0.4s ease-out;
    pointer-events: auto;
  }
`;

const SuccessPopupContent = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  display: flex;
  flex-direction: column;
  
  .active & {
    animation: ${slideUp} 0.5s ease-out forwards;
  }
  
  @media (max-width: 576px) {
    max-width: 100%;
    border-radius: 15px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: transparent;
  border: none;
  color: #1a1a5e;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    transform: scale(1.1);
  }
  
  @media (max-width: 576px) {
    top: 10px;
    right: 10px;
    font-size: 1rem;
    padding: 10px;
  }
`;

const CharacterImageContainer = styled.div`
  width: 100%;
  height: 334px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #e6f7ff, #ffffff);
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 1;
    opacity: 0.7;
  }
  
  &::before {
    top: 20px;
    left: 20px;
    background-image: radial-gradient(circle, #4CAF50 10%, transparent 10%),
                      radial-gradient(circle, #4CAF50 10%, transparent 10%);
    background-position: 0 0, 15px 15px;
    background-size: 30px 30px;
  }
  
  &::after {
    bottom: 20px;
    right: 20px;
    background-image: radial-gradient(circle, #00b8d4 10%, transparent 10%),
                      radial-gradient(circle, #00b8d4 10%, transparent 10%);
    background-position: 0 0, 15px 15px;
    background-size: 30px 30px;
  }
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 768px) {
    height: 240px;
    
    &::before, &::after {
      width: 70px;
      height: 70px;
    }
  }
  
  @media (max-width: 576px) {
    height: 200px;
    
    &::before, &::after {
      width: 50px;
      height: 50px;
    }
  }
`;

const SuccessPopupBody = styled.div`
  padding: 1.5rem 2rem 2rem;
  background-color: white;
  position: relative;
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    background-color: #28a745;
    opacity: 0.1;
    border-radius: 50%;
  }
  
  &::before {
    top: 15px;
    left: 15px;
  }
  
  &::after {
    bottom: 15px;
    right: 15px;
  }
  
  @media (max-width: 576px) {
    padding: 1.2rem 1.5rem 1.5rem;
  }
`;

const SuccessIcon = styled.div`
  color: #28a745;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 576px) {
    font-size: 1.6rem;
  }
`;

const SuccessPopupTitle = styled.h3`
  color: #1a1a5e;
  margin: 0 0 0.5rem 0;
  font-size: 1.8rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.4rem;
  }
`;

const SuccessMessage = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
  margin: 0;
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: linear-gradient(to right, #1a1a5e, #28a745);
    border-radius: 2px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
    line-height: 1.5;
  }
`;





const ErrorPopupOverlay = styled(SuccessPopupOverlay)``;  // Inherits from SuccessPopupOverlay

const ErrorPopupContent = styled(SuccessPopupContent)``;  // Inherits from SuccessPopupContent

const ErrorImageContainer = styled.div`
  width: 100%;
  height: 334px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #fff0f0, #ffffff);
  
  &::before, &::after {
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 1;
    opacity: 0.7;
  }
  
  &::before {
    top: 20px;
    left: 20px;
    background-image: radial-gradient(circle, #dc3545 10%, transparent 10%),
                      radial-gradient(circle, #dc3545 10%, transparent 10%);
    background-position: 0 0, 15px 15px;
    background-size: 30px 30px;
  }
  
  &::after {
    bottom: 20px;
    right: 20px;
    background-image: radial-gradient(circle, #dc3545 10%, transparent 10%),
                      radial-gradient(circle, #dc3545 10%, transparent 10%);
    background-position: 0 0, 15px 15px;
    background-size: 30px 30px;
  }
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 768px) {
    height: 240px;
    
    &::before, &::after {
      width: 70px;
      height: 70px;
    }
  }
  
  @media (max-width: 576px) {
    height: 200px;
    
    &::before, &::after {
      width: 50px;
      height: 50px;
    }
  }
`;

const ErrorPopupBody = styled(SuccessPopupBody)`
  &::before, &::after {
    background-color: #dc3545;
  }
`;

const ErrorIcon = styled.div`
  color: #dc3545;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 576px) {
    font-size: 1.6rem;
  }
`;

const ErrorPopupTitle = styled(SuccessPopupTitle)`
  color: #dc3545;
`;

const ErrorMessage = styled(SuccessMessage)`
  &::after {
    background: linear-gradient(to right, #dc3545, #ff6b6b);
  }
`;


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setShowSuccessPopup(false);
    setShowErrorPopup(false);
    
    // Parameters for auto-reply to the user
    const autoReplyParams = {
      to_name: formData.name,
      to_email: formData.email,
      from_name: 'Zakariae El Mernissi',
      from_email: 'zakariaeelmernissi@gmail.com',
      reply_to: 'zakariaeelmernissi@gmail.com',
      subject: formData.subject,
      message: formData.message
    };
    
    // Parameters for sending the message to you
    const contactMeParams = {
      to_email: 'zakariaeelmernissi@gmail.com',
      name: formData.name,
      email: formData.email,
      from_email: formData.email,
      title: formData.subject,
      message: `From: ${formData.name} (${formData.email})\n\n${formData.message}`,
      reply_to: formData.email
    };
    
    // Send auto-reply to the user
    emailjs.send(
      'service_rstafvr',
      'template_58q8ta4', // Auto-reply template ID
      autoReplyParams,
      'a-yPOYztv6sesaNTq'
    )
    .then((result) => {
      console.log('Auto-reply sent successfully:', result.text);
      
      // Send the message to you
      return emailjs.send(
        'service_rstafvr',
        'template_a40f3j7', // Your new Contact Us template ID - update this if different
        contactMeParams,
        'a-yPOYztv6sesaNTq'
      );
    })
    .then((result) => {
      console.log('Contact message sent successfully:', result.text);
      setLoading(false);
      setShowSuccessPopup(true);
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    })
    .catch((error) => {
      console.error('Error sending email:', error.text);
      setLoading(false);
      setShowErrorPopup(true);
    });
  };

  return (
    <SectionContainer id="contact">
      <SectionTitle>Get In Touch</SectionTitle>
      <ContactContainer>
        <ContactInfo>
          <ContactCard>
            <IconContainer>
              <FaEnvelope />
            </IconContainer>
            <ContactDetails>
              <ContactType>Email</ContactType>
              <ContactValue>zakariaeelmernissi@gmail.com</ContactValue>
            </ContactDetails>
          </ContactCard>
          
          <ContactCard>
            <IconContainer>
              <FaPhone />
            </IconContainer>
            <ContactDetails>
              <ContactType>Phone</ContactType>
              <ContactValue>+212 636363170</ContactValue>
            </ContactDetails>
          </ContactCard>
          
          <ContactCard>
            <IconContainer>
              <FaMapMarkerAlt />
            </IconContainer>
            <ContactDetails>
              <ContactType>Location</ContactType>
              <ContactValue>Casablanca, Morocco</ContactValue>
            </ContactDetails>
          </ContactCard>
        </ContactInfo>
        
        <ContactForm ref={formRef} onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Your Name</Label>
            <Input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Your Email</Label>
            <Input 
              type="email" 
              id="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input 
              type="text" 
              id="subject" 
              name="subject" 
              value={formData.subject} 
              onChange={handleChange} 
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <TextArea 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
          </FormGroup>
          
          <SubmitButton type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'} <FaPaperPlane />
          </SubmitButton>
          
          {/* Success Popup */}
          <SuccessPopupOverlay 
            className={showSuccessPopup ? 'active' : ''}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                e.preventDefault();
                setShowSuccessPopup(false);
              }
            }}
          >
            <SuccessPopupContent>
              <CloseButton onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowSuccessPopup(false);
              }}>
                <FaTimes />
              </CloseButton>
              <CharacterImageContainer>
                <img src={characterImage} alt="Message Sent" />
              </CharacterImageContainer>
              <SuccessPopupBody>
                <SuccessPopupTitle>
                  <SuccessIcon><FaCheckCircle /></SuccessIcon>
                  <span>Message Received!</span>
                </SuccessPopupTitle>
                <SuccessMessage>
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </SuccessMessage>
              </SuccessPopupBody>
            </SuccessPopupContent>
          </SuccessPopupOverlay>
          
          {/* Error Popup */}
          <ErrorPopupOverlay 
            className={showErrorPopup ? 'active' : ''}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                e.preventDefault();
                setShowErrorPopup(false);
              }
            }}
          >
            <ErrorPopupContent>
              <CloseButton onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowErrorPopup(false);
              }}>
                <FaTimes />
              </CloseButton>
              <ErrorImageContainer>
                <img src={errorImage} alt="Error Occurred" />
              </ErrorImageContainer>
              <ErrorPopupBody>
                <ErrorPopupTitle>
                  <ErrorIcon><FaExclamationTriangle /></ErrorIcon>
                  <span>Message Failed!</span>
                </ErrorPopupTitle>
                <ErrorMessage>
                  There was a problem sending your message. Please try again later or contact me directly via email.
                </ErrorMessage>
              </ErrorPopupBody>
            </ErrorPopupContent>
          </ErrorPopupOverlay>
        </ContactForm>
      </ContactContainer>
    </SectionContainer>
  );
};

export default Contact;
