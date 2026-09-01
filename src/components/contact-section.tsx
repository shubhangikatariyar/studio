
import { Linkedin, Github, Download, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { SocialLink } from '@/types';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';

const GoogleScholarIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
  </svg>
);

const ResearchGateIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v19.056c0 1.368-1.104 2.472-2.46 2.472H4.46A2.466 2.466 0 0 1 2 21.528V2.472C2 1.104 3.104 0 4.46 0h15.08zM15.42 17.65c.67 0 1.22-.24 1.65-.72.43-.49.65-1.12.65-1.9 0-.82-.22-1.46-.66-1.92-.44-.47-1-.7-1.68-.7h-2.14v5.24h2.18zm-2.18-7.14h1.86c.58 0 1.05-.18 1.41-.54.36-.37.54-.86.54-1.47 0-.64-.18-1.13-.54-1.48-.36-.35-.83-.52-1.41-.52h-1.86v4.01zm-2.58 9.17H8.38V4.32h4.86c1.36 0 2.45.38 3.27 1.14.82.76 1.23 1.76 1.23 3 0 .86-.23 1.62-.69 2.28-.46.66-1.1 1.13-1.92 1.41.97.24 1.74.74 2.31 1.5.57.76.85 1.7.85 2.82 0 1.34-.44 2.43-1.32 3.27-.88.84-2.05 1.26-3.51 1.26h-2.82z" />
  </svg>
);

const socialLinks: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://in.linkedin.com/in/shubhangi-katariyar', icon: Linkedin, ariaLabel: "Shubhangi Katariyar's LinkedIn Profile" },
  { platform: 'GitHub', url: 'https://github.com/shubhangikatariyar', icon: Github, ariaLabel: "Shubhangi Katariyar's GitHub Profile" },
  { platform: 'Google Scholar', url: 'https://scholar.google.com/citations?user=07HQWI4AAAAJ&hl=en&oi=ao', icon: GoogleScholarIcon, ariaLabel: "Shubhangi Katariyar's Google Scholar Profile" },
  { platform: 'ResearchGate', url: 'https://www.researchgate.net/profile/Shubhangi-Katariyar-2/research', icon: ResearchGateIcon, ariaLabel: "Shubhangi Katariyar's ResearchGate Profile" },
  { platform: 'Twitter', url: 'https://x.com/shubhangikat', icon: Twitter, ariaLabel: "Shubhangi Katariyar's Twitter Profile" }, 
];

const contactProfileData = {
  name: 'Shubhangi Katariyar',
  resumeUrl: `/studio/resume.pdf`,
};

export function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="py-12 bg-card shadow-lg rounded-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="contact-title" className="text-3xl font-bold text-primary mb-8">
          <span role="img" aria-label="Envelope emoji" className="mr-2 text-primary">✉️</span>
          Contact Me
        </h2>
        <div className="mb-10">
          <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
            <a href={contactProfileData.resumeUrl} download="Shubhangi_Resume.pdf">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </a>
          </Button>
        </div>
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link) => (
            <Tooltip key={link.platform}>
              <TooltipTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-border hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-200 shadow-sm hover:shadow-md hover:scale-105 group"
                >
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="text-foreground group-hover:text-primary-foreground transition-colors flex items-center justify-center w-full h-full"
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
          Feel free to reach out via email:{' '}
          <a href="mailto:katariyar.shubhangi@gmail.com" className="text-primary hover:underline">
            katariyar.shubhangi@gmail.com
          </a>{' '}
          or{' '}
          <a href="mailto:katariyar@wisc.edu" className="text-primary hover:underline">
            katariyar@wisc.edu
          </a>
        </p>
      </div>
    </section>
  );
}
