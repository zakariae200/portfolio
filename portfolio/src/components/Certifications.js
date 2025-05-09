import React, { useState } from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import certC1 from '../images/architecture/certif C1.png';

const SectionContainer = styled.section`
  padding: 5rem 10%;
  background-color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, rgba(26, 26, 94, 0.03) 0%, transparent 70%);
    z-index: 0;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 5%;
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
`;

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CertificationCard = styled.div`
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

const CertificationHeader = styled.div`
  background: ${props => props.bgColor || 'linear-gradient(135deg, #1a1a5e, #3a3a8e)'};
  padding: 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const CertificationLogo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  border-radius: 50%;
  background-color: white;
  padding: 5px;
`;

const CertificationBody = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CertificationTitle = styled.h3`
  font-size: 1.2rem;
  color: white;
  margin: 0;
  font-weight: 600;
`;

const CertificationIssuer = styled.p`
  color: rgba(255, 255, 255, 0.8);
  margin: 0.5rem 0 0 0;
  font-size: 0.9rem;
`;

const CertificationDescription = styled.p`
  color: #666;
  margin: 0 0 1.5rem 0;
  font-size: 0.95rem;
  line-height: 1.5;
  flex: 1;
`;

const CertificationFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

const CertificationDate = styled.span`
  font-size: 0.9rem;
  color: #888;
`;

const VerifyButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #1a1a5e;
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    color: #00b8d4;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: #1a1a5e;
  font-size: 1.5rem;
  cursor: pointer;
`;

const CertificateImage = styled.img`
  max-width: 100%;
  height: auto;
`;

const Certifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  
  const openCertificateModal = (certificate) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeCertificateModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <SectionContainer id="certifications">
      <SectionTitle>Certifications</SectionTitle>
      <CertificationsGrid>
        <CertificationCard>
          <CertificationHeader bgColor="linear-gradient(135deg, #F80000, #FF8C00)">
            <CertificationLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2560px-Oracle_logo.svg.png" alt="Oracle" />
            <div>
              <CertificationTitle>OCI Generative AI Professional</CertificationTitle>
              <CertificationIssuer>Oracle</CertificationIssuer>
            </div>
          </CertificationHeader>
          <CertificationBody>
            <CertificationDescription>
              Validates expertise in implementing and managing Oracle Cloud Infrastructure's Generative AI services, including large language models, prompt engineering, and AI application development.
            </CertificationDescription>
            <CertificationFooter>
              <CertificationDate>January 2025</CertificationDate>
              <VerifyButton href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=A9E60B1455F6CB6862C563C826D9DC49236F74E36FF6AD949AF39A63D2391734" target="_blank">
                Verify <FaExternalLinkAlt />
              </VerifyButton>
            </CertificationFooter>
          </CertificationBody>
        </CertificationCard>
        
        <CertificationCard>
          <CertificationHeader bgColor="linear-gradient(135deg, #00A4EF, #0078D4)">
            <CertificationLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png" alt="Microsoft" />
            <div>
              <CertificationTitle>Microsoft Azure AI Fundamentals</CertificationTitle>
              <CertificationIssuer>Microsoft</CertificationIssuer>
            </div>
          </CertificationHeader>
          <CertificationBody>
            <CertificationDescription>
              Demonstrates foundational knowledge of machine learning and AI concepts, along with related Microsoft Azure services. Covers AI workloads, principles, and Microsoft's responsible AI guidelines.
            </CertificationDescription>
            <CertificationFooter>
              <CertificationDate>2024</CertificationDate>
              <VerifyButton href="#" target="_blank">
                Verify <FaExternalLinkAlt />
              </VerifyButton>
            </CertificationFooter>
          </CertificationBody>
        </CertificationCard>
        
        <CertificationCard>
          <CertificationHeader bgColor="linear-gradient(135deg, #FF9900, #232F3E)">
            <CertificationLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" alt="AWS" />
            <div>
              <CertificationTitle>AWS Partner: Generative AI Essentials</CertificationTitle>
              <CertificationIssuer>Amazon Web Services</CertificationIssuer>
            </div>
          </CertificationHeader>
          <CertificationBody>
            <CertificationDescription>
              Covers essential knowledge of generative AI technologies and AWS services for building and deploying generative AI solutions, including Amazon Bedrock, SageMaker, and other AI/ML services.
            </CertificationDescription>
            <CertificationFooter>
              <CertificationDate>September 2024</CertificationDate>
              <VerifyButton href="https://www.credly.com/badges/15f13f50-d7c8-4feb-9460-387e20d41502/linked_in_profile" target="_blank">
                Verify <FaExternalLinkAlt />
              </VerifyButton>
            </CertificationFooter>
          </CertificationBody>
        </CertificationCard>
        
        <CertificationCard>
          <CertificationHeader bgColor="linear-gradient(135deg, #4285F4, #34A853, #FBBC05, #EA4335)">
            <CertificationLogo src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google_Cloud_logo.svg/2560px-Google_Cloud_logo.svg.png" alt="Google Cloud" />
            <div>
              <CertificationTitle>Google Cloud: Generative AI</CertificationTitle>
              <CertificationIssuer>Google Cloud</CertificationIssuer>
            </div>
          </CertificationHeader>
          <CertificationBody>
            <CertificationDescription>
              Validates proficiency in Google Cloud's generative AI tools and services, including Vertex AI, PaLM API, and generative AI application development best practices.
            </CertificationDescription>
            <CertificationFooter>
              <CertificationDate>February 2024</CertificationDate>
              <VerifyButton href="https://partner.cloudskillsboost.google/public_profiles/1cd12157-a00d-4cf2-a725-9cec1df8d1ce/badges/8329808" target="_blank">
                Verify <FaExternalLinkAlt />
              </VerifyButton>
            </CertificationFooter>
          </CertificationBody>
        </CertificationCard>
        
        <CertificationCard>
          <CertificationHeader bgColor="linear-gradient(135deg,rgb(131, 23, 23),rgb(53, 52, 133),rgb(17, 52, 150))">
            <CertificationLogo src='https://www.alxafrica.com/wp-content/uploads/2023/12/logo-black.svg' alt="ALX" />
            <div>
              <CertificationTitle>ALX Data Analyst</CertificationTitle>
              <CertificationIssuer>ALX Africa</CertificationIssuer>
            </div>
          </CertificationHeader>
          <CertificationBody>
            <CertificationDescription>
              Awarded for successful completion of the ALX Data Analyst program. Demonstrates advanced skills in data analytics, data visualization, SQL, Python, and real-world business problem solving using industry-standard tools and methodologies.
            </CertificationDescription>
            <CertificationFooter>
              <CertificationDate>February 2024</CertificationDate>
              <VerifyButton href="https://intranet.alxswe.com/certificates/8fHNJEz5r2" target="_blank">
                Verify <FaExternalLinkAlt />
              </VerifyButton>
            </CertificationFooter>
          </CertificationBody>
        </CertificationCard>
        <CertificationCard>
          <CertificationHeader bgColor="linear-gradient(135deg, #2C3E50, #4CA1AF)">
            <CertificationLogo src="https://images.seeklogo.com/logo-png/45/1/ef-education-first-logo-png_seeklogo-455160.png" alt="EFSET" />
            <div>
              <CertificationTitle>EFSET English Certificate (CEFR Level C1)</CertificationTitle>
              <CertificationIssuer>EF Education First</CertificationIssuer>
            </div>
          </CertificationHeader>
          <CertificationBody>
            <CertificationDescription>
              Advanced English proficiency certification at the C1 level of the Common European Framework of Reference (CEFR). Demonstrates professional working proficiency in reading, listening, and language comprehension.
            </CertificationDescription>
            <CertificationFooter>
              <CertificationDate>December 2024</CertificationDate>
              <VerifyButton onClick={() => openCertificateModal(certC1)}>
                Verify <FaExternalLinkAlt />
              </VerifyButton>
            </CertificationFooter>
          </CertificationBody>
        </CertificationCard>
        
      </CertificationsGrid>
      
      <Modal isOpen={isModalOpen} onClick={closeCertificateModal}>
        <ModalContent onClick={e => e.stopPropagation()}>
          <CloseButton onClick={closeCertificateModal}>
            <FaTimes />
          </CloseButton>
          {selectedCertificate && (
            <CertificateImage src={selectedCertificate} alt="Certificate" />
          )}
        </ModalContent>
      </Modal>
    </SectionContainer>
  );
};

export default Certifications;
