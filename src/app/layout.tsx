
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Image from 'next/image';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Shubhangi Katariyar - AI Engineer Portfolio',
  description: 'Portfolio of Shubhangi Katariyar, showcasing AI/ML projects, education, and experience.',
  icons: null,
};

const InitializeTheme = () => {
  const script = `
    (function() {
      let theme = 'dark'; // Default to dark
      try {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'light' || storedTheme === 'dark') { // Check for valid theme values
          theme = storedTheme;
        } else {
          // If no valid stored theme, 'theme' remains 'dark' (our default).
          // System preference check was previously removed to enforce dark default.
        }
      } catch (e) {
        // localStorage might not be available or accessible
        // Theme remains 'dark' (our default)
      }
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        // If theme is 'light', ensure 'dark' class is removed.
        document.documentElement.classList.remove('dark');
      }
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased h-full`}>
        <div className="fixed inset-0 -z-20">
           <Image
            src="/studio/background-image.jpg"
            alt="Abstract dark background"
            fill
            className="object-cover hidden dark:block"
            quality={80}
            priority
          />
          <Image
            src="/studio/White-background.png"
            alt="Abstract white background"
            fill
            className="object-cover block dark:hidden"
            quality={80}
            priority
          />
        </div>
        <div className="fixed inset-0 -z-10 bg-white/20 dark:bg-black/60"></div>
        <InitializeTheme />
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
