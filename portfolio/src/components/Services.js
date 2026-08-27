import React from 'react';
import styled from 'styled-components';
import {
  ArrowUpRight,
  Bot,
  BrainCircuit,
  Database,
  FileSearch,
  GitBranch,
  UsersRound,
} from 'lucide-react';

const SectionContainer = styled.section`
  padding: 5rem 8%;
  background: #ffffff;
  position: relative;
  overflow: hidden;

  @media (max-width: 1200px) { padding: 4rem 6%; }
  @media (max-width: 768px) { padding: 3.5rem 5%; }
  @media (max-width: 576px) { padding: 3rem 4%; }
`;

const SectionHeader = styled.div`
  max-width: 680px;
  margin: 0 auto 3rem;
  text-align: center;
  position: relative;
  z-index: 1;
`;

const Eyebrow = styled.span`
  display: inline-block;
  margin-bottom: 0.75rem;
  color: #0891b2;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

const SectionTitle = styled.h2`
  color: #0f172a;
  font-size: 2.75rem;
  letter-spacing: -0.03em;
  margin: 0 0 0.75rem;

  @media (max-width: 768px) { font-size: 2.2rem; }
  @media (max-width: 576px) { font-size: 1.85rem; }
`;

const SectionSubtitle = styled.p`
  color: #64748b;
  font-size: 1.05rem;
  line-height: 1.65;
  margin: 0;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  max-width: 1120px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  @media (max-width: 900px) { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const ServiceCard = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 285px;
  padding: 1.5rem;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 16px;
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04);
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  margin-bottom: 1.25rem;
  color: #0891b2;
  background: rgba(0, 184, 212, 0.1);
  border: 1px solid rgba(0, 184, 212, 0.18);
  border-radius: 12px;
`;

const ServiceTitle = styled.h3`
  color: #0f172a;
  font-size: 1.15rem;
  margin: 0 0 0.65rem;
`;

const ServiceDescription = styled.p`
  flex: 1;
  color: #64748b;
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0 0 1.25rem;
`;

const ServiceFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  padding-top: 1rem;
  border-top: 1px solid #f1f5f9;
`;

const Deliverable = styled.span`
  color: #475569;
  font-size: 0.75rem;
  font-weight: 600;
`;

const CTA = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  max-width: 1120px;
  margin: 2rem auto 0;
  padding: 1.4rem 1.5rem;
  background: #0f172a;
  border-radius: 16px;
  position: relative;
  z-index: 1;

  @media (max-width: 650px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
  }
`;

const CTAText = styled.div`
  h3 { color: #ffffff; font-size: 1.1rem; margin: 0 0 0.3rem; }
  p { color: #cbd5e1; font-size: 0.85rem; margin: 0; }
`;

const CTAButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  flex-shrink: 0;
  padding: 0.75rem 1rem;
  color: #ffffff;
  background: #00b8d4;
  border-radius: 9px;
  font-size: 0.85rem;
  font-weight: 700;
  transition: transform 0.25s ease, background 0.25s ease;

  &:hover { background: #0891b2; transform: translateY(-1px); }
`;

const services = [
  { icon: Database, title: 'Custom RAG Systems', description: 'Turn your company documents and knowledge base into a reliable, searchable AI assistant with grounded answers.', deliverable: 'Search · Knowledge AI' },
  { icon: Bot, title: 'AI Chatbots & Copilots', description: 'Build helpful conversational experiences for customers, employees, support teams, or internal operations.', deliverable: 'Chat · Automation' },
  { icon: GitBranch, title: 'Multi-Agent AI Systems', description: 'Design specialized agents that collaborate to research, reason, validate, and execute complex workflows.', deliverable: 'Agents · Orchestration' },
  { icon: UsersRound, title: 'AI-Powered HR Platforms', description: 'Automate CV parsing, candidate matching, recruitment research, and personalized outreach for HR teams.', deliverable: 'HR · Recruitment' },
  { icon: FileSearch, title: 'Document Intelligence', description: 'Extract structured insights from contracts, reports, invoices, and other business documents at scale.', deliverable: 'OCR · Extraction' },
  { icon: BrainCircuit, title: 'AI Strategy & Prototypes', description: 'Transform an AI idea into a tested proof of concept with a practical architecture and path to production.', deliverable: 'Discovery · MVP' },
];

const Services = () => (
  <SectionContainer id="services">
    <SectionHeader>
      <Eyebrow>Built around your business</Eyebrow>
      <SectionTitle>AI Solutions &amp; Services</SectionTitle>
      <SectionSubtitle>
        I help teams turn ambitious AI ideas into practical, production-ready systems that save time, improve decisions, and scale with the business.
      </SectionSubtitle>
    </SectionHeader>

    <ServicesGrid>
      {services.map(({ icon: Icon, title, description, deliverable }) => (
        <ServiceCard key={title}>
          <IconBox><Icon size={23} strokeWidth={1.8} /></IconBox>
          <ServiceTitle>{title}</ServiceTitle>
          <ServiceDescription>{description}</ServiceDescription>
          <ServiceFooter>
            <Deliverable>{deliverable}</Deliverable>
          </ServiceFooter>
        </ServiceCard>
      ))}
    </ServicesGrid>

    <CTA>
      <CTAText>
        <h3>Have an AI idea worth building?</h3>
        <p>Tell me what you want to improve, automate, or create.</p>
      </CTAText>
      <CTAButton href="#contact">Discuss Your Project <ArrowUpRight size={16} /></CTAButton>
    </CTA>
  </SectionContainer>
);

export default Services;
