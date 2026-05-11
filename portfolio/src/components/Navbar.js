import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Sparkles, Mail } from 'lucide-react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import CV from '../Zakariae_El_Mernissi_2026-05-06.pdf';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 2rem;
  position: fixed;
  top: 1rem;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 3rem);
  max-width: 1400px;
  border-radius: 16px;
  z-index: 1100;
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  overflow: hidden;

  ${props => props.scrolled ? `
    background: rgba(10, 10, 26, 0.85);
    backdrop-filter: blur(20px) saturate(180%);
    -webkit-backdrop-filter: blur(20px) saturate(180%);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  ` : `
    background: transparent;
    border: 1px solid transparent;
    box-shadow: none;
  `}

  @media (max-width: 1024px) {
    padding: 0.75rem 1.5rem;
    width: calc(100% - 2rem);
  }

  @media (max-width: 900px) {
    padding: 0.6rem 1.1rem;
  }

  @media (max-width: 768px) {
    top: max(0.75rem, env(safe-area-inset-top));
    padding: 0.55rem 1rem;
    border-radius: 14px;
    width: calc(100% - 1.5rem);
  }
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.4rem;
  font-weight: 800;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  text-decoration: none;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;

  span {
    background: linear-gradient(135deg, #00b8d4 0%, #7c3aed 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 380px) {
    font-size: 1.1rem;
  }
`;

const DesktopLinks = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  @media (max-width: 1024px) {
    gap: 0.25rem;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${props => props.active ? '#00b8d4' : 'rgba(255, 255, 255, 0.7)'};
  font-weight: 500;
  font-size: 0.9rem;
  padding: 0.5rem 0.9rem;
  border-radius: 8px;
  transition: color 0.3s ease, background 0.3s ease;
  position: relative;
  white-space: nowrap;

  &:hover {
    color: #00b8d4;
    background: rgba(0, 184, 212, 0.08);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%) scaleX(${props => props.active ? 1 : 0});
    width: 20px;
    height: 2px;
    background: linear-gradient(90deg, #00b8d4, #7c3aed);
    border-radius: 2px;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: translateX(-50%) scaleX(1);
  }

  @media (max-width: 1024px) {
    font-size: 0.85rem;
    padding: 0.4rem 0.7rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  z-index: 2;

  @media (max-width: 768px) {
    gap: 0.4rem;
  }
`;

const ActionButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: linear-gradient(135deg, #00b8d4 0%, #0891b2 100%);
  color: white;
  border: none;
  border-radius: 10px;
  padding: 0.6rem 1.2rem;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  text-decoration: none;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 184, 212, 0.25);
  white-space: nowrap;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    box-shadow: 0 6px 25px rgba(0, 184, 212, 0.4);
    transform: translateY(-1px);
  }

  @media (max-width: 1024px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }

  @media (max-width: 900px) {
    padding: 0.55rem 0.7rem;
    border-radius: 10px;

    span {
      display: none;
    }
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  cursor: pointer;
  z-index: 1100;
  padding: 0;
  border-radius: 10px;
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  transition: background 0.25s ease, border-color 0.25s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    background: rgba(0, 184, 212, 0.12);
    border-color: rgba(0, 184, 212, 0.3);
  }

  @media (max-width: 900px) {
    display: inline-flex;
  }
`;

const HamburgerIcon = styled.div`
  position: relative;
  width: 22px;
  height: 16px;

  span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${props => props.isOpen ? '#00b8d4' : '#ffffff'};
    border-radius: 2px;
    transition:
      transform 0.35s cubic-bezier(0.65, 0.05, 0.36, 1),
      top 0.35s cubic-bezier(0.65, 0.05, 0.36, 1),
      opacity 0.2s ease,
      background 0.25s ease;
  }

  span:nth-child(1) {
    top: ${props => props.isOpen ? '7px' : '0'};
    transform: rotate(${props => props.isOpen ? '45deg' : '0'});
  }

  span:nth-child(2) {
    top: 7px;
    opacity: ${props => props.isOpen ? 0 : 1};
    transform: scaleX(${props => props.isOpen ? 0 : 1});
  }

  span:nth-child(3) {
    top: ${props => props.isOpen ? '7px' : '14px'};
    transform: rotate(${props => props.isOpen ? '-45deg' : '0'});
  }
`;

const MobileMenuOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(10, 10, 26, 0.96);
  backdrop-filter: blur(24px) saturate(180%);
  -webkit-backdrop-filter: blur(24px) saturate(180%);
  z-index: 1050;
  display: flex;
  flex-direction: column;
  padding:
    calc(max(1.25rem, env(safe-area-inset-top)) + 4.5rem)
    1.5rem
    max(1.5rem, env(safe-area-inset-bottom));
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -10%;
    right: -10%;
    width: 60%;
    height: 60%;
    background: radial-gradient(circle, rgba(0, 184, 212, 0.18) 0%, transparent 60%);
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10%;
    left: -10%;
    width: 60%;
    height: 60%;
    background: radial-gradient(circle, rgba(124, 58, 237, 0.14) 0%, transparent 60%);
    pointer-events: none;
  }
`;

const MobileMenuLinks = styled(motion.nav)`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  position: relative;
  z-index: 2;
`;

const MobileNavLink = styled(motion.a)`
  text-decoration: none;
  color: ${props => props.active ? '#00b8d4' : 'rgba(255, 255, 255, 0.85)'};
  font-size: 1.6rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  padding: 0.85rem 1.5rem;
  border-radius: 12px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  transition: color 0.25s ease, background 0.25s ease;
  min-height: 56px;
  -webkit-tap-highlight-color: transparent;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #00b8d4;
    box-shadow: 0 0 12px #00b8d4;
    opacity: ${props => (props.active ? 1 : 0)};
    transform: scale(${props => (props.active ? 1 : 0)});
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  &:active {
    background: rgba(0, 184, 212, 0.08);
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    padding: 0.7rem 1rem;
    gap: 0.55rem;
  }
`;

const MobileMenuFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  align-items: center;
  width: 100%;
  position: relative;
  z-index: 2;
  padding-top: 1rem;
`;

const SocialIcons = styled(motion.div)`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const SocialLink = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.85);
  transition: background 0.25s ease, border-color 0.25s ease, color 0.25s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover, &:active {
    background: rgba(0, 184, 212, 0.12);
    border-color: rgba(0, 184, 212, 0.4);
    color: #00b8d4;
  }
`;

const FullCTAButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  max-width: 320px;
  background: linear-gradient(135deg, #00b8d4 0%, #0891b2 100%);
  color: white;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  box-shadow: 0 8px 24px rgba(0, 184, 212, 0.3);
  -webkit-tap-highlight-color: transparent;
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const toggleMenu = () => (isMenuOpen ? closeMenu() : openMenu());

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = ['experience', 'skills', 'projects', 'certifications', 'education', 'contact'];
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return undefined;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isMenuOpen]);

  useEffect(() => () => {
    document.body.style.overflow = 'auto';
  }, []);

  const navItems = [
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const linkContainerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <>
      <NavbarContainer scrolled={scrolled}>
        <Logo href="#" onClick={closeMenu}>
          <Sparkles size={20} color="#00b8d4" />
          <span>Zakariae</span>
        </Logo>

        <DesktopLinks>
          {navItems.map(item => (
            <NavLink
              key={item.id}
              href={`#${item.id}`}
              active={activeSection === item.id}
            >
              {item.label}
            </NavLink>
          ))}
        </DesktopLinks>

        <ButtonGroup>
          <ActionButton
            href={CV}
            download="Zakariae_El_Mernissi_CV.pdf"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Download CV"
          >
            <Download size={14} />
            <span>Download CV</span>
          </ActionButton>

          <HamburgerButton
            onClick={toggleMenu}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <HamburgerIcon isOpen={isMenuOpen}>
              <span />
              <span />
              <span />
            </HamburgerIcon>
          </HamburgerButton>
        </ButtonGroup>
      </NavbarContainer>

      <AnimatePresence>
        {isMenuOpen && (
          <MobileMenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <MobileMenuLinks
              variants={linkContainerVariants}
              initial="hidden"
              animate="visible"
            >
              {navItems.map(item => (
                <MobileNavLink
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  active={activeSection === item.id}
                  variants={linkVariants}
                >
                  {item.label}
                </MobileNavLink>
              ))}
            </MobileMenuLinks>

            <MobileMenuFooter>
              <SocialIcons
                variants={linkContainerVariants}
                initial="hidden"
                animate="visible"
              >
                <SocialLink
                  href="https://linkedin.com/in/el-mernissi-zakariae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  variants={linkVariants}
                  whileTap={{ scale: 0.92 }}
                >
                  <FaLinkedinIn size={17} />
                </SocialLink>
                <SocialLink
                  href="https://github.com/zakariae200?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  variants={linkVariants}
                  whileTap={{ scale: 0.92 }}
                >
                  <FaGithub size={18} />
                </SocialLink>
                <SocialLink
                  href="mailto:zakariaeelmernissi@gmail.com"
                  aria-label="Email"
                  variants={linkVariants}
                  whileTap={{ scale: 0.92 }}
                >
                  <Mail size={18} />
                </SocialLink>
              </SocialIcons>

              <FullCTAButton
                href={CV}
                download="Zakariae_El_Mernissi_CV.pdf"
                onClick={closeMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.35 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={18} />
                Download CV
              </FullCTAButton>
            </MobileMenuFooter>
          </MobileMenuOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
