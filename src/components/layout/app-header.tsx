
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ThemeSwitcher } from './theme-switcher';

export function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-card/90 dark:bg-card/80 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ThemeSwitcher />
          <Link href="/" className="text-xl font-semibold text-gray-100 hover:text-primary transition-colors">
            Shubhangi Katariyar
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          <Button variant="ghost" asChild className="text-gray-200 hover:text-primary">
            <Link href="#about">About</Link>
          </Button>
          <Button variant="ghost" asChild className="text-gray-200 hover:text-primary">
            <Link href="#education">Education</Link>
          </Button>
          <Button variant="ghost" asChild className="text-gray-200 hover:text-primary">
            <Link href="#experience">Experience</Link>
          </Button>
          <Button variant="ghost" asChild className="text-gray-200 hover:text-primary">
            <Link href="#projects">Projects</Link>
          </Button>
          <Button variant="ghost" asChild className="text-gray-200 hover:text-primary">
            <Link href="#contact">Contact</Link>
          </Button>
        </nav>
        {/* TODO: Add mobile navigation menu */}
      </div>
    </header>
  );
}
