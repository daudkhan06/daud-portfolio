const projects = [
  {
    title: "Audora – Music Review Site",
    description:
      "Music review platform using SolidStart, PostgreSQL and Docker.",
  },
  {
    title: "Foundation Year Project",
    description:
      "Responsive web app with reusable UI components using HTML, CSS and JavaScript.",
  },
];

export default function Projects() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="text-5xl font-bold">Projects</h1>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 bg-slate-900 hover:bg-slate-800 transition-all duration-300 hover:scale-105"
          >
            <h2 className="text-2xl font-semibold">
              {project.title}
            </h2>

            <p className="mt-4 text-slate-300">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}