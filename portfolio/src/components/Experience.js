import React, { useState } from 'react';
import styled from 'styled-components';
import { FaCalendarAlt, FaMapMarkerAlt, FaChevronDown, FaChevronUp, FaMapMarkedAlt, FaGlobeAmericas, FaClock } from 'react-icons/fa';

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

const CompanyHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  
  @media (max-width: 576px) {
    gap: 0.8rem;
    margin-bottom: 0.8rem;
  }
`;

const CompanyLogo = styled.div`
  width: 120px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.7rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 576px) {
    width: 55px;
    height: 55px;
    padding: 0.5rem;
  }
`;

const Company = styled.h4`
  font-size: 1.1rem;
  color: #1a1a5e;
  margin: 0;
  font-weight: 600;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 1.25rem;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    font-size: 1rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 0.95rem;
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
  line-height: 1.6;
  color: #555;
  
  &::before {
    content: '▸';
    color: #00b8d4;
    font-weight: bold;
    position: absolute;
    left: 0;
    font-size: 1.1rem;
  }
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 1.05rem;
    margin-bottom: 0.7rem;
    line-height: 1.7;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    padding-left: 1.2rem;
    line-height: 1.5;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 0.9rem;
    padding-left: 1rem;
    margin-bottom: 0.4rem;
    line-height: 1.4;
  }
`;

const ProjectItem = styled.div`
  margin-bottom: 1rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const ProjectTitle = styled.div`
  font-weight: 600;
  color: #1a1a5e;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  
  &::before {
    content: '▸';
    color: #00b8d4;
    font-weight: bold;
    font-size: 1.1rem;
    flex-shrink: 0;
  }
`;

const ProjectDetails = styled.div`
  margin-left: 1.5rem;
  margin-top: 0.5rem;
  padding-left: 1rem;
  border-left: 2px solid #f0f0f0;
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ProjectDetailItem = styled.p`
  margin: 0.5rem 0;
  color: #555;
  line-height: 1.6;
  font-size: 0.95rem;
  
  &::before {
    content: '•';
    color: #00b8d4;
    font-weight: bold;
    margin-right: 0.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
  }
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  color: #00b8d4;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  margin-left: 0.5rem;
  padding: 0;
  font-size: 0.85rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #1a1a5e;
    gap: 0.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

const FreelanceSection = styled.div`
  max-width: 1200px;
  margin: 4rem auto 0;
  padding-top: 3rem;
  border-top: 2px solid #f0f0f0;
  
  @media (min-width: 1600px) {
    max-width: 1400px;
  }
`;

const FreelanceTitle = styled.h3`
  font-size: 1.8rem;
  color: #1a1a5e;
  margin-bottom: 2rem;
  text-align: center;
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

const FreelanceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FreelanceCard = styled.div`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  border-radius: 15px;
  padding: 1.8rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid #e8e8e8;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, #00b8d4, #1a1a5e);
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 30px rgba(0, 184, 212, 0.15);
    border-color: #00b8d4;
  }
  
  @media (max-width: 576px) {
    padding: 1.5rem;
  }
`;

const FreelanceHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  gap: 0.5rem;
  flex-wrap: wrap;
`;


const FreelanceBadge = styled.span`
  background: rgba(0, 184, 212, 0.1);
  color: #00b8d4;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  border: 1px solid rgba(0, 184, 212, 0.3);
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const FreelanceProjectTitle = styled.h4`
  font-size: 1.15rem;
  color: #1a1a5e;
  margin: 0 0 0.7rem 0;
  font-weight: 700;
  line-height: 1.4;
  
  @media (max-width: 576px) {
    font-size: 1.05rem;
  }
`;

const FreelanceRole = styled.div`
  font-size: 0.9rem;
  color: #00b8d4;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
  
  @media (max-width: 576px) {
    font-size: 0.85rem;
  }
`;

const FreelanceMetaInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 0 0 1rem 0;
  flex-wrap: wrap;
  
  @media (max-width: 576px) {
    gap: 0.8rem;
  }
`;

const FreelanceLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: #666;
  
  svg {
    font-size: 0.8rem;
    color: #00b8d4;
  }
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

const FreelanceRemote = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  color: #00b8d4;
  font-weight: 500;
  
  svg {
    font-size: 0.8rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

const FreelanceDuration = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.8rem;
  color: #666;
  font-weight: 500;
  
  svg {
    font-size: 0.75rem;
    color: #00b8d4;
  }
  
  @media (max-width: 576px) {
    font-size: 0.75rem;
  }
`;

const FreelanceDescription = styled.p`
  font-size: 0.9rem;
  color: #555;
  line-height: 1.7;
  margin: 0;
  padding-top: 0.8rem;
  border-top: 1px solid #f0f0f0;
  
  @media (max-width: 576px) {
    font-size: 0.85rem;
    line-height: 1.6;
  }
`;

// Experience data with company logos and projects
const experienceData = [
  {
    id: 1,
    title: 'Data Scientist & Artificial Intelligence Engineer',
    logo: 'https://cdn.worldvectorlogo.com/logos/capgemini-201x-logo-1.svg',
    date: 'March 2024 - Present',
    location: 'Casablanca, Morocco',
    intro: null,
    projects: [
      {
        name: 'Member of the GenAI Lab – Designing Innovative Generative AI Solutions',
        details: []
      },
      {
        name: 'AI-Powered HR Platform – Intelligent CV Management System',
        details: [
          'Multi-agent GenAI solution built with Google\'s Agent Development Kit (ADK)',
          'Smart document parsing with entity extraction and metadata enrichment',
          'Semantic search using vector embeddings and retrieval via Vertex AI'
        ]
      },
      {
        name: 'Supply Chain Analyzer – GenAI-Powered Logistics Intelligence System',
        details: [
          'Cloud-native GenAI system for analyzing international supply chain constraints',
          'Document search pipeline powered by Amazon Titan and OpenSearch Service',
          'Final AI responses generated using Claude 3.5 Sonnet via Amazon Bedrock'
        ]
      },
      {
        name: 'Computer System Validation (CSV) Platform – Pharmaceutical Industry',
        details: [
          'Multi-agent GenAI system designed for automated validation and compliance analysis in pharmaceutical environments'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Data Scientist & AI Engineer · Internship',
    logo: 'https://cdn.worldvectorlogo.com/logos/capgemini-201x-logo-1.svg',
    date: 'March 2024 - August 2024',
    location: 'Casablanca, Morocco',
    intro: null,
    projects: [
      {
        name: 'Codebase Analysis & Documentation Generator – Intelligent Code Understanding System',
        details: [
          'Dual-path processing system combining vector embeddings and knowledge graph construction',
          'Automated directory and file extraction with entity identification',
          'Semantic code search using Pinecone vector database for contextual code retrieval',
          'Knowledge graph representation in Neo4j database for code relationship mapping'
        ]
      }
    ]
  },
  {
    id: 3,
    title: 'Data Scientist · Internship',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Logo-oncf.png',
    date: 'August 2023 - September 2023',
    location: 'Rabat, Morocco',
    intro: null,
    projects: [
      {
        name: 'Data Analysis & System Migration',
        details: [
          'Analysis of supplier and item data from the Procurement Information System',
          'ETL pipelines for migration preparation',
          'Analytical dashboards with Python (Pandas, NumPy) for procurement insights visualization'
        ]
      }
    ]
  },
  {
    id: 4,
    title: 'Full-stack Developer · Internship',
    company: 'STM',
    logo: 'https://www.stm.ma/wp-content/uploads/2020/08/logostm.png',
    date: 'April 2022 - June 2022',
    location: 'Tangier, Morocco',
    intro: null,
    projects: [
      {
        name: 'Development of a web application for taxi booking',
        details: []
      }
    ]
  },
  {
    id: 5,
    title: 'Research Intern',
    company: 'INRA',
    logo: 'https://www.inra.org.ma/themes/custom/inra/img/logo.png',
    date: 'April 2021 - June 2021',
    location: 'Tangier, Morocco',
    intro: null,
    projects: [
      {
        name: 'Use of MATLAB programming language in the study of goat behavior',
        details: []
      }
    ]
  },
  {
    id: 6,
    title: 'Business Analyst · Seasonal',
    company: 'M\'nar Park',
    logo: 'https://activityz.ma/wp-content/uploads/2025/04/278668487_513777316903554_7500014128235136030_n.webp',
    date: 'June 2019 - August 2019',
    location: 'Tangier, Morocco',
    intro: null,
    projects: [
      {
        name: 'Collection and organization of multi-source data for strategic analysis',
        details: []
      },
      {
        name: 'Development of reports and dashboards optimizing operational performance',
        details: []
      }
    ]
  }
];

// Freelance experience data
const freelanceData = [
  {
    id: 1,
    title: 'Machine Learning Engineer',
    project: 'Personalized Learning Analytics System',
    location: 'Morocco',
    duration: '6 months',
    description: 'Built a machine learning system that analyzes student behavior on an e-learning platform using ILS and HEXAD frameworks for learner profiling.'
  },
  {
    id: 2,
    title: 'GenAI Engineer',
    project: 'AI Agent for Commercial Property Ownership Research',
    location: 'United States',
    duration: '4 months',
    description: 'Developed an intelligent AI agent system for automated commercial property ownership research with multi-source data integration and entity extraction using GPT-4.'
  },
  {
    id: 3,
    title: 'GenAI Engineer',
    project: 'Intelligent Book Recommendation Platform',
    location: 'Belgium',
    duration: '3 months',
    description: 'Built a comprehensive RAG pipeline using LangChain for contextual book discovery with vector database integration and conversational AI assistant.'
  },
  {
    id: 4,
    title: 'GenAI Engineer',
    project: 'English Accent Analyzer',
    location: 'United States',
    duration: '<1 month',
    description: 'Implemented advanced audio preprocessing with Wav2Vec2 transformer model for accent classification with AI-powered confidence scoring and explanations.'
  },
  {
    id: 5,
    title: 'GenAI Engineer',
    project: 'AI Agent System for HR Recruitment',
    location: 'France',
    duration: '2 months',
    description: 'Developed an AI agent system for automated candidate promotion using CrewAI and Claude Sonnet 4. Enables recruitment consultants to identify decision-makers via MCP and generate personalized outreach messages for open positions.'
  }
];

const ProjectComponent = ({ project, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <ProjectItem key={index}>
      <ProjectTitle>
        {project.name}
        {project.details.length > 0 && (
          <ExpandButton onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? (
              <>
                Less <FaChevronUp />
              </>
            ) : (
              <>
                More <FaChevronDown />
              </>
            )}
          </ExpandButton>
        )}
      </ProjectTitle>
      {isExpanded && project.details.length > 0 && (
        <ProjectDetails>
          {project.details.map((detail, idx) => (
            <ProjectDetailItem key={idx}>{detail}</ProjectDetailItem>
          ))}
        </ProjectDetails>
      )}
    </ProjectItem>
  );
};

const ExperienceCard = ({ experience }) => {
  return (
    <TimelineItem>
      <TimelineDot />
      <TimelineContent>
        <JobTitle>{experience.title}</JobTitle>
        <CompanyHeader>
          <CompanyLogo>
            <img src={experience.logo} alt={experience.company} />
          </CompanyLogo>
          <Company>{experience.company}</Company>
        </CompanyHeader>
        <DateLocation>
          <Date><FaCalendarAlt /> {experience.date}</Date>
          <Location><FaMapMarkerAlt /> {experience.location}</Location>
        </DateLocation>
        
        {experience.intro && (
          <Responsibilities>
            <Responsibility>{experience.intro}</Responsibility>
          </Responsibilities>
        )}
        
        <div style={{ marginTop: experience.intro ? '1rem' : '0' }}>
          {experience.projects.map((project, index) => (
            <ProjectComponent key={index} project={project} index={index} />
          ))}
        </div>
      </TimelineContent>
    </TimelineItem>
  );
};

const Experience = () => {
  return (
    <SectionContainer id="experience">
      <SectionTitle>Professional Experience</SectionTitle>
      <Timeline>
        {experienceData.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </Timeline>
      
      <FreelanceSection>
        <FreelanceTitle>Freelance Projects</FreelanceTitle>
        <FreelanceGrid>
          {freelanceData.map((freelance) => (
            <FreelanceCard key={freelance.id}>
              <FreelanceHeader>
                <FreelanceBadge>
                  Freelance
                </FreelanceBadge>
                <FreelanceDuration>
                  <FaClock /> {freelance.duration}
                </FreelanceDuration>
              </FreelanceHeader>
              <FreelanceProjectTitle>{freelance.project}</FreelanceProjectTitle>
              <FreelanceRole>{freelance.title}</FreelanceRole>
              <FreelanceMetaInfo>
                <FreelanceRemote>
                  <FaGlobeAmericas /> Remote
                </FreelanceRemote>
                <FreelanceLocation>
                  <FaMapMarkedAlt /> Client: {freelance.location}
                </FreelanceLocation>
              </FreelanceMetaInfo>
              <FreelanceDescription>{freelance.description}</FreelanceDescription>
            </FreelanceCard>
          ))}
        </FreelanceGrid>
      </FreelanceSection>
    </SectionContainer>
  );
};

export default Experience;
