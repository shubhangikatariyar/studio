

import type { ExperienceEntry, ExperienceDetail } from '@/types';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Building, CalendarDays } from 'lucide-react';

const experienceData: ExperienceEntry[] = [
  {
    id: '1',
    company: 'Reserve Bank Information Technology',
    role: 'Data Scientist',
    dates: 'Nov 2025 - Aug 2026',
    description: [
      {
        title: 'Enterprise GenAI Platform',
        text: 'Architected a low-code generative AI platform empowering business users to construct RAG-powered knowledge repositories from vast corporate document stores. This foundational infrastructure significantly accelerated the deployment of customized AI applications across multiple domains without showcasing explicit metric dependencies.',
      },
      {
        title: 'Advanced Retrieval Systems',
        text: 'Designed and optimized robust retrieval pipelines utilizing diverse mechanisms, including entity-based, section-wise, and research-driven chunking strategies. This conceptual approach fundamentally improved context relevance and factual grounding for downstream LLM applications.',
      },
      {
        title: 'Production-Grade AI Solutions',
        text: 'Helmed cross-functional efforts to engineer and deploy comprehensive AI systems spanning document intelligence, OCR, automated invoice processing, and anomaly detection. These intelligent tools integrated seamlessly into broader enterprise workflows, enhancing overall operational efficiency.',
      },
      {
        title: 'Agentic Conversational Interfaces',
        text: 'Developed a sophisticated agentic chatbot that allows users to fluently interact with complex enterprise data via natural language. This automated the analytical query generation process and sustainably democratized access to critical business insights.',
      },
    ],
    logoUrl: '/studio/re-logo.png',
  },
  {
    id: '2',
    company: 'Tata Consultancy Services Limited',
    role: 'AI Engineer',
    dates: 'Jun 2022 - Oct 2025',
    description: [
      {
        title: 'Responsible AI Framework',
        text: 'Spearheaded the development of an ethical AI governance platform adopted company-wide, establishing standardized practices for model auditing, bias detection, and compliance tracking across enterprise deployments. My work ensured AI systems met rigorous fairness and transparency requirements.',
      },
      {
        title: 'ML Ops Innovation',
        text: 'Designed automated CI/CD pipelines that transformed our model deployment lifecycle - from intelligent data ingestion systems to self-documenting training workflows and canary release strategies. This infrastructure became the foundation for reproducible, version-controlled ML at scale.',
      },
      {
        title: 'Explainability Engineering',
        text: 'Created novel interpretation tools that blend global and local explanation techniques, giving both technical teams and business stakeholders intuitive insights into model behavior. This significantly improved trust in our predictive systems.',
      },
      {
        title: 'LLM Reliability Systems',
        text: 'Developed advanced RAG architectures to enhance factual consistency in generative AI applications, implementing content grounding and verification mechanisms that reduced errors while maintaining creative flexibility.',
      },
      {
        title: 'Full-Stack AI Solutions',
        text: 'Built and deployed production-grade applications with secure access controls and real-time data processing, demonstrating the ability to bridge machine learning with robust software engineering practices.',
      },
    ],
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Tata_Consultancy_Services_old_logo.svg',
  },
  {
    id: '3',
    company: 'Tata Consultancy Services Limited',
    role: 'NLP Intern',
    dates: 'Mar 2022 - May 2022',
    description: [
      'Designed and implemented transformer-based models for patent classification, leveraging USPTO data to capture technical and legal nuances.',
      'Engineered an optimized text processing pipeline integrating advanced tokenization and semantic feature extraction techniques.',
      'Developed model interpretability features to provide actionable insights into classification decisions.',
      'Contributed to full-cycle NLP system development from dataset curation to performance evaluation.',
    ],
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Tata_Consultancy_Services_old_logo.svg',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-8">
      <h2 id="experience-title" className="text-3xl font-bold text-foreground mb-8 text-center md:text-left">
        <span role="img" aria-label="Woman technologist emoji" className="mr-2">👩‍💻</span>
        Work Experience
      </h2>
      <div className="space-y-6">
        {experienceData.map((entry) => (
          <Card key={entry.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-card">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="flex-grow">
                  <CardTitle className="text-xl md:text-2xl font-semibold text-card-foreground">{entry.role}</CardTitle>
                  <CardDescription className="text-md text-primary mt-1 flex items-center">
                    <Building className="mr-2 h-4 w-4" />
                    {entry.company}
                  </CardDescription>
                </div>
                {entry.logoUrl && (
                  <div className="w-32 h-auto sm:w-36 md:w-44 bg-white p-1 rounded-lg shadow-lg border border-border flex items-center justify-center self-center sm:self-auto flex-shrink-0">
                    <img
                      src={entry.logoUrl}
                      alt={`${entry.company} logo`}
                      className="max-w-full max-h-16 md:max-h-20 object-contain"
                      data-ai-hint="company logo"
                    />
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 flex items-center">
                <CalendarDays className="mr-2 h-4 w-4 text-primary" />
                {entry.dates}
              </p>
              {entry.description && (
                <ul className="space-y-4 text-muted-foreground">
                  {entry.description.map((item, index) => {
                    if (typeof item === 'string') {
                      return (
                        <li key={index} className="flex items-start">
                          <span className="mr-3 mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                          <span>{item}</span>
                        </li>
                      );
                    }
                    return (
                      <li key={index} className="space-y-1">
                        <h4 className="font-semibold text-card-foreground">{item.title}</h4>
                        <p>{item.text}</p>
                      </li>
                    );
                  })}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
