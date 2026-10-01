import "./App.css";
import { useState } from "react";
import {
  ArrowRight,
  ExternalLink,
  Loader2,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";

const projects = [
  {
    title: "Real time currency converter",
    description:
      "A real-time currency converter web app built with Html, css and javascript, it gives instant up-to-date exchange rates for multiple world currencies. the application fetches data from a reliable financial API to display current rates as they fluctuate in global foreign exchange markets.",
    tags: ["Html", "Css", "Javascript, API Integration"],
    image:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    link: "https://lucky-kataifi-725a98.netlify.app/",
    githubLink:
      "https://github.com/Aghahowa22/crypto_currency_converter_landing_page.git",
  },
  {
    title: "Github User Search Engine",
    description:
      "A simple web app to search for Github users and display links to their profiles, number of repositories, and followers.",
    tags: ["React.Js", "API Integration", "Vite"],
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    link: "https://effervescent-flan-f5b516.netlify.app/",
    githubLink:
      "https://github.com/Aghahowa22/Github_user_search_Engine-using-reactjs.git",
  },
  {
    title: "Quick Notes",
    description:
      "Real-time note-taking web app with a clean interface and seamless synchronization that allows users to create accounts, track and jot down their ideals and daily activities, using firebase as authentication and database.",
    tags: ["Vite", "Tailwind", "Firebase Auth & Firestore"],
    image:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    link: "https://dazzling-cocada-0283fa.netlify.app/",
    githubLink: "https://github.com/Aghahowa22/Quick_note.git",
  },
  {
    title: "Nigerian PAYE Tax Calculator",
    description:
      "A simple web app to calculate Nigerian tax PAYE based on user input, user income, user income deductions, and current tax rates. the web application allows users to create accounts or sign in using google authentication, and it also stores the user data in firebase firestore database.",
    tags: ["Vite", "Tailwind", "Firebase", "Google Auth & Firestore"],
    image:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    link: "https://taxpalprojects.netlify.app/",
    githubLink: "https://github.com/Aghahowa22/Yuki-project.git",
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
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    link: "https://spectacular-sherbet-2244f4.netlify.app/",
    githubLink: "https://github.com/Aghahowa22/learn-flow.git",
  },
  {
    title: "Student Registration Data System",
    description:
      "It is a centralized software platform designed to securely store, track, and manage all information related to a student's and Guardian/Parents, with an admin dashboard that can access the student information and modify it anytime ",
    tags: ["vite", "Css", "Firestore, Firebase auth"],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    link: "https://earnest-haupia-783137.netlify.app/",
    githubLink: "https://github.com/Aghahowa22/School_DB.git",
  },
  {
    title: "ledgerlite {Internship Project}",
    description:
      "It is a centralized software platform designed for small and medium, businesses to help track sales, expenses, inventory and export your data as a simple pdf document",
    tags: ["NextJS", "Typescript", "Tailwind", " authentication", "PostgreSQL"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    link: "https://orange-circle-internship-project2-g-eosin.vercel.app/",
    githubLink: "https://github.com/Aghahowa22/Ledgerlite.git",
  },
];

const contactDetails = [
  {
    label: "Email",
    value: "raymondedosa400@gmail.com",
    href: "mailto:raymondedosa400@gmail.com",
  },
  {
    label: "Location",
    value: "Nigeria",
    href: "#contact",
  },
  {
    label: "Response time",
    value: "Within 24 hours",
    href: "#contact",
  },
];

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function App() {
  const [formDatas, setFormDatas] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState("");

  const clearResult = () => {
    setResult("");
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormDatas((previousState) => ({
      ...previousState,
      [name]: value,
    }));

    if (result) {
      clearResult();
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setResult("");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "86d8e5ae-6f5e-4295-8466-f9b4adf4e304");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      const message = data.success
        ? "Thanks! Your message has been received, we will contact you shortly."
        : "Error sending message. try again later.";

      setResult(message);

      if (data.success) {
        setFormDatas(initialFormState);
      }

      window.setTimeout(() => {
        clearResult();
      }, 5000);
    } catch {
      const message = "Something went wrong try again later.";
      setResult(message);
      window.setTimeout(() => {
        clearResult();
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const emailAddress = "raymondedosa400@gmail.com";
  //   const emailSubject = `Portfolio inquiry from ${formData.name || "a potential client"}`;
  //   const emailBody = [
  //     `Name: ${formData.name}`,
  //     `Email: ${formData.email}`,
  //     `Subject: ${formData.subject}`,
  //     "",
  //     "Message:",
  //     formData.message,
  //   ].join("\n");

  //   window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
  //   setIsSubmitted(true);
  //   setFormData(initialFormState);
  // };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-8 lg:py-10">
        <header className="flex flex-col gap-6 rounded-4xl border border-slate-800 bg-slate-900/90 p-8 shadow-xl shadow-slate-950/40 lg:p-10">
          <div className="flex flex-col gap-6 lg:flex-row  lg:justify-between">
            <div className="max-w-2xl">
              <p className=" text-sm uppercase tracking-[0.35em] text-cyan-300/75">
                Front End Developer
              </p>
              <h1 className="mt-3 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Modern interfaces that feel fast, intuitive, and polished.
              </h1>
              <p className=" mt-4 max-w-xl text-lg leading-8 text-slate-300">
                I build high-performance web experiences with Vite, NextJs and
                Typescript, focusing on clean design, reliable architecture, and
                delightful interactions.<br></br> <br></br>I specialize in
                building fast, secure, and scalable web applications using
                modern Backend-as-a-Service (BaaS) platforms. Instead of
                managing heavy traditional servers, I leverage the unique
                strengths of both Firebase and Supabase to match the exact
                architectural needs of each project.
              </p>
            </div>

            <div className="hidden flex-1 lg:block">
              <div className="tech-scene">
                <div className="tech-orbit orbit-one" />
                <div className="tech-orbit orbit-two" />
                <span className="tech-badge tech-react">React</span>
                <span className="tech-badge tech-ts">TS</span>
                <span className="tech-badge tech-tailwind">Tailwind</span>
                <span className="tech-badge tech-firebase">Firebase</span>
                <span className="tech-badge tech-next">Next</span>
                <span className="tech-badge tech-vite">Vite</span>
                <span className="tech-badge tech-vite">Supabase</span>
              </div>
            </div>

            <div className="grid gap-2 rounded-3xl border border-slate-800 bg-slate-950/80 p-5 text-sm text-slate-300 shadow-lg shadow-slate-950/20 sm:max-w-xs">
              <div className="overflow-hidden rounded-4xl border border-slate-800 bg-slate-800/30">
                <img
                  src="/portfolio image.jpeg"
                  alt="Profile photo"
                  className=" w-full object-cover object-center "
                />
                <div className="bg-linear-to-t from-slate-950/95 to-transparent px-3 py-3 text-left">
                  <p className="text-sm font-semibold text-white">
                    Aghahowa Edosa
                  </p>
                  <p className="text-xs text-slate-400">Front End Developer</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-cyan-300 text-xs">
                <Sparkles size={18} />
                <span>Available for freelance and full-time jobs</span>
              </div>
              <div className="space-y-2">
                <div className="rounded-2xl bg-slate-900/80 p-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Experience
                  </p>
                  <p className="mt-1 text-lg font-medium text-white">
                    3+ years
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-900/80 p-3">
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                    Primary stack
                  </p>
                  <p className="mt-1 text-lg font-medium text-white">
                    Tailwind · Vite · NextJS · Typescript
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {[
                "React.Js",
                "Tailwind",
                "Firebase/Supabase",
                "Vite",
                "Typescript",
                "NextJS",
                "API Integration",
                "Animations",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-800 bg-slate-900/80 px-3 py-1.5 text-sm text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                View Projects <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/90 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-400"
              >
                Contact me <Mail size={16} />
              </a>
            </div>
          </div>
        </header>

        <section className="mt-8 grid gap-6  lg:items-start">
          <div className="space-y-8">
            <div className="rounded-4xl border border-slate-800 bg-slate-900/85 p-6 shadow-xl shadow-slate-950/20">
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                Featured projects
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white">
                Selected work
              </h2>
              <p className="mt-3 text-base leading-7 text-slate-300">
                Polished projects that demonstrate my ability to deliver refined
                front-end experiences for product teams, marketing initiatives,
                and user-facing dashboards.
              </p>
            </div>

            <div
              id="projects"
              className="grid gap-5 xl:grid-cols-2 sm:grid-cols-2"
            >
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
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="mt-5 h-48 w-full rounded-2xl border border-slate-800 object-cover"
                  />
                  <h3 className="mt-4 text-xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-slate-800/80 px-3 py-1 text-xs text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center  gap-10">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-8 inline-flex items-center  text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200"
                    >
                      View case study <ExternalLink size={16} />
                    </a>

                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-4 mt-8 inline-flex  items-center gap-2 text-sm font-semibold text-cyan-300 transition group-hover:text-cyan-200"
                    >
                      <svg
                        className="bg-amber-50 rounded-full "
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                      >
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                      </svg>
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="space-y-5 rounded-4xl border border-slate-800 bg-slate-900/85 p-6 shadow-xl shadow-slate-950/20">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                About me
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-white">
                Design-driven development
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                I help product teams turn ideas into polished UI. My focus is on
                performance, scalable component systems, and interfaces that
                feel natural across devices.
              </p>
            </div>

            <div className="grid gap-3 rounded-3xl bg-slate-950/90 p-4">
              <div className="flex items-center justify-between rounded-3xl border border-slate-800 bg-slate-900/90 p-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                    Role
                  </p>
                  <p className="mt-1 font-semibold text-white">
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
                  <p className="mt-1 font-semibold text-white">
                    Tailwind . Vite . Figma . NextJS . Typescript
                  </p>
                </div>
                <span className="rounded-full  text-center bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.35em] text-cyan-300">
                  Fast UI
                </span>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-800 bg-slate-950/90 p-4 text-sm text-slate-300">
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300/80">
                Let's collaborate
              </p>
              <p className="mt-3 leading-6 text-slate-300">
                I'm available for front-end projects, product launches, and
                interface upgrades. Let's talk about how I can help bring your
                next experience to life.
              </p>
              <a
                href="mailto:raymondedosa400@gmail.com"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-2 text-xs font-semibold text-cyan-200 transition hover:bg-cyan-500/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                Say hello <ArrowRight size={16} />
              </a>
            </div>
          </aside>
        </section>

        <section
          id="contact"
          className="mt-8 rounded-4xl border border-slate-800 bg-slate-900/85 p-6 shadow-xl shadow-slate-950/20 lg:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-300/80">
                Contact me
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-white">
                Let&apos;s build something great together
              </h2>
              <p className="mt-3 max-w-md text-base leading-7 text-slate-300">
                Have a product idea, redesign requirement, or front-end role in
                mind? Send a message and I&apos;ll get back to you with the next
                steps.
              </p>

              <div className="mt-6 space-y-3">
                {contactDetails.map((detail) => (
                  <a
                    key={detail.label}
                    href={detail.href}
                    className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/80 px-4 py-3 text-left text-sm text-slate-300 transition hover:border-cyan-500/40"
                  >
                    <span className="uppercase tracking-[0.25em] text-slate-500">
                      {detail.label}
                    </span>
                    <span className="font-medium text-white">
                      {detail.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <form
              // onSubmit={handleSubmit}
              onSubmit={onSubmit}
              className="rounded-3xl border border-slate-800 bg-slate-950/85 p-5 sm:p-6"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm text-slate-300">
                  <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-slate-500">
                    Name
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formDatas.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </label>

                <label className="block text-sm text-slate-300">
                  <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-slate-500">
                    Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={formDatas.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    required
                    disabled={isSubmitting}
                    className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                  />
                </label>
              </div>

              <label className="mt-5 block text-sm text-slate-300">
                <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-slate-500">
                  Subject
                </span>
                <input
                  type="text"
                  name="subject"
                  value={formDatas.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry"
                  required
                  disabled={isSubmitting}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </label>

              <label className="mt-5 block text-sm text-slate-300">
                <span className="mb-2 block text-xs uppercase tracking-[0.25em] text-slate-500">
                  Message
                </span>
                <textarea
                  name="message"
                  value={formDatas.message}
                  onChange={handleChange}
                  placeholder="Tell me a bit about your project..."
                  rows={6}
                  required
                  disabled={isSubmitting}
                  className="w-full resize-none rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-base text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/30 disabled:cursor-not-allowed disabled:opacity-60"
                />
              </label>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-5 py-3 text-xs font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:bg-cyan-600/70 disabled:text-slate-900/80 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <Loader2 size={16} className="animate-spin" />
                    </>
                  ) : (
                    <>
                    
                       Send message <Send size={16} />
                     
                    </>
                  )}
                </button>

                {/* {isSubmitted && (
                  <p className="text-sm text-cyan-300">
                    Thanks! Your email app has been opened.
                  </p>
                )} */}

                {result && <p className="text-xs text-cyan-300">{result}</p>}
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
