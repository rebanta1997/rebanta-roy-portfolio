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
                  <li><strong>Azure Cognitive Services Engineer</strong> (Aug 2021–Feb 2022) • Vision, Speech, ML Studio</li>
                </ul>
              </div>
            )}
          </article>

          {/* Contact Links - Full Width */}
          <article className="card card-accent card-wide">
            <h3>📱 Links & Contact</h3>
            <div className="card-links">
              <a href="https://rebanta1997.github.io/rebanta-roy-portfolio/" target="_blank" rel="noopener noreferrer" className="link-badge">🌐 Portfolio</a>
              <a href="https://github.com/Rebanta08" target="_blank" rel="noopener noreferrer" className="link-badge">🐙 GitHub</a>
              <a href="https://www.linkedin.com/in/rr13" target="_blank" rel="noopener noreferrer" className="link-badge">💼 LinkedIn</a>
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
                  <div className="tech-category">
                    <h4>🔧 Frontend & UI</h4>
                    <p>React, Vite, TypeScript, Responsive Design, CSS/Tailwind, HTML5, Web Components</p>
                  </div>
                  <div className="tech-category">
                    <h4>📦 DevOps & CI/CD</h4>
                    <p>GitHub Actions, Azure Pipelines, Docker, Helm, Kubernetes, Terraform, Bicep, ARM</p>
                  </div>
                </div>
              </div>
            )}
            {!expanded.tech && (
              <p className="card-preview">Click to expand • 8 major categories with 60+ technologies</p>
            )}
          </article>

          {/* Major Projects */}
          <article className="card card-wide">
            <h3>🚀 Major Projects</h3>
            <div className="card-details">
                <div className="project-item">
                  <h4>🏛️ Compliance Orchestrator Agent</h4>
                  <p>GitHub Copilot agent orchestrating parallel Azure DevOps pipelines from incident tickets with artifact evaluation against compliance criteria. Implemented 6 declarative agent workflows with scoped MCP tool permissions. Packaged as cross-team deployable with automated evaluation pipelines.</p>
                </div>
                <div className="project-item">
                  <h4>🎯 Error Classification System</h4>
                  <p>2-agent closed-loop platform auto-classifying production errors into 164 categories with 350+ regex rules and normalization patterns. Agent 1 builds message structures and ranks candidate rules; Agent 2 validates and routes mismatches for continuous refinement. Achieved full production coverage with feedback-driven improvements.</p>
                </div>
                <div className="project-item">
                  <h4>📈 ADF Observability Platform</h4>
                  <p>Serverless health monitoring across 30+ production data factories with adaptive power-law threshold detection replacing static baselines. Built multi-layer dashboards with studio deep-links and Excel reports. Implemented Dataverse-backed automation for ticket lifecycle management and incident response.</p>
                </div>
                <div className="project-item">
                  <h4>🌐 Enterprise MCP Hub</h4>
                  <p>Unified platform connecting 100+ enterprise tools with 11 purpose-built agents and comprehensive security framework. Implemented RBAC, rate limiting, cryptographic session management, and audit logging with automated token renewal. Built telemetry logging and Power BI dashboards for compliance tracking.</p>
                </div>
                <div className="project-item">
                  <h4>🔬 ML Benchmarking Pipeline</h4>
                  <p>End-to-end Azure DevOps automation for inference testing with host pre-checks, VM lifecycle management, and parallel accelerator validation. Engineered reliable device handling with automated validation and failure-safe cleanup. Standardized execution templates and reusable modules for cross-validation workflows.</p>
                </div>
                <div className="project-item">
                  <h4>📊 Data Lineage Engine</h4>
                  <p>Hierarchy tracking system for 7,000+ data warehouse and lake objects with validated pipeline-to-hierarchy mapping. Implemented interactive cross-linked filters across source, transformation, and serving layers. Integrated metadata sources for comprehensive dependency resolution and impact analysis.</p>
                </div>
                <div className="project-item">
                  <h4>🤝 Copilot Studio Agent</h4>
                  <p>Multi-agent system orchestrating ADF pipeline runs from natural language commands through Copilot interface. Developed Flask REST API middleware (27 endpoints) with SQL script management and Spark pool operations. Published OpenAPI 3.0 specification with OAuth2 security and layered Azure AD authorization.</p>
                </div>
            </div>
          </article>

          {/* Professional Experience */}
          <article className="card card-wide">
            <h3>🏢 Professional Experience</h3>
            <div className="card-details">
                <div className="exp-item">
                  <h4>🎯 AI & MLOps Architect (Dec 2025–Present)</h4>
                  <p>Leading architecture of Copilot Agents and MCP orchestration platforms connecting enterprise tools across organizations. Designing custom TypeScript MCP servers and declarative agent workflows with role-based permissions. Building agent evaluation systems and governance frameworks for production safety and compliance. Mentoring engineers on agentic AI patterns and enterprise platform architecture design. Establishing standards for multi-agent orchestration and secure tool integration at enterprise scale.</p>
                </div>
                <div className="exp-item">
                  <h4>💻 AI Developer (Mar 2023–Dec 2025)</h4>
                  <p>Architected agentic error classification system processing production failures across 164 categories with continuous learning and feedback-driven rule refinement. Engineered ADF and Synapse observability platform monitoring 30+ production factories with adaptive power-law threshold detection and intelligent anomaly detection. Implemented serverless infrastructure using Azure Functions, Dataverse, and Power Automate workflows for automated incident management and ticket lifecycle automation. Built multi-layer dashboards with studio deep-links and comprehensive reporting systems connecting production telemetry to operational insights. Designed and deployed production-grade reliability solutions achieving high availability and SLO compliance. Collaborated with cross-functional teams to align ML solutions with business objectives and operational requirements.</p>
                </div>
                <div className="exp-item">
                  <h4>🔧 Azure Infrastructure Lead (Sep 2022–Mar 2023)</h4>
                  <p>Led Azure network engineering team managing premier support for enterprise clients across VNet, ExpressRoute, VPN, and firewall infrastructure. Resolved high-severity hybrid connectivity issues and led VMware-to-Azure migration projects. Drove proactive monitoring and performance optimization across production infrastructure.</p>
                </div>
                <div className="exp-item">
                  <h4>👥 Azure AI/ML Team Lead (Feb–Sep 2022)</h4>
                  <p>Managed 12-engineer team delivering enterprise Azure Cognitive Services, ML Studio solutions, and IoT Hub integrations for Fortune 500 clients. Oversaw full project lifecycle from API integration and distributed training to AKS deployments and model versioning. Coordinated across DevOps, Security, and infrastructure teams for optimized deployments. Mentored junior engineers on cloud architecture patterns and ML pipeline best practices. Established code review standards and drove technical excellence across the team.</p>
                </div>
                <div className="exp-item">
                  <h4>🧪 Azure Cognitive Services Engineer (Aug 2021–Feb 2022)</h4>
                  <p>Supported Fortune 500 customers on Azure Cognitive Services, ML Studio, and IoT platforms with REST and SDK integrations. Deployed ML models with autoscaling and failover capabilities; troubleshot AutoML issues and implemented A/B testing frameworks. Automated production ML pipelines improving efficiency and operational reliability. Delivered custom solutions addressing enterprise-scale machine learning and analytics requirements. Provided technical guidance on model selection and performance optimization for complex use cases.</p>
                </div>
            </div>
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
