
export function AppFooter() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t mt-auto bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Shubhangi Katariyar. All rights reserved.</p>
      </div>
    </footer>
  );
}
