import React from 'react';
import styled from 'styled-components';
import { FaCode, FaDatabase, FaRobot, FaCloud, FaBrain, FaServer } from 'react-icons/fa';

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
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a1a5e, #3a3a8e);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    width: 60px;
    height: 60px;
    font-size: 1.8rem;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    width: 45px;
    height: 45px;
    font-size: 1.3rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    width: 40px;
    height: 40px;
    font-size: 1.2rem;
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

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  margin-bottom: 1rem;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    margin-bottom: 1.2rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    margin-bottom: 0.8rem;
  }
`;

const SkillName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #333;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 1.1rem;
    margin-bottom: 0.7rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }
`;

const ProgressBarContainer = styled.div`
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    height: 10px;
    border-radius: 5px;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    height: 6px;
    border-radius: 3px;
  }
`;

const ProgressBar = styled.div`
  height: 100%;
  background: linear-gradient(to right, #1a1a5e, #00b8d4);
  border-radius: 4px;
  width: ${props => props.width}%;
`;

const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    gap: 0.7rem;
    margin-top: 1.2rem;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    gap: 0.6rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    gap: 0.4rem;
    margin-top: 0.8rem;
  }
`;

const SkillTag = styled.span`
  background-color: #f0f0f0;
  color: #1a1a5e;
  padding: 0.4rem 0.8rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    padding: 0.4rem 0.7rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.8rem;
    border-radius: 30px;
  }
`;

const Skills = () => {
  return (
    <SectionContainer id="skills">
      <SectionTitle>Technical Skills</SectionTitle>
      <SkillsContainer>
        <SkillCategory>
          <CategoryHeader>
            <CategoryIcon>
              <FaCode />
            </CategoryIcon>
            <CategoryTitle>Programming</CategoryTitle>
          </CategoryHeader>
          <SkillsList>
            <SkillItem>
              <SkillName>
                <span>Python</span>
                <span>95%</span>
              </SkillName>
              <ProgressBarContainer>
                <ProgressBar width={95} />
              </ProgressBarContainer>
            </SkillItem>
            <SkillItem>
              <SkillName>
                <span>SQL</span>
                <span>90%</span>
              </SkillName>
              <ProgressBarContainer>
                <ProgressBar width={90} />
              </ProgressBarContainer>
            </SkillItem>
          </SkillsList>
        </SkillCategory>
        
        <SkillCategory>
          <CategoryHeader>
            <CategoryIcon>
              <FaRobot />
            </CategoryIcon>
            <CategoryTitle>Generative AI</CategoryTitle>
          </CategoryHeader>
          <SkillTags>
            <SkillTag>Langchain</SkillTag>
            <SkillTag>LLM</SkillTag>
            <SkillTag>RAG</SkillTag>
            <SkillTag>AI Agents</SkillTag>
            <SkillTag>Langgraph</SkillTag>
          </SkillTags>
        </SkillCategory>
        
        <SkillCategory>
          <CategoryHeader>
            <CategoryIcon>
              <FaBrain />
            </CategoryIcon>
          <CategoryTitle>Deep Learning/ML</CategoryTitle>
          </CategoryHeader>
          <SkillTags>
            <SkillTag>TensorFlow</SkillTag>
            <SkillTag>Keras</SkillTag>
            <SkillTag>scikit-learn</SkillTag>
            <SkillTag>Pandas</SkillTag>
            <SkillTag>NumPy</SkillTag>
          </SkillTags>
        </SkillCategory>
        
        <SkillCategory>
          <CategoryHeader>
            <CategoryIcon>
              <FaCloud />
            </CategoryIcon>
            <CategoryTitle>Cloud</CategoryTitle>
          </CategoryHeader>
          <SkillTags>
            <SkillTag>GCP</SkillTag>
            <SkillTag>Azure</SkillTag>
            <SkillTag>AWS</SkillTag>
          </SkillTags>
        </SkillCategory>
        
        <SkillCategory>
          <CategoryHeader>
            <CategoryIcon>
              <FaDatabase />
            </CategoryIcon>
            <CategoryTitle>Databases</CategoryTitle>
          </CategoryHeader>
          <SkillTags>
            <SkillTag>NoSQL</SkillTag>
            <SkillTag>RDBMS</SkillTag>
            <SkillTag>Vectorial</SkillTag>
          </SkillTags>
        </SkillCategory>
        
        <SkillCategory>
          <CategoryHeader>
            <CategoryIcon>
              <FaServer />
            </CategoryIcon>
            <CategoryTitle>Big Data</CategoryTitle>
          </CategoryHeader>
          <SkillTags>
            <SkillTag>Hadoop</SkillTag>
            <SkillTag>Spark</SkillTag>
            <SkillTag>Hive</SkillTag>
            <SkillTag>Pig</SkillTag>
          </SkillTags>
        </SkillCategory>
      </SkillsContainer>
    </SectionContainer>
  );
};

export default Skills;
