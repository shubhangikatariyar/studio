
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';

const profileData = {
  name: 'Shubhangi Katariyar',
  profileImageUrl: 'https://placehold.co/288x288.png', 
  resumeUrl: '/resume_shubhangi_katariyar.pdf',
  aboutMeParagraph: "I'm a graduate student at the University of Wisconsin–Madison with a strong interest in machine learning and applied AI. Before pursuing my master's, I worked for over 3 years at Tata Consultancy Services (TCS), where I developed and deployed AI-driven solutions across domains such as NLP, computer vision, and cybersecurity. I'm passionate about building scalable ML systems that create real-world impact, and I’m actively exploring opportunities in research and industry where I can continue solving complex problems with data and algorithms."
};

export function AboutSection() {
  const { name, profileImageUrl, resumeUrl, aboutMeParagraph } = profileData;

  return (
    <section id="about" className="py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center text-center md:text-left gap-8 md:gap-12">
        <div className="flex-shrink-0">
          <Avatar className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 border-4 border-primary shadow-xl">
            <AvatarImage src={profileImageUrl} alt={name} data-ai-hint="professional portrait woman" />
            <AvatarFallback>{name.substring(0, 1)}{name.split(' ')[1]?.[0] || ''}</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">{name}</h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">💼 About Me</h2>
          <p className="text-lg text-foreground mb-8 leading-relaxed">
            {aboutMeParagraph}
          </p>
          <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            <a href={resumeUrl} download={`${name.replace(/\s+/g, '_')}_Resume.pdf`}>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
