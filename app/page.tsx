export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-cyan-400">Computer Science Student</p>

      <h1 className="mt-4 text-6xl font-bold">
        Hi, I’m Daud Khan.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-300">
        I build full-stack applications using React, TypeScript,
        Next.js and modern web technologies.
      </p>

      <div className="mt-10 flex gap-4">
        <a
          href="/Daud-Khan-CV.pdf"
          download
          className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950"
        >
          Download CV
        </a>

        <a
          href="https://github.com/daudkhan06"
          target="_blank"
          className="rounded-xl border border-slate-700 px-6 py-3"
        >
          GitHub
        </a>
      </div>
    </main>
  );
}