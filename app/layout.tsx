import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Daud Khan Portfolio",
  description: "Computer Science Student Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/20 text-white">
        <nav className="border-b border-slate-800">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <h1 className="text-xl font-bold">Daud Khan</h1>

            <div className="flex gap-6">
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

        {children}
      </body>
    </html>
  );
}