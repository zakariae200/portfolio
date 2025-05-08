import React from 'react';
import styled from 'styled-components';
import { FaLinkedinIn, FaGithub, FaHeart, FaFacebook } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #1a1a5e;
  color: white;
  padding: 3rem 10% 2rem;
  
  @media (max-width: 768px) {
    padding: 3rem 5% 2rem;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.h3`
  font-size: 1.5rem;
  margin: 0 0 1rem 0;
  font-weight: 600;
  color: white;
  
  span {
    color: #00b8d4;
  }
`;

const FooterDescription = styled.p`
  font-size: 0.95rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 1.5rem 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #00b8d4;
    transform: translateY(-3px);
  }
`;

const FooterTitle = styled.h4`
  font-size: 1.2rem;
  margin: 0 0 1.5rem 0;
  position: relative;
  padding-bottom: 0.5rem;
  color: white;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: #00b8d4;
    border-radius: 1.5px;
  }
`;

const FooterLinks = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const FooterLink = styled.li`
  margin-bottom: 0.8rem;
  
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &:hover {
      color: #00b8d4;
      padding-left: 5px;
    }
  }
`;

const Divider = styled.div`
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin-bottom: 1.5rem;
`;

const CopyrightText = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0;
  
  a {
    color: #00b8d4;
    text-decoration: none;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>Zakariae <span>El Mernissi</span></FooterLogo>
          <FooterDescription>
            Data Scientist & AI Engineer specializing in generative AI, machine learning, 
            and big data solutions. Passionate about creating innovative AI applications.
          </FooterDescription>
          <SocialLinks>
            <SocialLink href="https://linkedin.com/in/el-mernissi-zakariae/" target="_blank" aria-label="LinkedIn">
              <FaLinkedinIn />
            </SocialLink>
            <SocialLink href="https://github.com/zakariae200?tab=repositories" target="_blank" aria-label="GitHub">
              <FaGithub />
            </SocialLink>
            <SocialLink href="https://facebook.com" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialLink>
          </SocialLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink><a href="#home">Home</a></FooterLink>
            <FooterLink><a href="#experience">Experience</a></FooterLink>
            <FooterLink><a href="#skills">Skills</a></FooterLink>
            <FooterLink><a href="#certifications">Certifications</a></FooterLink>
            <FooterLink><a href="#education">Education</a></FooterLink>
            <FooterLink><a href="#contact">Contact</a></FooterLink>
          </FooterLinks>
        </FooterSection>
        
        <FooterSection>
          <FooterTitle>Contact Info</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <a href="mailto:zakariaeelmernissi@gmail.com">zakariaeelmernissi@gmail.com</a>
            </FooterLink>
            <FooterLink>
              <a href="tel:+212636363170">+212 636363170</a>
            </FooterLink>
            <FooterLink>
              <a href="https://maps.google.com/?q=Casablanca,Morocco">Casablanca, Morocco</a>
            </FooterLink>
          </FooterLinks>
        </FooterSection>
      </FooterContent>
      
      <Divider />
      
      <CopyrightText>
        &copy; {currentYear} Zakariae El Mernissi. All rights reserved. Made with <FaHeart style={{ color: '#00b8d4', verticalAlign: 'middle' }} /> by <a href="https://linkedin.com/in/el-mernissi-zakariae/">Zakariae</a>
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;
