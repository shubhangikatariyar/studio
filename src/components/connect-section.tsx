import { Linkedin, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { SocialLink } from '@/types';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const socialLinks: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://linkedin.com/in/shubhangi-katariyar-portfolio', icon: Linkedin, ariaLabel: "Shubhangi Katariyar's LinkedIn Profile" },
  { platform: 'GitHub', url: 'https://github.com/shubhangik S', icon: Github, ariaLabel: "Shubhangi Katariyar's GitHub Profile" },
  { platform: 'Email', url: 'mailto:katariyar@wisc.edu', icon: Mail, ariaLabel: "Email Shubhangi Katariyar" },
];

export function ConnectSection() {
  return (
    <section id="connect" aria-labelledby="connect-title" className="py-12 bg-card shadow-lg rounded-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="connect-title" className="text-3xl font-bold text-foreground mb-8">
          Connect With Me
        </h2>
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link) => (
            <Tooltip key={link.platform}>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" asChild className="w-12 h-12 sm:w-14 sm:h-14 rounded-full">
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="text-primary hover:text-primary-foreground hover:bg-primary transition-colors"
                  >
                    <link.icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.platform}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
        <p className="text-muted-foreground">
          Feel free to reach out via email: <a href="mailto:katariyar@wisc.edu" className="text-primary hover:underline">shubhangik19@gmail.com</a>
        </p>
      </div>
    </section>
  );
}
