
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const profileData = {
  name: 'Shubhangi Katariyar',
  profileImageUrl: 'https://placehold.co/288x288.png',
  aboutMeParagraph: "I'm a graduate student at the University of Wisconsin–Madison with a strong interest in machine learning and applied AI. Before pursuing my master's, I worked for over 3 years at Tata Consultancy Services (TCS), where I developed and deployed AI-driven solutions across domains such as NLP, computer vision, and cybersecurity. I'm passionate about building scalable ML systems that create real-world impact, and I’m actively exploring opportunities in research and industry where I can continue solving complex problems with data and algorithms."
};

export function AboutSection() {
  const { name, profileImageUrl, aboutMeParagraph } = profileData;

  return (
    <section id="about" className="py-16 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8 flex flex-col items-center">
          <Avatar className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 border-4 border-primary shadow-xl mb-4">
            <AvatarImage src={profileImageUrl} alt={name} data-ai-hint="professional portrait woman" />
            <AvatarFallback>{name.substring(0, 1)}{name.split(' ')[1]?.[0] || ''}</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">{name}</h1>
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">💼 About Me</h2>
          <p className="text-lg text-foreground mb-8 leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
            {aboutMeParagraph}
          </p>
        </div>
      </div>
    </section>
  );
}
