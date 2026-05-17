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
                AI Engineer and MLOps Architect with 5 years of experience designing enterprise-scale automation platforms, agentic AI systems, and production ML pipelines. Specialized in GitHub Copilot Agents, Azure cloud architecture, and observability-driven platform engineering at LTIMindtree.
              </p>
              <div className="pill-group">
                <span>Agentic AI Systems</span>
                <span>Machine Learning</span>
                <span>Azure MLOps</span>
                <span>Enterprise Automation</span>
              </div>
              <p className="hero-note">
                M.S. in Robotics & ML (NYU) | M.S. in Data Science (Westcliff) | B.Tech Mechanical Engineering (KIIT)
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
              Advanced studies in AI, robotics, data science, and cloud engineering with practical research experience in control systems and automation.
            </p>
            <ul>
              <li><strong>M.S. Robotics & Machine Learning</strong> – New York University (2019–2021). GPA: 3.50/4.0. Coursework: Deep Learning, Computer Vision, Robot Perception, DevOps, Deployment Architecture.</li>
              <li><strong>M.S. Computer Science & Data Science</strong> – Westcliff University (May 2024–Present). GPA: 4.0/4.0. Coursework: Data Engineering, Cloud Architecture, Advanced Algorithms.</li>
              <li><strong>B.Tech Mechanical Engineering & Automation</strong> – KIIT University, India (2015–2019). GPA: 3.64/4.0. Foundation: Programming (C/C++), Robotics, Mechatronics, OOP.</li>
            </ul>
          </article>

          <article className="card">
            <h2>Overview</h2>
            <p>
              Proven track record in designing and deploying enterprise-scale intelligent systems at LTIMindtree, where I've led architecture, engineering, and delivery of 10+ complex projects across agentic AI, Azure MLOps, and observability platforms.
            </p>
            <p>
              Currently focused on architecting GitHub Copilot Agents, model orchestration protocols (MCP), and end-to-end ML pipelines that integrate seamlessly with enterprise backends while maintaining production-grade reliability and security.
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
              <li><strong>Agentic AI:</strong> GitHub Copilot Agents, Copilot Studio, SRE Agent, MCP (Model Context Protocol) orchestration, multi-agent systems, agent.md workflows, RBAC, OAuth2, audit logging.</li>
              <li><strong>Machine Learning:</strong> Deep Learning (Transformers, LSTM, CNN, ResNet), NLP, model training/evaluation, clustering (HDBSCAN), ensemble methods (LightGBM, XGBoost), vectorization, embeddings, fuzzy matching.</li>
              <li><strong>Azure Ecosystem:</strong> Data Factory, Synapse Analytics, Azure Functions, App Service, Data Explorer, ADLS Gen2, Azure Monitor, Log Analytics, Azure DevOps, Managed Identity, Dataverse, Power Automate.</li>
              <li><strong>Data & Analytics:</strong> Python (Pandas, NumPy, SciPy, scikit-learn, TensorFlow, Keras), SQL, KQL (Kusto Query Language), Spark, ETL automation.</li>
              <li><strong>Platform Engineering:</strong> Docker, Kubernetes (AKS), REST APIs, Flask, OpenAPI/Swagger, TypeScript, GitOps, Infrastructure-as-Code (Bicep, ARM templates).</li>
              <li><strong>Observability & Operations:</strong> Production monitoring, SLO/SLA tracking, incident correlation, RCA workflows, PowerShell automation, Azure CLI.</li>
            </ul>
          </article>

          <article className="card card-wide">
            <h2>Projects</h2>
            <ul>
              <li><strong>Compliance Orchestrator Agent & MCP Plugins (LTIMindtree):</strong> Built a GitHub Copilot agent orchestrating parallel Azure DevOps pipelines from tickets, evaluating artifacts, and publishing results. Designed end-to-end MCP integration with custom TypeScript servers, 6 declarative agent workflows, and automated evaluation pipelines for regression testing.</li>
              <li><strong>End-to-End MLOps Pipeline for Inference Benchmarking:</strong> Engineered production Azure DevOps automation for Mistral inference benchmarks covering host validation, VM lifecycle, driver provisioning, parallel accelerator execution, and structured KPI publication with failure-safe cleanup and dashboard-ready outputs.</li>
              <li><strong>Agentic TSG Error Classification System:</strong> Designed 2-agent closed-loop platform classifying production ADF/Synapse errors into 164 categories using 350+ rules and 50+ normalization patterns. Achieved full coverage on production error data with continuous refinement via feedback loops.</li>
              <li><strong>ADF Pipeline Observability Platform (30+ Production Data Factories):</strong> Deployed serverless Azure Function App with adaptive power-law threshold detection (SciPy curve fitting), interactive HTML dashboards, multi-sheet Excel reports, and automated ticket generation via Power Automate and Dataverse tracking.</li>
              <li><strong>Enterprise MCP Hub & GitHub Copilot Agent Platform:</strong> Architected unified MCP aggregator connecting 100+ tools across Azure DevOps, Ticketing, Kusto, Azure Monitor, and custom analyzers. Implemented 8-module security stack (RBAC, rate limiting, audit logging, cryptographic sessions), 11 purpose-built agents, and JSONL telemetry with Power BI dashboards.</li>
              <li><strong>Data Lineage Visualization & ML Inference Framework:</strong> Built hierarchy tracking system for ADW/ADLS objects with 7,000+ validated pipeline-to-hierarchy mappings. Implemented interactive cross-linked filters and integration with Kusto/SQL metadata for end-to-end data lineage.</li>
            </ul>
          </article>

          <article className="card card-experience card-wide">
            <h2>Experience</h2>
            <p>
              <strong>5 years of experience at LTIMindtree</strong> (Redmond, WA) across AI engineering, MLOps architecture, and cloud infrastructure teams. Progressed from Cognitive Services Engineer → Team Lead (12 engineers, Azure AI/ML platform) → AI Developer → AI & MLOps Architect. Currently architecting enterprise-grade agentic systems and inference pipelines serving Fortune 500 clients.
            </p>
            <p>
              Deep expertise in designing scalable, production-ready systems that integrate AI workflows, enterprise backends, and observability platforms. Proven track record delivering complex multi-team projects with strong focus on reliability, security (RBAC, audit logging, OAuth2), and operational excellence.
            </p>
            <ul>
              <li><strong>Agentic AI & Automation (Current Focus):</strong> Architected GitHub Copilot Agents and MCP orchestration platforms connecting 100+ enterprise tools. Built custom TypeScript MCP servers, declarative agent.md workflows, and evaluation pipelines. Implemented 8-module security framework ensuring RBAC, rate limiting, and audit compliance across teams.</li>
              <li><strong>Azure MLOps & Production ML Pipelines:</strong> Designed end-to-end ML pipelines covering data ingestion, model training, evaluation, and production deployment on Azure (Synapse, Data Factory, Functions). Engineered adaptive power-law threshold detection and automated retraining workflows for 30+ production data factories.</li>
              <li><strong>Error Classification & Incident Correlation:</strong> Built closed-loop systems correlating production errors (ADF/Synapse) to fix workflows across 164 categories. Engineered fuzzy matching algorithms (4-layer confidence scoring) with 350+ rules and 50+ normalization patterns for real-time incident-to-pipeline mapping.</li>
              <li><strong>Enterprise Observability & Monitoring:</strong> Deployed production monitoring infrastructure for Azure cloud workloads using Application Insights, Log Analytics, and Kusto queries. Implemented SLO tracking, interactive dashboards, and automated ticket generation workflows reducing incident response time significantly.</li>
              <li><strong>Cloud Infrastructure & DevOps Leadership:</strong> Led Azure network engineering for Fortune 500 clients (2022–2023): managed hybrid connectivity, VMware-to-Azure migrations, break-fix operations for VMs, VNets, ExpressRoute, VPN, and Firewall. Automated provisioning with PowerShell, ARM/Bicep, and Azure CLI.</li>
              <li><strong>Research & Systems Design:</strong> Conducted control systems research at NYU Systems & Automatic Controls Lab on real-time C++ data acquisition via DAQ hardware and PID/LQR controller design with stability analysis for automation applications.</li>
            </ul>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
