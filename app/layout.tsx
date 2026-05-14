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
      <body className="bg-slate-950 text-white">
        <nav className="border-b border-slate-800">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <h1 className="text-xl font-bold">Daud Khan</h1>

            <div className="flex gap-6">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
              <Link href="/projects">Projects</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}