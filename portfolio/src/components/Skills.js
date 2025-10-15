import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const SectionContainer = styled.section`
  padding: 5rem 10%;
  background-color: #f8f9fa;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(0, 184, 212, 0.05) 0%, transparent 70%);
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

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
    margin-top: 3rem;
  }
  
  /* Medium desktop screens */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.8rem;
  }
  
  /* Tablets and small desktops */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    gap: 1.2rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    gap: 1rem;
    margin-top: 1.2rem;
  }
`;

const SkillCategory = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    padding: 2.5rem;
    border-radius: 20px;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    padding: 1.8rem;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    padding: 1.5rem;
    border-radius: 12px;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    padding: 1.2rem;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    gap: 1.2rem;
    margin-bottom: 1.8rem;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    gap: 0.8rem;
    margin-bottom: 1.2rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    gap: 0.7rem;
    margin-bottom: 1rem;
  }
`;

const CategoryIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    width: 70px;
    height: 70px;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    width: 50px;
    height: 50px;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    width: 45px;
    height: 45px;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 1.3rem;
  color: #1a1a5e;
  margin: 0;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 1.5rem;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 1.1rem;
  }
`;

const ClickHint = styled.p`
  text-align: center;
  color: #666;
  font-size: 0.85rem;
  margin-top: 1rem;
  font-style: italic;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
  backdrop-filter: blur(5px);
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  padding: 2.5rem;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 768px) {
    padding: 2rem;
    max-width: 95%;
  }
  
  @media (max-width: 576px) {
    padding: 1.5rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #f0f0f0;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #1a1a5e;
  font-size: 1.2rem;
  
  &:hover {
    background: #1a1a5e;
    color: white;
    transform: rotate(90deg);
  }
  
  @media (max-width: 576px) {
    width: 35px;
    height: 35px;
    font-size: 1rem;
    top: 1rem;
    right: 1rem;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 2px solid #f0f0f0;
`;

const ModalIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 15px;
  background: linear-gradient(135deg, #1a1a5e, #00b8d4);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: brightness(0) invert(1);
  }
  
  @media (max-width: 576px) {
    width: 60px;
    height: 60px;
  }
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  color: #1a1a5e;
  margin: 0;
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }
`;

const FrameworksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 1rem;
  }
`;

const FrameworkCard = styled.div`
  background: #f8f9fa;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    border-color: #00b8d4;
  }
  
  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

const FrameworkLogo = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  
  @media (max-width: 576px) {
    width: 50px;
    height: 50px;
  }
`;

const FrameworkName = styled.p`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1a1a5e;
  text-align: center;
  margin: 0;
  
  @media (max-width: 576px) {
    font-size: 0.85rem;
  }
`;

// Skills data with logos
const skillsData = [
  {
    id: 'genai',
    title: 'Generative AI',
    icon: 'https://cdn-icons-png.flaticon.com/512/8637/8637099.png',
    description: 'LLMs, RAG Systems & Multi-Agent AI',
    frameworks: [
      { name: 'OpenAI GPT', logo: 'https://cdn.worldvectorlogo.com/logos/openai-wordmark.svg' },
      { name: 'Google Gemini', logo: 'https://cdn.worldvectorlogo.com/logos/gemini-ai.svg' },
      { name: 'Claude', logo: 'https://cdn.worldvectorlogo.com/logos/claude-3.svg' },
      { name: 'LangChain', logo: 'https://cdn.worldvectorlogo.com/logos/langchain-1.svg' },
      { name: 'LangGraph', logo: 'https://langchain-ai.github.io/langgraph/static/wordmark_dark.svg' },
      { name: 'CrewAI', logo: 'https://cdn.worldvectorlogo.com/logos/crewai-1.svg' },
      { name: 'LlamaIndex', logo: 'https://www.llamaindex.ai/brand/llamaindex-wordmark-black.svg' },
      { name: 'Google ADK', logo: 'https://google.github.io/adk-docs/assets/agent-development-kit.png' },
    ]
  },
  {
    id: 'cloud',
    title: 'Cloud Platforms',
    icon: 'https://cdn-icons-png.flaticon.com/512/4215/4215831.png',
    description: 'GCP, AWS & Azure',
    frameworks: [
      { name: 'Google Cloud', logo: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg' },
      { name: 'Microsoft Azure', logo: 'https://cdn.worldvectorlogo.com/logos/azure-2.svg' },
      { name: 'AWS', logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' },
      { name: 'Vertex AI', logo: 'https://www.gstatic.com/bricks/image/cf69f322-f5ae-4d81-80e4-3dd008aca174.svg' },
      { name: 'AWS Bedrock', logo: 'https://registry.npmmirror.com/@lobehub/icons-static-png/1.74.0/files/dark/bedrock-color.png' },
      { name: 'Azure AI Search', logo: 'https://az-icons.com/export/icons/0d1430225c8904846d5b5c0e5b410823.svg' },
      { name: 'Azure AI Foundry', logo: 'https://ai.azure.com/assets/AzureAI-3f9f7a71.svg' },
      { name: 'Azure OpenAI', logo: 'https://az-icons.com/export/icons/ab7d4a660b7712dc407b9eef4c69f2ef.svg' }
    ]
  },
  {
    id: 'programming',
    title: 'Programming',
    icon: 'https://cdn-icons-png.flaticon.com/512/1336/1336494.png',
    description: 'Python, SQL & API Development',
    frameworks: [
      { name: 'Python', logo: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
      { name: 'SQL', logo: 'https://cdn-icons-png.flaticon.com/512/4492/4492311.png' },
      { name: 'FastAPI', logo: 'https://cdn.worldvectorlogo.com/logos/fastapi.svg' },
      { name: 'Flask', logo: 'https://cdn.worldvectorlogo.com/logos/flask.svg' },
      { name: 'Streamlit', logo: 'https://streamlit.io/images/brand/streamlit-mark-color.svg' },
      { name: 'Gradio', logo: 'https://www.gradio.app/_app/immutable/assets/gradio.CHB5adID.svg' }
    ]
  },
  {
    id: 'databases',
    title: 'Databases',
    icon: 'https://cdn-icons-png.flaticon.com/512/4299/4299956.png',
    description: 'SQL, NoSQL & Vector Databases',
    frameworks: [
      { name: 'PostgreSQL', logo: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg' },
      { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
      { name: 'Neo4j', logo: 'https://cdn.worldvectorlogo.com/logos/neo4j.svg' },
      { name: 'Pinecone', logo: 'https://cdn-1.webcatalog.io/catalog/pinecone/pinecone-icon-filled-256.webp?v=1714775459840' },
      { name: 'Elasticsearch', logo: 'https://cdn.worldvectorlogo.com/logos/elasticsearch.svg' },
      { name: 'Weaviate', logo: 'https://weaviate.io/img/site/weaviate-logo-light.png' },
      { name: 'Qdrant', logo: 'https://qdrant.tech/img/brand-resources-logos/logomark.svg' }
    ]
  },
  {
    id: 'devops',
    title: 'DevOps',
    icon: 'https://cdn-icons-png.flaticon.com/512/919/919853.png',
    description: 'CI/CD & Infrastructure',
    frameworks: [
      { name: 'Git', logo: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg' },
      { name: 'GitHub Actions', logo: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' },
      { name: 'GitLab CI/CD', logo: 'https://cdn.worldvectorlogo.com/logos/gitlab.svg' },
      { name: 'Terraform', logo: 'https://cdn.worldvectorlogo.com/logos/terraform-enterprise.svg' },
      { name: 'Docker', logo: 'https://cdn.worldvectorlogo.com/logos/docker.svg' }
    ]
  },
  {
    id: 'evaluation',
    title: 'AI Evaluation',
    icon: 'https://cdn-icons-png.flaticon.com/512/3588/3588592.png',
    description: 'Testing & Quality Assurance',
    frameworks: [
      { name: 'DeepEval', logo: 'https://avatars.githubusercontent.com/u/130818866?s=200&v=4' },
      { name: 'RAGAS', logo: 'https://docs.ragas.io/en/stable/_static/imgs/ragas-logo.png' },
      { name: 'MLFlow', logo: 'https://raw.githubusercontent.com/mlflow/mlflow/refs/heads/master/assets/logo.svg' },
      { name: 'TruLens', logo: 'https://www.trulens.org/assets/images/Neural_Network_Explainability.png' }
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
      <SectionTitle>Technical Skills</SectionTitle>
      <SkillsContainer>
        {skillsData.map((skill) => (
          <SkillCategory key={skill.id} onClick={() => openModal(skill)}>
            <CategoryHeader>
              <CategoryIcon>
                <img src={skill.icon} alt={skill.title} />
              </CategoryIcon>
              <CategoryTitle>{skill.title}</CategoryTitle>
            </CategoryHeader>
            <ClickHint>Click to see frameworks & tools</ClickHint>
          </SkillCategory>
        ))}
      </SkillsContainer>

      {selectedSkill && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={closeModal}>
              <FaTimes />
            </CloseButton>
            <ModalHeader>
              <ModalIcon>
                <img src={selectedSkill.icon} alt={selectedSkill.title} />
              </ModalIcon>
              <div>
                <ModalTitle>{selectedSkill.title}</ModalTitle>
                <p style={{ color: '#666', margin: '0.5rem 0 0 0' }}>
                  {selectedSkill.description}
                </p>
              </div>
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
