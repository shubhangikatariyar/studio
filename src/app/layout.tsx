
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Shubhangi Katariyar - AI Engineer Portfolio',
  description: 'Portfolio of Shubhangi Katariyar, showcasing AI/ML projects, education, and experience.',
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased h-full`}>
        <InitializeTheme />
        <TooltipProvider>
          {children}
          <Toaster />
        </TooltipProvider>
      </body>
    </html>
  );
}
