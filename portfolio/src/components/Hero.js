import React from 'react';
import styled from 'styled-components';
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import zakariae from '../images/zakariae.jpg';

const HeroContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 100px);
  padding: 3rem 8%;
  background-color: #f5f7fa;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -10%;
    right: -10%;
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(26, 26, 94, 0.1), rgba(0, 184, 212, 0.1));
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10%;
    left: -10%;
    width: 400px;
    height: 400px;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(0, 184, 212, 0.1), rgba(26, 26, 94, 0.1));
    z-index: 0;
  }
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    padding: 4rem 12%;
    min-height: calc(100vh - 120px);
  }
  
  /* Medium desktop screens */
  @media (max-width: 1200px) {
    padding: 3rem 6%;
  }
  
  /* Tablets and small desktops */
  @media (max-width: 992px) {
    padding: 2.5rem 5%;
    gap: 2rem;
  }

  /* Tablets */
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 2rem 5%;
    gap: 1.5rem;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    padding: 1.5rem 4%;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    padding: 1rem 3%;
  }
`;

const ContentSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 3rem;
  z-index: 1;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    padding-right: 4rem;
  }
  
  /* Medium desktop screens */
  @media (max-width: 1200px) {
    padding-right: 2.5rem;
  }
  
  /* Tablets and small desktops */
  @media (max-width: 992px) {
    padding-right: 1.5rem;
  }

  /* Tablets */
  @media (max-width: 768px) {
    padding-right: 0;
    padding-top: 1.5rem;
    text-align: center;
    align-items: center;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    padding-top: 1rem;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  
  /* Tablets */
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    margin-bottom: 0.5rem;
  }
`;

const Greeting = styled.div`
  font-size: 1.2rem;
  color: #00b8d4;
  margin-bottom: 1rem;
  font-weight: 500;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  color: #1a1a5e;
  margin-bottom: 1rem;
  line-height: 1.1;
  font-weight: 800;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 4rem;
    margin-bottom: 1.2rem;
  }
  
  /* Medium desktop screens */
  @media (max-width: 1200px) {
    font-size: 3.2rem;
  }
  
  /* Tablets and small desktops */
  @media (max-width: 992px) {
    font-size: 2.8rem;
  }

  /* Tablets */
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    font-size: 2.2rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 1.8rem;
  }
`;

const Highlight = styled.span`
  color: #00b8d4;
`;

const Subheading = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 1.5rem;
  max-width: 90%;
  line-height: 1.6;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 1.3rem;
    margin-bottom: 1.8rem;
    max-width: 85%;
  }
  
  /* Medium desktop screens */
  @media (max-width: 1200px) {
    max-width: 95%;
  }

  /* Tablets */
  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.1rem;
    padding: 0 1rem;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1.2rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 0.95rem;
    margin-bottom: 1rem;
    padding: 0 0.5rem;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    gap: 0.8rem;
    margin-bottom: 1.2rem;
    flex-direction: column;
    align-items: center;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #1a1a5e;
  font-size: 0.9rem;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 1rem;
    gap: 0.6rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 0.85rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }
`;

const PrimaryButton = styled.button`
  background-color: #1a1a5e;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #0f0f3d;
    transform: translateY(-2px);
  }
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    padding: 0.9rem 1.8rem;
    font-size: 1.1rem;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
    padding: 0.7rem 1.2rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

const SecondaryButton = styled.button`
  background-color: transparent;
  color: #1a1a5e;
  border: 2px solid #1a1a5e;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(26, 26, 94, 0.1);
    transform: translateY(-2px);
  }
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    padding: 0.9rem 1.8rem;
    font-size: 1.1rem;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
    padding: 0.7rem 1.2rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 1.5rem;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    margin-top: 1.2rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    margin-top: 1rem;
    gap: 0.8rem;
  }
`;

const SocialLink = styled.a`
  color: #1a1a5e;
  font-size: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #00b8d4;
    transform: translateY(-3px);
  }
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 1.7rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 1.3rem;
  }
`;

const ProfileImage = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 20px;
  background-image: url(${zakariae});
  background-size: cover;
  background-position: center;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    width: 100%;
    height: 100%;
    border: 2px solid #00b8d4;
    border-radius: 20px;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    right: -15px;
    width: 100%;
    height: 100%;
    border: 2px solid #1a1a5e;
    border-radius: 20px;
    z-index: -1;
  }
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    width: 450px;
    height: 450px;
  }
  
  /* Medium desktop screens */
  @media (max-width: 1200px) {
    width: 350px;
    height: 350px;
  }
  
  /* Tablets and small desktops */
  @media (max-width: 992px) {
    width: 320px;
    height: 320px;
  }

  /* Tablets */
  @media (max-width: 768px) {
    width: 280px;
    height: 280px;
    
    &::before, &::after {
      top: -10px;
      left: -10px;
      bottom: -10px;
      right: -10px;
    }
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    width: 250px;
    height: 250px;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    width: 220px;
    height: 220px;
    
    &::before, &::after {
      top: -8px;
      left: -8px;
      bottom: -8px;
      right: -8px;
    }
  }
`;

const ScrollDown = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #1a1a5e;
  font-size: 0.9rem;
  cursor: pointer;
  z-index: 10; /* Ensure it's above other elements */
  
  /* Use a separate element for the arrow to avoid transform conflicts */
  .arrow {
    width: 20px;
    height: 20px;
    margin-top: 0.5rem;
    border-right: 2px solid #1a1a5e;
    border-bottom: 2px solid #1a1a5e;
    transform: rotate(45deg);
    animation: bounce 2s infinite;
    display: block;
  }
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0) rotate(45deg);
    }
    40% {
      transform: translateY(-10px) rotate(45deg);
    }
    60% {
      transform: translateY(-5px) rotate(45deg);
    }
  }
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    bottom: 2.5rem;
    font-size: 1rem;
    
    .arrow {
      width: 22px;
      height: 22px;
    }
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    bottom: 1.5rem;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    display: none; /* Hide scroll down on small devices */
  }
`;

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <HeroContainer>
      <ContentSection>
        <Greeting>Hello, I'm</Greeting>
        <Heading>
          Zakariae El Mernissi<br />
          <Highlight>Data Scientist & AI Engineer</Highlight>
        </Heading>
        <Subheading>
          Currently working at Capgemini TS as a Data Scientist & AI Engineer, 
          specializing in Generative AI solutions for enterprise applications.
        </Subheading>
        <ContactInfo>
          <ContactItem>
            <FaEnvelope />
            zakariaeelmernissi@gmail.com
          </ContactItem>
          <ContactItem>
            <FaPhone />
            +212 636363170
          </ContactItem>
        </ContactInfo>
        <ButtonContainer>
          <PrimaryButton onClick={() => scrollToSection('experience')}>
            View Experience <FaArrowRight />
          </PrimaryButton>
          <SecondaryButton onClick={() => scrollToSection('contact')}>
            Contact Me
          </SecondaryButton>
        </ButtonContainer>
        <SocialLinks>
          <SocialLink href="https://github.com/zakariae200?tab=repositories" target="_blank" aria-label="GitHub">
            <FaGithub />
          </SocialLink>
          <SocialLink href="https://www.linkedin.com/in/el-mernissi-zakariae/" target="_blank" aria-label="LinkedIn">
            <FaLinkedin />
          </SocialLink>
        </SocialLinks>
      </ContentSection>
      <ImageSection>
        <ProfileImage />
      </ImageSection>
      <ScrollDown onClick={() => scrollToSection('experience')}>
        Scroll Down
        <span className="arrow"></span>
      </ScrollDown>
    </HeroContainer>
  );
};

export default Hero;
