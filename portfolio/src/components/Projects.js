import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import agentAI from '../images/architecture/Agent AI.png';
import ragMicrosoft from '../images/architecture/RAG-Microsoft Azure.png';
import codebaseGenAI from '../images/architecture/codebase gen ai.png';
import flightFinder from '../images/architecture/FlightFinder.png';
import hackathon from '../images/architecture/hackathon.png';
import ragAWS from '../images/architecture/RAG-AWS.png';
import multiAgentADK from '../images/architecture/Gcp ADK original.png';

const SectionContainer = styled.section`
  padding: 4rem 8% 5rem;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 1200px) {
    padding: 4rem 6%;
  }

  @media (max-width: 768px) {
    padding: 3rem 5%;
  }

  @media (max-width: 576px) {
    padding: 2.5rem 4%;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
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
  max-width: 580px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 576px) {
    font-size: 0.95rem;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;

  @media (max-width: 480px) {
    gap: 0.4rem;
    margin-bottom: 2rem;
  }
`;

const FilterButton = styled.button`
  background: ${props => props.active ? '#00b8d4' : '#ffffff'};
  color: ${props => props.active ? '#ffffff' : '#334155'};
  border: 1px solid ${props => props.active ? '#00b8d4' : '#e2e8f0'};
  border-radius: 50px;
  padding: 0.5rem 1.1rem;
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: inherit;
  box-shadow: ${props => props.active ? '0 4px 12px rgba(0, 184, 212, 0.25)' : '0 1px 2px rgba(15, 23, 42, 0.04)'};

  &:hover {
    border-color: ${props => props.active ? '#00b8d4' : 'rgba(0, 184, 212, 0.4)'};
    color: ${props => props.active ? '#ffffff' : '#0f172a'};
    transform: translateY(-1px);
  }

  @media (max-width: 480px) {
    padding: 0.4rem 0.9rem;
    font-size: 0.78rem;
  }
`;

const ProjectsContainer = styled.div`
  position: relative;
  overflow: hidden;
  padding: 1rem 0;
  width: 100%;
  touch-action: pan-x;
`;

const ProjectsGrid = styled.div`
  display: flex;
  gap: 1.25rem;
  transition: transform ${props => props.isDragging ? '0s' : '0.5s cubic-bezier(0.25, 1, 0.5, 1)'};
  transform: translateX(${props => props.slidePosition}px);
  width: max-content;
  will-change: transform;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 50%;
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.08);
  transition: all 0.25s ease;
  color: #334155;
  ${props => props.direction === 'left' ? 'left: 8px;' : 'right: 8px;'}
  opacity: ${props => props.visible ? '1' : '0'};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};

  &:hover {
    border-color: rgba(0, 184, 212, 0.4);
    color: #00b8d4;
    box-shadow: 0 6px 20px rgba(0, 184, 212, 0.15);
  }

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
    ${props => props.direction === 'left' ? 'left: 4px;' : 'right: 4px;'}
  }
`;

const ProjectCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  transition: all 0.25s ease;
  cursor: pointer;
  min-width: 340px;
  max-width: 340px;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(0, 184, 212, 0.4);
    box-shadow: 0 12px 28px rgba(0, 184, 212, 0.12);
  }

  @media (max-width: 768px) {
    min-width: 300px;
    max-width: 300px;
  }

  @media (max-width: 480px) {
    min-width: 260px;
    max-width: 260px;
  }
`;

const ProjectImageContainer = styled.div`
  height: 180px;
  overflow: hidden;
  position: relative;
  background: #f8fafc;
  border-bottom: 1px solid #f1f5f9;

  @media (max-width: 480px) {
    height: 160px;
  }
`;

const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.4s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.04);
  }
`;

const ProjectContent = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.05rem;
  color: #0f172a;
  margin: 0 0 0.5rem 0;
  font-weight: 600;
  line-height: 1.35;

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ProjectDescription = styled.p`
  color: #64748b;
  font-size: 0.85rem;
  line-height: 1.55;
  margin: 0 0 1rem 0;

  @media (max-width: 480px) {
    font-size: 0.82rem;
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;

  @media (max-width: 480px) {
    gap: 0.3rem;
  }
`;

const ProjectTag = styled.span`
  background: rgba(0, 184, 212, 0.08);
  color: #00b8d4;
  padding: 0.25rem 0.6rem;
  border-radius: 50px;
  font-size: 0.7rem;
  font-weight: 500;
  border: 1px solid rgba(0, 184, 212, 0.18);

  @media (max-width: 480px) {
    font-size: 0.68rem;
  }
`;

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  padding: 1rem;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.25s ease;
`;

const ModalContent = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  width: 90%;
  max-width: 880px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);

  @media (max-width: 480px) {
    width: 95%;
    border-radius: 12px;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: #e2e8f0;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #cbd5e1;
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border: 1px solid #e2e8f0;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #64748b;
  z-index: 10;
  transition: all 0.25s ease;

  &:hover {
    background: #ffffff;
    border-color: rgba(0, 184, 212, 0.4);
    color: #00b8d4;
    transform: rotate(90deg);
  }

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 480px;
  object-fit: contain;
  background: #f8fafc;
  border-bottom: 1px solid #f1f5f9;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;

  @media (max-width: 768px) {
    max-height: 380px;
  }

  @media (max-width: 480px) {
    max-height: 280px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
`;

const ModalBody = styled.div`
  padding: 1.75rem;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1.25rem;
  }
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: #0f172a;
  margin: 0 0 0.75rem 0;
  font-weight: 700;
  letter-spacing: -0.01em;

  @media (max-width: 480px) {
    font-size: 1.25rem;
  }
`;

const ModalDescription = styled.p`
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;

  @media (max-width: 480px) {
    font-size: 0.88rem;
  }
`;

const ProjectDetails = styled.div`
  margin-top: 1.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid #f1f5f9;
`;

const DetailTitle = styled.h3`
  font-size: 1rem;
  color: #0f172a;
  margin: 0 0 1rem 0;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 3px;
    height: 16px;
    background: #00b8d4;
    border-radius: 2px;
  }
`;

const DetailsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const DetailItem = styled.li`
  position: relative;
  padding-left: 1.25rem;
  line-height: 1.55;
  font-size: 0.9rem;
  color: #475569;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.65rem;
    width: 6px;
    height: 1px;
    background: rgba(0, 184, 212, 0.6);
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;
  }
`;

const ViewButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: none;
  border: none;
  color: #00b8d4;
  font-weight: 500;
  font-size: 0.85rem;
  padding: 0;
  margin-top: auto;
  cursor: pointer;
  transition: color 0.25s ease;
  font-family: inherit;

  svg {
    transition: transform 0.25s ease;
  }

  &:hover {
    color: #0f172a;

    svg {
      transform: translateX(3px);
    }
  }
`;

const projectsData = [
  {
    id: 1,
    title: "Multi-Agent System for HR Departement ",
    description: "A sophisticated multi-agent system built with Google's Agent Development Kit (ADK) for HR departments, featuring specialized agents for CV analysis, candidate screening, and recruitment automation.",
    image: multiAgentADK,
    tags: ["ADK", "Multi-Agent", "Google Cloud", "RAG", "AI Agents"],
    categories: ["GCP"],
    fullDescription: "This architecture showcases a production-ready multi-agent system built using Google's Agent Development Kit (ADK) powered by Flash 2.0 Gemini. The system features a central OrchestratorAgent that intelligently routes user requests to specialized agents, each with focused responsibilities. The architecture integrates enterprise services including Google Cloud Storage, Vertex AI for RAG operations, PostgreSQL for data management, and Microsoft services for document processing. The system leverages bucket storage with a RAG engine to create a knowledge base that enhances agent responses with relevant context.",
    keyFeatures: [
      "ADK-native design with central orchestrator managing specialized agents",
      "StorageAgent for file operations with cloud integration",
      "CorpusAgent for RAG operations leveraging Vertex AI",
      "PostgresAgent for comprehensive database operations",
      "PythonAgent for code generation and data visualization",
      "TextExtractorAgent for document processing with Microsoft integration",
      "Enterprise-ready integration with multiple cloud services",
      "RAG-enhanced intelligence with contextual knowledge base",
      "Multiple output formats including visualizations and processed data"
    ],
    technologies: [
      "Google Agent Development Kit (ADK)",
      "Flash 2.0 Gemini",
      "Google Cloud Storage",
      "Vertex AI",
      "PostgreSQL",
      "Microsoft Services",
      "RAG Engine",
      "Plotly for Visualizations"
    ]
  },
  {
    id: 2,
    title: "AI Agent Architecture",
    description: "A sophisticated AI agent architecture designed to process user queries through a multi-step pipeline.",
    image: agentAI,
    tags: ["AI Agents", "LLM", "Vector Store", "Embeddings"],
    categories: ["GCP", "Open Source"],
    fullDescription: "This architecture represents a comprehensive AI agent system that processes user queries through a sophisticated pipeline. The system extracts and embeds content, stores it in a vector database, and uses tree structures to organize information for efficient retrieval. The agent leverages these components to provide accurate responses to user queries.",
    keyFeatures: [
      "Dual-processing pipeline with extraction and chunking paths",
      "Embedding generation for semantic understanding",
      "FAISS vector store for efficient similarity search",
      "Tree structure representation for hierarchical data organization",
      "Metadata filtering for precise information retrieval",
      "Integration with Gemini 1.5 Pro for response generation"
    ],
    technologies: [
      "Google AI Embeddings",
      "FAISS Vector Store",
      "Tree-folder data structures",
      "Gemini 1.5 Pro LLM"
    ]
  },
  {
    id: 3,
    title: "RAG System on Microsoft Azure",
    description: "A Retrieval-Augmented Generation system built on Microsoft Azure for document processing and intelligent search.",
    image: ragMicrosoft,
    tags: ["RAG", "Azure", "Cognitive Search", "Vector DB"],
    categories: ["Microsoft Azure"],
    fullDescription: "This architecture showcases a Retrieval-Augmented Generation (RAG) system implemented on Microsoft Azure. The system allows users to upload documents which are stored in Azure Blob Storage and indexed for AI search. When users submit queries, the system employs hybrid search techniques combining vector embeddings and keywords to retrieve the most relevant information before generating comprehensive responses.",
    keyFeatures: [
      "Document upload and storage in Azure Blob",
      "Automatic indexing of documents for AI search",
      "Hybrid search combining vector and keyword approaches",
      "Extraction of relevant chunks based on user queries",
      "Response generation with citations to source documents"
    ],
    technologies: [
      "Microsoft Azure Storage",
      "Azure Cognitive Search",
      "Azure OpenAI Service",
      "Azure VM for processing",
      "Vector/Semantic/Keyword hybrid search"
    ]
  },
  {
    id: 4,
    title: "RAG System on AWS",
    description: "A Retrieval-Augmented Generation (RAG) system architected on AWS, featuring a secure, scalable workflow.",
    image: ragAWS,
    tags: ["RAG", "AWS", "Vector Search", "Embeddings", "LLM"],
    categories: ["AWS"],
    fullDescription: "A complete Retrieval-Augmented Generation (RAG) solution on AWS, integrating secure user authentication, scalable document storage, semantic search, and GenAI-powered answering. The system uses a ReactJS frontend on S3/CloudFront, Cognito for auth, API Gateway and Lambda for orchestration, Amazon Titan for embeddings, OpenSearch for retrieval, and Bedrock (Claude 3.5 Sonnet) for answer generation. Responses include reference links for transparency and traceability.",
    keyFeatures: [
      "ReactJS app hosted on Amazon S3, delivered via CloudFront",
      "Secure authentication and user management with Amazon Cognito",
      "API Gateway and AWS Lambda for serverless backend orchestration",
      "Question embedding generation with Amazon Titan",
      "Semantic search and retrieval using Amazon OpenSearch Service",
      "Document chunk storage and metadata management in Amazon S3",
      "GenAI-powered answer generation with Amazon Bedrock (Claude 3.5 Sonnet)",
      "Reference links to original documents included in responses",
      "Scalable, serverless architecture leveraging AWS managed services"
    ],
    technologies: [
      "Amazon S3",
      "Amazon CloudFront",
      "Amazon Cognito",
      "Amazon API Gateway",
      "AWS Lambda",
      "Amazon Titan Embeddings",
      "Amazon OpenSearch Service",
      "Amazon Bedrock (Claude 3.5 Sonnet)",
      "ReactJS"
    ]
  },
  {
    id: 5,
    title: "Codebase Analysis & Documentation Generator",
    description: "A GenAI system that analyzes existing codebases to automatically generate retroactive documentation and functional specifications.",
    image: codebaseGenAI,
    tags: ["Code Analysis", "Knowledge Graphs", "NLP", "Documentation"],
    categories: ["GCP", "Open Source"],
    fullDescription: "This architecture illustrates a sophisticated GenAI system designed to analyze existing codebases and automatically generate comprehensive retroactive documentation and functional specifications. The system extracts code structures, builds knowledge graphs, and leverages both vector and graph databases to understand complex code relationships before generating accurate documentation.",
    keyFeatures: [
      "Codebase extraction and directory/file analysis",
      "Dual-path processing with vector embeddings and knowledge graph construction",
      "Entity extraction for identifying code components and relationships",
      "Pinecone vector database for semantic code search",
      "Neo4j graph database for representing code relationships",
      "NLP processing for understanding code context and purpose",
      "Text-to-Cypher query generation for graph traversal",
      "Gemini LLM integration for generating accurate documentation"
    ],
    technologies: [
      "Pinecone Vector Database",
      "Neo4j Graph Database",
      "Knowledge Graph Construction",
      "NLP Processing",
      "Gemini LLM",
      "Cypher Query Generation"
    ]
  },
  {
    id: 6,
    title: "Flight Search Agent System",
    description: "An intelligent multi-agent flight search system that provides users with the best possible flight options.",
    image: flightFinder,
    tags: ["Travel", "API Integration", "Summarization", "Agent System"],
    categories: ["Open Source"],
    fullDescription: "This architecture demonstrates an intelligent multi-agent flight search system that provides users with the best possible flight options. The system leverages CrewAI tools including KAYAK and Browserbase to search for flights across multiple providers. It then processes and summarizes the results to present users with the most relevant travel options including pricing, booking links, and key details.",
    keyFeatures: [
      "Natural language query processing for flight search",
      "Integration with multiple travel search APIs (KAYAK, Browserbase)",
      "Comprehensive flight data retrieval across providers",
      "Intelligent result summarization and filtering",
      "Presentation of travel options with pricing and booking details",
      "User-friendly response formatting"
    ],
    technologies: [
      "CrewAI Tools",
      "KAYAK API",
      "Browserbase",
      "OpenAI"
    ]
  },
  {
    id: 7,
    title: "Multi-Agent CSV Analysis System",
    description: "A comprehensive multi-agent system for CSV data analysis with CI/CD integration and web application deployment.",
    image: hackathon,
    tags: ["Multi-Agent", "Data Analysis", "CI/CD", "Azure", "AI Agents" , "CrewAI"],
    categories: ["Microsoft Azure"],
    fullDescription: "This architecture showcases a sophisticated multi-agent system designed for CSV data analysis and reporting. The system utilizes a GPT 4.1 mini model to power a crew of specialized AI agents that work together to process and analyze CSV reports. The architecture includes a complete CI/CD pipeline with GitHub Actions integration and deployment to Azure web services.",
    keyFeatures: [
      "Multi-agent system with specialized roles for data processing",
      "Integration with AI search and MarkitDown tools for file reading and file search",
      "AI Search capabilities for data exploration and analysis",
      "Automated CI/CD pipeline triggered by GitHub Actions",
      "Azure web app deployment for final analysis presentation",
      "ReactJS frontend for user interaction with analysis results"
    ],
    technologies: [
      "Azure AI Services",
      "GPT 4.1 mini",
      "CrewAI Tools",
      "GitHub Actions",
      "Azure Web Apps",
      "ReactJS",
      "AI Search",
      "MarkitDown"
    ]
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [slidePosition, setSlidePosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [gridWidth, setGridWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [momentum, setMomentum] = useState({ x: 0, timestamp: 0 });
  
  const projectsGridRef = useRef(null);
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  
  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.categories.includes(activeFilter));
  
  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current && projectsGridRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
        setGridWidth(projectsGridRef.current.scrollWidth);
      }
    };
    
    updateWidths();
    window.addEventListener('resize', updateWidths);
    
    return () => window.removeEventListener('resize', updateWidths);
  }, [filteredProjects]);
  
  const openProjectModal = (project) => {
    if (isDragging) return; // Prevent opening modal when dragging
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProjectModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    setSlidePosition(0);
  };
  
  const slideLeft = () => {
    const newPosition = Math.min(slidePosition + containerWidth / 2, 0);
    setSlidePosition(newPosition);
  };
  
  const slideRight = () => {
    const maxSlide = containerWidth - gridWidth;
    const newPosition = Math.max(slidePosition - containerWidth / 2, maxSlide);
    setSlidePosition(newPosition);
  };
  
  const canSlideLeft = slidePosition < 0;
  const canSlideRight = gridWidth > containerWidth && slidePosition > containerWidth - gridWidth;
  
  // Apply constraints to slide position
  const applyConstraints = (position) => {
    if (position > 0) {
      return 0;
    } else if (position < containerWidth - gridWidth) {
      return containerWidth - gridWidth;
    }
    return position;
  };
  
  // Touch and mouse event handlers for swiping
  const handleMouseDown = (e) => {
    // Cancel any ongoing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    setIsDragging(true);
    setStartX(e.pageX);
    setScrollLeft(slidePosition);
    setMomentum({ x: e.pageX, timestamp: Date.now() });
    
    // Improve the feel by changing cursor
    if (projectsGridRef.current) {
      projectsGridRef.current.style.cursor = 'grabbing';
    }
  };
  
  const handleTouchStart = (e) => {
    // Cancel any ongoing animation
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setScrollLeft(slidePosition);
    setMomentum({ x: e.touches[0].pageX, timestamp: Date.now() });
    
    // Prevent default to avoid page scrolling while swiping
    e.preventDefault();
  };
  
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e.pageX;
    const delta = x - startX;
    const newPosition = scrollLeft + delta;
    
    // Update momentum tracking
    setMomentum({ x: e.pageX, timestamp: Date.now() });
    
    // Apply constraints
    setSlidePosition(applyConstraints(newPosition));
  };
  
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const x = e.touches[0].pageX;
    const delta = x - startX;
    const newPosition = scrollLeft + delta;
    
    // Update momentum tracking
    setMomentum({ x: e.touches[0].pageX, timestamp: Date.now() });
    
    // Apply constraints
    setSlidePosition(applyConstraints(newPosition));
    
    // Prevent default to avoid page scrolling while swiping
    e.preventDefault();
  };
  
  const applyMomentum = (endX, endTimestamp) => {
    // Calculate velocity
    const deltaX = endX - momentum.x;
    const deltaTime = endTimestamp - momentum.timestamp;
    
    // Only apply momentum if the time difference is small enough (quick swipe)
    if (deltaTime > 0 && deltaTime < 100) {
      const velocity = deltaX / deltaTime;
      
      // Apply momentum with decay
      let currentVelocity = velocity * 15; // Amplify the effect
      let currentPosition = slidePosition;
      
      const animate = () => {
        if (Math.abs(currentVelocity) < 0.5) {
          cancelAnimationFrame(animationRef.current);
          return;
        }
        
        currentVelocity *= 0.95; // Decay factor
        currentPosition += currentVelocity;
        
        // Apply constraints
        const constrainedPosition = applyConstraints(currentPosition);
        
        // If we hit a boundary, stop the animation
        if (constrainedPosition !== currentPosition) {
          cancelAnimationFrame(animationRef.current);
          return;
        }
        
        setSlidePosition(constrainedPosition);
        currentPosition = constrainedPosition;
        
        animationRef.current = requestAnimationFrame(animate);
      };
      
      animationRef.current = requestAnimationFrame(animate);
    }
  };
  
  const handleMouseUp = (e) => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Reset cursor
    if (projectsGridRef.current) {
      projectsGridRef.current.style.cursor = 'grab';
    }
    
    // Apply momentum effect
    if (e.type !== 'mouseleave') {
      applyMomentum(e.pageX, Date.now());
    }
  };
  
  const handleTouchEnd = (e) => {
    if (!isDragging) return;
    
    setIsDragging(false);
    
    // Apply momentum effect if it was a quick swipe
    const endTimestamp = Date.now();
    
    if (e.changedTouches && e.changedTouches.length > 0) {
      applyMomentum(e.changedTouches[0].pageX, endTimestamp);
    }
  };
  
  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      
      // Reset cursor
      if (projectsGridRef.current) {
        projectsGridRef.current.style.cursor = 'grab';
      }
    }
  };
  
  // Clean up any animations when component unmounts
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  
  const filters = ['All', 'Microsoft Azure', 'AWS', 'GCP', 'Open Source'];

  return (
    <SectionContainer id="projects">
      <SectionHeader>
        <SectionTitle>Projects & Architectures</SectionTitle>
        <SectionSubtitle>
          End-to-end AI systems and cloud architectures designed and shipped across enterprise environments.
        </SectionSubtitle>
      </SectionHeader>

      <FilterContainer>
        {filters.map(filter => (
          <FilterButton
            key={filter}
            active={activeFilter === filter}
            onClick={() => handleFilterClick(filter)}
          >
            {filter}
          </FilterButton>
        ))}
      </FilterContainer>

      <ProjectsContainer ref={containerRef}>
        <SlideButton
          direction="left"
          onClick={slideLeft}
          visible={canSlideLeft}
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </SlideButton>

        <ProjectsGrid
          ref={projectsGridRef}
          slidePosition={slidePosition}
          isDragging={isDragging}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={{ cursor: 'grab' }}
        >
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} onClick={() => openProjectModal(project)}>
              <ProjectImageContainer>
                <ProjectImg src={project.image} alt={project.title} />
              </ProjectImageContainer>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, index) => (
                    <ProjectTag key={index}>{tag}</ProjectTag>
                  ))}
                </ProjectTags>
                <ViewButton>
                  View Architecture <ArrowRight size={14} />
                </ViewButton>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>

        <SlideButton
          direction="right"
          onClick={slideRight}
          visible={canSlideRight}
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </SlideButton>
      </ProjectsContainer>

      <Modal isOpen={isModalOpen} onClick={closeProjectModal}>
        <ModalContent onClick={e => e.stopPropagation()}>
          <ModalCloseButton onClick={closeProjectModal} aria-label="Close">
            <X size={16} />
          </ModalCloseButton>

          {selectedProject && (
            <>
              <ModalImage src={selectedProject.image} alt={selectedProject.title} />
              <ModalBody>
                <ModalTitle>{selectedProject.title}</ModalTitle>
                <ModalDescription>{selectedProject.fullDescription}</ModalDescription>

                <ProjectDetails>
                  <DetailTitle>Key Features</DetailTitle>
                  <DetailsList>
                    {selectedProject.keyFeatures.map((feature, index) => (
                      <DetailItem key={index}>{feature}</DetailItem>
                    ))}
                  </DetailsList>
                </ProjectDetails>

                <ProjectDetails>
                  <DetailTitle>Technologies Used</DetailTitle>
                  <DetailsList>
                    {selectedProject.technologies.map((tech, index) => (
                      <DetailItem key={index}>{tech}</DetailItem>
                    ))}
                  </DetailsList>
                </ProjectDetails>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </SectionContainer>
  );
};

export default Projects;
