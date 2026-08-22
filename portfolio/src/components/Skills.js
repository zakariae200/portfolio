import React, { useState } from 'react';
import styled from 'styled-components';
import { X, ChevronRight } from 'lucide-react';

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

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SkillCategory = styled.button`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.25s ease;
  cursor: pointer;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
  text-align: left;
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  &:hover {
    border-color: rgba(0, 184, 212, 0.4);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 184, 212, 0.08);
  }

  &:hover .chevron {
    transform: translateX(3px);
    color: #00b8d4;
  }

  @media (max-width: 576px) {
    padding: 1.2rem;
    border-radius: 10px;
    gap: 0.8rem;
  }
`;

const CategoryIcon = styled.div`
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

const CategoryInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const CategoryTitle = styled.h3`
  font-size: 1.05rem;
  color: #0f172a;
  margin: 0 0 0.2rem 0;
  font-weight: 600;
  line-height: 1.3;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const CategoryDescription = styled.p`
  font-size: 0.82rem;
  color: #64748b;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 576px) {
    font-size: 0.78rem;
  }
`;

const Chevron = styled.span.attrs({ className: 'chevron' })`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  color: #94a3b8;
  transition: all 0.25s ease;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  animation: fadeIn 0.2s ease;

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ModalContent = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  padding: 2rem;
  max-width: 760px;
  width: 100%;
  max-height: 88vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
  animation: slideUp 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 576px) {
    padding: 1.25rem;
    border-radius: 12px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s ease;
  color: #64748b;

  &:hover {
    background: #ffffff;
    border-color: rgba(0, 184, 212, 0.4);
    color: #00b8d4;
    transform: rotate(90deg);
  }

  @media (max-width: 576px) {
    width: 32px;
    height: 32px;
    top: 1rem;
    right: 1rem;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.75rem;
  padding-bottom: 1.25rem;
  border-bottom: 1px solid #f1f5f9;
  padding-right: 2.5rem;

  @media (max-width: 576px) {
    gap: 0.8rem;
  }
`;

const ModalIcon = styled.div`
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(0, 184, 212, 0.08) 0%, rgba(0, 184, 212, 0.02) 100%);
  border: 1px solid rgba(0, 184, 212, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 576px) {
    width: 52px;
    height: 52px;
    padding: 10px;
  }
`;

const ModalTitleWrap = styled.div`
  flex: 1;
  min-width: 0;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  color: #0f172a;
  margin: 0 0 0.25rem 0;
  font-weight: 700;
  letter-spacing: -0.01em;

  @media (max-width: 576px) {
    font-size: 1.25rem;
  }
`;

const ModalDescription = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;

  @media (max-width: 576px) {
    font-size: 0.85rem;
  }
`;

const FrameworksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 0.875rem;

  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    gap: 0.75rem;
  }
`;

const FrameworkCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 1.1rem 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.7rem;
  transition: all 0.25s ease;

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 184, 212, 0.4);
    box-shadow: 0 6px 20px rgba(0, 184, 212, 0.08);
  }

  @media (max-width: 576px) {
    padding: 0.9rem 0.6rem;
  }
`;

const FrameworkLogo = styled.div`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 576px) {
    width: 38px;
    height: 38px;
  }
`;

const FrameworkName = styled.p`
  font-size: 0.82rem;
  font-weight: 500;
  color: #334155;
  text-align: center;
  margin: 0;
  line-height: 1.3;

  @media (max-width: 576px) {
    font-size: 0.78rem;
  }
`;

// Skills data with logos
const skillsData = [
  {
    id: 'agents',
    title: 'LLMs & Agent Frameworks',
    icon: 'https://cdn-icons-png.flaticon.com/512/4712/4712035.png',
    description: 'Models, multi-agent orchestration & protocols',
    frameworks: [
      { name: 'OpenAI GPT', logo: 'https://cdn.worldvectorlogo.com/logos/openai-wordmark.svg' },
      { name: 'Google Gemini', logo: 'https://cdn.worldvectorlogo.com/logos/gemini-ai.svg' },
      { name: 'Claude', logo: 'https://cdn.worldvectorlogo.com/logos/claude-3.svg' },
      { name: 'Kimi', logo: 'https://cdn.simpleicons.org/kimi/1D1D1F' },
      { name: 'LangGraph', logo: 'https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-avatar/avatars/langgraph.webp' },
      { name: 'Google ADK', logo: 'https://google.github.io/adk-docs/assets/agent-development-kit.png' },
      { name: 'CrewAI', logo: 'https://cdn.worldvectorlogo.com/logos/crewai-1.svg' },
      { name: 'MCP', logo: 'https://cdn.simpleicons.org/modelcontextprotocol/000000' },
      { name: 'Microsoft Agent Framework', logo: 'https://cdn.worldvectorlogo.com/logos/azure-2.svg' },
      { name: 'LangChain', logo: 'https://cdn.worldvectorlogo.com/logos/langchain-1.svg' },
    ]
  },
  {
    id: 'rag',
    title: 'RAG & Vector Search',
    icon: 'https://cdn-icons-png.flaticon.com/512/3126/3126647.png',
    description: 'Retrieval pipelines & vector stores',
    frameworks: [
      { name: 'LlamaIndex', logo: 'https://www.llamaindex.ai/brand/llamaindex-wordmark-black.svg' },
      { name: 'Pinecone', logo: 'https://cdn-1.webcatalog.io/catalog/pinecone/pinecone-icon-filled-256.webp' },
      { name: 'Azure AI Search', logo: 'https://az-icons.com/export/icons/0d1430225c8904846d5b5c0e5b410823.svg' },
      { name: 'Qdrant', logo: 'https://qdrant.tech/img/brand-resources-logos/logomark.svg' },
      { name: 'Weaviate', logo: 'https://weaviate.io/img/site/weaviate-logo-light.png' },
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud AI Platforms',
    icon: 'https://cdn-icons-png.flaticon.com/512/4215/4215831.png',
    description: 'Azure, GCP & AWS AI services',
    frameworks: [
      { name: 'Azure AI Foundry', logo: 'https://ai.azure.com/assets/AzureAI-3f9f7a71.svg' },
      { name: 'Vertex AI', logo: 'https://www.gstatic.com/bricks/image/cf69f322-f5ae-4d81-80e4-3dd008aca174.svg' },
      { name: 'AWS Bedrock', logo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/1.74.0/files/dark/bedrock-color.png' },
      { name: 'Microsoft Azure', logo: 'https://cdn.worldvectorlogo.com/logos/azure-2.svg' },
      { name: 'Google Cloud', logo: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg' },
      { name: 'AWS', logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' },
    ]
  },
  {
    id: 'llmops',
    title: 'LLMOps & Guardrails',
    icon: 'https://cdn-icons-png.flaticon.com/512/3588/3588592.png',
    description: 'Evaluation, tracing & AI security',
    frameworks: [
      { name: 'RAGAS', logo: 'https://docs.ragas.io/en/stable/_static/imgs/ragas-logo.png' },
      { name: 'DeepEval', logo: 'https://avatars.githubusercontent.com/u/130818866?s=200&v=4' },
      { name: 'TruLens', logo: 'https://www.trulens.org/assets/images/Neural_Network_Explainability.png' },
      { name: 'MLflow', logo: 'https://raw.githubusercontent.com/mlflow/mlflow/refs/heads/master/assets/logo.svg' },
      { name: 'LangSmith', logo: 'https://cdn.simpleicons.org/langchain/1C3C3C' },
      { name: 'OpenTelemetry', logo: 'https://cdn.simpleicons.org/opentelemetry/425CC7' },
    ]
  },
  {
    id: 'automation',
    title: 'Automation & Integration',
    icon: 'https://cdn-icons-png.flaticon.com/512/1006/1006771.png',
    description: 'Low-code workflows & enterprise connectors',
    frameworks: [
      { name: 'n8n', logo: 'https://cdn.simpleicons.org/n8n/EA4B71' },
      { name: 'Make', logo: 'https://cdn.simpleicons.org/make/6D00CC' },
      { name: 'Zapier', logo: 'https://cdn.simpleicons.org/zapier/FF4F00' },
      { name: 'Langflow', logo: 'https://cdn.simpleicons.org/langflow/7C3AED' },
    ]
  },
  {
    id: 'engineering',
    title: 'Engineering & Delivery',
    icon: 'https://cdn-icons-png.flaticon.com/512/4299/4299956.png',
    description: 'APIs, data stores & CI/CD',
    frameworks: [
      { name: 'Python', logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
      { name: 'FastAPI', logo: 'https://cdn.worldvectorlogo.com/logos/fastapi.svg' },
      { name: 'SQL', logo: 'https://cdn-icons-png.flaticon.com/512/4492/4492311.png' },
      { name: 'PostgreSQL', logo: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
      { name: 'Neo4j', logo: 'https://cdn.worldvectorlogo.com/logos/neo4j.svg' },
      { name: 'Docker', logo: 'https://cdn.worldvectorlogo.com/logos/docker.svg' },
      { name: 'Terraform', logo: 'https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg' },
      { name: 'GitHub Actions', logo: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' },
      { name: 'Streamlit', logo: 'https://streamlit.io/images/brand/streamlit-mark-color.svg' },
    ]
  }
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const openModal = (skill) => {
    setSelectedSkill(skill);
  };

  const closeModal = () => {
    setSelectedSkill(null);
  };

  return (
    <SectionContainer id="skills">
      <SectionHeader>
        <SectionTitle>Technical Skills</SectionTitle>
        <SectionSubtitle>
          Frameworks, platforms, and tools I work with to build production-grade AI systems.
        </SectionSubtitle>
      </SectionHeader>

      <SkillsContainer>
        {skillsData.map((skill) => (
          <SkillCategory key={skill.id} onClick={() => openModal(skill)}>
            <CategoryIcon>
              <img src={skill.icon} alt={skill.title} />
            </CategoryIcon>
            <CategoryInfo>
              <CategoryTitle>{skill.title}</CategoryTitle>
              <CategoryDescription>{skill.description}</CategoryDescription>
            </CategoryInfo>
            <Chevron>
              <ChevronRight size={18} />
            </Chevron>
          </SkillCategory>
        ))}
      </SkillsContainer>

      {selectedSkill && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal} aria-label="Close">
              <X size={16} />
            </CloseButton>
            <ModalHeader>
              <ModalIcon>
                <img src={selectedSkill.icon} alt={selectedSkill.title} />
              </ModalIcon>
              <ModalTitleWrap>
                <ModalTitle>{selectedSkill.title}</ModalTitle>
                <ModalDescription>{selectedSkill.description}</ModalDescription>
              </ModalTitleWrap>
            </ModalHeader>
            <FrameworksGrid>
              {selectedSkill.frameworks.map((framework, index) => (
                <FrameworkCard key={index}>
                  <FrameworkLogo>
                    <img src={framework.logo} alt={framework.name} />
                  </FrameworkLogo>
                  <FrameworkName>{framework.name}</FrameworkName>
                </FrameworkCard>
              ))}
            </FrameworksGrid>
          </ModalContent>
        </ModalOverlay>
      )}
    </SectionContainer>
  );
};

export default Skills;
