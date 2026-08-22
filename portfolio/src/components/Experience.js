import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ChevronDown, Briefcase, Globe, Clock } from 'lucide-react';

const SectionContainer = styled.section`
  padding: 6rem 8% 5rem;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 200px;
    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
    pointer-events: none;
  }

  @media (max-width: 1200px) {
    padding: 5rem 6% 4rem;
  }

  @media (max-width: 768px) {
    padding: 4rem 5% 3rem;
  }

  @media (max-width: 576px) {
    padding: 3.5rem 4% 2.5rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;


const SectionTitle = styled.h2`
  font-size: 2.75rem;
  color: #0f172a;
  margin: 0 0 0.75rem 0;
  font-weight: 700;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.8rem;
  }
`;

const SectionSubtitle = styled.p`
  color: #64748b;
  font-size: 1.05rem;
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 576px) {
    font-size: 0.95rem;
  }
`;

const Timeline = styled.div`
  position: relative;
  max-width: 880px;
  margin: 0 auto;
  padding-left: 2.5rem;

  &::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 8px;
    bottom: 8px;
    width: 1px;
    background: linear-gradient(180deg,
      rgba(203, 213, 225, 0) 0%,
      #cbd5e1 12%,
      #cbd5e1 88%,
      rgba(203, 213, 225, 0) 100%);
  }

  @media (max-width: 576px) {
    padding-left: 1.75rem;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 1.5rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const TimelineDot = styled.div`
  position: absolute;
  left: -2.5rem;
  top: 1.5rem;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background: ${props => props.isNew ? '#00b8d4' : '#ffffff'};
  border: 2px solid ${props => props.isNew ? '#00b8d4' : '#cbd5e1'};
  box-shadow: ${props => props.isNew ? '0 0 0 4px rgba(0, 184, 212, 0.15)' : 'none'};
  z-index: 1;

  ${props => props.isNew && `
    &::after {
      content: '';
      position: absolute;
      inset: -6px;
      border-radius: 50%;
      border: 1px solid rgba(0, 184, 212, 0.4);
      animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
    }

    @keyframes ping {
      0% { transform: scale(0.8); opacity: 1; }
      100% { transform: scale(1.6); opacity: 0; }
    }
  `}

  @media (max-width: 576px) {
    left: -1.75rem;
    width: 13px;
    height: 13px;
    top: 1.4rem;
  }
`;

const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.25s ease;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);

  &:hover {
    border-color: rgba(0, 184, 212, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 184, 212, 0.08);
  }

  ${props => props.isNew && `
    border-color: rgba(0, 184, 212, 0.35);
    background: linear-gradient(135deg, rgba(0, 184, 212, 0.03) 0%, #ffffff 100%);
    box-shadow: 0 4px 16px rgba(0, 184, 212, 0.08);
  `}

  @media (max-width: 576px) {
    padding: 1.2rem;
    border-radius: 10px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 576px) {
    gap: 0.8rem;
  }
`;

const LogoBox = styled.div`
  flex-shrink: 0;
  width: 52px;
  height: 52px;
  border-radius: 10px;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border: 1px solid #e2e8f0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 576px) {
    width: 44px;
    height: 44px;
    padding: 6px;
  }
`;

const HeaderInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-bottom: 0.25rem;
`;

const JobTitle = styled.h3`
  font-size: 1.1rem;
  color: #0f172a;
  margin: 0;
  font-weight: 600;
  line-height: 1.3;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const NewBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: rgba(0, 184, 212, 0.15);
  color: #00b8d4;
  padding: 0.2rem 0.6rem;
  border-radius: 50px;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border: 1px solid rgba(0, 184, 212, 0.3);
`;

const CompanyName = styled.div`
  font-size: 0.95rem;
  color: #00b8d4;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  flex-wrap: wrap;
  color: #64748b;
  font-size: 0.82rem;

  @media (max-width: 576px) {
    gap: 0.8rem;
    font-size: 0.78rem;
  }
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.35rem;

  svg {
    color: #94a3b8;
  }
`;

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid #f1f5f9;
`;

const ProjectItem = styled.div``;

const ProjectHeader = styled.button`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.75rem;
  background: transparent;
  border: none;
  padding: 0.5rem 0;
  cursor: ${props => props.expandable ? 'pointer' : 'default'};
  text-align: left;
  color: #334155;
  font-size: 0.92rem;
  font-weight: 500;
  line-height: 1.5;
  transition: color 0.2s ease;
  font-family: inherit;

  &:hover {
    color: ${props => props.expandable ? '#0f172a' : '#334155'};
  }

  &::before {
    content: '';
    flex-shrink: 0;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #00b8d4;
    margin-top: 0.55rem;
  }

  @media (max-width: 576px) {
    font-size: 0.88rem;
  }
`;

const ProjectName = styled.span`
  flex: 1;
`;

const ChevronIcon = styled.span`
  display: inline-flex;
  align-items: center;
  color: #94a3b8;
  transition: transform 0.25s ease;
  transform: ${props => props.expanded ? 'rotate(180deg)' : 'rotate(0deg)'};
  margin-top: 0.15rem;
`;

const ProjectDetails = styled(motion.div)`
  overflow: hidden;
  margin-left: 0.875rem;
  padding-left: 0.875rem;
  border-left: 1px solid rgba(0, 184, 212, 0.3);
`;

const DetailItem = styled.div`
  color: #64748b;
  font-size: 0.85rem;
  line-height: 1.6;
  padding: 0.4rem 0;
  position: relative;
  padding-left: 1rem;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.85rem;
    width: 6px;
    height: 1px;
    background: rgba(0, 184, 212, 0.6);
  }

  @media (max-width: 576px) {
    font-size: 0.82rem;
  }
`;

const FreelanceSection = styled.div`
  max-width: 1100px;
  margin: 5rem auto 0;

  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

const FreelanceHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;

const FreelanceTitle = styled.h3`
  font-size: 1.8rem;
  color: #0f172a;
  margin: 0 0 0.5rem 0;
  font-weight: 600;

  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const FreelanceSubtitle = styled.p`
  color: #64748b;
  font-size: 0.95rem;
  margin: 0;
`;

const FreelanceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const FreelanceCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.4rem;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);

  &:hover {
    border-color: rgba(0, 184, 212, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 184, 212, 0.08);
  }
`;

const FreelanceTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

const FreelanceBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: rgba(0, 184, 212, 0.1);
  color: #00b8d4;
  padding: 0.25rem 0.6rem;
  border-radius: 50px;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border: 1px solid rgba(0, 184, 212, 0.25);
`;

const FreelanceDuration = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: #64748b;
  font-size: 0.75rem;
`;

const FreelanceProject = styled.h4`
  font-size: 1rem;
  color: #0f172a;
  margin: 0;
  font-weight: 600;
  line-height: 1.4;
`;

const FreelanceRole = styled.div`
  font-size: 0.85rem;
  color: #00b8d4;
  font-weight: 500;
`;

const FreelanceMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  color: #64748b;
  font-size: 0.78rem;

  svg {
    color: #94a3b8;
  }
`;

const FreelanceMetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const FreelanceDescription = styled.p`
  font-size: 0.85rem;
  color: #64748b;
  line-height: 1.6;
  margin: 0;
  padding-top: 0.75rem;
  border-top: 1px solid #f1f5f9;
`;

const experienceData = [
  {
    id: 1,
    title: 'GenAI Consultant',
    company: 'Deloitte',
    logo: 'https://cdn.worldvectorlogo.com/logos/deloitte-1.svg',
    date: 'December 2025 - Present',
    location: 'Casablanca, Morocco',
    isNew: true,
    projects: [
      {
        name: 'Autonomous Incident Resolution & Remediation',
        details: [
          'Engineered a multi-agent system that autonomously investigates the exact root cause and location of production errors, automates remediation, and applies fixes through a mandatory human validation gate for security and compliance  significantly reducing Mean Time to Repair (MTTR) and ensuring operational continuity of the run team.',
          'Specialized Agent Architecture: architected dedicated agent roles a KB Agent for instant solution matching, an OCR Agent for screenshot analysis, a Log Agent for deep technical troubleshooting, and a Web Search Agent for real-time documentation retrieval  enabling autonomous diagnosis and controlled remediation.',
          'Self-Improving Knowledge Flywheel: implemented a feedback loop that autonomously enriches the Knowledge Base (KB) with human-validated resolutions, creating a continuously self-improving system that grows in accuracy and domain expertise over time.'
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'GenAI Engineer',
    company: 'Capgemini TS',
    logo: 'https://cdn.worldvectorlogo.com/logos/capgemini-201x-logo-1.svg',
    date: 'March 2024 - December 2025',
    location: 'Casablanca, Morocco',
    projects: [
      {
        name: 'AI-Powered HR Platform, Intelligent CV Management System',
        details: [
          'Designed a production multi-agent copilot using Google ADK, reducing manual CV screening effort by 75–80% through automated parsing and intelligent matching',
          'Smart document parsing with entity extraction and metadata enrichment',
          'Semantic search using vector embeddings and retrieval via Vertex AI'
        ]
      },
      {
        name: 'Supply Chain Analyzer, GenAI-Powered Logistics Intelligence System',
        details: [
          'Built an AWS Bedrock-native conversational AI for real-time logistics analysis, delivering 60–65% faster query resolution using a full RAG pipeline (Amazon Titan + OpenSearch)',
          'Document search pipeline powered by Amazon Titan and OpenSearch Service',
          'Final AI responses generated using Claude 3.5 Sonnet via Amazon Bedrock'
        ]
      },
      {
        name: 'Computer System Validation (CSV) Platform, Pharmaceutical Industry',
        details: [
          'Engineered a multi-agent system using CrewAI for the pharmaceutical industry, reducing validation cycle times by 45–55% while maintaining GxP compliance'
        ]
      },
      {
        name: 'Intelligent Code Understanding Copilot',
        details: [
          'Developed a dual-path code intelligence system combining Pinecone and Neo4j (GraphRAG) for semantic search and relationship mapping across complex codebases',
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
    company: 'ONCF',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/Logo-oncf.png',
    date: 'August 2023 - September 2023',
    location: 'Rabat, Morocco',
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
  }
];

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
    title: 'GenAI / Prompt Engineer',
    project: 'AI Agent System for HR Recruitment',
    location: 'France',
    duration: '2 months',
    description: 'Developed an AI agent system for automated candidate promotion using CrewAI and Claude Sonnet 4. Enables recruitment consultants to identify decision-makers via MCP and generate personalized outreach messages for open positions.'
  },
  {
    id: 6,
    title: 'GenAI Solutions Architect & Automation Engineer',
    project: 'Enterprise AI Orchestration Platform',
    location: 'Canada',
    duration: '2 months',
    description: 'Architected GPT Hub, a centralized AI orchestration platform with specialized agents supporting creative lifecycle workflows. Engineered intelligent automation pipelines connecting Custom GPTs to enterprise ecosystems via Make and REST APIs.'
  }
];

const ProjectRow = ({ project }) => {
  const [expanded, setExpanded] = useState(false);
  const expandable = project.details && project.details.length > 0;

  return (
    <ProjectItem>
      <ProjectHeader
        as={expandable ? 'button' : 'div'}
        expandable={expandable}
        onClick={() => expandable && setExpanded(!expanded)}
      >
        <ProjectName>{project.name}</ProjectName>
        {expandable && (
          <ChevronIcon expanded={expanded}>
            <ChevronDown size={16} />
          </ChevronIcon>
        )}
      </ProjectHeader>
      {expandable && (
        <ProjectDetails
          initial={false}
          animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <div style={{ paddingBottom: expanded ? '0.5rem' : 0 }}>
            {project.details.map((detail, i) => (
              <DetailItem key={i}>{detail}</DetailItem>
            ))}
          </div>
        </ProjectDetails>
      )}
    </ProjectItem>
  );
};

const ExperienceItem = ({ experience }) => {
  return (
    <TimelineItem>
      <TimelineDot isNew={experience.isNew} />
      <Card isNew={experience.isNew}>
        <CardHeader>
          <LogoBox>
            <img src={experience.logo} alt={experience.company} />
          </LogoBox>
          <HeaderInfo>
            <TitleRow>
              <JobTitle>{experience.title}</JobTitle>
              {experience.isNew && (
                <NewBadge>Current</NewBadge>
              )}
            </TitleRow>
            <CompanyName>{experience.company}</CompanyName>
            <Meta>
              <MetaItem><Calendar size={13} /> {experience.date}</MetaItem>
              <MetaItem><MapPin size={13} /> {experience.location}</MetaItem>
            </Meta>
          </HeaderInfo>
        </CardHeader>

        <ProjectsList>
          {experience.projects.map((p, i) => (
            <ProjectRow key={i} project={p} />
          ))}
        </ProjectsList>
      </Card>
    </TimelineItem>
  );
};

const Experience = () => {
  return (
    <SectionContainer id="experience">
      <SectionHeader>
        <SectionTitle>Professional Experience</SectionTitle>
        <SectionSubtitle>
          A timeline of roles, projects, and impact across enterprise consulting and applied AI.
        </SectionSubtitle>
      </SectionHeader>

      <Timeline>
        {experienceData.map((exp) => (
          <ExperienceItem key={exp.id} experience={exp} />
        ))}
      </Timeline>

      <FreelanceSection>
        <FreelanceHeader>
          <FreelanceTitle>Freelance Projects</FreelanceTitle>
          <FreelanceSubtitle>Independent engagements delivered for clients worldwide</FreelanceSubtitle>
        </FreelanceHeader>

        <FreelanceGrid>
          {freelanceData.map((f) => (
            <FreelanceCard key={f.id}>
              <FreelanceTopRow>
                <FreelanceBadge>
                  <Briefcase size={10} /> Freelance
                </FreelanceBadge>
                <FreelanceDuration>
                  <Clock size={12} /> {f.duration}
                </FreelanceDuration>
              </FreelanceTopRow>

              <FreelanceProject>{f.project}</FreelanceProject>
              <FreelanceRole>{f.title}</FreelanceRole>

              <FreelanceMeta>
                <FreelanceMetaItem>
                  <Globe size={12} /> Remote
                </FreelanceMetaItem>
                <FreelanceMetaItem>
                  <MapPin size={12} /> {f.location}
                </FreelanceMetaItem>
              </FreelanceMeta>

              <FreelanceDescription>{f.description}</FreelanceDescription>
            </FreelanceCard>
          ))}
        </FreelanceGrid>
      </FreelanceSection>
    </SectionContainer>
  );
};

export default Experience;
