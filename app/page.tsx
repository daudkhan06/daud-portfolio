export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-24">
      <p className="text-cyan-400">BSc Computer Science Student</p>

      <h1 className="mt-4 text-6xl font-bold">
        Hi, I’m Daud Khan.
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-slate-300">
        I’m a Computer Science student at the University of Manchester,
        currently building my skills in full-stack development, databases,
        APIs and software engineering.
      </p>

      <p className="mt-4 max-w-2xl text-lg text-slate-300">
        I have experience working with TypeScript, JavaScript, Python, Java,
        C, SQL, Docker and PostgreSQL. My projects include Audora, a music
        review site with authentication and APIs, and a responsive foundation
        year web project.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="/Daud-Khan-CV.pdf"
          download
          className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-300"
        >
          Download CV
        </a>

        <a
          href="https://github.com/daudkhan06"
          target="_blank"
          className="rounded-xl border border-slate-700 px-6 py-3 font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800"
        >
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/daud-khan-cs"
          target="_blank"
          className="rounded-xl border border-slate-700 px-6 py-3 font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800"
        >
          LinkedIn
        </a>
      </div>

      <section className="mt-20 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800">
          <h2 className="text-xl font-semibold">Education</h2>
          <p className="mt-3 text-slate-300">
            BSc Computer Science at the University of Manchester, with an
            expected 2:1.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800">
          <h2 className="text-xl font-semibold">Projects</h2>
          <p className="mt-3 text-slate-300">
            Built Audora, a music review site using TypeScript, SolidStart,
            PostgreSQL and Docker.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800">
          <h2 className="text-xl font-semibold">Skills</h2>
          <p className="mt-3 text-slate-300">
            Python, Java, C, JavaScript, TypeScript, SQL, Git, Linux, Docker
            and APIs.
          </p>
        </div>
      </section>
    </main>
  );
}