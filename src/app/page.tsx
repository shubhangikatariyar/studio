import { AppHeader } from '@/components/layout/app-header';
import { AppFooter } from '@/components/layout/app-footer';
import { ProfileIntro } from '@/components/profile-intro';
import { EducationSection } from '@/components/education-section';
import { ExperienceSection } from '@/components/experience-section';
import { ProjectHighlights } from '@/components/project-highlights';
import { ConnectSection } from '@/components/connect-section';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ProfileIntro />
        <Separator className="my-12" />
        <EducationSection />
        <Separator className="my-12" />
        <ExperienceSection />
        <Separator className="my-12" />
        <ProjectHighlights />
        <Separator className="my-12" />
        <ConnectSection />
      </main>
      <AppFooter />
    </div>
  );
}
