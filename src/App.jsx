import './App.css';
import profilePhoto from './assets/profile.jpg';

function App() {
  return (
    <div className="App">
      <main className="hero">
        <section className="hero-card">
          <span className="hero-badge">AI Engineer & MLOps Architect</span>
          <div className="hero-grid">
            <div className="hero-text">
              <p className="eyebrow">Hello, I'm</p>
              <h1>Rebanta Roy</h1>
              <p className="hero-intro">
                AI & MLOps Architect with 5+ years of enterprise systems experience at LTIMindtree. Specialist in GitHub Copilot Agents, Azure cloud infrastructure, machine learning pipelines, and observable, production-grade automation platforms. Expertise spans agentic AI orchestration, error classification systems, enterprise MCP architecture, and observability infrastructure serving Fortune 500 clients.
              </p>
              <div className="pill-group">
                <span>Agentic AI / Copilot Agents</span>
                <span>ML Pipeline Architecture</span>
                <span>Azure MLOps</span>
                <span>Enterprise Automation</span>
              </div>
              <p className="hero-note">
                M.S. Robotics & ML (NYU, 2021) · M.S. Data Science (Westcliff, 4.0 GPA) · B.Tech Mechanical Engineering (KIIT, 2019) · Location: Redmond, WA
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
            <h2>Education & Research</h2>
            <p>
              Rigorous academic foundation spanning robotics, machine learning, data science, and cloud engineering. Hands-on research experience in control systems, computer vision, and real-time automation. Progression from mechanical engineering fundamentals through advanced AI/ML graduate work and current studies in data systems architecture.
            </p>
            <ul>
              <li><strong>M.S. Robotics & Machine Learning</strong> – New York University, Brooklyn (2019–2021). GPA: 3.50/4.0. Advanced coursework: Deep Learning (Transformers, Attention Mechanisms), Computer Vision, Robot Perception, Semantic Segmentation, DevOps, Cloud Deployment. Research Assistant at Systems & Automatic Controls Lab: Real-time C++ data acquisition via NI DAQ hardware, PID/LQR controller design, stability analysis, hardware-in-the-loop experimentation.</li>
              <li><strong>M.S. Computer Science & Data Science</strong> – Westcliff University, California (May 2024–Present). GPA: 4.0/4.0. Specialized coursework: Data Engineering Pipelines, Advanced Cloud Architecture, Dynamic Programming, Software Development, Large-Scale Systems. Focus on distributed data processing, scalable infrastructure design, and production ML systems.</li>
              <li><strong>B.Tech Mechanical Engineering & Automation</strong> – KIIT University, India (2015–2019). GPA: 3.64/4.0. Core foundation: Programming in C, Object-Oriented Programming (C++), Numerical Methods, Mechatronics, Robotics, Industrial Automation. Capstone projects in automated control systems and mechanical design optimization.</li>
            </ul>
          </article>

          <article className="card">
            <h2>Career Overview</h2>
            <p>
              Proven architect and delivery lead with a track record of designing, building, and deploying 10+ mission-critical systems at LTIMindtree (Bellevue, WA) serving enterprise and Fortune 500 clients. Career progression demonstrates deepening technical expertise and leadership: from individual contributor (Cognitive Services Engineer) to technical leadership (Team Lead managing 12+ engineers on Azure AI/ML platform) to specialized architect role (AI & MLOps Architect). Currently focused on bleeding-edge agentic AI systems, enterprise MCP ecosystems, and production ML infrastructure.
            </p>
            <p>
              Specialized expertise in translating business requirements into scalable platform architecture. Known for building systems that prioritize observability, security (RBAC, OAuth2, audit logging), reliability (SLO-driven), and operational excellence. Strong track record integrating disparate enterprise systems (Azure DevOps, Ticketing, Kusto, SharePoint, ARM/Bicep) into unified, governed platforms. Comfortable operating across the full stack: from low-level system design and optimization to high-level architecture decisions and cross-team coordination.
            </p>
          </article>

          <article className="card card-accent">
            <h2>Contact & Links</h2>
            <dl>
              <dt>GitHub</dt>
              <dd><a href="https://github.com/Rebanta08" target="_blank" rel="noopener noreferrer">github.com/Rebanta08</a></dd>
              <dt>LinkedIn</dt>
              <dd><a href="https://www.linkedin.com/in/rr13" target="_blank" rel="noopener noreferrer">linkedin.com/in/rr13</a></dd>
              <dt>Location</dt>
              <dd>Redmond, WA</dd>
            </dl>
          </article>

          <article className="card">
            <h2>Technical Expertise</h2>
            <p style={{fontSize: '0.95em', marginBottom: '1rem'}}>
              Deep technical proficiency spanning agentic AI systems, machine learning infrastructure, cloud architecture, and production platform engineering. Proven ability to architect systems handling massive scale (100K+ objects, millions of data points, 30+ production deployments) with production-grade reliability.
            </p>
            <ul>
              <li><strong>Agentic AI & LLM Orchestration:</strong> GitHub Copilot Agents, Copilot Studio, SRE Agent, Model Context Protocol (MCP) architecture and servers, multi-agent orchestration patterns, agent.md declarative workflows, tool permission scoping, YAML frontmatter validation, agentic error handling and recovery logic.</li>
              <li><strong>Machine Learning & Deep Learning:</strong> Transformer architectures, Bi-LSTM networks, Convolutional Neural Networks (CNN/RCNN), ResNet, attention mechanisms, GANs, vectorization and embedding techniques, semantic search, fuzzy string matching, clustering algorithms (HDBSCAN), ensemble methods (LightGBM, XGBoost-GPU), curve fitting and optimization (SciPy), NLP pattern systems.</li>
              <li><strong>Azure Cloud Ecosystem:</strong> Data Factory (orchestration, error handling, pipeline design), Synapse Analytics (SQL pools, Spark pools, notebooks), Azure Functions (serverless workflows, HTTP triggers, async patterns), App Service (REST API deployment), Data Explorer (Kusto Query Language), ADLS Gen2 (data lake architecture), Storage (blob/queue), Azure Monitor, Application Insights, Log Analytics, Azure DevOps (repos, pipelines, work items), Key Vault, Managed Identity, Entra ID, Dataverse.</li>
              <li><strong>Data Engineering & Analytics:</strong> Python ecosystem (Pandas, NumPy, SciPy, scikit-learn, TensorFlow, Keras, Matplotlib, Plotly), SQL and KQL (Kusto Query Language), Apache Spark, ETL pipeline design, data transformation at scale, real-time analytics, distributed data processing, data quality frameworks.</li>
              <li><strong>Platform & Infrastructure Engineering:</strong> Docker containerization, Kubernetes orchestration (AKS), REST API design (OpenAPI 3.0 specifications), Flask web framework, TypeScript backend services, Git version control, Linux/Bash/PowerShell scripting, Azure CLI, infrastructure-as-code (Bicep, ARM templates), CI/CD pipeline automation with Azure DevOps.</li>
              <li><strong>Observability, Monitoring & Reliability:</strong> Application Insights, Log Analytics, Kusto queries for diagnostics, SLO/SLA tracking, incident correlation and RCA, Azure Monitor alerting, production telemetry design (JSONL logging), dashboard design (interactive HTML, Power BI), incident response automation, failure analysis frameworks.</li>
              <li><strong>Security & Governance:</strong> Role-Based Access Control (RBAC) design, OAuth2 authorization flows, token management and refresh, cryptographic session management, audit logging with rotation policies, rate limiting (token-bucket algorithm), credential management, compliance validation workflows.</li>
            </ul>
          </article>

          <article className="card card-wide">
            <h2>Major Projects & Delivery</h2>
            <p style={{fontSize: '0.95em', marginBottom: '1rem', fontStyle: 'italic'}}>
              Representative high-impact projects demonstrating full-stack architecture, delivery execution, and technical depth across agentic AI, MLOps, observability, and enterprise platform engineering.
            </p>
            <ul>
              <li><strong>Compliance Orchestrator Agent & MCP Plugin Architecture (Current):</strong> Built a GitHub Copilot agent on Agency CLI that orchestrates parallel Azure DevOps pipelines from incident tickets, evaluates artifacts against compliance criteria, and publishes structured results. Designed end-to-end orchestration: Ticketing MCP → Rack-Status MCP (custom TypeScript server) → ADO MCP, with parallel execution and artifact polling. Implemented 6 declarative agent.md workflows (compliance reviewer, pipeline triage, PR reviewer agents) with scoped MCP tool permissions and YAML validation. Packaged as pip-installable wheel and Azure Artifacts Universal Package for cross-team deployment. Built automated Azure DevOps evaluation pipeline for regression testing agent behavior, workflow routing, and compliance output quality on every update.</li>
              <li><strong>End-to-End Mistral Inference Benchmarking Pipeline:</strong> Engineered production Azure DevOps automation covering host pre-checks, VM lifecycle management, driver provisioning, parallel accelerator validation (across multiple GPU/TPU types), and structured KPI publication. Implemented reliable device lifecycle handling with automated validation, repeatable accelerator availability, and failure-safe cleanup. Added guarded diagnostics, reusable PowerShell modules, backward-compatible updates, and standardized teardown logic to prevent dirty host states. Standardized execution templates and shared automation modules enabling reuse across multiple validation workflows.</li>
              <li><strong>Agentic 2-Agent Error Classification System (164 Categories):</strong> Designed closed-loop platform automatically classifying production ADF/Synapse errors into 164 distinct categories using 350+ regex rules and 50+ normalization patterns. Agent 1 builds message skeletons, unwraps nested error structures, and ranks candidate rules via key-phrase extraction into regex mapping JSON. Agent 2 runs validation passes, generates TSG-linked fix suggestions, routes mismatches back for continuous refinement. Achieved full coverage on production error data with feedback-driven rule improvement. System enables autonomous error-to-resolution mapping in real-time.</li>
              <li><strong>ADF Pipeline Observability Platform (30+ Production Data Factories):</strong> Deployed serverless Azure Function App performing deep validation and health monitoring across 30+ production Data Factories. Engineered adaptive power-law threshold model using SciPy curve fitting (L-BFGS-B optimization) replacing static long-running detection with intelligent, data-driven baselines. Generated multi-layer dashboards: interactive HTML with ADF Studio deep links, multi-sheet Excel reports with direct pipeline navigation. Implemented Dataverse-backed Power Automate workflows for automated ticket lifecycle (creation, updates, mitigation). Built checkpoint-resumable pagination for massive-scale ingestion and async request-reply patterns for reliability.</li>
              <li><strong>Enterprise MCP Hub & GitHub Copilot Agent Platform (100+ Tools, 11 Agents):</strong> Architected unified MCP aggregator connecting 100+ enterprise tools across Azure DevOps (80+ MCP tools), Ticketing systems, Kusto Analytics, Metrics Platform, SharePoint, ARM/Bicep, Azure Monitor, Email, Filesystem, and custom Python analyzers. Implemented TypeScript aggregator with dynamic server discovery and protocol-level routing. Built 8-module security framework: RBAC with fine-grained permissions, token-bucket rate limiting, cryptographic session management, audit logging with rotation, automated token renewal, compliance validation. Defined 11 purpose-built agents with tool restrictions and scoped instructions. Implemented ADO-integrated PR auditing and checklist generation. Built JSONL telemetry logging with deduped report sync and Power BI dashboards. Enforced 4-step agent lifecycle with compliance validation and onboarding wizard support.</li>
              <li><strong>Data Lineage Visualization Engine (7,000+ Object Hierarchies):</strong> Built hierarchy determination system tracking ADW and ADLS object dependencies. Computed hierarchies for 7,000+ objects with validated pipeline-to-hierarchy mapping. Implemented interactive cross-linked filters across source (raw data), transformation (processing logic), and serving (analytics endpoints) layers. Integrated Kusto and SQL metadata sources for comprehensive dependency resolution. Enabled end-to-end data lineage visualization supporting impact analysis and governance.</li>
              <li><strong>Copilot Studio Agent with Synapse Middleware (Child Agent Orchestration):</strong> Built Copilot Studio Agent with 5 Child Agents orchestrating ADF Pipeline runs based on Ticketing Center inputs, ADE lookups, and SQL queries. Developed Flask REST API middleware (27 endpoints) on Azure App Service enabling SQL script CRUD, parameterized execution, Spark pool management, and notebook operations with layered Azure AD security. Published OpenAPI 3.0.3 specification enabling Copilot Studio integration via OAuth2 authorization code flow. Enabled secure natural-language-driven operations connecting Copilot workflows with enterprise authentication and governed execution.</li>
            </ul>
          </article>

          <article className="card card-experience card-wide">
            <h2>Professional Experience at LTIMindtree</h2>
            <p>
              <strong>5+ years of progressive responsibility</strong> (December 2021 – Present, Bellevue, WA). Progressed through: Azure Cognitive Services Engineer (Aug 2021–Mar 2022) → Azure Cognitive Services / ML Engineer (Aug 2021–Mar 2022) → Azure AI and ML Team Lead managing 12+ engineers (Feb–Sep 2022) → Azure Infrastructure Team Lead (Sep 2022–Mar 2023) → AI Developer (Mar 2023–December 2025) → AI and MLOps Architect (December 2025–Present). Transitioned from service delivery and platform support roles into specialized architect positions, leading design and delivery of enterprise-scale systems for Fortune 500 clients.
            </p>
            <p>
              <strong>Core competencies demonstrated across all roles:</strong> System architecture and design at production scale, multi-team coordination and mentorship, hands-on technical execution, production reliability and observability, security and compliance, client stakeholder management, and continuous innovation in emerging AI/ML technologies and cloud platforms.
            </p>
            <ul>
              <li><strong>Agentic AI & Enterprise Orchestration (Current Focus – Dec 2025–Present):</strong> Leading architecture of GitHub Copilot Agents and MCP orchestration platforms connecting 100+ enterprise tools. Designing custom TypeScript MCP servers exposing rack inventory, CI/CD operations, and analytics. Building declarative agent.md workflows with role-based access and scoped tool permissions. Implementing enterprise security frameworks (RBAC, rate limiting, session management, audit logging). Designing agent evaluation and governance systems for production safety and compliance. Mentoring team on MCP protocol design, agent development patterns, and enterprise platform architecture.</li>
              <li><strong>Production ML Infrastructure & Error Classification (Mar 2023–Dec 2025):</strong> Architected agentic error classification system processing production failures across 164 categories with 350+ rules. Engineered 2-agent closed-loop system achieving full production data coverage with continuous learning. Designed ADF/Synapse observability platform monitoring 30+ production data factories with adaptive power-law threshold detection. Implemented serverless infrastructure using Azure Functions, Dataverse, and Power Automate for automated ticket lifecycle. Built dashboard and reporting systems connecting production telemetry to incident management.</li>
              <li><strong>Azure Cloud Infrastructure Leadership (Sep 2022–Mar 2023):</strong> Led Azure network engineering for Fortune 500 clients as Team Lead. Managed Premier/Pro Direct SLA support queues for VMs, VNets, ExpressRoute, VPN, Load Balancers, Network Security Groups, and Azure Firewall. Resolved high-severity hybrid connectivity issues (BGP routing, IPsec/IKE, site-to-site tunnels). Led VMware-to-Azure migrations using Azure Migrate and hybrid vSphere integration. Drove proactive monitoring with Network Watcher, Log Analytics, Azure Monitor. Authored architecture documentation (HLD/LLD), performed RCA analysis, mentored junior engineers.</li>
              <li><strong>Azure AI/ML Platform Delivery (Feb–Sep 2022):</strong> Led 12-engineer team delivering enterprise Azure Cognitive Services (Vision, Speech, Language, Decision APIs), ML Studio solutions, and IoT Hub integrations. Managed full project lifecycle: API integration (REST/SDK in Python, C++, .NET), distributed training, AKS deployments, model versioning. Implemented AutoML troubleshooting, pipeline failure diagnosis, A/B testing frameworks. Coordinated across DevOps, Security, and IoT Edge teams for optimized deployments.</li>
              <li><strong>Azure Cognitive Services & ML Support (Aug 2021–Mar 2022):</strong> Supported Fortune 500 customers on Azure Cognitive Services, ML, and IoT platforms. Delivered REST/SDK integrations for Vision, Speech, Language, Decision APIs. Deployed ML models in Azure ML Studio with autoscaling, failover, and compute optimization. Supported IoT Hub, IoT Edge, device twins, stream analytics for real-time anomaly detection. Automated production ML pipelines improving efficiency and operational reliability.</li>
            </ul>
          </article>

          <article className="card card-wide">
            <h2>Additional Experience</h2>
            <p>
              <strong>Research Assistant, Systems & Automatic Controls Lab, NYU (Sep 2020–May 2022):</strong> Conducted controls research with real-time C++ data acquisition from NI DAQ hardware. Designed and implemented PID and LQR controller algorithms with stability analysis. Built hardware-in-the-loop experimentation frameworks validating control methods for dynamic systems and automation applications.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default App;
