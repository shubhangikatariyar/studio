
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import FloatingNetworkBackground from './floating-network-background';
import { Card, CardContent } from '@/components/ui/card';

const profileData = {
  name: 'Shubhangi Katariyar',
  profileImageUrl: 'https://placehold.co/288x288.png',
  aboutMeParagraph: "I'm a graduate student at the University of Wisconsin–Madison with a strong interest in machine learning and applied AI. Before pursuing my master's, I worked for over 3 years at Tata Consultancy Services (TCS), where I developed and deployed AI-driven solutions across domains such as NLP, computer vision, and cybersecurity. I'm passionate about building scalable ML systems that create real-world impact, and I’m actively exploring opportunities in research and industry where I can continue solving complex problems with data and algorithms."
};

export function AboutSection() {
  const { name, profileImageUrl, aboutMeParagraph } = profileData;

  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-background text-foreground">
      <FloatingNetworkBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-12 flex flex-col items-center">
          <Avatar className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 border-4 border-primary shadow-xl mb-4">
            <AvatarImage src={profileImageUrl} alt={name} data-ai-hint="professional portrait woman" />
            <AvatarFallback>{name.substring(0, 1)}{name.split(' ')[1]?.[0] || ''}</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-5xl font-bold">{name}</h1>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6 text-center">
            <span role="img" aria-label="Briefcase emoji" className="mr-2">💼</span>
            About Me
          </h2>
          <Card className="max-w-3xl mx-auto shadow-xl bg-card text-card-foreground">
            <CardContent className="p-6 md:p-8">
              <p className="text-lg text-left leading-relaxed">
                {aboutMeParagraph}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
