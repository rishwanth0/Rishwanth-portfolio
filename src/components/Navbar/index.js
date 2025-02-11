import React from 'react';
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from './NavbarStyledComponent';
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { useTheme } from 'styled-components';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the mobile menu state
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close the mobile menu when a link is clicked
  };

  const handleDarkModeToggle = () => {
    setDarkMode && setDarkMode(!darkMode);
  };

  return (
    <>
    <Nav>
      <NavbarContainer>
        {/* Logo Section */}
        <NavLogo to="/">
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
              color: darkMode ? 'white' : theme.text_primary, // Apply light/dark theme color
              marginBottom: '20px',
              cursor: 'pointer',
            }}
          >
            <DiCssdeck size="3rem" />
            <Span>Portfolio</Span>
          </span>
        </NavLogo>

        {/* Mobile Menu Icon */}
        <MobileIcon onClick={toggleMenu}>
          <FaBars />
        </MobileIcon>

        {/* Desktop Navigation Links */}
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavItems>

        {/* LinkedIn Button */}
        <ButtonContainer>
          <GitHubButton href={Bio.linkedin} target="_blank">
            LinkedIn Profile
          </GitHubButton>
          {/* Dark Mode Toggle Button */}
          <button
            onClick={handleDarkModeToggle}
            style={{
              marginLeft: '16px',
              padding: '8px 12px',
              border: `1.5px solid ${theme.primary}`,
              borderRadius: '8px',
              backgroundColor: darkMode ? theme.card_light : theme.card_dark,
              color: darkMode ? theme.text_primary : theme.white,
              cursor: 'pointer',
            }}
          >
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </ButtonContainer>

        {/* Mobile Menu */}
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={handleLinkClick}>
              About
            </MobileLink>
            <MobileLink href="#skills" onClick={handleLinkClick}>
              Skills
            </MobileLink>
            <MobileLink href="#projects" onClick={handleLinkClick}>
              Projects
            </MobileLink>
            <MobileLink href="#education" onClick={handleLinkClick}>
              Education
            </MobileLink>
            <MobileLink href="#contact" onClick={handleLinkClick}>
              Contact
            </MobileLink>
            <GitHubButton
              style={{
                padding: '10px 16px',
                background: theme.primary,
                color: 'white',
                width: 'max-content',
              }}
              href={Bio.linkedin}
              target="_blank"
            >
              LinkedIn Profile
            </GitHubButton>
            {/* Dark Mode Toggle Button for Mobile */}
            <button
              onClick={handleDarkModeToggle}
              style={{
                marginTop: '16px',
                padding: '8px 12px',
                border: `1.5px solid ${theme.primary}`,
                borderRadius: '8px',
                backgroundColor: darkMode ? theme.card_light : theme.card_dark,
                color: darkMode ? theme.text_primary : theme.white,
                cursor: 'pointer',
              }}
            >
              {darkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </MobileMenu>
        )}
      </NavbarContainer>
      
    </Nav>
    
    
    </>
     
  );
};

export default Navbar;
