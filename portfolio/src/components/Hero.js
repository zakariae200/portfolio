import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, Phone, ChevronDown, Sparkles } from 'lucide-react';
import characterImage from '../images/pointing.png';

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const floatParticle = keyframes`
  0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
  50% { transform: translateY(-30px) rotate(180deg); opacity: 0.8; }
`;

const HeroContainer = styled.div`
  display: flex;
  min-height: 100vh;
  padding: 6rem 8% 3rem;
  background: linear-gradient(135deg, #0a0a1a 0%, #111136 50%, #0d0d2b 100%);
  background-size: 400% 400%;
  animation: ${gradientShift} 15s ease infinite;
  position: relative;
  overflow: hidden;
  align-items: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(0, 184, 212, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(124, 58, 237, 0.06) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (min-width: 1600px) {
    padding: 7rem 12% 4rem;
  }

  @media (max-width: 1200px) {
    padding: 5rem 6% 3rem;
  }

  @media (max-width: 992px) {
    padding: 4rem 5% 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 5rem 5% 2rem;
    gap: 2rem;
    text-align: center;
  }

  @media (max-width: 576px) {
    padding: 4rem 4% 2rem;
  }

  @media (max-width: 375px) {
    padding: 4rem 3% 2rem;
  }
`;

const Particle = styled.div`
  position: absolute;
  width: ${props => props.size || '4px'};
  height: ${props => props.size || '4px'};
  background: ${props => props.color || '#00b8d4'};
  border-radius: 50%;
  top: ${props => props.top || '50%'};
  left: ${props => props.left || '50%'};
  animation: ${floatParticle} ${props => props.duration || '6s'} ease-in-out infinite;
  animation-delay: ${props => props.delay || '0s'};
  opacity: 0.4;
  pointer-events: none;
`;

const ContentSection = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 3rem;
  z-index: 1;
  max-width: 600px;

  @media (min-width: 1600px) {
    padding-right: 4rem;
    max-width: 700px;
  }

  @media (max-width: 1200px) {
    padding-right: 2rem;
  }

  @media (max-width: 992px) {
    padding-right: 1.5rem;
  }

  @media (max-width: 768px) {
    padding-right: 0;
    align-items: center;
    max-width: 100%;
  }
`;

const ImageSection = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;

  @media (max-width: 768px) {
    margin-bottom: 0;
  }
`;

const CharacterImg = styled.img`
  width: 100%;
  max-width: 380px;
  height: auto;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;

  @media (max-width: 1200px) {
    max-width: 400px;
  }

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 184, 212, 0.15);
  border: 1px solid rgba(0, 184, 212, 0.3);
  border-radius: 50px;
  color: #00b8d4;
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
  backdrop-filter: blur(10px);

  @media (max-width: 375px) {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
`;

const Greeting = styled(motion.div)`
  font-size: 1.1rem;
  color: #94a3b8;
  margin-bottom: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.05em;

  @media (min-width: 1600px) {
    font-size: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Heading = styled(motion.h1)`
  font-size: 3.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.15;
  font-weight: 800;

  @media (min-width: 1600px) {
    font-size: 4.2rem;
  }

  @media (max-width: 1200px) {
    font-size: 3rem;
  }

  @media (max-width: 992px) {
    font-size: 2.6rem;
  }

  @media (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media (max-width: 576px) {
    font-size: 2rem;
  }

  @media (max-width: 375px) {
    font-size: 1.7rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(135deg, #00b8d4 0%, #7c3aed 50%, #00b8d4 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${gradientShift} 5s linear infinite;
`;

const Subheading = styled(motion.p)`
  font-size: 1.15rem;
  color: #cbd5e1;
  margin-bottom: 1.5rem;
  max-width: 90%;
  line-height: 1.7;

  @media (min-width: 1600px) {
    font-size: 1.25rem;
    max-width: 85%;
  }

  @media (max-width: 1200px) {
    max-width: 95%;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    font-size: 1.05rem;
    padding: 0 0.5rem;
  }

  @media (max-width: 576px) {
    font-size: 1rem;
    line-height: 1.6;
    margin-bottom: 1.2rem;
  }

  @media (max-width: 375px) {
    font-size: 0.95rem;
    margin-bottom: 1rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.2rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 576px) {
    gap: 0.8rem;
    margin-bottom: 1.2rem;
    flex-direction: column;
    align-items: center;
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #94a3b8;
  font-size: 0.9rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: #00b8d4;
    transform: translateY(-2px);
  }

  @media (min-width: 1600px) {
    font-size: 1rem;
    gap: 0.6rem;
  }

  @media (max-width: 375px) {
    font-size: 0.85rem;
  }
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
    width: 100%;
  }
`;

const PrimaryButton = styled.button`
  background: linear-gradient(135deg, #00b8d4 0%, #0891b2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 0.85rem 1.8rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 184, 212, 0.3);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0, 184, 212, 0.4);
  }

  @media (min-width: 1600px) {
    padding: 1rem 2.2rem;
    font-size: 1.1rem;
  }

  @media (max-width: 576px) {
    width: 100%;
    max-width: 280px;
    justify-content: center;
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: 375px) {
    padding: 0.75rem 1.2rem;
    font-size: 0.95rem;
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: #ffffff;
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 12px;
  padding: 0.85rem 1.8rem;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-3px);
  }

  @media (min-width: 1600px) {
    padding: 1rem 2.2rem;
    font-size: 1.1rem;
  }

  @media (max-width: 576px) {
    width: 100%;
    max-width: 280px;
    justify-content: center;
    padding: 0.8rem 1.5rem;
  }

  @media (max-width: 375px) {
    padding: 0.75rem 1.2rem;
    font-size: 0.95rem;
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    margin-top: 1.5rem;
  }

  @media (max-width: 576px) {
    margin-top: 1.2rem;
  }

  @media (max-width: 375px) {
    margin-top: 1rem;
    gap: 0.8rem;
  }
`;

const SocialLink = styled.a`
  color: #94a3b8;
  font-size: 1.4rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:hover {
    color: #00b8d4;
    background: rgba(0, 184, 212, 0.1);
    border-color: rgba(0, 184, 212, 0.3);
    transform: translateY(-3px);
  }

  @media (min-width: 1600px) {
    font-size: 1.5rem;
    width: 48px;
    height: 48px;
  }

  @media (max-width: 375px) {
    font-size: 1.2rem;
    width: 40px;
    height: 40px;
  }
`;

const ScrollDown = styled(motion.div)`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #64748b;
  font-size: 0.85rem;
  cursor: pointer;
  z-index: 10;
  gap: 0.3rem;

  &:hover {
    color: #00b8d4;
  }

  @media (min-width: 1600px) {
    bottom: 2.5rem;
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
  }

  @media (max-width: 576px) {
    display: none;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const particles = [
    { top: '15%', left: '10%', size: '6px', color: '#00b8d4', duration: '7s', delay: '0s' },
    { top: '25%', left: '85%', size: '4px', color: '#7c3aed', duration: '9s', delay: '1s' },
    { top: '60%', left: '5%', size: '5px', color: '#10b981', duration: '8s', delay: '2s' },
    { top: '70%', left: '90%', size: '3px', color: '#f59e0b', duration: '6s', delay: '0.5s' },
    { top: '40%', left: '15%', size: '4px', color: '#00b8d4', duration: '10s', delay: '3s' },
    { top: '80%', left: '70%', size: '5px', color: '#7c3aed', duration: '7s', delay: '1.5s' },
    { top: '10%', left: '60%', size: '3px', color: '#10b981', duration: '8s', delay: '2.5s' },
    { top: '85%', left: '30%', size: '4px', color: '#f59e0b', duration: '9s', delay: '0s' },
  ];

  return (
    <HeroContainer>
      {particles.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      <ContentSection
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Badge variants={itemVariants}>
          <Sparkles size={14} />
          GenAI Consultant @ Deloitte
        </Badge>

        <Greeting variants={itemVariants}>
          Hello, I'm
        </Greeting>

        <Heading variants={itemVariants}>
          Zakariae El Mernissi
        </Heading>

        <motion.div variants={itemVariants}>
          <Subheading>
            <GradientText>GenAI Consultant</GradientText> specializing in
            Generative AI solutions for enterprise applications.
            Building intelligent systems that transform how businesses operate.
          </Subheading>
        </motion.div>

        <ContactInfo variants={itemVariants}>
          <ContactItem href="mailto:zakariaeelmernissi@gmail.com">
            <Mail size={16} />
            zakariaeelmernissi@gmail.com
          </ContactItem>
          <ContactItem href="tel:+212636363170">
            <Phone size={16} />
            +212 636363170
          </ContactItem>
        </ContactInfo>

        <ButtonContainer variants={itemVariants}>
          <PrimaryButton onClick={() => scrollToSection('experience')}>
            View Experience <FaArrowRight />
          </PrimaryButton>
          <SecondaryButton onClick={() => scrollToSection('contact')}>
            Contact Me
          </SecondaryButton>
        </ButtonContainer>

        <SocialLinks variants={itemVariants}>
          <SocialLink
            href="https://github.com/zakariae200?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </SocialLink>
          <SocialLink
            href="https://www.linkedin.com/in/el-mernissi-zakariae/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </SocialLink>
        </SocialLinks>
      </ContentSection>

      <ImageSection>
        <CharacterImg
          src={characterImage}
          alt="Zakariae waving"
          draggable={false}
        />
      </ImageSection>

      <ScrollDown
        onClick={() => scrollToSection('experience')}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <span>Scroll Down</span>
        <ChevronDown size={20} />
      </ScrollDown>
    </HeroContainer>
  );
};

export default Hero;
