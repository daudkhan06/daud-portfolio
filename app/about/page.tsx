export default function About() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="text-5xl font-bold">About Me</h1>

      <p className="mt-6 text-lg text-slate-300">
        I am a Computer Science student at the University of Manchester
        interested in software engineering, web development and building
        scalable applications.
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold">Skills</h2>

        <ul className="mt-4 grid gap-3 md:grid-cols-2">
          <li>TypeScript</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>Docker</li>
          <li>PostgreSQL</li>
          <li>Java</li>
          <li>Python</li>
        </ul>
      </div>
    </main>
  );
}