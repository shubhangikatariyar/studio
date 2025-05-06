import Image from 'next/image';
import { Linkedin, Github, Mail, Download } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import type { SocialLink } from '@/types';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

interface ProfileHeaderProps {
  name: string;
  role: string;
  experience: string;
  profileImageUrl: string;
  resumeUrl: string; // URL to the resume PDF in /public
  socialLinks: SocialLink[];
}

const profileData: ProfileHeaderProps = {
  name: 'Jane Doe',
  role: 'AI Engineer at TCS',
  experience: '3 Years of Experience',
  profileImageUrl: 'https://picsum.photos/seed/profile/200/200',
  resumeUrl: '/resume.pdf', // Placeholder: replace with actual path to resume.pdf in /public
  socialLinks: [
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/janedoe-portfolio', icon: Linkedin, ariaLabel: "Jane Doe's LinkedIn Profile" },
    { platform: 'GitHub', url: 'https://github.com/janedoe-portfolio', icon: Github, ariaLabel: "Jane Doe's GitHub Profile" },
    { platform: 'Email', url: 'mailto:jane.doe@example.com', icon: Mail, ariaLabel: "Email Jane Doe" },
  ],
};

export function ProfileHeader() {
  const { name, role, experience, profileImageUrl, resumeUrl, socialLinks } = profileData;

  return (
    <div className="bg-card p-6 rounded-lg shadow-md flex flex-col items-center text-center">
      <Avatar className="w-32 h-32 mb-4 border-4 border-primary shadow-lg">
        <AvatarImage src={profileImageUrl} alt={name} data-ai-hint="professional portrait" />
        <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
      </Avatar>
      <h1 className="text-3xl font-bold text-foreground mb-1">{name}</h1>
      <p className="text-primary font-semibold text-lg mb-1">{role}</p>
      <p className="text-muted-foreground text-md mb-4">{experience}</p>
      
      <div className="flex space-x-4 mb-6">
        {socialLinks.map((link) => (
          <Tooltip key={link.platform}>
            <TooltipTrigger asChild>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.ariaLabel}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <link.icon className="w-6 h-6" />
              </a>
            </TooltipTrigger>
            <TooltipContent>
              <p>{link.platform}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
      
      <Button asChild size="lg" className="w-full">
        <a href={resumeUrl} download={`${name.replace(' ', '_')}_Resume.pdf`}>
          <Download className="mr-2 h-5 w-5" />
          Download Resume
        </a>
      </Button>
      {/* For recruiters: Contact info could be reiterated here or in a separate section if needed */}
      <p className="mt-4 text-sm text-muted-foreground">
        Contact: <a href="mailto:jane.doe@example.com" className="text-primary hover:underline">jane.doe@example.com</a>
      </p>
    </div>
  );
}
