

import type { ExperienceEntry } from '@/types';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Building, CalendarDays } from 'lucide-react';

const experienceData: ExperienceEntry[] = [
  {
    id: '1',
    company: 'Tata Consultancy Services Limited',
    role: 'AI Engineer',
    dates: 'June 2022 - Aug 2025',
    description: [
      'Standardized Responsible AI practices across 20+ enterprise projects by leading the design and rollout of an ethical assurance platform, now adopted as a governance framework at TCS.',
      'Reduced ML deployment time by 60% by automating end-to-end workflows using CI/CD pipelines with Jenkins and Azure DevOps, covering data ingestion, preprocessing, training, and deployment.',
      'Improved model observability by 40% through the integration of real-time monitoring, logging, and a feedback loop, enabling continuous learning, drift detection, and version-controlled rollbacks.',
      'Increased model explainability by 35% by developing the Counterfactual Integration of ALE & LIME, a hybrid tool combining global and local explainability for tabular data, improving stakeholder trust and decision transparency.',
      'Achieved 86% detection accuracy and reduced hallucinations by 21% in Large Language Models by engineering a RAG-based pipeline, enhancing factual grounding in generative outputs.',
      'Improved object detection performance by 50% through calibration of confidence estimates using logistic regression, increasing reliability in high-stakes vision tasks.',
      'Built and deployed a full-stack web application using AngularJS, Django, and PostgreSQL, enabling secure user authentication, role-based access, and dynamic data handling for 1,000+ active users.',
    ],
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Tata_Consultancy_Services_old_logo.svg',
  },
  {
    id: '2',
    company: 'Tata Consultancy Services Limited',
    role: 'NLP Intern',
    dates: 'March 2022 - May 2022',
    description: [
      'Developed a BERT-based model for automated patent classification using USPTO data, optimizing performance through architecture tuning and preprocessing.',
      'Engineered an efficient text preprocessing pipeline incorporating advanced tokenization and feature extraction techniques.',
      'Designed domain-specific embeddings to capture technical terminology in patent documents.',
      'Implemented model interpretability features to provide actionable insights on classification decisions.',
    ],
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Tata_Consultancy_Services_old_logo.svg',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-8">
      <h2 id="experience-title" className="text-3xl font-bold text-gray-100 mb-8 text-center md:text-left">
        <span role="img" aria-label="Woman technologist emoji" className="mr-2">👩‍💻</span>
        Work Experience
      </h2>
      <div className="space-y-6">
        {experienceData.map((entry) => (
          <Card key={entry.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 bg-card/90 dark:bg-card/80">
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
              <p className="text-muted-foreground mb-2 flex items-center">
                <CalendarDays className="mr-2 h-4 w-4 text-primary" />
                {entry.dates}
              </p>
              {entry.description && (
                <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                  {entry.description.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
