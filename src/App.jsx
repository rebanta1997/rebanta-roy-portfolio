import './App.css';
import profilePhoto from './assets/profile.jpg';

function App() {
  return (
    <div className="App">
      <main className="hero">
        <section className="hero-card">
          <span className="hero-badge">Public Portfolio</span>
          <div className="hero-grid">
            <div className="hero-text">
              <p className="eyebrow">Hello, I’m</p>
              <h1>Rebanta Roy</h1>
              <p className="hero-intro">
                AI Engineer and MLOps Architect with extensive experience in Azure AI/ML, enterprise automation, and agentic workflow design. This page is crafted to be public-facing and ready for GitHub Pages publication.
              </p>
              <div className="pill-group">
                <span>AI Engineering</span>
                <span>Azure MLOps</span>
                <span>Automation</span>
              </div>
              <p className="hero-note">
                A high-level portfolio page that complements your resume and highlights broad experience without exposing private details.
              </p>
            </div>
            <div className="hero-photo">
              <img src={profilePhoto} alt="Rebanta Roy" />
            </div>
          </div>
        </section>
      </main>

      <section className="details">
        <div className="details-grid">
          <article className="card card-education">
            <h2>Education</h2>
            <p>
              Advanced study in AI, data science, robotics, and cloud architecture, with a strong foundation in systems engineering and modern deployment practices.
            </p>
            <ul>
              <li>Graduate-level focus on machine learning, data engineering, and platform design.</li>
              <li>Balanced study across AI, observability, and scalable cloud systems.</li>
            </ul>
          </article>

          <article className="card">
            <h2>Overview</h2>
            <p>
              Versatile experience in AI automation, observability, and cloud engineering. I focus on connecting intelligent workflows, production platforms, and enterprise data systems in a way that is easy to communicate and share.
            </p>
            <p>
              This profile is intentionally broad and resume-friendly, so it can serve as your public portfolio or professional profile link.
            </p>
          </article>

          <article className="card card-accent">
            <h2>Contact</h2>
            <dl>
              <dt>GitHub</dt>
              <dd><a href="https://github.com/Rebanta08" target="_blank" rel="noopener noreferrer">github.com/Rebanta08</a></dd>
              <dt>LinkedIn</dt>
              <dd><a href="https://www.linkedin.com/in/rr13" target="_blank" rel="noopener noreferrer">linkedin.com/in/rr13</a></dd>
            </dl>
          </article>

          <article className="card">
            <h2>Skills</h2>
            <ul>
              <li>Agentic AI, Copilot Agents, MCP orchestration</li>
              <li>Azure AI/ML, Synapse, Data Factory, App Service</li>
              <li>Automation, observability, monitoring, telemetry</li>
              <li>Python, TypeScript, REST APIs, cloud deployment</li>
            </ul>
          </article>

          <article className="card">
            <h2>Projects</h2>
            <ul>
              <li>Delivered broad automation and orchestration workstreams for enterprise AI systems.</li>
              <li>Created observability and monitoring solutions that improved production trust and visibility.</li>
              <li>Built platforms that help teams work with AI workflows, cloud tools, and data services securely.</li>
            </ul>
          </article>

          <article className="card card-experience">
            <h2>Experience</h2>
            <p>
              Five years of experience shaping enterprise AI, automation, and cloud engineering initiatives. The work is centered on building solutions that are scalable, maintainable, and aligned to business impact.
            </p>
            <p>
              My focus is on designing platforms and processes that connect AI workflows, observability, and operations in a way that supports long-term adoption and trust.
            </p>
            <p>
              This public profile intentionally stays at a high level, showing the scope of experience without exposing internal project specifics or sensitive details.
            </p>
            <ul>
              <li>Built reusable automation and orchestration foundations for enterprise AI systems.</li>
              <li>Supported production reliability with observability, monitoring, and platform governance.</li>
              <li>Created secure, scalable engineering patterns across cloud and data workflows.</li>
              <li>Enabled cross-team collaboration by translating technical capabilities into business-level outcomes.</li>
              <li>Maintained a professional public profile that is polished and appropriate for external review.</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
