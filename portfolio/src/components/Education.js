import React from 'react';
import styled from 'styled-components';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaStar, FaTrophy, FaMedal } from 'react-icons/fa';
import googleHackathon from '../images/hackathon/Google Cloud GenAI Hackathon 2024 Certificate – 37-1.png';
import awsHackathon from '../images/hackathon/AWSGlobal_Certificates_CAPGenAI_Finalists-1.png';
import graduateChar from '../images/desk bg.png';

const SectionContainer = styled.section`
  padding: 5rem 10%;
  background-color: #f8f9fa;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
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

const TitleContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  min-height: 120px;
  width: 100%;
  text-align: center;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    margin-bottom: 5rem;
    min-height: 150px;
  }
  
  /* Medium desktop screens */
  @media (max-width: 1200px) {
    margin-bottom: 3.5rem;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    margin-bottom: 3rem;
    min-height: 110px;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    margin-bottom: 2.5rem;
    min-height: 100px;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    margin-bottom: 2rem;
    min-height: 90px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1a1a5e;
  text-align: center;
  position: relative;
  z-index: 1;
  
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
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    font-size: 2rem;
    
    &::after {
      width: 70px;
    }
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 1.8rem;
    
    &::after {
      width: 60px;
      height: 3px;
    }
  }
`;

const CharacterImage = styled.img`
  position: absolute;
  height: 180px;
  right: 34.5%;
  bottom: 23px;
  z-index: 2;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    height: 220px;
    right: 33%;
    bottom: 25px;
  }
  
  /* Medium desktop screens */
  @media (max-width: 1200px) {
    height: 159px;
    right: 31.5%;
    bottom: 27px;
  }
  
  /* Tablets and small desktops */
  @media (max-width: 992px) {
    height: 150px;
    right: 31%;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    height: 140px;
    right: 29%;
    bottom: 26px;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    height: 130px;
    right: 15%;
    bottom: 30px;
  }
  
  /* Small phones */
  @media (max-width: 480px) {
    height: 120px;
    right: 13%;
    bottom: 29px;
  }
  
  /* Extra small phones */
  @media (max-width: 375px) {
    height: 100px;
    right: 12%;
    bottom: 26px;
  }
`;

const EducationContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    max-width: 1000px;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const EducationCard = styled.div`
  background-color: white;
  border-radius: 15px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  display: flex;
  gap: 2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    padding: 2.5rem;
    margin-bottom: 2.5rem;
    gap: 2.5rem;
    border-radius: 20px;
  }
  
  /* Medium desktop screens */
  @media (max-width: 1200px) {
    padding: 1.8rem;
    gap: 1.8rem;
  }
  
  /* Tablets and small desktops */
  @media (max-width: 992px) {
    padding: 1.6rem;
    gap: 1.6rem;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.2rem;
    padding: 1.5rem;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    padding: 1.3rem;
    margin-bottom: 1.5rem;
    gap: 1rem;
    border-radius: 12px;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    padding: 1.2rem;
    margin-bottom: 1.2rem;
    border-radius: 10px;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const IconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1a1a5e, #3a3a8e);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.5rem;
  flex-shrink: 0;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    width: 70px;
    height: 70px;
    font-size: 1.8rem;
  }
  
  /* Medium desktop screens */
  @media (max-width: 1200px) {
    width: 55px;
    height: 55px;
    font-size: 1.4rem;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    margin: 0 auto;
    width: 50px;
    height: 50px;
    font-size: 1.3rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
  }
`;

const EducationContent = styled.div`
  flex: 1;
`;

const Degree = styled.h3`
  font-size: 1.3rem;
  color: #1a1a5e;
  margin: 0 0 0.5rem 0;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 1.5rem;
    margin: 0 0 0.7rem 0;
  }
  
  /* Medium desktop screens */
  @media (max-width: 1200px) {
    font-size: 1.25rem;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.2rem;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    font-size: 1.15rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 1.1rem;
    margin: 0 0 0.4rem 0;
  }
`;

const Institution = styled.h4`
  font-size: 1.1rem;
  color: #00b8d4;
  margin: 0 0 1rem 0;
  font-weight: 500;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 1.2rem;
    margin: 0 0 1.2rem 0;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    text-align: center;
    font-size: 1.05rem;
    margin: 0 0 0.8rem 0;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 1rem;
    margin: 0 0 0.7rem 0;
  }
`;

const EducationDetails = styled.div`
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
    gap: 0.5rem;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    margin-bottom: 0.8rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 0.85rem;
    margin-bottom: 0.7rem;
  }
`;

const Period = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Location = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Description = styled.p`
  color: #666;
  line-height: 1.6;
  margin: 0;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 1.05rem;
    line-height: 1.7;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    text-align: center;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const HackathonSection = styled.div`
  margin-top: 3rem;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    margin-top: 4rem;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    margin-top: 2.5rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    margin-top: 2rem;
  }
`;

const HackathonTitle = styled.h3`
  font-size: 1.5rem;
  color: #1a1a5e;
  margin-bottom: 1.5rem;
  text-align: center;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-bottom: 1.3rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 1.3rem;
    margin-bottom: 1.2rem;
  }
`;

const HackathonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
  
  /* Medium desktop screens */
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.3rem;
  }
  
  /* Tablets and small desktops */
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 500px;
    margin: 0 auto;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    gap: 1.2rem;
  }
`;

const HackathonCard = styled.div`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    border-radius: 20px;
  }
  
  /* Large phones */
  @media (max-width: 576px) {
    border-radius: 12px;
    
    &:hover {
      transform: translateY(-3px);
    }
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    border-radius: 10px;
  }
`;

const HackathonImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${HackathonCard}:hover & img {
    transform: scale(1.05);
  }
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    height: 220px;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    height: 180px;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    height: 160px;
  }
`;

const HackathonContent = styled.div`
  padding: 1.5rem;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    padding: 1.8rem;
  }
  
  /* Tablets */
  @media (max-width: 768px) {
    padding: 1.3rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    padding: 1.2rem;
  }
`;

const HackathonName = styled.h4`
  font-size: 1.1rem;
  color: #1a1a5e;
  margin: 0 0 0.5rem 0;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 1.2rem;
    margin: 0 0 0.7rem 0;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 1rem;
    margin: 0 0 0.4rem 0;
  }
`;

const HackathonInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 1rem;
  flex-wrap: wrap;
  gap: 0.5rem;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    margin-top: 1.2rem;
    gap: 0.7rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    margin-top: 0.8rem;
    gap: 0.4rem;
  }
`;

const HackathonDate = styled.p`
  font-size: 0.9rem;
  color: #666;
  margin: 0;
`;

const HackathonRating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #1a1a5e;
  font-weight: 500;
`;

const HackathonAchievement = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #FF9900;
  font-weight: 500;
  margin-top: 0.5rem;
`;

const HackathonHighlight = styled.div`
  display: inline-block;
  background-color: ${props => props.color || '#1a1a5e'};
  color: white;
  font-size: 0.8rem;
  font-weight: 500;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  width: fit-content;
  
  /* Large desktop screens */
  @media (min-width: 1600px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.7rem;
    border-radius: 5px;
    margin-top: 0.7rem;
    gap: 0.5rem;
  }
  
  /* Small phones */
  @media (max-width: 375px) {
    font-size: 0.75rem;
    padding: 0.25rem 0.5rem;
    margin-top: 0.4rem;
    gap: 0.3rem;
  }
`;

const Education = () => {
  return (
    <SectionContainer id="education">
      <TitleContainer>
        <SectionTitle>Education</SectionTitle>
        <CharacterImage src={graduateChar} alt="Graduate Character" />
      </TitleContainer>
      <EducationContainer>
        <EducationCard>
          <IconContainer>
            <FaGraduationCap />
          </IconContainer>
          <EducationContent>
            <Degree>Master in Mobility and Big Data</Degree>
            <Institution>Faculté des Sciences et Techniques</Institution>
            <EducationDetails>
              <Period><FaCalendarAlt /> September 2022 - July 2024</Period>
              <Location><FaMapMarkerAlt /> Tanger</Location>
            </EducationDetails>
            <Description>
              Advanced studies in big data technologies, mobility solutions, and data science applications. 
              Focused on developing expertise in handling large datasets and implementing machine learning algorithms.
            </Description>
          </EducationContent>
        </EducationCard>
        
        <EducationCard>
          <IconContainer>
            <FaGraduationCap />
          </IconContainer>
          <EducationContent>
            <Degree>Bachelor's in Computer Engineering</Degree>
            <Institution>Faculté des Sciences et Techniques</Institution>
            <EducationDetails>
              <Period><FaCalendarAlt /> October 2021 - July 2022</Period>
              <Location><FaMapMarkerAlt /> Tanger</Location>
            </EducationDetails>
            <Description>
              Comprehensive education in computer engineering principles, software development, 
              and systems design. Developed strong foundations in programming and problem-solving.
            </Description>
          </EducationContent>
        </EducationCard>
        
        <EducationCard>
          <IconContainer>
            <FaGraduationCap />
          </IconContainer>
          <EducationContent>
            <Degree>DEUST: Mathematics, Computer Science, Physics</Degree>
            <Institution>Faculté des Sciences et Techniques</Institution>
            <EducationDetails>
              <Period><FaCalendarAlt /> September 2018 - June 2021</Period>
              <Location><FaMapMarkerAlt /> Tanger</Location>
            </EducationDetails>
            <Description>
              Fundamental scientific education covering mathematics, computer science, and physics. 
              Built a strong foundation in analytical thinking and scientific methodology.
            </Description>
          </EducationContent>
        </EducationCard>
      </EducationContainer>
      
      <HackathonSection>
        <HackathonTitle>Hackathons</HackathonTitle>
        <HackathonGrid>
          <HackathonCard>
            <HackathonImage>
              <img src={googleHackathon} alt="Google Cloud GenAI Hackathon" />
            </HackathonImage>
            <HackathonContent>
              <HackathonName>Google Cloud GenAI Hackathon</HackathonName>
              <HackathonDate>2024</HackathonDate>
              <HackathonInfo>
                <HackathonRating>
                  <FaStar /> 4.1/5
                </HackathonRating>
              </HackathonInfo>
              <HackathonHighlight color="#4285F4">
                <FaMedal /> First Participation
              </HackathonHighlight>
            </HackathonContent>
          </HackathonCard>
          
          <HackathonCard>
            <HackathonImage>
              <img src={awsHackathon} alt="AWS Global GenAI Hackathon" />
            </HackathonImage>
            <HackathonContent>
              <HackathonName>AWS Global GenAI Hackathon</HackathonName>
              <HackathonDate>2024</HackathonDate>
              <HackathonInfo>
                <HackathonRating>
                  <FaStar /> 4.6/5
                </HackathonRating>
              </HackathonInfo>
              <HackathonHighlight color="#FF9900">
                <FaMedal /> Top 9 Finalist
              </HackathonHighlight>
              <HackathonAchievement>
                <FaTrophy /> 2nd Place
              </HackathonAchievement>
            </HackathonContent>
          </HackathonCard>
          
          <HackathonCard>
            <HackathonImage style={{ backgroundColor: '#0078D4', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/1200px-Microsoft_Azure.svg.png" 
                alt="Microsoft Azure Hackathon" 
                style={{ width: '60%', objectFit: 'contain' }}
              />
            </HackathonImage>
            <HackathonContent>
              <HackathonName>Microsoft Azure Hackathon</HackathonName>
              <HackathonDate>2024</HackathonDate>
              <HackathonInfo>
                <HackathonRating>
                  <FaStar /> 4.3/5
                </HackathonRating>
              </HackathonInfo>
              <HackathonHighlight color="#0078D4">
                <FaMedal /> Participant
              </HackathonHighlight>
            </HackathonContent>
          </HackathonCard>
        </HackathonGrid>
      </HackathonSection>
    </SectionContainer>
  );
};

export default Education;
