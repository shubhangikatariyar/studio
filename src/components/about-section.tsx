
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent } from '@/components/ui/card';

const profileData = {
  name: 'Shubhangi Katariyar',
  profileImageUrl: '/studio/profile-picture.jpg',
  aboutMeParagraphs: [
    "Hello there!",
    "I am a Machine Learning graduate student at the University of Wisconsin–Madison, bringing over four years of industry experience in architecting and deploying scalable AI solutions. My professional background includes impactful roles at Tata Consultancy Services (TCS) and Reserve Bank Information Technology (ReBIT).",
    "My technical expertise centers around Responsible AI, Natural Language Processing (NLP), and the development of intelligent Chatbots and Autonomous Agents. I am deeply passionate about translating complex data into robust, real-world machine learning systems that solve challenging problems.",
    "I am actively exploring new opportunities in the AI and ML space. Let’s connect and build the future of AI together!"
  ],
};

export function AboutSection() {
  const { name, profileImageUrl, aboutMeParagraphs } = profileData;

  return (
    <section id="about" className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-12 flex flex-col items-center">
          <Avatar className="w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 border-4 border-primary shadow-xl mb-4">
            <AvatarImage src={profileImageUrl} alt={name} data-ai-hint="profile picture" />
            <AvatarFallback>{name.substring(0, 1)}{name.split(' ')[1]?.[0] || ''}</AvatarFallback>
          </Avatar>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">{name}</h1>
        </div>
        
        <div className="mt-12">
          <Card className="max-w-3xl mx-auto shadow-xl bg-card text-card-foreground">
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
