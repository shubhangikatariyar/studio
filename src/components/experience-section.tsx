
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
    logoUrl: 'https://placehold.co/40x40.png',
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
    logoUrl: 'https://placehold.co/40x40.png',
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" aria-labelledby="experience-title" className="py-8">
      <h2 id="experience-title" className="text-3xl font-bold text-foreground mb-8 text-center md:text-left">
        Work Experience
      </h2>
      <div className="space-y-6">
        {experienceData.map((entry) => (
          <Card key={entry.id} className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
               <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <CardTitle className="text-xl md:text-2xl font-semibold">{entry.role}</CardTitle>
                 {entry.logoUrl && (
                  <img src={entry.logoUrl} alt={`${entry.company} logo`} className="w-10 h-10 rounded-full object-contain hidden sm:block" data-ai-hint="company logo"/>
                )}
              </div>
              <CardDescription className="text-md text-primary flex items-center">
                <Building className="mr-2 h-4 w-4" />
                {entry.company}
              </CardDescription>
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
