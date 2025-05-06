import { AppHeader } from '@/components/layout/app-header';
import { AppFooter } from '@/components/layout/app-footer';
import { ProfileHeader } from '@/components/profile-header';
import { ProjectHighlights } from '@/components/project-highlights';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <AppHeader />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:gap-12">
          <aside className="lg:w-1/3 xl:w-1/4 mb-8 lg:mb-0 lg:sticky lg:top-[calc(4rem+2rem)] self-start">
            {/* The 4rem is header height (h-16), 2rem is for some spacing */}
            <ProfileHeader />
          </aside>
          <section className="lg:w-2/3 xl:w-3/4">
            <ProjectHighlights />
          </section>
        </div>
      </main>
      <AppFooter />
    </div>
  );
}
