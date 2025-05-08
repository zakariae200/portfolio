import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FaArrowRight, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import agentAI from '../images/architecture/Agent AI.png';
import ragMicrosoft from '../images/architecture/RAG-Microsoft Azure.png';
import codebaseGenAI from '../images/architecture/codebase gen ai.png';
import flightFinder from '../images/architecture/FlightFinder.png';
import hackathon from '../images/architecture/hackathon.png';
import ragAWS from '../images/architecture/RAG-AWS.png';

const SectionContainer = styled.section`
  padding: 5rem 10%;
  background-color: #f8f9fa;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(26, 26, 94, 0.03) 0%, transparent 70%);
    z-index: 0;
  }
  
  @media (max-width: 1024px) {
    padding: 4rem 5%;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 5%;
  }
  
  @media (max-width: 480px) {
    padding: 2.5rem 1rem;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a1a5e;
  margin-bottom: 1.5rem;
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
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.2rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  gap: 0.5rem;
  
  @media (max-width: 480px) {
    gap: 0.3rem;
    margin-bottom: 1.5rem;
  }
`;

const FilterButton = styled.button`
  background-color: ${props => props.active ? '#1a1a5e' : 'white'};
  color: ${props => props.active ? 'white' : '#1a1a5e'};
  border: 1px solid #1a1a5e;
  border-radius: 50px;
  padding: 0.5rem 1.2rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.active ? '#1a1a5e' : 'rgba(26, 26, 94, 0.1)'};
  }
  
  @media (max-width: 768px) {
    padding: 0.4rem 1rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    padding: 0.3rem 0.8rem;
    font-size: 0.8rem;
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
  gap: 2rem;
  transition: transform ${props => props.isDragging ? '0s' : '0.5s cubic-bezier(0.25, 1, 0.5, 1)'};
  transform: translateX(${props => props.slidePosition}px);
  width: max-content;
  will-change: transform;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
  
  @media (max-width: 480px) {
    gap: 0.8rem;
  }
`;

const SlideButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  ${props => props.direction === 'left' ? 'left: 10px;' : 'right: 10px;'}
  opacity: ${props => props.visible ? '1' : '0'};
  visibility: ${props => props.visible ? 'visible' : 'hidden'};
  
  &:hover {
    background-color: white;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
  
  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    ${props => props.direction === 'left' ? 'left: 5px;' : 'right: 5px;'}
  }
`;

const ProjectCard = styled.div`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  min-width: 350px;
  max-width: 350px;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
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
  height: 200px;
  overflow: hidden;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(26, 26, 94, 0.1), rgba(26, 26, 94, 0.4));
  }
  
  @media (max-width: 480px) {
    height: 180px;
  }
`;

const ProjectImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  transition: transform 0.5s ease;
  
  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  color: #1a1a5e;
  margin: 0 0 0.5rem 0;
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const ProjectDescription = styled.p`
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0 0 1rem 0;
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin: 0 0 0.8rem 0;
  }
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  
  @media (max-width: 480px) {
    gap: 0.3rem;
  }
`;

const ProjectTag = styled.span`
  background-color: #f0f0f0;
  color: #1a1a5e;
  padding: 0.3rem 0.6rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
  
  @media (max-width: 480px) {
    padding: 0.2rem 0.5rem;
    font-size: 0.7rem;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1001;
  opacity: ${props => props.isOpen ? '1' : '0'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  transition: all 0.3s ease;
`;

const ModalContent = styled.div`
  background-color: white;
  border-radius: 15px;
  width: 80%;
  max-width: 900px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 768px) {
    width: 90%;
  }
  
  @media (max-width: 480px) {
    width: 95%;
    border-radius: 10px;
  }
  
  /* Scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #1a1a5e;
    border-radius: 10px;
  }
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  background: rgba(255, 255, 255, 0.8);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  color: #1a1a5e;
  z-index: 10;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: white;
    transform: scale(1.1);
  }
  
  @media (max-width: 480px) {
    width: 35px;
    height: 35px;
    top: 10px;
    right: 10px;
    font-size: 1rem;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  
  @media (max-width: 768px) {
    max-height: 400px;
  }
  
  @media (max-width: 480px) {
    max-height: 300px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
`;

const ModalBody = styled.div`
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
  
  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  color: #1a1a5e;
  margin: 0 0 1rem 0;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.5rem;
    margin: 0 0 0.8rem 0;
  }
`;

const ModalDescription = styled.p`
  color: #444;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const ProjectDetails = styled.div`
  margin-top: 2rem;
  
  @media (max-width: 480px) {
    margin-top: 1.5rem;
  }
`;

const DetailTitle = styled.h3`
  font-size: 1.3rem;
  color: #1a1a5e;
  margin: 0 0 1rem 0;
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
    margin: 0 0 0.8rem 0;
  }
`;

const DetailsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const DetailItem = styled.li`
  margin-bottom: 0.8rem;
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
  
  @media (max-width: 480px) {
    margin-bottom: 0.6rem;
    font-size: 0.9rem;
    padding-left: 1.2rem;
  }
`;

const ViewButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: #00b8d4;
  font-weight: 500;
  padding: 0;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: #1a1a5e;
  }
  
  @media (max-width: 480px) {
    font-size: 0.9rem;
    margin-top: 0.8rem;
  }
`;

const projectsData = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
    title: "RAG System on AWS",
    description: "A comprehensive Retrieval-Augmented Generation system built on AWS for document processing, embedding generation, and intelligent search.",
    image: ragAWS,
    tags: ["RAG", "AWS", "Vector Search", "Embeddings", "LLM"],
    categories: ["AWS"],
    fullDescription: "This architecture demonstrates a complete Retrieval-Augmented Generation (RAG) system implemented on AWS. The system features two main workflows: a document processing pipeline that prepares content for retrieval, and a question-answering system that leverages the processed data to provide accurate responses with citations. The architecture showcases the integration of various AWS services to create a scalable and efficient RAG solution.",
    keyFeatures: [
      "Document storage and management in Amazon S3",
      "Text extraction and OCR processing with Amazon Textract",
      "Chunking and embedding generation with Amazon Titan",
      "Vector storage and similarity search with Amazon OpenSearch",
      "Query embedding and semantic search capabilities",
      "Response generation with citations to source documents",
      "Streamlit integration for user interface"
    ],
    technologies: [
      "Amazon S3",
      "Amazon Textract",
      "Amazon Titan Embeddings",
      "Amazon OpenSearch Serverless",
      "Amazon Bedrock",
      "Streamlit",
      "Vector/Semantic search"
    ]
  },
  {
    id: 4,
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
    id: 5,
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
    id: 6,
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
  
  return (
    <SectionContainer id="projects">
      <SectionTitle>Projects & Architectures</SectionTitle>
      
      <FilterContainer>
        <FilterButton 
          active={activeFilter === 'All'} 
          onClick={() => handleFilterClick('All')}
        >
          All
        </FilterButton>
        <FilterButton 
          active={activeFilter === 'Microsoft Azure'} 
          onClick={() => handleFilterClick('Microsoft Azure')}
        >
          Microsoft Azure
        </FilterButton>
        <FilterButton 
          active={activeFilter === 'AWS'} 
          onClick={() => handleFilterClick('AWS')}
        >
          AWS
        </FilterButton>
        <FilterButton 
          active={activeFilter === 'GCP'} 
          onClick={() => handleFilterClick('GCP')}
        >
          GCP
        </FilterButton>
        <FilterButton 
          active={activeFilter === 'Open Source'} 
          onClick={() => handleFilterClick('Open Source')}
        >
          Open Source
        </FilterButton>
      </FilterContainer>
      
      <ProjectsContainer 
        ref={containerRef}
      >
        <SlideButton 
          direction="left" 
          onClick={slideLeft}
          visible={canSlideLeft}
        >
          <FaChevronLeft />
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
                  View Architecture <FaArrowRight />
                </ViewButton>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
        
        <SlideButton 
          direction="right" 
          onClick={slideRight}
          visible={canSlideRight}
        >
          <FaChevronRight />
        </SlideButton>
      </ProjectsContainer>
      
      <Modal isOpen={isModalOpen} onClick={closeProjectModal}>
        <ModalContent onClick={e => e.stopPropagation()}>
          <ModalCloseButton onClick={closeProjectModal}>
            <FaTimes />
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
