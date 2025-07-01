
import type { EducationEntry } from '@/types';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Briefcase, CalendarDays } from 'lucide-react';

const educationData: EducationEntry[] = [
  {
    id: '1',
    university: 'University of Wisconsin, Madison',
    degree: "Master's in Electrical and Computer Engineering",
    specialization: 'Machine Learning and Signal Processing',
    dates: 'Aug 2025 - Dec 2026',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Uw-logo.png',
  },
  {
    id: '2',
    university: 'University of Mumbai',
    degree: "Bachelor's in Electronics and Telecommunications Engineering",
    dates: 'Aug 2018 - May 2022',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/en/7/7a/University_of_Mumbai_coat_of_arms.svg',
  },
];

export function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-title" className="py-8">
      <h2 id="education-title" className="text-3xl font-bold text-foreground mb-8 text-center md:text-left">
        <span role="img" aria-label="Graduation cap emoji" className="mr-2">🎓</span>
        Education
      </h2>
      <div className="space-y-8">
        {educationData.map((entry) => (
          <Card key={entry.id} className="shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-card">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                <div className="flex-grow">
                  <CardTitle className="text-xl md:text-2xl font-semibold text-card-foreground">{entry.university}</CardTitle>
                  <CardDescription className="text-md text-primary mt-1">{entry.degree}</CardDescription>
                </div>
                {entry.logoUrl && (
                  <div className={`w-36 h-36 md:w-48 md:h-48 rounded-full bg-white border border-border flex items-center justify-center self-center sm:self-auto shadow-xl flex-shrink-0 ${entry.university === 'University of Wisconsin, Madison' ? 'p-0' : 'p-4'}`}>
                    <img
                      src={entry.logoUrl}
                      alt={`${entry.university} logo`}
                      className="max-w-full max-h-full object-contain"
                      data-ai-hint="university logo"
                    />
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              {entry.specialization && (
                <p className="text-muted-foreground mb-1 flex items-center">
                  <Briefcase className="mr-2 h-4 w-4 text-primary" />
                  {entry.specialization}
                </p>
              )}
              {entry.minor && (
                <p className="text-muted-foreground mb-1 flex items-center">
                  <Briefcase className="mr-2 h-4 w-4 text-primary" />
                  {entry.minor}
                </p>
              )}
              <p className="text-muted-foreground flex items-center">
                <CalendarDays className="mr-2 h-4 w-4 text-primary" />
                {entry.dates}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
