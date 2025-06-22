
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const basePath = process.env.NODE_ENV === 'production' ? '/studio' : '';

const profileData = {
  name: 'Shubhangi Katariyar',
  profileImageUrl: `${basePath}/profile-picture.jpg`,
  aboutMeParagraphs: [
    "Hey there! I’m a graduate student at the University of Wisconsin–Madison, where I’m diving deep into machine learning and applied AI. Before this, I spent over 3 years at Tata Consultancy Services (TCS), building and deploying AI-powered solutions in areas like natural language processing and computer vision.",
    "I’m all about turning data into impactful, scalable ML systems — the kind that don’t just work in theory, but solve real problems in the real world. Whether it's research or industry, I’m excited by challenges that push boundaries and create meaningful change.",
    "I’m currently open to opportunities in machine learning and AI — let’s connect!"
  ],
};

export function AboutSection() {
  const { name, profileImageUrl, aboutMeParagraphs } = profileData;

  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* FloatingNetworkBackground removed, page will have global background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-12 flex flex-col items-center">
          <Avatar className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 border-4 border-primary shadow-xl mb-4">
            <AvatarImage src={profileImageUrl} alt={name} data-ai-hint="profile picture" />
            <AvatarFallback>{name.substring(0, 1)}{name.split(' ')[1]?.[0] || ''}</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-50">{name}</h1>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6 text-center">
            <span role="img" aria-label="Briefcase emoji" className="mr-2">💼</span>
            About Me
          </h2>
          <Card className="max-w-3xl mx-auto shadow-xl bg-card/90 dark:bg-card/80 text-card-foreground">
            <CardContent className="p-6 md:p-8">
              <div className="space-y-4 text-lg text-left leading-relaxed">
                {aboutMeParagraphs.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
