import React from "react";
import ReactDOM from "react-dom/client";
import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Code2, Database, Server, Sparkles, Menu, X, Download, ExternalLink } from "lucide-react";
import "./styles.css";

const profile = {
  name: "Ashish Kumar Jha",
  role: "Full Stack Developer",
  location: "Mumbai, Maharashtra",
  email: "ashishjha5380@gmail.com",
  phone: "9102119953",
  linkedin: "https://www.linkedin.com/in/ashishkumar2163/",
  github: "https://github.com/Ashishkumar2163",
  leetcode: "https://leetcode.com/u/Ashishkumar21/"
};

const skills = {
  "Languages": ["Java", "JavaScript", "Python", "C", "HTML", "CSS"],
  "Frontend": ["React.js", "Vite", "Tailwind CSS", "Bootstrap", "React Router"],
  "Backend": ["Node.js", "Express.js", "Spring Boot", "REST APIs"],
  "Security": ["Spring Security", "JWT Authentication"],
  "Databases": ["MongoDB", "PostgreSQL", "MySQL"],
  "Tools": ["Git", "GitHub", "VS Code", "npm", "Postman"]
};

const projects = [
  {
    title: "Trimly",
    type: "Smart Barber Booking System",
    stack: ["React.js", "Vite", "Tailwind CSS", "Node.js"],
    description: "A modern barber booking platform designed around customer, barber, and administrator workflows.",
    bullets: [
      "Responsive barber discovery, services, booking and queue-management interfaces.",
      "Structured for REST API integration, authentication and booking workflows.",
      "Planned AI-assisted recommendations and voice-based booking for a more accessible experience."
    ],
    accent: "purple"
  },
  {
    title: "Wanderlust",
    type: "Airbnb-Style Rental Platform",
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS"],
    description: "A property rental platform for browsing and managing travel accommodation listings.",
    bullets: [
      "Implemented CRUD operations with Node.js, Express.js, MongoDB and Mongoose.",
      "Built dynamic server-rendered pages using EJS.",
      "Designed for weather and location-based API integration."
    ],
    accent: "blue"
  }
];

function App() {
  const [open, setOpen] = React.useState(false);

  const nav = [
    ["About", "about"],
    ["Skills", "skills"],
    ["Projects", "projects"],
    ["Experience", "experience"],
    ["Contact", "contact"]
  ];

  return (
    <div className="app">
      <div className="bg-grid" />
      <nav className="navbar">
        <a className="brand" href="#home">AKJ<span>.</span></a>
        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X size={22}/> : <Menu size={22}/>}
        </button>
        <div className={`nav-links ${open ? "open" : ""}`}>
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="nav-cta" href={`mailto:${profile.email}`}>Let's Talk <ArrowUpRight size={16}/></a>
        </div>
      </nav>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <div className="eyebrow"><span className="pulse"></span> Available for freelance work</div>
            <h1>Building <span>modern web experiences</span> that solve real problems.</h1>
            <p className="hero-text">
              I'm <strong>Ashish Kumar Jha</strong>, a Full Stack Developer focused on
              React.js, Node.js, Java, Spring Boot, REST APIs and database-driven applications.
            </p>
            <div className="hero-actions">
              <a className="btn primary" href="#projects">View Projects <ArrowUpRight size={18}/></a>
              <a className="btn secondary" href={`mailto:${profile.email}`}>Contact Me <Mail size={17}/></a>
            </div>
            <div className="socials">
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={20}/></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={20}/></a>
              <a href={profile.leetcode} target="_blank" rel="noreferrer" aria-label="LeetCode"><Code2 size={20}/></a>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={20}/></a>
            </div>
          </div>

          <div className="hero-card-wrap">
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>
            <div className="code-card">
              <div className="code-top"><span></span><span></span><span></span><small>developer.js</small></div>
              <pre>{`const developer = {
  name: "Ashish Kumar Jha",
  role: "Full Stack Developer",

  frontend: [
    "React.js",
    "JavaScript",
    "Tailwind CSS"
  ],

  backend: [
    "Node.js",
    "Express.js",
    "Java",
    "Spring Boot"
  ],

  databases: [
    "MongoDB",
    "PostgreSQL",
    "MySQL"
  ],

  focus: "Build. Learn. Improve."
};`}</pre>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section-heading">
            <span>01</span>
            <div><p className="mini-label">ABOUT ME</p><h2>Developer with a <em>builder mindset.</em></h2></div>
          </div>
          <div className="about-grid">
            <div className="about-text">
              <p>I build complete web applications from responsive interfaces to backend APIs and database integration. My current focus is full-stack development with React.js, Node.js and Java/Spring Boot.</p>
              <p>I enjoy turning practical ideas into usable products, learning new technologies and solving programming problems with a strong foundation in Java and Data Structures & Algorithms.</p>
              <div className="quick-facts">
                <div><MapPin size={18}/><span>{profile.location}</span></div>
                <div><Code2 size={18}/><span>Full Stack Development</span></div>
                <div><Sparkles size={18}/><span>AI & API Integration</span></div>
              </div>
            </div>
            <div className="stat-grid">
              <div className="stat"><strong>7.68</strong><span>Current CGPA</span></div>
              <div className="stat"><strong>3+</strong><span>Major Projects</span></div>
              <div className="stat"><strong>Full</strong><span>Stack Focus</span></div>
              <div className="stat"><strong>2028</strong><span>Expected Graduation</span></div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-heading">
            <span>02</span>
            <div><p className="mini-label">TECHNICAL SKILLS</p><h2>Tools I use to <em>build.</em></h2></div>
          </div>
          <div className="skill-grid">
            {Object.entries(skills).map(([group, items]) => (
              <div className="skill-card" key={group}>
                <div className="skill-icon">
                  {group === "Frontend" ? <Code2/> : group === "Backend" ? <Server/> : group === "Databases" ? <Database/> : <Sparkles/>}
                </div>
                <h3>{group}</h3>
                <div className="tags">{items.map(item => <span key={item}>{item}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <span>03</span>
            <div><p className="mini-label">SELECTED WORK</p><h2>Projects built with <em>purpose.</em></h2></div>
          </div>
          <div className="projects">
            {projects.map(project => (
              <article className={`project-card ${project.accent}`} key={project.title}>
                <div className="project-glow"></div>
                <div className="project-head">
                  <div>
                    <p className="mini-label">{project.type}</p>
                    <h3>{project.title}</h3>
                  </div>
                  <span className="project-number">0{projects.indexOf(project)+1}</span>
                </div>
                <p className="project-desc">{project.description}</p>
                <ul>{project.bullets.map(b => <li key={b}>{b}</li>)}</ul>
                <div className="project-footer">
                  <div className="tags">{project.stack.map(s => <span key={s}>{s}</span>)}</div>
                  <span className="private-label">Repository coming soon</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <div className="section-heading">
            <span>04</span>
            <div><p className="mini-label">EXPERIENCE & EDUCATION</p><h2>Learning through <em>real projects.</em></h2></div>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-top"><span>2025</span><span>Remote</span></div>
                <h3>Java Developer Intern</h3>
                <h4>Oasis Infobyte</h4>
                <p>Developed an Online Ticket Reservation System using Java and MySQL, implementing booking, reservation management and database operations.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-top"><span>2024 — 2028</span><span>Navi Mumbai</span></div>
                <h3>B.E. Information Technology</h3>
                <h4>Terna College of Engineering</h4>
                <p>Currently pursuing Bachelor of Engineering in Information Technology. Current CGPA: <strong>7.68/10</strong>.</p>
              </div>
            </div>
          </div>
          <div className="certs">
            <div className="cert"><Sparkles size={18}/><span>Java with Data Structures and Algorithms</span></div>
            <div className="cert"><Sparkles size={18}/><span>MERN Stack Development — Apna College</span></div>
          </div>
        </section>

        <section id="contact" className="contact-section section">
          <div className="contact-box">
            <p className="mini-label">05 — CONTACT</p>
            <h2>Have a project in mind?</h2>
            <p>I'm open to freelance web development opportunities, collaborations and practical software projects.</p>
            <a className="btn primary big" href={`mailto:${profile.email}`}>Start a Conversation <ArrowUpRight size={19}/></a>
            <div className="contact-links">
              <a href={`mailto:${profile.email}`}><Mail size={17}/>{profile.email}</a>
              <a href={`tel:${profile.phone}`}><Phone size={17}/>{profile.phone}</a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/>LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Ashish Kumar Jha</span>
        <span>Built with React.js</span>
      </footer>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><App /></React.StrictMode>
);