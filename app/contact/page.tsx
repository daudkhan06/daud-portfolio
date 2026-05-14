export default function Contact() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section>
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          Contact
        </p>

        <h1 className="mt-4 text-5xl font-bold">Let’s connect.</h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
          I’m open to internship opportunities, software engineering experience
          and projects where I can continue developing my technical skills.
        </p>
      </section>

      <section className="mt-12 grid gap-6 md:grid-cols-3">
        <a
          href="mailto:d.n.k@me.com"
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/50 hover:bg-slate-800"
        >
          <p className="text-sm text-cyan-400">Email</p>
          <h2 className="mt-3 text-xl font-semibold">d.n.k@me.com</h2>
          <p className="mt-3 text-slate-400">Best way to contact me.</p>
        </a>

        <a
          href="https://linkedin.com/in/daud-khan-cs"
          target="_blank"
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/50 hover:bg-slate-800"
        >
          <p className="text-sm text-cyan-400">LinkedIn</p>
          <h2 className="mt-3 text-xl font-semibold">Connect with me</h2>
          <p className="mt-3 text-slate-400">
            View my profile and professional updates.
          </p>
        </a>

        <a
          href="https://github.com/daudkhan06"
          target="_blank"
          className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:scale-[1.02] hover:border-cyan-400/50 hover:bg-slate-800"
        >
          <p className="text-sm text-cyan-400">GitHub</p>
          <h2 className="mt-3 text-xl font-semibold">View my code</h2>
          <p className="mt-3 text-slate-400">
            Explore my projects and repositories.
          </p>
        </a>
      </section>

      <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="text-3xl font-bold">Recruiters</h2>

        <p className="mt-4 max-w-3xl leading-8 text-slate-300">
          For internship, placement or early-career software engineering
          opportunities, you can download my CV or contact me directly by email.
        </p>

        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="/Daud-Khan-CV.pdf"
            download
            className="rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-300"
          >
            Download CV
          </a>

          <a
            href="mailto:d.n.k@me.com"
            className="rounded-xl border border-slate-700 px-6 py-3 font-semibold transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800"
          >
            Email Me
          </a>
        </div>
      </section>
    </main>
  );
}