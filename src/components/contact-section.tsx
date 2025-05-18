
import { Linkedin, Github, Download, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { SocialLink } from '@/types';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const socialLinks: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://in.linkedin.com/in/shubhangi-katariyar', icon: Linkedin, ariaLabel: "Shubhangi Katariyar's LinkedIn Profile" },
  { platform: 'GitHub', url: 'https://github.com/shubhangikatariyar', icon: Github, ariaLabel: "Shubhangi Katariyar's GitHub Profile" },
  { platform: 'Twitter', url: '#', icon: Twitter, ariaLabel: "Shubhangi Katariyar's Twitter Profile" }, // Placeholder URL
];

const contactProfileData = {
  name: 'Shubhangi Katariyar',
  resumeUrl: '/resume_shubhangi_katariyar.pdf',
};

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-12 bg-card/90 dark:bg-card/80 shadow-lg rounded-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="contact-title" className="text-3xl font-bold text-foreground mb-8">
          <span role="img" aria-label="Email emoji" className="mr-2">📧</span>
          Contact Me
        </h2>
        <div className="mb-10">
          <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
            <a href={contactProfileData.resumeUrl} download={`${contactProfileData.name.replace(/\s+/g, '_')}_Resume.pdf`}>
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
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
          Feel free to reach out via email: <a href="mailto:katariyar.shubhangi@gmail.com" className="text-primary hover:underline">katariyar.shubhangi@gmail.com</a>
        </p>
      </div>
    </section>
  );
}
