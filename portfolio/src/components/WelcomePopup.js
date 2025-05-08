import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import welcomeVideo from '../videos/hello.mp4';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: opacity 0.5s ease, visibility 0.5s ease;
  backdrop-filter: blur(8px);
`;

const PopupContent = styled.div`
  background-color: transparent;
  border-radius: 20px;
  max-width: 90%;
  width: 380px;
  position: relative;
  animation: ${fadeIn} 0.5s ease-out;
  overflow: visible;
`;

const VideoContainer = styled.div`
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  z-index: 1;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  border: 3px solid #1a1a5e;
  
  video {
    width: 100%;
    display: block;
    border-radius: 18px;
  }
`;





const closeButtonHover = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -18px;
  right: -18px;
  background: linear-gradient(135deg, #1a1a5e, #00b8d4);
  color: white;
  border: 2px solid white;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  z-index: 10;
  transition: all 0.2s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  outline: none;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 50%;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), transparent);
    opacity: 0.5;
    z-index: -1;
  }
  
  &:hover {
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
    animation: ${closeButtonHover} 0.8s ease-in-out;
  }
  
  &:active {
    transform: scale(0.95);
  }
`;







const WelcomePopup = () => {
  const [show, setShow] = useState(false);
  const [muted, setMuted] = useState(true); // Start muted to handle autoplay restrictions
  const popupRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Show popup after a short delay for better UX
    const timer = setTimeout(() => {
      setShow(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Handle video playback when popup is shown
    if (show && videoRef.current) {
      const videoElement = videoRef.current;
      
      // Try to play the video
      const playPromise = videoElement.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Video started playing successfully
            // Do not auto-unmute; wait for user gesture (Unmute button) due to browser autoplay policy.
          })
          .catch(error => {
            // Auto-play was prevented, keep it muted
            console.log('Autoplay prevented:', error);
            // Try to play it muted
            videoElement.muted = true;
            videoElement.play().catch(e => console.log('Still cannot play video:', e));
          });
      }
      
      // Set up the ended event listener
      const handleEnded = () => {
        // Mute the video after first playthrough
        setMuted(true);
        // No need to remove listener as we want this behavior on each playthrough
      };
      
      videoElement.addEventListener('ended', handleEnded);
      
      return () => {
        // Clean up event listener
        videoElement.removeEventListener('ended', handleEnded);
        // Pause the video when this effect is cleaned up (when show becomes false)
        videoElement.pause();
      };
    }
  }, [show]);

  const handleClose = () => {
    // Just set show to false, the useEffect cleanup will handle pausing the video
    setShow(false);
  };
  
  const handleOverlayClick = (e) => {
    // Close when clicking outside the popup content
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      handleClose();
    }
  };

  return (
    <PopupOverlay 
      show={show} 
      onClick={handleOverlayClick}
      aria-hidden={!show}
    >
      <PopupContent show={show} ref={popupRef}>
        <CloseButton onClick={handleClose} aria-label="Close">✕</CloseButton>
        <VideoContainer>
          <video 
            ref={videoRef}
            autoPlay 
            muted={muted} 
            loop 
            playsInline
          >
            <source src={welcomeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {muted && (
            <button
              style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                background: '#1a1a5e',
                color: '#fff',
                border: 'none',
                borderRadius: '20px',
                padding: '8px 24px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                zIndex: 2,
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}
              onClick={() => {
                setMuted(false);
                if (videoRef.current) {
                  videoRef.current.muted = false;
                  videoRef.current.play();
                }
              }}
            >
              🔊 Unmute
            </button>
          )}
        </VideoContainer>
      </PopupContent>
    </PopupOverlay>
  );
};

export default WelcomePopup;
