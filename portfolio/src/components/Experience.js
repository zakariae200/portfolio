import React from 'react';
import styled from 'styled-components';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const SectionContainer = styled.section`
  padding: 5rem 10%;
  background-color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 90% 10%, rgba(26, 26, 94, 0.03) 0%, transparent 60%);
    z-index: 0;
  }
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    padding: 6rem 12%;
  }
  
  /* Medium desktop screens */
  @media (max-width: 1200px) {
    padding: 5rem 8%;
  }
  
  /* Tablets and small desktops */
  @media (max-width: 992px) {
    padding: 4rem 6%;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    padding: 3.5rem 5%;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    padding: 3rem 4%;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    padding: 2.5rem 3%;
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
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 3rem;
    margin-bottom: 4rem;
    
    &::after {
      width: 100px;
      height: 5px;
      bottom: -15px;
    }
  }
  
  /* Medium desktop screens */
  @media (max-width: 1200px) {
    font-size: 2.3rem;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 2.5rem;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 1.8rem;
    margin-bottom: 1.8rem;
    
    &::after {
      width: 60px;
      height: 3px;
    }
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: #f0f0f0;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
    
    /* Large desktop screens */
    @media (min-width: 1600px) {
      width: 6px;
      margin-left: -3px;
    }
    
    /* Tablets and small desktops */
    @media (max-width: 992px) {
      left: 40px;
    }
    
    /* Tablets */
    @media (max-width: 768px) {
      left: 31px;
    }
    
    /* Small phones */
    @media (max-width: 375px) {
      left: 22px;
      width: 3px;
    }
  }
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    max-width: 1400px;
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  margin-bottom: 20px;
  
  &:nth-child(odd) {
    left: 0;
  }
  
  &:nth-child(even) {
    left: 50%;
  }
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    padding: 15px 60px;
    margin-bottom: 30px;
  }
  
  /* Medium desktop screens */
  @media (max-width: 1200px) {
    padding: 10px 30px;
  }
  
  /* Tablets and small desktops */
  @media (max-width: 992px) {
    width: 100%;
    padding-left: 80px;
    padding-right: 25px;
    
    &:nth-child(odd), &:nth-child(even) {
      left: 0;
    }
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 20px;
    
    &:nth-child(odd), &:nth-child(even) {
      left: 0;
    }
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    padding-left: 60px;
    padding-right: 15px;
    margin-bottom: 15px;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    padding-left: 50px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

const TimelineContent = styled.div`
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    padding: 30px 40px;
    border-radius: 15px;
  }
  
  /* Medium desktop screens */
  @media (max-width: 1200px) {
    padding: 20px 25px;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    padding: 18px 22px;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    padding: 15px 20px;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    padding: 12px 15px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
    
    &:hover {
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
      transform: translateY(-3px);
    }
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  right: -12px;
  background-color: white;
  border: 4px solid #1a1a5e;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
  
  ${TimelineItem}:nth-child(even) & {
    left: -12px;
  }
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    width: 30px;
    height: 30px;
    border-width: 5px;
    right: -15px;
    top: 20px;
    
    ${TimelineItem}:nth-child(even) & {
      left: -15px;
    }
  }
  
  /* Tablets and small desktops */
  @media (max-width: 992px) {
    left: 28px;
    right: auto;
    
    ${TimelineItem}:nth-child(even) & {
      left: 28px;
    }
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    left: 18px;
    right: auto;
    
    ${TimelineItem}:nth-child(even) & {
      left: 18px;
    }
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    width: 20px;
    height: 20px;
    border-width: 3px;
    left: 12px;
    top: 12px;
    
    ${TimelineItem}:nth-child(even) & {
      left: 12px;
    }
  }
`;

const JobTitle = styled.h3`
  font-size: 1.2rem;
  color: #1a1a5e;
  margin-bottom: 0.5rem;
  font-weight: 600;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 1.4rem;
    margin-bottom: 0.7rem;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    font-size: 1.15rem;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    font-size: 1.1rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 1rem;
    margin-bottom: 0.4rem;
  }
`;

const Company = styled.h4`
  font-size: 1.1rem;
  color: #00b8d4;
  margin-bottom: 1rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 1.25rem;
    margin-bottom: 1.2rem;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 0.8rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 0.95rem;
    margin-bottom: 0.7rem;
    gap: 0.4rem;
  }
`;

const DateLocation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #666;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 1rem;
    margin-bottom: 1.2rem;
  }
  
  /* Medium desktop screens */
  @media (max-width: 1200px) {
    flex-wrap: wrap;
  }
  
  /* Tablets and small desktops */
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 0.8rem;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 0.85rem;
    margin-bottom: 0.7rem;
    gap: 0.3rem;
  }
`;

const Date = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  /* Small phones */
  @media (max-width: 375px) {
    gap: 0.3rem;
  }
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  /* Small phones */
  @media (max-width: 375px) {
    gap: 0.3rem;
  }
`;

const Responsibilities = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const Responsibility = styled.li`
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
  line-height: 1.5;
  
  &::before {
    content: '•';
    color: #00b8d4;
    font-weight: bold;
    position: absolute;
    left: 0;
  }
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 1.05rem;
    margin-bottom: 0.7rem;
    line-height: 1.6;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    padding-left: 1.2rem;
    line-height: 1.4;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 0.9rem;
    padding-left: 1rem;
    margin-bottom: 0.4rem;
    line-height: 1.3;
  }
`;

const Experience = () => {
  return (
    <SectionContainer id="experience">
      <SectionTitle>Professional Experience</SectionTitle>
      <Timeline>
        <TimelineItem>
          <TimelineDot />
          <TimelineContent>
            <JobTitle>Data Scientist & Artificial Intelligence Engineer</JobTitle>
            <Company><FaBriefcase /> Capgemini TS</Company>
            <DateLocation>
              <Date><FaCalendarAlt /> March 2024 - Present</Date>
              <Location><FaMapMarkerAlt /> Casablanca</Location>
            </DateLocation>
            <Responsibilities>
              <Responsibility>Member of the GenAI laboratory, contributing to the design of innovative solutions in generative artificial intelligence</Responsibility>
              <Responsibility>Development of an HR solution integrating generative AI for CV management and interaction</Responsibility>
              <Responsibility>Creation of an AI-powered application to analyze international supply chain constraints in the aerospace industry</Responsibility>
            </Responsibilities>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineDot />
          <TimelineContent>
            <JobTitle>Data Scientist & Artificial Intelligence Engineer · Internship</JobTitle>
            <Company><FaBriefcase /> Capgemini TS</Company>
            <DateLocation>
              <Date><FaCalendarAlt /> March 2024 - August 2024</Date>
              <Location><FaMapMarkerAlt /> Casablanca</Location>
            </DateLocation>
            <Responsibilities>
              <Responsibility>Development of a code retro-documentation application using Generative AI to improve developer productivity</Responsibility>
            </Responsibilities>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineDot />
          <TimelineContent>
            <JobTitle>Data Scientist · Internship</JobTitle>
            <Company><FaBriefcase /> Office National des Chemins de Fer (ONCF)</Company>
            <DateLocation>
              <Date><FaCalendarAlt /> August 2023 - September 2023</Date>
              <Location><FaMapMarkerAlt /> Rabat</Location>
            </DateLocation>
            <Responsibilities>
              <Responsibility>Analysis of supplier and item data from the Purchasing & Supply IS for migration preparation</Responsibility>
            </Responsibilities>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineDot />
          <TimelineContent>
            <JobTitle>Full-stack Developer · Internship</JobTitle>
            <Company><FaBriefcase /> Société Tangéroise de Maintenance (STM)</Company>
            <DateLocation>
              <Date><FaCalendarAlt /> April 2022 - June 2022</Date>
              <Location><FaMapMarkerAlt /> Tanger</Location>
            </DateLocation>
            <Responsibilities>
              <Responsibility>Development of a web application for taxi reservations</Responsibility>
            </Responsibilities>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineDot />
          <TimelineContent>
            <JobTitle>Learning Internship</JobTitle>
            <Company><FaBriefcase /> Institut National de la Recherche Agronomique</Company>
            <DateLocation>
              <Date><FaCalendarAlt /> April 2021 - June 2021</Date>
              <Location><FaMapMarkerAlt /> Tanger</Location>
            </DateLocation>
            <Responsibilities>
              <Responsibility>Use of MATLAB programming language in the study of goat behavior</Responsibility>
            </Responsibilities>
          </TimelineContent>
        </TimelineItem>
        
        <TimelineItem>
          <TimelineDot />
          <TimelineContent>
            <JobTitle>Business Analyst · Seasonal</JobTitle>
            <Company><FaBriefcase /> M'nar Park</Company>
            <DateLocation>
              <Date><FaCalendarAlt /> June 2019 - August 2019</Date>
              <Location><FaMapMarkerAlt /> Tanger</Location>
            </DateLocation>
            <Responsibilities>
              <Responsibility>Collection and organization of multi-source data for strategic analyses</Responsibility>
              <Responsibility>Development of reports and dashboards optimizing operational performance</Responsibility>
            </Responsibilities>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </SectionContainer>
  );
};

export default Experience;
