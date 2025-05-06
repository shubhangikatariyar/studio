import type { EducationEntry } from '@/types';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Briefcase, CalendarDays } from 'lucide-react'; // Using Briefcase as a stand-in for GraduationCap which is not in Lucide

const educationData: EducationEntry[] = [
  {
    id: '1',
    university: 'University of Wisconsin, Madison',
    degree: "Master's in Electrical and Computer Engineering",
    specialization: 'Machine Learning and Signal Processing',
    dates: 'Aug 2025 - Dec 2026',
    logoUrl: 'https://picsum.photos/seed/uwmadison/40/40', // Placeholder
  },
  {
    id: '2',
    university: 'University of Mumbai',
    degree: "Bachelor's in Electronics and Telecommunications Engineering",
    dates: 'Aug 2018 - May 2022',
    logoUrl: 'https://picsum.photos/seed/mumbaiuni/40/40', // Placeholder
  },
];

export function EducationSection() {
  return (
    <section id="education" aria-labelledby="education-title" className="py-8">
      <h2 id="education-title" className="text-3xl font-bold text-foreground mb-8 text-center md:text-left">
        Education
      </h2>
      <div className="space-y-6">
        {educationData.map((entry) => (
          <Card key={entry.id} className="shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
                <CardTitle className="text-xl md:text-2xl font-semibold">{entry.university}</CardTitle>
                {entry.logoUrl && (
                  <img src={entry.logoUrl} alt={`${entry.university} logo`} className="w-10 h-10 rounded-full object-contain hidden sm:block" data-ai-hint="university logo"/>
                )}
              </div>
              <CardDescription className="text-md text-primary">{entry.degree}</CardDescription>
            </CardHeader>
            <CardContent>
              {entry.specialization && (
                <p className="text-muted-foreground mb-1 flex items-center">
                  <Briefcase className="mr-2 h-4 w-4 text-primary" /> {/* Using Briefcase for specialization */}
                  {entry.specialization}
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
