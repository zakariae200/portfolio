import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';
import CV from '../final english.pdf';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 25px;
  background-color: white;
  border-radius: 50px;
  margin: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 10px;
  z-index: 1000;
  
  @media (max-width: 1024px) {
    margin: 0.5rem 1rem;
  }
  
  @media (max-width: 768px) {
    border-radius: 20px;
    padding: 0.75rem 20px;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a1a5e;
  font-family: 'Inter', sans-serif;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 1024px) {
    gap: 1rem;
  }
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${props => props.isOpen ? '0' : '-100%'};
    width: 70%;
    max-width: 300px;
    height: 100vh;
    background-color: white;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-top: 5rem;
    transition: right 0.3s ease-in-out;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: #1a1a5e;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 1.1rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  
  @media (max-width: 768px) {
    gap: 0.5rem;
  }
`;

const ActionButton = styled.button`
  background-color: #1a1a5e;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 0.75rem 1.5rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0f0f3d;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #1a1a5e;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #1a1a5e;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: 999;
`;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    // Prevent scrolling when menu is open
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <>
      <NavbarContainer style={scrolled ? { background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(10px)' } : {}}>
        <Logo>Zakariae</Logo>
        
        <MenuButton onClick={toggleMenu}>
          <FaBars />
        </MenuButton>
        
        <NavLinks isOpen={isMenuOpen}>
          <CloseButton onClick={closeMenu}>
            <FaTimes />
          </CloseButton>
          <NavLink href="#experience" onClick={closeMenu}>Experience</NavLink>
          <NavLink href="#skills" onClick={closeMenu}>Skills</NavLink>
          <NavLink href="#projects" onClick={closeMenu}>Projects</NavLink>
          <NavLink href="#certifications" onClick={closeMenu}>Certifications</NavLink>
          <NavLink href="#education" onClick={closeMenu}>Education</NavLink>
          <NavLink href="#contact" onClick={closeMenu}>Contact</NavLink>
        </NavLinks>
        
        <ButtonGroup>
          <ActionButton as="a" href={CV} download="Zakariae_El_Mernissi_CV.pdf">
            Download CV
          </ActionButton>
        </ButtonGroup>
      </NavbarContainer>
      
      <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
    </>
  );
};

export default Navbar;
