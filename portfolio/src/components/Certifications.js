import React, { useState } from 'react';
import styled from 'styled-components';
import { ExternalLink, X, Calendar } from 'lucide-react';
import certC1 from '../images/architecture/certif C1.png';

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

const CertificationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1rem;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const CertificationCard = styled.div`
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 1.5rem;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);

  &:hover {
    transform: translateY(-2px);
    border-color: rgba(0, 184, 212, 0.4);
    box-shadow: 0 12px 28px rgba(0, 184, 212, 0.1);
  }

  @media (max-width: 576px) {
    padding: 1.2rem;
    border-radius: 10px;
  }
`;

const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;

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

const CertificationTitle = styled.h3`
  font-size: 1.05rem;
  color: #0f172a;
  margin: 0 0 0.25rem 0;
  font-weight: 600;
  line-height: 1.35;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const CertificationIssuer = styled.p`
  color: #00b8d4;
  margin: 0;
  font-size: 0.85rem;
  font-weight: 500;
`;

const CertificationDescription = styled.p`
  color: #64748b;
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.55;
  flex: 1;

  @media (max-width: 576px) {
    font-size: 0.82rem;
  }
`;

const CertificationFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #f1f5f9;
  margin-top: auto;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const CertificationDate = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.8rem;
  color: #64748b;

  svg {
    color: #94a3b8;
  }
`;

const VerifyButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: #00b8d4;
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 500;
  transition: color 0.25s ease;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font-family: inherit;

  svg {
    transition: transform 0.25s ease;
  }

  &:hover {
    color: #0f172a;

    svg {
      transform: translate(2px, -2px);
    }
  }
`;

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
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
  padding: 1.25rem;
  max-width: 92%;
  max-height: 92vh;
  overflow: auto;
  position: relative;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.18);
  animation: slideUp 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94);

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @media (max-width: 576px) {
    border-radius: 12px;
    padding: 1rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #f8fafc;
  border: 1px solid #e2e8f0;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #64748b;
  transition: all 0.25s ease;
  z-index: 10;

  &:hover {
    background: #ffffff;
    border-color: rgba(0, 184, 212, 0.4);
    color: #00b8d4;
    transform: rotate(90deg);
  }

  @media (max-width: 576px) {
    width: 32px;
    height: 32px;
  }
`;

const CertificateImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  height: auto;
  display: block;
  border-radius: 8px;
`;

const certificationsData = [
  {
    id: 1,
    title: 'OCI Generative AI Professional',
    issuer: 'Oracle',
    logo: 'https://cdn.worldvectorlogo.com/logos/oracle-6.svg',
    description: "Validates expertise in implementing and managing Oracle Cloud Infrastructure's Generative AI services, including large language models, prompt engineering, and AI application development.",
    date: 'January 2025',
    verifyUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=A9E60B1455F6CB6862C563C826D9DC49236F74E36FF6AD949AF39A63D2391734'
  },
  {
    id: 2,
    title: 'Microsoft Azure AI Fundamentals',
    issuer: 'Microsoft',
    logo: 'https://cdn.worldvectorlogo.com/logos/microsoft-5.svg',
    description: "Demonstrates foundational knowledge of machine learning and AI concepts, along with related Microsoft Azure services. Covers AI workloads, principles, and Microsoft's responsible AI guidelines.",
    date: '2024',
    verifyUrl: 'https://learn.microsoft.com/api/credentials/share/en-us/zakariaeelmernissi-7076/E2FFE0AEEB70B12C?sharingId'
  },
  {
    id: 3,
    title: 'AWS Partner: Generative AI Essentials',
    issuer: 'Amazon Web Services',
    logo: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg',
    description: 'Covers essential knowledge of generative AI technologies and AWS services for building and deploying generative AI solutions, including Amazon Bedrock, SageMaker, and other AI/ML services.',
    date: 'September 2024',
    verifyUrl: 'https://www.credly.com/badges/15f13f50-d7c8-4feb-9460-387e20d41502/linked_in_profile'
  },
  {
    id: 4,
    title: 'Google Cloud: Generative AI',
    issuer: 'Google Cloud',
    logo: 'https://cdn.worldvectorlogo.com/logos/google-cloud-1.svg',
    description: "Validates proficiency in Google Cloud's generative AI tools and services, including Vertex AI, PaLM API, and generative AI application development best practices.",
    date: 'February 2024',
    verifyUrl: 'https://partner.cloudskillsboost.google/public_profiles/1cd12157-a00d-4cf2-a725-9cec1df8d1ce/badges/8329808'
  },
  {
    id: 5,
    title: 'ALX Data Analyst',
    issuer: 'ALX Africa',
    logo: 'https://www.alxafrica.com/wp-content/uploads/2023/12/logo-black.svg',
    description: 'Awarded for successful completion of the ALX Data Analyst program. Demonstrates advanced skills in data analytics, data visualization, SQL, Python, and real-world business problem solving using industry-standard tools and methodologies.',
    date: 'February 2024',
    verifyUrl: 'https://intranet.alxswe.com/certificates/8fHNJEz5r2'
  },
  {
    id: 6,
    title: 'EFSET English Certificate (CEFR Level C1)',
    issuer: 'EF Education First',
    logo: 'https://cdn.worldvectorlogo.com/logos/ef-education-first.svg',
    description: 'Advanced English proficiency certification at the C1 level of the Common European Framework of Reference (CEFR). Demonstrates professional working proficiency in reading, listening, and language comprehension.',
    date: 'December 2024',
    modalImage: certC1
  }
];

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
      <SectionHeader>
        <SectionTitle>Certifications</SectionTitle>
        <SectionSubtitle>
          Industry-recognized credentials in Generative AI, cloud platforms, and data analytics.
        </SectionSubtitle>
      </SectionHeader>

      <CertificationsGrid>
        {certificationsData.map((cert) => (
          <CertificationCard key={cert.id}>
            <CardHeader>
              <LogoBox>
                <img src={cert.logo} alt={cert.issuer} />
              </LogoBox>
              <HeaderInfo>
                <CertificationTitle>{cert.title}</CertificationTitle>
                <CertificationIssuer>{cert.issuer}</CertificationIssuer>
              </HeaderInfo>
            </CardHeader>

            <CertificationDescription>{cert.description}</CertificationDescription>

            <CertificationFooter>
              <CertificationDate>
                <Calendar size={12} /> {cert.date}
              </CertificationDate>
              {cert.modalImage ? (
                <VerifyButton
                  as="button"
                  type="button"
                  onClick={() => openCertificateModal(cert.modalImage)}
                >
                  Verify <ExternalLink size={13} />
                </VerifyButton>
              ) : (
                <VerifyButton
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Verify <ExternalLink size={13} />
                </VerifyButton>
              )}
            </CertificationFooter>
          </CertificationCard>
        ))}
      </CertificationsGrid>

      <Modal isOpen={isModalOpen} onClick={closeCertificateModal}>
        <ModalContent onClick={e => e.stopPropagation()}>
          <CloseButton onClick={closeCertificateModal} aria-label="Close">
            <X size={16} />
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
