export default function About() {
  const skills = [
    "Python",
    "Java",
    "C",
    "JavaScript",
    "TypeScript",
    "SQL",
    "Git",
    "Linux",
    "Docker",
    "VS Code",
    "APIs",
    "Databases",
    "Object-Oriented Programming",
  ];

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <section>
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-400">
          About Me
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          Building practical software skills.
        </h1>

        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Through my projects, I’ve worked with TypeScript, JavaScript,
          PostgreSQL, Docker and frontend frameworks. Alongside university, my
          work experience in retail and tutoring has helped me develop
          communication, problem-solving and time management skills.
        </p>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">
          Beyond computer science, I have experience tutoring Maths and English at
          Kumon UK, helping students improve confidence and understanding across
          different age groups. I have also worked as a Retail Assistant at The
          Entertainer, developing communication, teamwork and customer service skills
          in a fast-paced environment.
        </p>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800">
          <h2 className="text-xl font-semibold">Education</h2>
          <p className="mt-3 text-slate-300">
            BSc Computer Science at the University of Manchester.
          </p>
          <p className="mt-2 text-slate-400">Expected grade: 2:1</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800">
          <h2 className="text-xl font-semibold">Experience</h2>
          <p className="mt-3 text-slate-300">
            Retail Assistant at The Entertainer and Maths & English Tutor at
            Kumon.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-slate-800">
          <h2 className="text-xl font-semibold">Focus</h2>
          <p className="mt-3 text-slate-300">
            Full-stack development, APIs, databases and clean responsive user
            interfaces.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold">Technical Skills</h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-slate-800"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-2xl border border-slate-800 bg-slate-900 p-8">
        <h2 className="text-3xl font-bold">Currently</h2>

        <p className="mt-4 max-w-3xl leading-8 text-slate-300">
          I’m continuing to strengthen my programming foundations through my
          Computer Science degree while building projects that improve my skills
          in modern web development, software design and backend systems.
        </p>

        <a
          href="/Daud-Khan-CV.pdf"
          download
          className="mt-6 inline-block rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition-all duration-300 hover:scale-[1.02] hover:bg-cyan-300"
        >
          Download CV
        </a>
      </section>
    </main>
  );
}