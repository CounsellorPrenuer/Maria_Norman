import './globals.css';

export const metadata = {
  title: 'Maria Norman - Career Guidance & Mentorship',
  description: 'With over 30 years of experience in education, Maria Norman guides students and professionals.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900">
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <div className="font-bold text-2xl text-primary">Maria Norman</div>
            <nav className="hidden md:flex gap-6">
              <a href="#home" className="hover:text-primary transition">Home</a>
              <a href="#about" className="hover:text-primary transition">About Founder</a>
              <a href="#services" className="hover:text-primary transition">Services</a>
              <a href="#packages" className="hover:text-primary transition">Mentoria Packages</a>
              <a href="#testimonials" className="hover:text-primary transition">Testimonials</a>
              <a href="#contact" className="hover:text-primary transition">Contact Us</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-slate-900 text-white py-12 text-center">
          <p>© 2026 Maria Norman. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
