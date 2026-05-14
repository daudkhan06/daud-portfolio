import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Daud Khan Portfolio",
  description: "Computer Science Student Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/20 text-white antialiased">
        <nav className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/70 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <Link
              href="/"
              className="text-xl font-bold transition-all duration-300 hover:text-cyan-400"
            >
              Daud Khan
            </Link>

            <div className="flex items-center gap-6 text-sm font-medium md:text-base">
              <Link
                href="/"
                className="transition-all duration-300 hover:scale-105 hover:text-cyan-400"
              >
                Home
              </Link>

              <Link
                href="/about"
                className="transition-all duration-300 hover:scale-105 hover:text-cyan-400"
              >
                About
              </Link>

              <Link
                href="/projects"
                className="transition-all duration-300 hover:scale-105 hover:text-cyan-400"
              >
                Projects
              </Link>

              <Link
                href="/contact"
                className="transition-all duration-300 hover:scale-105 hover:text-cyan-400"
              >
                Contact
              </Link>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="mt-20 border-t border-slate-800">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate-400 md:flex-row">
            <p>Built with Next.JS & Tailwind CSS</p>

            <div className="flex gap-6">
              <a
                href="https://github.com/daudkhan06"
                target="_blank"
                className="transition-all duration-300 hover:text-cyan-400"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/daud-khan-cs"
                target="_blank"
                className="transition-all duration-300 hover:text-cyan-400"
              >
                LinkedIn
              </a>

              <a
                href="mailto:d.n.k@me.com"
                className="transition-all duration-300 hover:text-cyan-400"
              >
                Email
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}