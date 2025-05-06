import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const profileData = {
  name: 'Shubhangi Katariyar',
  introLine: 'Passionate AI Engineer driving innovation with Machine Learning and Deep Learning.',
  profileImageUrl: 'https://picsum.photos/seed/shubhangi/200/200', // Placeholder, replace with actual image
  resumeUrl: '/resume_shubhangi_katariyar.pdf', // Placeholder: replace with actual path to resume.pdf in /public
};

export function ProfileIntro() {
  const { name, introLine, profileImageUrl, resumeUrl } = profileData;

  return (
    <section id="intro" className="py-12 bg-card shadow-lg rounded-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        <Avatar className="w-40 h-40 md:w-48 md:h-48 border-4 border-primary shadow-xl">
          <AvatarImage src={profileImageUrl} alt={name} data-ai-hint="professional portrait woman" />
          <AvatarFallback>{name.substring(0, 1)}{name.split(' ')[1]?.[0] || ''}</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">{name}</h1>
          <p className="text-xl md:text-2xl text-primary font-semibold mb-6">{introLine}</p>
          <Button asChild size="lg">
            <a href={resumeUrl} download={`${name.replace(' ', '_')}_Resume.pdf`}>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
