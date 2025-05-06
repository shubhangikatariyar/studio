import Link from 'next/link';
import { MountainSnow } from 'lucide-react'; // Using a generic icon for branding

export function AppHeader() {
  return (
    <header className="border-b bg-card shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-xl font-semibold hover:text-primary transition-colors">
          <MountainSnow className="h-6 w-6 text-primary" />
          My Showcase
        </Link>
        {/* Future: Navigation items or theme toggle can be added here */}
      </div>
    </header>
  );
}
