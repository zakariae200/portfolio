import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { Mail, Phone, MapPin, Send, X, CheckCircle2, AlertTriangle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import characterImage from '../images/email smile.png';
import errorImage from '../images/error.png';

const SectionContainer = styled.section`
  padding: 4rem 8% 5rem;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 1200px) {
    padding: 4rem 6%;
  }

  @media (max-width: 768px) {
    padding: 3rem 5%;
  }

  @media (max-width: 576px) {
    padding: 2.5rem 4%;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;


const SectionTitle = styled.h2`
  font-size: 2.75rem;
  color: #0f172a;
  margin: 0 0 0.75rem 0;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
`;

const SectionSubtitle = styled.p`
  color: #64748b;
  font-size: 1.05rem;
  max-width: 580px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 576px) {
    font-size: 0.95rem;
  }
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 1.5rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.1rem 1.25rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.25s ease;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 184, 212, 0.4);
    box-shadow: 0 12px 28px rgba(0, 184, 212, 0.1);
  }
`;

const IconBox = styled.div`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(0, 184, 212, 0.1);
  border: 1px solid rgba(0, 184, 212, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00b8d4;
`;

const ContactDetails = styled.div`
  flex: 1;
  min-width: 0;
`;

const ContactType = styled.h3`
  font-size: 0.72rem;
  color: #94a3b8;
  margin: 0 0 0.25rem 0;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
`;

const ContactValue = styled.p`
  color: #0f172a;
  margin: 0;
  font-size: 0.9rem;
  font-weight: 500;
  word-break: break-word;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);

  @media (max-width: 576px) {
    padding: 1.25rem;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const Label = styled.label`
  font-size: 0.78rem;
  color: #64748b;
  font-weight: 500;
  letter-spacing: 0.02em;
`;

const Input = styled.input`
  padding: 0.7rem 0.9rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #0f172a;
  font-family: inherit;
  transition: all 0.2s ease;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #00b8d4;
    box-shadow: 0 0 0 3px rgba(0, 184, 212, 0.12);
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const TextArea = styled.textarea`
  padding: 0.7rem 0.9rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  font-size: 0.9rem;
  color: #0f172a;
  font-family: inherit;
  min-height: 130px;
  resize: vertical;
  transition: all 0.2s ease;

  &::placeholder {
    color: #94a3b8;
  }

  &:focus {
    outline: none;
    border-color: #00b8d4;
    box-shadow: 0 0 0 3px rgba(0, 184, 212, 0.12);
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const SubmitButton = styled.button`
  background: #00b8d4;
  color: #ffffff;
  border: 1px solid #00b8d4;
  border-radius: 8px;
  padding: 0.85rem 1rem;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.25s ease;
  margin-top: 0.25rem;
  -webkit-tap-highlight-color: transparent;

  svg {
    transition: transform 0.25s ease;
  }

  &:hover:not(:disabled) {
    background: #0f172a;
    border-color: #0f172a;
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(15, 23, 42, 0.15);
  }

  &:hover:not(:disabled) svg {
    transform: translateX(2px);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const PopupOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.25s ease, visibility 0.25s ease;
  pointer-events: none;

  &.active {
    opacity: 1;
    visibility: visible;
    animation: ${fadeIn} 0.25s ease-out;
    pointer-events: auto;
  }
`;

const PopupContent = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  width: 100%;
  max-width: 460px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
  display: flex;
  flex-direction: column;
  text-align: center;

  .active & {
    animation: ${slideUp} 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
  }

  @media (max-width: 576px) {
    border-radius: 12px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #64748b;
  transition: all 0.25s ease;
  z-index: 10;

  &:hover {
    background: #ffffff;
    border-color: rgba(0, 184, 212, 0.4);
    color: #00b8d4;
    transform: rotate(90deg);
  }
`;

const PopupImage = styled.div`
  width: 100%;
  height: 240px;
  background: ${props => props.bg || 'linear-gradient(135deg, #ecfeff 0%, #f0fdfa 100%)'};
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #f1f5f9;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 576px) {
    height: 200px;
  }
`;

const PopupBody = styled.div`
  padding: 1.5rem 1.5rem 1.75rem;

  @media (max-width: 576px) {
    padding: 1.25rem 1.25rem 1.5rem;
  }
`;

const PopupTitle = styled.h3`
  color: #0f172a;
  margin: 0 0 0.6rem 0;
  font-size: 1.4rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const PopupMessage = styled.p`
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;

  @media (max-width: 576px) {
    font-size: 0.85rem;
  }
`;

const StatusIcon = styled.span`
  display: inline-flex;
  align-items: center;
  color: ${props => props.color};
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
      <SectionHeader>
        <SectionTitle>Get In Touch</SectionTitle>
        <SectionSubtitle>
          Have a project in mind, want to collaborate, or just say hello? My inbox is always open.
        </SectionSubtitle>
      </SectionHeader>

      <ContactContainer>
        <ContactInfo>
          <ContactCard href="mailto:zakariaeelmernissi@gmail.com">
            <IconBox>
              <Mail size={18} />
            </IconBox>
            <ContactDetails>
              <ContactType>Email</ContactType>
              <ContactValue>zakariaeelmernissi@gmail.com</ContactValue>
            </ContactDetails>
          </ContactCard>

          <ContactCard href="tel:+212636363170">
            <IconBox>
              <Phone size={18} />
            </IconBox>
            <ContactDetails>
              <ContactType>Phone</ContactType>
              <ContactValue>+212 636363170</ContactValue>
            </ContactDetails>
          </ContactCard>

          <ContactCard
            href="https://maps.google.com/?q=Casablanca,Morocco"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconBox>
              <MapPin size={18} />
            </IconBox>
            <ContactDetails>
              <ContactType>Location</ContactType>
              <ContactValue>Casablanca, Morocco</ContactValue>
            </ContactDetails>
          </ContactCard>
        </ContactInfo>

        <ContactForm ref={formRef} onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <Label htmlFor="name">Your Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
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
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </FormRow>

          <FormGroup>
            <Label htmlFor="subject">Subject</Label>
            <Input
              type="text"
              id="subject"
              name="subject"
              placeholder="What's this about?"
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
              placeholder="Tell me about your idea..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <SubmitButton type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'} <Send size={15} />
          </SubmitButton>

          {/* Success Popup */}
          <PopupOverlay
            className={showSuccessPopup ? 'active' : ''}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                e.preventDefault();
                setShowSuccessPopup(false);
              }
            }}
          >
            <PopupContent>
              <CloseButton onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowSuccessPopup(false);
              }}>
                <X size={14} />
              </CloseButton>
              <PopupImage bg="linear-gradient(135deg, #ecfeff 0%, #f0fdfa 100%)">
                <img src={characterImage} alt="Message Sent" />
              </PopupImage>
              <PopupBody>
                <PopupTitle>
                  <StatusIcon color="#10b981"><CheckCircle2 size={22} /></StatusIcon>
                  Message Received!
                </PopupTitle>
                <PopupMessage>
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </PopupMessage>
              </PopupBody>
            </PopupContent>
          </PopupOverlay>

          {/* Error Popup */}
          <PopupOverlay
            className={showErrorPopup ? 'active' : ''}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                e.preventDefault();
                setShowErrorPopup(false);
              }
            }}
          >
            <PopupContent>
              <CloseButton onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setShowErrorPopup(false);
              }}>
                <X size={14} />
              </CloseButton>
              <PopupImage bg="linear-gradient(135deg, #fef2f2 0%, #fff5f5 100%)">
                <img src={errorImage} alt="Error Occurred" />
              </PopupImage>
              <PopupBody>
                <PopupTitle>
                  <StatusIcon color="#dc2626"><AlertTriangle size={22} /></StatusIcon>
                  Message Failed
                </PopupTitle>
                <PopupMessage>
                  There was a problem sending your message. Please try again later or contact me directly via email.
                </PopupMessage>
              </PopupBody>
            </PopupContent>
          </PopupOverlay>
        </ContactForm>
      </ContactContainer>
    </SectionContainer>
  );
};

export default Contact;
