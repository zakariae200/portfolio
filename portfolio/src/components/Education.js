import React from 'react';
import styled from 'styled-components';
import { GraduationCap, Calendar, MapPin, Star, Trophy, Medal, Flame } from 'lucide-react';
import googleHackathon from '../images/hackathon/Google Cloud GenAI Hackathon 2024 Certificate – 37-1.png';
import awsHackathon from '../images/hackathon/AWSGlobal_Certificates_CAPGenAI_Finalists-1.png';
import winner from '../images/hackathon/winner.jpeg';
import graduateChar from '../images/desk bg.png';

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


const TitleWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 120px;
  width: 100%;
  text-align: center;

  @media (min-width: 1600px) {
    min-height: 150px;
  }

  @media (max-width: 768px) {
    min-height: 110px;
  }

  @media (max-width: 576px) {
    min-height: 100px;
  }

  @media (max-width: 375px) {
    min-height: 90px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.75rem;
  color: #0f172a;
  margin: 0 0 0.75rem 0;
  font-weight: 700;
  letter-spacing: -0.02em;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }

  @media (max-width: 576px) {
    font-size: 1.8rem;
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
    right: 29%;
    bottom: 29px;
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

const EducationList = styled.div`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EducationCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  transition: all 0.25s ease;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 184, 212, 0.4);
    box-shadow: 0 12px 28px rgba(0, 184, 212, 0.1);
  }

  @media (max-width: 576px) {
    padding: 1.2rem;
    gap: 1rem;
    border-radius: 10px;
  }
`;

const IconBox = styled.div`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  background: rgba(0, 184, 212, 0.1);
  border: 1px solid rgba(0, 184, 212, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #00b8d4;

  @media (max-width: 576px) {
    width: 42px;
    height: 42px;
  }
`;

const EducationContent = styled.div`
  flex: 1;
  min-width: 0;
`;

const Degree = styled.h3`
  font-size: 1.1rem;
  color: #0f172a;
  margin: 0 0 0.25rem 0;
  font-weight: 600;
  line-height: 1.35;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const Institution = styled.h4`
  font-size: 0.9rem;
  color: #00b8d4;
  margin: 0 0 0.75rem 0;
  font-weight: 500;
`;

const Meta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 0.75rem;
  font-size: 0.8rem;
  color: #64748b;

  span {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
  }

  svg {
    color: #94a3b8;
  }

  @media (max-width: 576px) {
    gap: 0.75rem;
    font-size: 0.78rem;
  }
`;

const Description = styled.p`
  color: #64748b;
  line-height: 1.55;
  margin: 0;
  font-size: 0.85rem;

  @media (max-width: 576px) {
    font-size: 0.82rem;
  }
`;

const HackathonSection = styled.div`
  margin-top: 4rem;

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;

const SubsectionHeader = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
`;


const SubsectionTitle = styled.h3`
  font-size: 1.75rem;
  color: #0f172a;
  margin: 0;
  font-weight: 700;
  letter-spacing: -0.01em;

  @media (max-width: 576px) {
    font-size: 1.45rem;
  }
`;

const HackathonGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const HackathonCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 184, 212, 0.4);
    box-shadow: 0 12px 28px rgba(0, 184, 212, 0.1);
  }
`;

const HackathonImage = styled.div`
  width: 100%;
  height: 180px;
  overflow: hidden;
  background: ${props => props.bg || '#f8fafc'};
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: ${props => (props.contain ? '55%' : '100%')};
    height: ${props => (props.contain ? 'auto' : '100%')};
    object-fit: ${props => (props.contain ? 'contain' : 'cover')};
    transition: transform 0.4s ease;
  }

  ${HackathonCard}:hover & img {
    transform: scale(${props => (props.contain ? '1.06' : '1.04')});
  }

  @media (max-width: 576px) {
    height: 160px;
  }
`;

const PlaceholderImage = styled.div`
  width: 100%;
  height: 180px;
  background: ${props => props.gradient};
  border-bottom: 1px solid #f1f5f9;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.65rem;
  color: #ffffff;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 30% 25%, rgba(255, 255, 255, 0.18) 0%, transparent 55%);
    pointer-events: none;
  }

  span {
    font-size: 1.15rem;
    font-weight: 700;
    letter-spacing: -0.01em;
    z-index: 1;
  }

  svg {
    z-index: 1;
    transition: transform 0.4s ease;
    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));
  }

  ${HackathonCard}:hover & svg {
    transform: rotate(-6deg) scale(1.1);
  }

  @media (max-width: 576px) {
    height: 160px;
  }
`;

const HackathonContent = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;

  @media (max-width: 576px) {
    padding: 1rem;
  }
`;

const HackathonName = styled.h4`
  font-size: 1.05rem;
  color: #0f172a;
  margin: 0;
  font-weight: 600;
  line-height: 1.35;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const HackathonMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const HackathonDate = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: #64748b;

  svg {
    color: #94a3b8;
  }
`;

const Rating = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  color: #f59e0b;
  font-size: 0.85rem;
  font-weight: 600;

  svg {
    fill: #f59e0b;
  }
`;

const Badges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
  padding-top: 0.85rem;
  border-top: 1px solid #f1f5f9;
`;

const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.65rem;
  border-radius: 50px;
  font-size: 0.72rem;
  font-weight: 500;
  background: ${props => `${props.color}1a`};
  color: ${props => props.color};
  border: 1px solid ${props => `${props.color}40`};
`;

const TrophyBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0.3rem 0.65rem;
  border-radius: 50px;
  font-size: 0.72rem;
  font-weight: 600;
  background: rgba(245, 158, 11, 0.12);
  color: #d97706;
  border: 1px solid rgba(245, 158, 11, 0.4);
`;

const educationData = [
  {
    id: 1,
    degree: 'Master in Data Science and Big Data',
    institution: 'Faculté des Sciences et Techniques',
    period: 'September 2022 - July 2024',
    location: 'Tangier',
    description: 'Advanced studies in big data technologies, mobility solutions, and data science applications. Focused on developing expertise in handling large datasets and implementing machine learning algorithms.'
  },
  {
    id: 2,
    degree: "Bachelor's in Computer Engineering",
    institution: 'Faculté des Sciences et Techniques',
    period: 'October 2021 - July 2022',
    location: 'Tangier',
    description: 'Comprehensive education in computer engineering principles, software development, and systems design. Developed strong foundations in programming and problem-solving.'
  },
  {
    id: 3,
    degree: 'DEUST: Mathematics, Computer Science, Physics',
    institution: 'Faculté des Sciences et Techniques',
    period: 'September 2018 - June 2021',
    location: 'Tangier',
    description: 'Fundamental scientific education covering mathematics, computer science, and physics. Built a strong foundation in analytical thinking and scientific methodology.'
  }
];

const hackathonsData = [
  {
    id: 1,
    name: 'Ignition Lab',
    date: '2024',
    rating : '4,7/5',
    image: winner,
    badge: { label: 'Winner', color: '#f59e0b' },
    achievement: '1st Place'
  },
  {
    id: 2,
    name: 'AWS Global GenAI Hackathon',
    date: '2024',
    rating: '4.6/5',
    image: awsHackathon,
    badge: { label: 'Top 9 Finalist', color: '#FF9900' },
    achievement: '2nd Place'
  },
  {
    id: 3,
    name: 'Google Cloud GenAI Hackathon',
    date: '2024',
    rating: '4.1/5',
    image: googleHackathon,
    badge: { label: 'First Participation', color: '#4285F4' }
  },
  
];

const Education = () => {
  return (
    <SectionContainer id="education">
      <SectionHeader>
        <TitleWrapper>
          <SectionTitle>Education</SectionTitle>
          <CharacterImage src={graduateChar} alt="Graduate Character" />
        </TitleWrapper>
        <SectionSubtitle>
          Academic foundation in data science, computer engineering, and applied sciences.
        </SectionSubtitle>
      </SectionHeader>

      <EducationList>
        {educationData.map((item) => (
          <EducationCard key={item.id}>
            <IconBox>
              <GraduationCap size={22} />
            </IconBox>
            <EducationContent>
              <Degree>{item.degree}</Degree>
              <Institution>{item.institution}</Institution>
              <Meta>
                <span><Calendar size={13} /> {item.period}</span>
                <span><MapPin size={13} /> {item.location}</span>
              </Meta>
              <Description>{item.description}</Description>
            </EducationContent>
          </EducationCard>
        ))}
      </EducationList>

      <HackathonSection>
        <SubsectionHeader>
          <SubsectionTitle>Hackathons</SubsectionTitle>
        </SubsectionHeader>

        <HackathonGrid>
          {hackathonsData.map((h) => (
            <HackathonCard key={h.id}>
              {h.placeholder ? (
                <PlaceholderImage gradient={h.placeholder.gradient}>
                  <Flame size={36} strokeWidth={2} />
                  <span>{h.placeholder.label}</span>
                </PlaceholderImage>
              ) : (
                <HackathonImage bg={h.imageBg} contain={h.imageContain}>
                  <img
                    src={h.image || h.imageUrl}
                    alt={h.name}
                  />
                </HackathonImage>
              )}
              <HackathonContent>
                <HackathonName>{h.name}</HackathonName>
                <HackathonMeta>
                  <HackathonDate>
                    <Calendar size={12} /> {h.date}
                  </HackathonDate>
                  {h.rating && (
                    <Rating>
                      <Star size={12} fill="currentColor" /> {h.rating}
                    </Rating>
                  )}
                </HackathonMeta>
                <Badges>
                  <Badge color={h.badge.color}>
                    <Medal size={11} /> {h.badge.label}
                  </Badge>
                  {h.achievement && (
                    <TrophyBadge>
                      <Trophy size={11} /> {h.achievement}
                    </TrophyBadge>
                  )}
                </Badges>
              </HackathonContent>
            </HackathonCard>
          ))}
        </HackathonGrid>
      </HackathonSection>
    </SectionContainer>
  );
};

export default Education;
