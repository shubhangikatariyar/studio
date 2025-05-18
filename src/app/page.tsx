
import { AppHeader } from '@/components/layout/app-header';
import { AppFooter } from '@/components/layout/app-footer';
import { AboutSection } from '@/components/about-section';
import { EducationSection } from '@/components/education-section';
import { ExperienceSection } from '@/components/experience-section';
import { ProjectHighlights } from '@/components/project-highlights';
import { ContactSection } from '@/components/contact-section';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div
      className="flex flex-col min-h-screen relative"
      style={{
        backgroundImage: "url('https://placehold.co/1920x1080.png')", // Updated placeholder
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
      data-ai-hint="abstract network" // Added hint based on user image
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <AppHeader />
        <main className="flex-grow">
          <AboutSection />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Separator className="my-12 bg-gray-50/30" />
            <EducationSection />
            <Separator className="my-12 bg-gray-50/30" />
            <ExperienceSection />
            <Separator className="my-12 bg-gray-50/30" />
            <ProjectHighlights />
            <Separator className="my-12 bg-gray-50/30" />
            <ContactSection />
          </div>
        </main>
        <AppFooter />
      </div>
    </div>
  );
}
