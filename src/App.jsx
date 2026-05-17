import './App.css';
import profilePhoto from './assets/profile.jpg';
import { useState } from 'react';

function App() {
  const [expanded, setExpanded] = useState({});

  const toggleSection = (id) => {
    setExpanded(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className="App">
      <main className="hero">
        <section className="hero-card">
          <span className="hero-badge">✨ AI Engineer & MLOps Architect</span>
          <div className="hero-grid">
            <div className="hero-text">
              <p className="eyebrow">Hello, I'm</p>
              <h1>Rebanta Roy</h1>
              <p className="hero-intro">
                AI & MLOps Architect with 5+ years of enterprise systems experience at LTIMindtree. Specialist in GitHub Copilot Agents, Azure cloud infrastructure, machine learning pipelines, and observable, production-grade automation platforms.
              </p>
              <div className="pill-group">
                <span>🤖 Agentic AI</span>
                <span>🧠 ML Pipelines</span>
                <span>☁️ Azure MLOps</span>
                <span>⚙️ Automation</span>
              </div>
              <p className="hero-note">
                M.S. Robotics & ML (NYU) · M.S. Data Science (Westcliff, 4.0) · B.Tech (KIIT) · Redmond, WA
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
          {/* Education & Research */}
          <article className="card card-education card-compact">
            <h3>🎓 Education & Research</h3>
            <button className="expand-btn" onClick={() => toggleSection('edu')}>
              <span>{expanded.edu ? '−' : '+'}</span>
            </button>
            <div className="card-summary">
              <p>Rigorous academic foundation: NYU M.S. (3.50/4.0), Westcliff M.S. (4.0/4.0), KIIT B.Tech (3.64/4.0). NYU Controls Lab research: C++, PID/LQR, real-time systems.</p>
            </div>
            {expanded.edu && (
              <div className="card-details">
                <ul>
                  <li><strong>NYU M.S. Robotics & ML</strong> (2019–2021) • GPA 3.50/4.0 • Deep Learning, Computer Vision, Controls Lab</li>
                  <li><strong>Westcliff M.S. Data Science</strong> (2024–Present) • GPA 4.0/4.0 • Data Engineering, Cloud Architecture</li>
                  <li><strong>KIIT B.Tech ME</strong> (2015–2019) • GPA 3.64/4.0 • Automation, Robotics, Control Systems</li>
                </ul>
              </div>
            )}
          </article>

          {/* Career Overview */}
          <article className="card card-compact">
            <h3>💼 Career Overview</h3>
            <button className="expand-btn" onClick={() => toggleSection('career')}>
              <span>{expanded.career ? '−' : '+'}</span>
            </button>
            <div className="card-summary">
              <p>5+ years at LTIMindtree (Bellevue): from Cognitive Services Engineer → AI Architect. Architected 10+ mission-critical systems for Fortune 500 clients. Focus on agentic AI, observability, MLOps platforms.</p>
            </div>
            {expanded.career && (
              <div className="card-details">
                <ul>
                  <li><strong>AI & MLOps Architect</strong> (Dec 2025–Now) • GitHub Copilot Agents, enterprise MCP</li>
                  <li><strong>AI Developer</strong> (Mar 2023–Dec 2025) • Error classification, ADF observability</li>
                  <li><strong>Azure Infrastructure Lead</strong> (Sep 2022–Mar 2023) • Network engineering, migrations</li>
                  <li><strong>Azure AI/ML Team Lead</strong> (Feb–Sep 2022) • Managed 12+ engineers</li>
                  <li><strong>Azure Cognitive Services Engineer</strong> (Aug 2021–Mar 2022) • Vision, Speech, ML Studio</li>
                </ul>
              </div>
            )}
          </article>

          {/* Contact Links */}
          <article className="card card-accent card-compact">
            <h3>📱 Links</h3>
            <div className="card-links">
              <a href="https://github.com/Rebanta08" target="_blank" rel="noopener noreferrer" className="link-badge">GitHub</a>
              <a href="https://www.linkedin.com/in/rr13" target="_blank" rel="noopener noreferrer" className="link-badge">LinkedIn</a>
              <span className="link-badge">📍 Redmond, WA</span>
            </div>
          </article>

          {/* Technical Expertise - Collapsible */}
          <article className="card card-wide card-expandable">
            <div className="card-header">
              <h3>🛠️ Technical Expertise</h3>
              <button className="expand-btn" onClick={() => toggleSection('tech')}>
                <span>{expanded.tech ? '▼' : '▶'}</span>
              </button>
            </div>
            {expanded.tech && (
              <div className="card-details">
                <div className="tech-grid">
                  <div className="tech-category">
                    <h4>🤖 Agentic AI & LLM</h4>
                    <p>Copilot Agents, MCP, agent.md workflows, tool permission scoping, multi-agent orchestration</p>
                  </div>
                  <div className="tech-category">
                    <h4>🧠 ML & Deep Learning</h4>
                    <p>Transformers, LSTM, CNN, ResNet, attention, GANs, LightGBM, XGBoost, semantic search, NLP</p>
                  </div>
                  <div className="tech-category">
                    <h4>☁️ Azure Ecosystem</h4>
                    <p>Data Factory, Synapse, Functions, App Service, KQL, ADLS, Dataverse, DevOps, Monitor</p>
                  </div>
                  <div className="tech-category">
                    <h4>🔄 Data Engineering</h4>
                    <p>Python (Pandas, NumPy, SciPy, TensorFlow), SQL, Spark, ETL, real-time analytics</p>
                  </div>
                  <div className="tech-category">
                    <h4>⚙️ Platform & Infra</h4>
                    <p>Docker, Kubernetes (AKS), REST APIs, TypeScript, Git, Bicep, CI/CD, Linux/Bash</p>
                  </div>
                  <div className="tech-category">
                    <h4>📊 Observability & Security</h4>
                    <p>App Insights, Log Analytics, RBAC, OAuth2, audit logging, SLO/SLA, compliance workflows</p>
                  </div>
                </div>
              </div>
            )}
            {!expanded.tech && (
              <p className="card-preview">Click to expand • 6 major categories with 50+ technologies</p>
            )}
          </article>

          {/* Major Projects - Collapsible */}
          <article className="card card-wide card-expandable">
            <div className="card-header">
              <h3>🚀 Major Projects</h3>
              <button className="expand-btn" onClick={() => toggleSection('projects')}>
                <span>{expanded.projects ? '▼' : '▶'}</span>
              </button>
            </div>
            {expanded.projects && (
              <div className="card-details">
                <div className="project-item">
                  <h4>🏛️ Compliance Orchestrator Agent</h4>
                  <p>GitHub Copilot agent + 3 MCP servers, 6 declarative workflows, automated evaluation pipelines in Azure DevOps</p>
                </div>
                <div className="project-item">
                  <h4>🎯 Error Classification System</h4>
                  <p>2-agent closed-loop platform classifying 164 production error categories with 350+ rules, 50+ normalization patterns</p>
                </div>
                <div className="project-item">
                  <h4>📈 ADF Observability Platform</h4>
                  <p>Monitoring 30+ production data factories, adaptive power-law threshold detection, multi-layer dashboards, Dataverse automation</p>
                </div>
                <div className="project-item">
                  <h4>🌐 Enterprise MCP Hub</h4>
                  <p>100+ connected tools, 11 purpose-built agents, 8-module security framework (RBAC, rate limiting, audit logging)</p>
                </div>
                <div className="project-item">
                  <h4>🔬 ML Benchmarking Pipeline</h4>
                  <p>Mistral inference automation, GPU/TPU validation, parallel accelerator testing, Azure DevOps orchestration</p>
                </div>
                <div className="project-item">
                  <h4>📊 Data Lineage Engine</h4>
                  <p>Hierarchy tracking for 7,000+ ADW/ADLS objects, interactive visualization, impact analysis</p>
                </div>
                <div className="project-item">
                  <h4>🤝 Copilot Studio Agent</h4>
                  <p>5 child agents orchestrating ADF pipelines, Flask REST API (27 endpoints), OpenAPI 3.0, OAuth2 security</p>
                </div>
              </div>
            )}
            {!expanded.projects && (
              <p className="card-preview">Click to expand • 7 major enterprise projects with detailed metrics</p>
            )}
          </article>

          {/* Professional Experience - Collapsible */}
          <article className="card card-wide card-expandable">
            <div className="card-header">
              <h3>🏢 Professional Experience</h3>
              <button className="expand-btn" onClick={() => toggleSection('exp')}>
                <span>{expanded.exp ? '▼' : '▶'}</span>
              </button>
            </div>
            {expanded.exp && (
              <div className="card-details">
                <div className="exp-item">
                  <h4>🎯 AI & MLOps Architect (Dec 2025–Present)</h4>
                  <p>Leading Copilot Agents and MCP orchestration. Custom TypeScript servers. Declarative agent workflows. Enterprise security frameworks. Agent evaluation systems.</p>
                </div>
                <div className="exp-item">
                  <h4>💻 AI Developer (Mar 2023–Dec 2025)</h4>
                  <p>Error classification (164 categories, 350+ rules). ADF/Synapse observability. Serverless infrastructure. Power Automate workflows. Dashboard/reporting systems.</p>
                </div>
                <div className="exp-item">
                  <h4>🔧 Azure Infrastructure Lead (Sep 2022–Mar 2023)</h4>
                  <p>Network engineering leadership. VNet/ExpressRoute/VPN/Load Balancer support. Hybrid connectivity (BGP, IPsec). VMware-to-Azure migrations. Monitoring and RCA.</p>
                </div>
                <div className="exp-item">
                  <h4>👥 Azure AI/ML Team Lead (Feb–Sep 2022)</h4>
                  <p>Managed 12 engineers. Cognitive Services (Vision, Speech, Language), ML Studio, IoT integrations. Full lifecycle delivery: API integration, training, AKS deployments.</p>
                </div>
                <div className="exp-item">
                  <h4>🧪 Azure Cognitive Services Engineer (Aug 2021–Mar 2022)</h4>
                  <p>Fortune 500 support. REST/SDK integrations. ML Studio deployments. AutoML troubleshooting. A/B testing frameworks.</p>
                </div>
              </div>
            )}
            {!expanded.exp && (
              <p className="card-preview">Click to expand • 5 years progressive responsibility at LTIMindtree</p>
            )}
          </article>

          {/* Additional Experience */}
          <article className="card card-wide card-accent-light">
            <h3>🔬 Research</h3>
            <p><strong>NYU Controls Lab (2020–2022):</strong> Real-time C++ DAQ, PID/LQR control algorithms, stability analysis, hardware-in-the-loop experimentation for dynamic systems and automation.</p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
