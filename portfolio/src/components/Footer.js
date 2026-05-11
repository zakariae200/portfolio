import React from 'react';
import styled from 'styled-components';
import { Heart, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { FaLinkedinIn, FaGithub, FaFacebookF } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  padding: 3rem 8% 1.5rem;
  position: relative;

  @media (max-width: 1200px) {
    padding: 3rem 6% 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 2.5rem 5% 1.5rem;
  }

  @media (max-width: 576px) {
    padding: 2rem 4% 1.25rem;
  }
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1.6fr 1fr 1.3fr;
  gap: 3rem;
  max-width: 1100px;
  margin: 0 auto 2.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 1.75rem;
    margin-bottom: 2rem;
  }
`;

const FooterSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled.h3`
  font-size: 1.25rem;
  margin: 0 0 0.85rem 0;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.02em;

  span {
    color: #00b8d4;
  }
`;

const FooterDescription = styled.p`
  font-size: 0.85rem;
  line-height: 1.6;
  color: #64748b;
  margin: 0 0 1.25rem 0;
  max-width: 360px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: all 0.25s ease;

  &:hover {
    background: #00b8d4;
    border-color: #00b8d4;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 184, 212, 0.25);
  }
`;

const FooterTitle = styled.h4`
  font-size: 0.78rem;
  margin: 0 0 1.1rem 0;
  color: #94a3b8;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

const FooterLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const FooterLink = styled.li`
  a {
    color: #475569;
    text-decoration: none;
    transition: color 0.2s ease, transform 0.2s ease;
    font-size: 0.85rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      color: #94a3b8;
      transition: color 0.2s ease;
      flex-shrink: 0;
    }

    &:hover {
      color: #00b8d4;
    }

    &:hover svg {
      color: #00b8d4;
    }
  }
`;

const Divider = styled.div`
  max-width: 1100px;
  margin: 0 auto 1.25rem;
  height: 1px;
  background: #e2e8f0;
`;

const CopyrightRow = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  font-size: 0.8rem;
  color: #94a3b8;

  a {
    color: #00b8d4;
    text-decoration: none;
    transition: color 0.2s ease;

    &:hover {
      color: #0f172a;
    }
  }

  @media (max-width: 576px) {
    justify-content: center;
    text-align: center;
  }
`;

const MadeWith = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;

  svg {
    color: #ef4444;
    fill: #ef4444;
  }
`;

const BackToTop = styled.a`
  position: absolute;
  top: -22px;
  right: 8%;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #64748b;
  transition: all 0.25s ease;
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.06);
  cursor: pointer;

  &:hover {
    background: #00b8d4;
    border-color: #00b8d4;
    color: #ffffff;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 184, 212, 0.3);
  }

  @media (max-width: 1200px) {
    right: 6%;
  }

  @media (max-width: 768px) {
    right: 5%;
    width: 40px;
    height: 40px;
    top: -20px;
  }

  @media (max-width: 576px) {
    right: 4%;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <BackToTop href="#home" aria-label="Back to top">
        <ArrowUp size={18} />
      </BackToTop>

      <FooterContent>
        <FooterSection>
          <FooterLogo>Zakariae <span>El Mernissi</span></FooterLogo>
          <FooterDescription>
            GenAI Consultant & Engineer specializing in multi-agent systems, RAG architecture,
            and generative AI solutions.
          </FooterDescription>
          <SocialLinks>
            <SocialLink
              href="https://linkedin.com/in/el-mernissi-zakariae/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn size={15} />
            </SocialLink>
            <SocialLink
              href="https://github.com/zakariae200?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={16} />
            </SocialLink>
            <SocialLink
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF size={15} />
            </SocialLink>
          </SocialLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink><a href="#home">Home</a></FooterLink>
            <FooterLink><a href="#experience">Experience</a></FooterLink>
            <FooterLink><a href="#skills">Skills</a></FooterLink>
            <FooterLink><a href="#projects">Projects</a></FooterLink>
            <FooterLink><a href="#certifications">Certifications</a></FooterLink>
            <FooterLink><a href="#education">Education</a></FooterLink>
            <FooterLink><a href="#contact">Contact</a></FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Contact</FooterTitle>
          <FooterLinks>
            <FooterLink>
              <a href="mailto:zakariaeelmernissi@gmail.com">
                <Mail size={14} /> zakariaeelmernissi@gmail.com
              </a>
            </FooterLink>
            <FooterLink>
              <a href="tel:+212636363170">
                <Phone size={14} /> +212 636363170
              </a>
            </FooterLink>
            <FooterLink>
              <a
                href="https://maps.google.com/?q=Casablanca,Morocco"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin size={14} /> Casablanca, Morocco
              </a>
            </FooterLink>
          </FooterLinks>
        </FooterSection>
      </FooterContent>

      <Divider />

      <CopyrightRow>
        <span>&copy; {currentYear} Zakariae El Mernissi. All rights reserved.</span>
        <MadeWith>
          Made with <Heart size={12} /> by{' '}
          <a href="https://linkedin.com/in/el-mernissi-zakariae/" target="_blank" rel="noopener noreferrer">
            Zakariae
          </a>
        </MadeWith>
      </CopyrightRow>
    </FooterContainer>
  );
};

export default Footer;
