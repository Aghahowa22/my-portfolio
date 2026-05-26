import "./App.css";
import { ArrowRight, ExternalLink,  Mail, Sparkles,  } from "lucide-react";

const projects = [
  {
    title: "Real time currency converter",
    description:
      "A real-time currency converter built with Html, css and javascript, it gives instant up-to-date exchange rates for multiple world currencies. the application fetches data from a reliable financial API to display current rates as they fluctuate in global foreign exchange markets.",
    tags: ["Html", "Css", "Javascript, API Integration"],
    link: "https://lucky-kataifi-725a98.netlify.app/",
  },
  {
    title: "Github User Search Engine",
    description:
      "A simple app to search for Github users and display links to their profiles, number of repositories, and followers.",
    tags: ["React.Js", "API Integration", "Vite"],
    link: "https://effervescent-flan-f5b516.netlify.app/",
  },
  {
    title: "Quick Notes",
    description:
      "Real-time note-taking app with a clean interface and seamless synchronization that allows users to create accounts, track and jot down their ideals and daily activities, using firebase as authentication and database.",
    tags: ["Vite", "Tailwind", "Firebase Auth & Firestore"],
    link: "https://dazzling-cocada-0283fa.netlify.app/",
  },
  {
    title: "Nigerian PAYE Tax Calculator",
    description:
      "A simple app to calculate Nigerian tax PAYE based on user input, user income, user income deductions, and current tax rates. the web application allows users to create accounts or sign in useing google authentication, and it also stores the user data in firebase firestore database.",
    tags: ["Vite", "Tailwind", "Firebase", "Google Auth & Firestore"],
    link: "https://taxpalprojects.netlify.app/",
  },
  {
    title: "Learning Management System",
    description:
      "A comprehensive platform for managing and delivering educational content, tracking student progress, and facilitating interactive learning experiences.It allows users to create accounts, update their profiles, and access learning materials.",
    tags: [
      "Vite",
      "Tailwind",
      "Firebase",
      "Google Auth & Firestore",
      "Supabase storage",
    ],
    link: "https://spectacular-sherbet-2244f4.netlify.app/",
  },
 
];

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8 lg:py-14">
        <header className="flex flex-col gap-8 rounded-4xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/40 lg:p-12">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300/75">
                Front End Developer
              </p>
              <h1 className="mt-4 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Modern interfaces that feel fast, intuitive, and polished.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
                I build high-performance web experiences with React and
                Tailwind, focusing on clean design, reliable architecture, and
                delightful interactions.
              </p>
            </div>

            <div className="grid gap-3 rounded-3xl border border-slate-800 bg-slate-950/80 p-6 text-sm text-slate-300 shadow-lg shadow-slate-950/20 sm:max-w-xs">
              <div className="overflow-hidden rounded-[2.5rem] border border-slate-800 bg-slate-800/30">
                <img
                  src="/portfolio image.jpeg"
                  alt="Profile photo"
                  className="h-64 w-full object-cover object-center"
                />
                <div className="bg-linear-to-t from-slate-950/95 to-transparent px-4 py-4 text-left">
                  <p className="text-sm font-semibold text-white">Aghahowa Edosa</p>
                  <p className="text-xs text-slate-400">Front End Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-cyan-300">
                <Sparkles size={20} />
                <span>Available for freelance and full-time jobs</span>
              </div>
              <div className="space-y-3">
                <div className="rounded-2xl bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Experience
                  </p>
                  <p className="mt-2 text-xl font-medium text-white">
                    3+ years
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Primary stack
                  </p>
                  <p className="mt-2 text-xl font-medium text-white">
                    React · Tailwind · Vite
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-3">
              {[
                "React.Js",
                "Tailwind",
                "Firebase/Supabase",
                "Vite",
                "UI/UX",
                "PHP",
                "Animations",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-800 bg-slate-900/80 px-4 py-2 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                View work <ArrowRight size={18} />
              </a>
              <a
                href="mailto:raymondedosa400@gmail.com"
                className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-cyan-400"
              >
                Contact me <Mail size={18} />
              </a>
            </div>
          </div>
        </header>

        <section className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-start">
          <div className="space-y-8">
            <div className="rounded-4xl border border-slate-800 bg-slate-900/85 p-8 shadow-xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                Featured projects
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Selected work
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Six polished projects that demonstrate my ability to deliver
                refined front-end experiences for product teams, marketing
                initiatives, and user-facing dashboards.
              </p>
            </div>

            <div id="projects" className="grid gap-6 sm:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="group rounded-4xl border border-slate-800 bg-slate-900/85 p-6 transition hover:-translate-y-1 hover:border-cyan-500/40 hover:bg-slate-900"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-cyan-300">
                      Featured
                    </p>
                    <span className="text-sm text-slate-500">Web</span>
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200"
                  >
                    View case study <ExternalLink size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-6 rounded-4xl border border-slate-800 bg-slate-900/85 p-8 shadow-xl shadow-slate-950/20">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                About me
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-white">
                Design-driven development
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                I help product teams turn ideas into polished UI. My focus is on
                performance, scalable component systems, and interfaces that
                feel natural across devices.
              </p>
            </div>

            <div className="grid gap-4 rounded-3xl bg-slate-950/90 p-6">
              <div className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-900/90 p-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                    Role
                  </p>
                  <p className="mt-2 font-semibold text-white">
                    Lead Front End Developer
                  </p>
                </div>
                <Sparkles size={24} className="text-cyan-300" />
              </div>
              <div className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-900/90 p-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                    Tools
                  </p>
                  <p className="mt-2 font-semibold text-white">
                    React, Tailwind, Vite, Figma
                  </p>
                </div>
                <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-cyan-300">
                  Fast UI
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-6 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">
                Let’s collaborate
              </p>
              <p className="mt-4 leading-7 text-slate-300">
                I’m available for front-end projects, product launches, and
                interface upgrades. Let’s talk about how I can help bring your
                next experience to life.
              </p>
              <a
                href="mailto:raymondedosa400@gmail.com"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-3 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
              >
                Say hello <ArrowRight size={16} />
              </a>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default App;
