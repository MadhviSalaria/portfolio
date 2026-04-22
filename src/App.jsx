import { useEffect, useRef, useState } from 'react'
import {
  FaArrowRight,
  FaDatabase,
  FaDownload,
  FaEnvelope,
  FaExternalLinkAlt,
  FaGithub,
  FaGlobe,
  FaJava,
  FaLinkedin,
  FaMoon,
  FaPhoneAlt,
  FaReact,
  FaServer,
  FaSun,
  FaTrophy,
} from 'react-icons/fa'
import { HiMiniBars3, HiXMark } from 'react-icons/hi2'


const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/madhvisalaria1/',
  github: 'https://github.com/MadhviSalaria',
  email: 'mailto:anub6217@gmail.com',
  phone: 'tel:+919876437729',
  resume: '/resume.pdf',
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

const stats = [
  { label: 'Graduation Year', value: '2027' },
  { label: 'Current CGPA', value: '8.35' },
]

const skills = [
  {
    title: 'Java Development',
    icon: FaJava,
    proficiency: 'Proficient',
    progress: 90,
    description: 'Strong foundation in OOP, collections, exception handling, and problem solving.',
  },
  {
    title: 'DBMS and SQL',
    icon: FaDatabase,
    proficiency: 'Strong',
    progress: 86,
    description: 'Comfortable with schema design, queries, normalization, and data-driven apps.',
  },
  {
    title: 'React Frontend',
    icon: FaReact,
    proficiency: 'Strong',
    progress: 84,
    description: 'Builds responsive interfaces with reusable components and clean visual structure.',
  },
  {
    title: 'Backend and APIs',
    icon: FaServer,
    proficiency: 'Proficient',
    progress: 88,
    description: 'Hands-on with Node.js, Express, JWT auth, CRUD APIs, and deployment workflows.',
  },
]

const projects = [
  {
    title: 'Educolink',
    description:
      'An interactive learning ecosystem built for multi-tenant organizations with secure access and real-time collaboration support.',
    stack: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'JWT', 'Docker'],
    githubUrl: 'https://github.com/MadhviSalaria/educolink-madhvi',
    demoUrl: 'https://example.com/educolink',
    points: [
      'Designed a multi-tenant architecture supporting multiple organizations.',
      'Implemented JWT-based authentication and role-based access controls.',
      'Built REST APIs for user management and operational workflows.',
    ],
  },
  {
    title: 'Multi-Tenant SaaS Dashboard',
    description:
      'A secure SaaS admin dashboard focused on user roles, tenant-aware management, and a clean operational workflow.',
    stack: ['React', 'Express', 'MongoDB', 'JWT', 'Docker'],
    githubUrl: 'https://github.com/MadhviSalaria',
    demoUrl: 'https://example.com/saas-dashboard',
    points: [
      'Created tenant-aware user and organization management modules.',
      'Developed backend services with Express and MongoDB for secure operations.',
      'Dockerized the project for consistent development and deployment setup.',
    ],
  },
  {
    title: 'Multi-language Text-To-Speech',
    description:
      'A text-to-speech application that supports multiple languages and improves accessibility with clear voice output.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Web Speech API'],
    githubUrl: 'https://github.com/MadhviSalaria/Multi-language-Text-To-Speech',
    demoUrl: 'https://github.com/MadhviSalaria/Multi-language-Text-To-Speech',
    points: [
      'Built a simple UI to convert typed text into spoken audio output.',
      'Added support for multiple language voices using browser speech synthesis.',
      'Forked from Ayushpremrocks and customized for personal portfolio showcase.',
    ],
  },
  {
    title: 'Cal-Clone',
    description:
      'A comprehensive scheduling and booking web application that replicates Cal.com\'s design and user experience, enabling users to create event types, set availability, and manage bookings.',
    stack: ['React', 'Node.js', 'Express', 'Railway', 'Vercel'],
    githubUrl: 'https://github.com/MadhviSalaria/cal-clone',
    demoUrl: 'https://cal-clone-five.vercel.app',
    points: [
      'Built event types management with create, edit, delete, and public booking links.',
      'Implemented availability settings with timezone support and time slot management.',
      'Designed public booking calendar with conflict prevention and confirmation page.',
    ],
  },
]

const aboutHighlights = [
  'Strong foundation in programming fundamentals, computer science, and problem-solving with expertise in DSA.',
  'Hands-on experience with React.js, Node.js, PostgreSQL, and full-stack web development.',
  'Passionate about building clean, efficient, and scalable applications with structured, maintainable code.',
  'Continuously learning and strengthening technical, logical, and analytical skills for real-world development.',
]

const achievements = [
  {
    title: 'Top 10 at BharatTech Xperience 3.0',
    detail:
      'Built EducoLink in a 30-hour national hackathon and ranked Top 10 among 350+ teams; recognized in the Industry & Deployment Ready category and awarded ₹5,100.',
    meta: 'SVIET, Chandigarh | April 2026',
    certificate: 'View Certificate',
    certImage: '/certificate.png',
  },
  {
    title: 'Strong Academic Performance',
    detail: 'Maintaining a CGPA of 8.35 in B.E. Computer Science while building practical software projects.',
    meta: '2023 - Present',
  },
  {
    title: 'Java Training Completed',
    detail: 'Successfully completed Java Trainee experience at Chandigarh University with focus on core Java and problem solving.',
    meta: 'May 2025 - June 2025',
    certificate: 'View Certificate',
    certImage: '/Javacertificate.png',
  },
  {
    title: 'Deployed Full-Stack Scheduler',
    detail: 'Built and deployed Cal-Clone with event types, availability management, booking flow, and dashboard features.',
    meta: 'React, Node.js, Express, Railway, Vercel',
    linkLabel: 'View Deployment',
    linkUrl: 'https://cal-clone-five.vercel.app/',
  },
  {
    title: 'IEI Student Chapter Member',
    detail: 'Active member of the IEI student chapter, participating in technical talks, peer learning sessions, and engineering activities.',
    meta: 'Institution of Engineers (India) | 2025 - Present',
    certificate: 'View Certificate',
    certImage: '/IEI.png',
  },
  {
    title: 'Winner at Project Expo (Grand Challenger)',
    detail: 'Recognized as winner at the Project Expo in Grand Challenger for impactful project presentation, technical execution, and innovation.',
    meta: 'Project Expo | 2026',
    photo: 'View Group Photo',
    photoImage: '/project expo.png',
  },
]

const contactCards = [
  {
    title: 'Email',
    value: 'anub6217@gmail.com',
    href: socialLinks.email,
    icon: FaEnvelope,
  },
  {
    title: 'Phone',
    value: '+91 98764 37729',
    href: socialLinks.phone,
    icon: FaPhoneAlt,
  },
  {
    title: 'LinkedIn',
    value: 'linkedin.com/in/madhvisalaria1',
    href: socialLinks.linkedin,
    icon: FaLinkedin,
  },
  {
    title: 'GitHub',
    value: 'github.com/MadhviSalaria',
    href: socialLinks.github,
    icon: FaGithub,
  },
]

function App() {
  const rootRef = useRef(null)
  const mouseStateRef = useRef({
    currentX: 0,
    currentY: 0,
    targetX: 0,
    targetY: 0,
    rafId: null,
  })

  const [menuOpen, setMenuOpen] = useState(false)
  const [activeAboutHighlight, setActiveAboutHighlight] = useState(null)
  const [showWelcomeWave, setShowWelcomeWave] = useState(true)
  const [previewModal, setPreviewModal] = useState(null)
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'light'
    }

    const savedTheme = window.localStorage.getItem('theme')

    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const welcomeWaveTimer = window.setTimeout(() => {
      setShowWelcomeWave(false)
    }, 4800)

    return () => {
      window.clearTimeout(welcomeWaveTimer)
    }
  }, [])

  useEffect(() => {
    const rootNode = rootRef.current

    if (!rootNode) {
      return undefined
    }

    const supportsFinePointer = window.matchMedia('(pointer: fine)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!supportsFinePointer || prefersReducedMotion) {
      rootNode.style.setProperty('--mx', '0')
      rootNode.style.setProperty('--my', '0')
      return undefined
    }

    const state = mouseStateRef.current

    const animate = () => {
      state.currentX += (state.targetX - state.currentX) * 0.065
      state.currentY += (state.targetY - state.currentY) * 0.065

      rootNode.style.setProperty('--mx', state.currentX.toFixed(4))
      rootNode.style.setProperty('--my', state.currentY.toFixed(4))

      state.rafId = window.requestAnimationFrame(animate)
    }

    const handlePointerMove = (event) => {
      const x = event.clientX / window.innerWidth
      const y = event.clientY / window.innerHeight

      state.targetX = (x - 0.5) * 2
      state.targetY = (y - 0.5) * 2
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    state.rafId = window.requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)

      if (state.rafId) {
        window.cancelAnimationFrame(state.rafId)
      }
    }
  }, [])

  const closeMenu = () => {
    setMenuOpen(false)
  }

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <div ref={rootRef} data-theme={theme} className="app-shell relative min-h-screen overflow-hidden text-slate-900">
      {previewModal ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Achievement preview"
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
          onClick={() => setPreviewModal(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-[28px] bg-white shadow-[0_40px_100px_rgba(0,0,0,0.35)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPreviewModal(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950/70 text-white transition hover:bg-slate-700"
              aria-label="Close preview"
            >
              ✕
            </button>
            <img
              src={previewModal.src}
              alt={previewModal.alt}
              className="h-auto w-full rounded-[28px] object-contain"
            />
          </div>
        </div>
      ) : null}
      <div className="motion-bg pointer-events-none absolute inset-0 overflow-hidden">
        <div className="bg-mesh-soft animate-aurora absolute inset-0 opacity-80" />
        <div className="dark-aurora absolute inset-0" />
        <div className="motion-layer motion-layer-1 absolute inset-0">
          <div className="animate-drift absolute -left-12 top-20 h-44 w-44 rounded-full bg-sky-200/45 blur-3xl" />
        </div>
        <div className="motion-layer motion-layer-2 absolute inset-0">
          <div className="animate-drift-reverse absolute right-0 top-44 h-60 w-60 rounded-full bg-amber-200/45 blur-3xl" />
        </div>
        <div className="motion-layer motion-layer-3 absolute inset-0">
          <div className="animate-float-slow absolute left-[18%] top-[36rem] h-52 w-52 rounded-full bg-cyan-100/35 blur-3xl" />
        </div>
        <div className="motion-layer motion-layer-4 absolute inset-0">
          <div className="animate-float-delayed absolute right-[14%] top-[62rem] h-64 w-64 rounded-full bg-blue-100/35 blur-3xl" />
        </div>
        <div className="motion-layer motion-layer-5 absolute inset-0">
          <div className="animate-spin-slow absolute left-1/2 top-32 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full border border-sky-100/60 opacity-60" />
        </div>
        <div className="motion-layer motion-layer-6 absolute inset-0">
          <div className="animate-spin-slow absolute left-1/2 top-24 h-[42rem] w-[42rem] -translate-x-1/2 rounded-full border border-amber-100/50 opacity-40 [animation-direction:reverse]" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.48)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.48)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30" />
        <div className="absolute inset-x-0 top-[28rem] h-px bg-gradient-to-r from-transparent via-slate-300/70 to-transparent" />
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 pb-16 sm:px-6 lg:px-8">
        <nav className="theme-panel sticky top-4 z-30 mt-4 rounded-full border border-white/70 bg-white/85 px-4 py-3 shadow-[0_18px_55px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-6">
          <div className="flex items-center justify-between gap-4">
            <a href="#home" className="font-display text-2xl font-semibold text-slate-900">
              Madhvi
            </a>

            <div className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-slate-600 transition hover:text-sky-700"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <button
                type="button"
                onClick={toggleTheme}
                className="theme-toggle inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
              >
                <FaLinkedin />
                LinkedIn
              </a>
              <a
                href={socialLinks.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-700"
              >
                <FaDownload />
                Resume
              </a>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 md:hidden"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <HiXMark className="text-xl" /> : <HiMiniBars3 className="text-xl" />}
            </button>
          </div>

          {menuOpen ? (
            <div className="mt-4 flex flex-col gap-3 border-t border-slate-200 pt-4 md:hidden">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="text-sm font-medium text-slate-600 transition hover:text-sky-700"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
              >
                <FaLinkedin />
                LinkedIn
              </a>
              <button
                type="button"
                onClick={toggleTheme}
                className="theme-toggle inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
                aria-label="Toggle dark mode"
              >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
                {theme === 'dark' ? 'Light' : 'Dark'}
              </button>
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
              >
                <FaGithub />
                GitHub
              </a>
              <a
                href={socialLinks.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white"
              >
                <FaDownload />
                Resume Download
              </a>
            </div>
          ) : null}
        </nav>

        <main className="pt-6">
          {/* Hero Section */}
          <section
            id="home"
            className="theme-panel hero-glass relative grid items-center gap-10 rounded-[32px] border border-white/70 bg-white/72 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:p-12"
          >
            <div className="hero-glow pointer-events-none absolute inset-0 rounded-[32px]" />
            <div className="animate-slide-up">
              <p className="inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-sky-700">
                 Software Developer Portfolio
              </p>
              <h1 className="font-display mt-6 text-5xl leading-[0.95] text-slate-950 sm:text-6xl lg:text-7xl">
                Madhvi Salaria
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-semibold leading-8 text-slate-700 sm:text-xl">
                Full-Stack Developer | DSA Enthusiast | Problem Solver
              </p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">
                I craft scalable backend systems and responsive frontends. Proficient in React, Node.js, and databases with a strong grasp of algorithms and data structures. Ready to contribute, learn, and deliver impactful solutions.
              </p>

              <div className="mt-6 rounded-[24px] border border-sky-200 bg-sky-50/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-sky-700">Core Focus</p>
                <p className="mt-2 text-sm leading-7 font-medium text-sky-900">
                  Java • Backend Development • Data Structures & Algorithms • React.js • Node.js
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-sky-700 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-sky-800"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition duration-300 hover:-translate-y-0.5 hover:border-slate-950 hover:text-slate-950"
                >
                  <FaGithub />
                  GitHub
                </a>
                <a
                  href={socialLinks.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-5 py-3 text-sm font-semibold text-amber-800 transition duration-300 hover:-translate-y-0.5 hover:border-amber-300 hover:bg-amber-100"
                >
                  <FaDownload />
                  Download Resume
                </a>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-sky-700"
                >
                  View Projects
                  <FaArrowRight className="text-xs" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 transition hover:text-sky-700"
                >
                  Contact Me
                  <FaArrowRight className="text-xs" />
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="rounded-[24px] border border-slate-200/80 bg-white p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
                      {item.label}
                    </p>
                    <p className="mt-3 text-xl font-bold text-slate-900">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-up-delay flex items-center justify-center">
              <div className="relative h-72 w-72 rounded-full border border-white/80 bg-white p-3 shadow-[0_30px_70px_rgba(15,23,42,0.12)] sm:h-80 sm:w-80">
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-sky-50 via-white to-amber-50" />
                <div
                  className={`avail-badge absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap ${showWelcomeWave ? 'is-waving' : ''}`}
                  aria-live="polite"
                >
                  <span className="avail-dot" aria-hidden="true" />
                  Available for Opportunities
                </div>
                <img
                  src="/Me.jpeg"
                  alt="Madhvi Salaria — Profile portrait"
                  className="relative z-10 h-full w-full rounded-full object-cover object-center shadow-[0_20px_50px_rgba(15,23,42,0.15)]"
                />
              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="animate-slide-up grid gap-6 pt-8 lg:grid-cols-[1fr_0.95fr]">
            <div className="rounded-[30px] border border-white/70 bg-white/72 p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">About Me</p>
              <h2 className="font-display mt-4 text-4xl text-slate-950 sm:text-5xl">
                Passionate about building scalable, efficient, and reliable solutions.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                I'm an aspiring software developer with a strong foundation in programming fundamentals, 
                computer science, and problem-solving. I have hands-on experience with modern technologies 
                including React.js, Node.js, and database systems, combined with solid expertise in Data 
                Structures and Algorithms. My projects focus on functionality, usability, and structured design 
                principles, and I'm committed to writing clean, maintainable code.
              </p>
              <div className="mt-6 space-y-4">
                {aboutHighlights.map((item, index) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => {
                      setActiveAboutHighlight((current) => (current === index ? null : index))
                    }}
                    aria-pressed={activeAboutHighlight === index}
                    className={`about-highlight w-full rounded-[22px] border border-slate-200 bg-white px-5 py-4 text-left ${
                      activeAboutHighlight === index ? 'is-active' : ''
                    }`}
                  >
                    <p className="text-sm leading-7 text-slate-600">{item}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="rounded-[30px] border border-white/70 bg-slate-950 p-7 text-white shadow-[0_24px_70px_rgba(15,23,42,0.1)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Quick Snapshot</p>
              <div className="mt-4 h-px w-full bg-gradient-to-r from-sky-300/40 via-white/40 to-amber-300/40" />

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Education</p>
                  <p className="mt-2 text-lg font-semibold">B.E. in Computer Science</p>
                  <p className="mt-1 text-sm text-slate-300">Chandigarh University | 2023 - 2027</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Experience</p>
                  <p className="mt-2 text-lg font-semibold">Java Trainee</p>
                  <p className="mt-1 text-sm text-slate-300">Chandigarh University | May 2025 - June 2025</p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Programming Languages</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-sky-200/35 bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-100">Java</span>
                    <span className="rounded-full border border-sky-200/35 bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-100">C++</span>
                    <span className="rounded-full border border-sky-200/35 bg-sky-300/10 px-3 py-1 text-xs font-medium text-sky-100">JavaScript</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Web Development</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-emerald-200/35 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100">React.js</span>
                    <span className="rounded-full border border-emerald-200/35 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100">Node.js</span>
                    <span className="rounded-full border border-emerald-200/35 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100">Express.js</span>
                    <span className="rounded-full border border-emerald-200/35 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100">HTML</span>
                    <span className="rounded-full border border-emerald-200/35 bg-emerald-300/10 px-3 py-1 text-xs font-medium text-emerald-100">CSS</span>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Databases</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-full border border-indigo-200/35 bg-indigo-300/10 px-3 py-1 text-xs font-medium text-indigo-100">MySQL</span>
                      <span className="rounded-full border border-indigo-200/35 bg-indigo-300/10 px-3 py-1 text-xs font-medium text-indigo-100">Oracle</span>
                      <span className="rounded-full border border-indigo-200/35 bg-indigo-300/10 px-3 py-1 text-xs font-medium text-indigo-100">Railway</span>
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Cloud & DevOps</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="rounded-full border border-amber-200/35 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-100">AWS EC2</span>
                      <span className="rounded-full border border-amber-200/35 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-100">AWS S3</span>
                      <span className="rounded-full border border-amber-200/35 bg-amber-300/10 px-3 py-1 text-xs font-medium text-amber-100">Basic Deployment</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Core Concepts</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-cyan-200/35 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">Data Structures & Algorithms</span>
                    <span className="rounded-full border border-cyan-200/35 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">OOPs</span>
                    <span className="rounded-full border border-cyan-200/35 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">DBMS</span>
                    <span className="rounded-full border border-cyan-200/35 bg-cyan-300/10 px-3 py-1 text-xs font-medium text-cyan-100">Computer Fundamentals</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Tools</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full border border-fuchsia-200/35 bg-fuchsia-300/10 px-3 py-1 text-xs font-medium text-fuchsia-100">Git</span>
                    <span className="rounded-full border border-fuchsia-200/35 bg-fuchsia-300/10 px-3 py-1 text-xs font-medium text-fuchsia-100">GitHub</span>
                    <span className="rounded-full border border-fuchsia-200/35 bg-fuchsia-300/10 px-3 py-1 text-xs font-medium text-fuchsia-100">VS Code</span>
                    <span className="rounded-full border border-fuchsia-200/35 bg-fuchsia-300/10 px-3 py-1 text-xs font-medium text-fuchsia-100">Eclipse</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Spoken Languages</p>
                  <div className="mt-3 space-y-2 text-sm text-slate-200">
                    <p><span className="font-semibold text-white">English</span> - Professional</p>
                    <p><span className="font-semibold text-white">Hindi</span> - Fluent</p>
                    <p><span className="font-semibold text-white">Punjabi</span> - Native</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section id="achievements" className="animate-slide-up pt-8">
            <div className="rounded-[30px] border border-white/70 bg-white/72 p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Achievements</p>
                  <h2 className="font-display mt-4 text-4xl text-slate-950 sm:text-5xl">
                    Milestones that reflect growth and consistency
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-slate-600">
                  A quick snapshot of academic performance, training, and hands-on delivery outcomes.
                </p>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-3">
                {achievements.map((item) => (
                  <article
                    key={item.title}
                    className="rounded-[26px] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-xl text-amber-600">
                      <FaTrophy />
                    </div>
                    <h3 className="mt-4 text-xl font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{item.detail}</p>
                    <p className="mt-4 inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-slate-600">
                      {item.meta}
                    </p>
                    {item.certificate ? (
                      <button
                        type="button"
                        onClick={() =>
                          setPreviewModal({
                            src: item.certImage,
                            alt: `${item.title} certificate`,
                          })
                        }
                        className="mt-3 inline-flex cursor-pointer rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700 transition hover:bg-emerald-100 hover:border-emerald-300"
                      >
                        {item.certificate}
                      </button>
                    ) : null}
                    {item.photo ? (
                      <button
                        type="button"
                        onClick={() =>
                          setPreviewModal({
                            src: item.photoImage,
                            alt: `${item.title} group photo`,
                          })
                        }
                        className="mt-3 inline-flex cursor-pointer rounded-full border border-rose-200 bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-rose-700 transition hover:border-rose-300 hover:bg-rose-100"
                      >
                        {item.photo}
                      </button>
                    ) : null}
                    {item.linkUrl ? (
                      <a
                        href={item.linkUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-3 inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-sky-700 transition hover:border-sky-300 hover:bg-sky-100"
                      >
                        {item.linkLabel}
                      </a>
                    ) : null}
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="animate-slide-up pt-8">
            <div className="rounded-[30px] border border-white/70 bg-white/72 p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Skills</p>
                  <h2 className="font-display mt-4 text-4xl text-slate-950 sm:text-5xl">
                    Technical strengths that are easy to scan
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-slate-600">
                  A balanced toolkit across programming, databases, frontend, and backend development.
                </p>
              </div>

              <div className="mt-8 grid gap-5 lg:grid-cols-2">
                {skills.map((skill) => {
                  const Icon = skill.icon

                  return (
                    <article
                      key={skill.title}
                      className="rounded-[26px] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-50 text-xl text-sky-700">
                          <Icon />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-3">
                            <h3 className="text-lg font-bold text-slate-900">{skill.title}</h3>
                            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700">
                              {skill.proficiency}
                            </span>
                          </div>
                          <p className="mt-2 text-sm leading-7 text-slate-600">{skill.description}</p>
                          <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-slate-100">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-sky-600 to-amber-400"
                              style={{ width: `${skill.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </article>
                  )
                })}
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="animate-slide-up pt-8">
            <div className="rounded-[30px] border border-white/70 bg-white/72 p-7 shadow-[0_24px_70px_rgba(15,23,42,0.06)] backdrop-blur-xl sm:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">Projects</p>
                  <h2 className="font-display mt-4 text-4xl text-slate-950 sm:text-5xl">
                    Modern project cards with clear recruiter-facing details
                  </h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-slate-600">
                  Each project highlights the stack, problem space, and direct action links for code and demos.
                </p>
              </div>

              <div className="mt-8 grid gap-6 lg:grid-cols-2">
                {projects.map((project) => (
                  <article
                    key={project.title}
                    className="rounded-[28px] border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(15,23,42,0.08)]"
                  >
                    <h3 className="text-2xl font-bold text-slate-900">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 space-y-3">
                      {project.points.map((point) => (
                        <div key={point} className="rounded-[20px] bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600">
                          {point}
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-950 hover:text-slate-950"
                      >
                        <FaGithub />
                        GitHub
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="animate-slide-up pt-8">
            <div className="rounded-[30px] border border-white/70 bg-slate-950 p-7 text-white shadow-[0_24px_70px_rgba(15,23,42,0.1)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">Contact</p>
              <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <h2 className="font-display text-4xl sm:text-5xl">
                    Let’s connect for internships, collaborations, and developer opportunities.
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                    I am actively building my experience as a developer and looking for opportunities to contribute, learn, and grow in software engineering roles.
                  </p>
                </div>
                <a
                  href={socialLinks.email}
                  className="inline-flex items-center gap-2 self-start rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-sky-100"
                >
                  <FaEnvelope />
                  Email Me
                </a>
              </div>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {contactCards.map((card) => {
                  const Icon = card.icon

                  return (
                    <a
                      key={card.title}
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                      className="rounded-[24px] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                    >
                      <Icon className="text-lg text-sky-300" />
                      <p className="mt-4 text-sm uppercase tracking-[0.25em] text-slate-400">{card.title}</p>
                      <p className="mt-2 text-sm text-slate-200">{card.value}</p>
                    </a>
                  )
                })}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
