
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
      'Led development of AI-driven solutions for enterprise clients.',
      'Designed and implemented machine learning models for predictive analytics.',
      'Collaborated with cross-functional teams to integrate AI into existing products.',
    ],
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Tata_Consultancy_Services_old_logo.svg',
  },
  {
    id: '2',
    company: 'Tata Consultancy Services Limited',
    role: 'NLP Intern',
    dates: 'March 2022 - May 2022',
    description: [
      'Assisted in developing NLP models for text classification and sentiment analysis.',
      'Contributed to data preprocessing and feature engineering tasks.',
      'Researched and evaluated state-of-the-art NLP techniques.',
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
                  <div className="w-36 h-auto sm:w-40 md:w-48 bg-white p-3 rounded-lg shadow-lg border border-border flex items-center justify-center self-center sm:self-auto flex-shrink-0">
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
