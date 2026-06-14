import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const profile = {
  name: 'Prajna Shetty',
  headline: 'Product Manager | AI Product Management | Product Owner',
  location: 'London, UK',
  email: 'prajna.shetty.350@gmail.com',
  phone: '+44 7423 460128',
  linkedin: 'https://www.linkedin.com/in/prajnashetty350/',
  portfolio: 'https://your-portfolio-link.com',
};

const navItems = ['Work', 'Case Studies', 'Experience', 'Skills', 'Contact'];

const metrics = [
  { value: '7+', label: 'years across banking, enterprise platforms and AI tooling' },
  { value: 'Top 3', label: 'NextLeap PM Fellowship graduate' },
  { value: '40%', label: 'delivery speed improvement through Agile low-code delivery' },
  { value: '25%', label: 'latency reduction on Kafka-based market rate feature' },
];

const productStrengths = [
  {
    title: 'Problem discovery',
    body: 'Turns recurring operational pain points into scoped product problems with clear users, constraints and launch criteria.',
  },
  {
    title: 'AI product thinking',
    body: 'Hands-on with LLMs, AI agents, AWS Bedrock, OpenAI APIs, prompt design and agentic workflows.',
  },
  {
    title: 'Execution fluency',
    body: 'Can move between user stories, backlog prioritisation, system design, APIs, data, QA and release trade-offs.',
  },
  {
    title: 'Metrics discipline',
    body: 'Frames success through adoption, conversion, latency, reliability, quality and business impact metrics.',
  },
];

const projects = [
{
    tag: 'Fintech · Product Strategy',
    title: 'CashWise Personal Finance Product',
    summary:
      'A product concept for consolidated finance visibility, budgeting, goal-based saving pots and investment analytics for young working professionals.',
    role: 'Product Strategist',
    proof: ['Market segmentation', 'Survey analysis', 'JTBD', 'RICE prioritisation'],
    metrics: 'Prioritised Finance Fusion View with highest RICE score: 56',
    artifact: '/assets/cashwise-personal-finance-case-study.pdf',
    preview: '/previews/cashwise.png',
  },
{
    tag: 'Product Teardown · EdTech',
    title: 'Duolingo Product Teardown',
    summary:
      'A teardown of Duolingo’s value proposition, monetisation model, personas and notification channels across push, email and in-app nudges.',
    role: 'Product Analyst',
    proof: ['Competitive scan', 'Revenue model', 'Personas', 'Engagement loops'],
    metrics: 'Explored freemium, ads, in-app purchases and habit-building loops',
    artifact: '/assets/duolingo-product-teardown.pdf',
    preview: '/previews/duolingo.png',
  },
{
    tag: 'PRD · Consumer Product',
    title: 'BookMyShow Group Booking Feature',
    summary:
      'A mobile-first PRD for group event planning, voting, invitations and split payments. Focused on turning fragmented WhatsApp planning into a structured booking flow.',
    role: 'Product Manager',
    proof: ['User stories', 'Target segments', 'Feature requirements', 'Success metrics'],
    metrics: 'Goal: +20% ticket sales and +50% conversion among monthly power users',
    artifact: '/assets/bookmyshow-group-booking-prd.pdf',
    preview: '/previews/bookmyshow.png',
  }
];

const experience = [
  {
    company: 'JPMorgan Chase & Co.',
    role: 'Software Engineer',
    dates: 'Jan 2026 – Present',
    location: 'London, UK',
    product: 'AI-powered Terraform upgrade advisor & multi-region cloud reliability',
    bullets: [
      'Identified repeated manual Terraform upgrade pain points and scoped an AI agent solution with requirements and success metrics.',
      'Drove requirements for AWS ECS Next-Gen migration and multi-region architecture, balancing reliability, cost and time-to-market.',
      'Converted production incident learnings into observability and security backlog items with Cloud Engineering and DevOps stakeholders.',
    ],
  },
  {
    company: 'JPMorgan Chase & Co.',
    role: 'Software Engineer',
    dates: 'Sep 2023 – Nov 2025',
    location: 'Mumbai, India',
    product: 'International Demand Deposit Account transaction platform',
    bullets: [
      'Owned delivery of a high-impact transaction API from requirements discovery through launch as de facto product owner.',
      'Defined success metrics for a Kafka-based market rate feature, achieving 25% latency reduction.',
      'Partnered with Product, QA and UAT teams to manage release scope, quality and delivery risk.',
    ],
  },
  {
    company: 'Mendix, Siemens',
    role: 'Senior Technical Consultant',
    dates: 'Sep 2022 – Aug 2023',
    location: 'London, UK',
    product: 'Low-code enterprise products across client domains',
    bullets: [
      'Aligned product roadmaps with business objectives, client needs and stakeholder constraints.',
      'Gathered requirements and delivered tailored low-code solutions, improving delivery speed by 40% through Agile execution.',
      'Led AWS deployment and monitoring strategy for post-launch reliability and high availability.',
    ],
  },
  {
    company: 'JPMorgan Chase & Co.',
    role: 'Software Engineer',
    dates: 'Jul 2019 – Aug 2022',
    location: 'Mumbai, India',
    product: 'Credit Line Optimizer & Document Processor Batch',
    bullets: [
      'Contributed to product requirements for an ML-based credit decisioning tool.',
      'Built scalable backend and Angular UI improvements using Java, Spring Batch, SQL and microservices.',
      'Improved document processing performance by 20%.',
    ],
  },
];

const skillGroups = [
  {
    title: 'Product Management',
    items: ['User research', 'Problem framing', 'Discovery', 'Roadmapping', 'Prioritisation', 'Metrics', 'OKRs', 'Stakeholder management', 'A/B testing'],
  },
  {
    title: 'Design & Delivery',
    items: ['Wireframing', 'UX principles', 'Figma', 'Whimsical', 'Jira', 'Confluence', 'Agile', 'Scrum', 'Release planning'],
  },
  {
    title: 'Technical & AI',
    items: ['System design', 'SQL', 'APIs', 'Microservices', 'AWS', 'LLMs', 'AI agents', 'AWS Bedrock', 'OpenAI APIs', 'NLP'],
  },
];

const certifications = [
  'NextLeap Product Manager Fellowship — Top 3 Graduate',
  'AWS Certified Developer Associate',
  'Certified Scrum Master',
  'Oracle Certified Professional Java Programmer',
  'Certified Mendix Consultant',
];

function Icon({ name }) {
  const icons = {
    arrow: <path d="M5 12h14M13 5l7 7-7 7" />,
    external: <path d="M14 3h7v7M10 14 21 3M21 14v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h6" />,
    mail: <path d="m3 6 9 7 9-7M5 19h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2Z" />,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.11 5.18 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.6a2 2 0 0 1-.45 2.11L9 10.71a16 16 0 0 0 4.29 4.29l1.28-1.28a2 2 0 0 1 2.11-.45c.83.3 1.7.51 2.6.63A2 2 0 0 1 22 16.92Z" />,
    pin: <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />,
    check: <path d="m20 6-11 11-5-5" />,
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="M18 6 6 18M6 6l12 12" />,
    spark: <path d="M12 2l1.6 5.4L19 9l-5.4 1.6L12 16l-1.6-5.4L5 9l5.4-1.6L12 2ZM19 15l.9 3.1L23 19l-3.1.9L19 23l-.9-3.1L15 19l3.1-.9L19 15Z" />,
  };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="icon" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {icons[name]}
    </svg>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <a className="brand" href="#top" aria-label="Prajna Shetty home">
        <span className="brandMark">PS</span>
        <span>Prajna Shetty</span>
      </a>
      <button className="menuButton" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">
        <Icon name={open ? 'close' : 'menu'} />
      </button>
      <nav className={open ? 'nav open' : 'nav'}>
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase().replaceAll(' ', '-')}`} onClick={() => setOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}

function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="sectionTitle">
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {description && <span>{description}</span>}
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="hero shell">
      <div className="heroText">
        <div className="pill"><Icon name="spark" /> Product Manager • AI Products • Fintech • Enterprise Platforms</div>
        <h1>Technical Product Manager | Building AI-Powered Products</h1>
        <p>
          7+ years across banking, cloud platforms, enterprise tooling and AI workflows. I turn ambiguous problems into clear roadmaps, measurable outcomes and shipped features.
        </p>
        <div className="heroActions">
          <a className="button primary" href="#case-studies">View case studies <Icon name="arrow" /></a>
          <a className="button secondary" href={`mailto:${profile.email}`}>Contact</a>
        </div>
      </div>

      <aside className="heroPanel" aria-label="Profile summary">
        <div className="gradientOrb one" />
        <div className="gradientOrb two" />
        <div className="profileBadge">Available for Product Manager / Product Owner roles</div>
        <h2>{profile.name}</h2>
        <p>{profile.headline}</p>
        <div className="contactStack">
          <a href={`mailto:${profile.email}`}><Icon name="mail" /> {profile.email}</a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}><Icon name="phone" /> {profile.phone}</a>
          <span><Icon name="pin" /> {profile.location}</span>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="external" /> LinkedIn</a>
        </div>
      </aside>
    </section>
  );
}

function Metrics() {
  return (
    <section className="metrics shell" aria-label="Portfolio metrics">
      {metrics.map((metric) => (
        <article className="metricCard" key={metric.label}>
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </article>
      ))}
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="section shell">
      <SectionTitle
        eyebrow="Positioning"
        title="Product leadership grounded in engineering depth."
        description="I bridge customer problems, business goals and technical execution—bringing product thinking, data-driven prioritisation and hands-on delivery experience across regulated industries."
      />
      <div className="strengthGrid">
        {productStrengths.map((item, index) => (
          <article className="strengthCard" key={item.title}>
            <span>0{index + 1}</span>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CaseStudies() {
  const [activeTag, setActiveTag] = useState('All');
  const tags = useMemo(() => ['All', 'Fintech', 'Teardown', 'PRD'], []);
  const visibleProjects = projects.filter((project) => activeTag === 'All' || project.tag.toLowerCase().includes(activeTag.toLowerCase()));

  return (
    <section id="case-studies" className="section shell">
      <SectionTitle
        eyebrow="Product Portfolio"
        title="Product thinking demonstrated through real product challenges."
        description="From fintech strategy to product teardowns and PRDs, each case study showcases discovery, prioritisation, decision-making and execution frameworks."
      />
      <div className="filters" role="tablist" aria-label="Project filters">
        {tags.map((tag) => (
          <button key={tag} className={activeTag === tag ? 'active' : ''} onClick={() => setActiveTag(tag)}>
            {tag}
          </button>
        ))}
      </div>
      <div className="projectGrid">
        {visibleProjects.map((project) => (
          <article className="projectCard" key={project.title}>
            <a className="preview" href={project.artifact} target="_blank" rel="noreferrer" aria-label={`Open ${project.title}`}>
              <img src={project.preview} alt={`${project.title} preview`} loading="lazy" />
            </a>
            <div className="projectBody">
              <span className="projectTag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <div className="evidenceList">
                {project.proof.map((proof) => <span key={proof}>{proof}</span>)}
              </div>
              <div className="metricNote">{project.metrics}</div>
              <div className="projectActions">
                <a className="textLink" href={project.artifact} target="_blank" rel="noreferrer">Open artifact <Icon name="external" /></a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProductProcess() {
  const steps = [
    { title: 'Find the real problem', text: 'Start with pain points, user interviews, support issues or incident patterns.' },
    { title: 'Frame the decision', text: 'Define the user, job-to-be-done, constraints, risks and non-goals.' },
    { title: 'Prioritise with evidence', text: 'Use impact, confidence, effort and business urgency instead of loud opinions.' },
    { title: 'Ship and measure', text: 'Translate scope into backlog, launch plan and success metrics.' },
  ];
  return (
    <section className="section shell processSection">
      <SectionTitle
        eyebrow="Product Execution Framework"
        title="A structured approach from discovery to measurable outcomes."
      />
      <div className="processGrid">
        {steps.map((step, index) => (
          <article key={step.title} className="processCard">
            <strong>{index + 1}</strong>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="section shell">
      <SectionTitle
        eyebrow="Experience"
        title="Building products across banking, AI and enterprise platforms."
      />
      <div className="timeline">
        {experience.map((job) => (
          <article className="timelineItem" key={`${job.company}-${job.dates}`}>
            <div className="timelineDot" />
            <div className="timelineContent">
              <div className="timelineHeader">
                <div>
                  <h3>{job.role}</h3>
                  <p>{job.company}</p>
                </div>
                <span>{job.dates}</span>
              </div>
              <div className="productLine">{job.product} · {job.location}</div>
              <ul>
                {job.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="section shell">
      <SectionTitle
        eyebrow="Skills"
        title="Product, AI and engineering skills in one profile."
      />
      <div className="skillsGrid">
        {skillGroups.map((group) => (
          <article className="skillCard" key={group.title}>
            <h3>{group.title}</h3>
            <div className="chipCloud">
              {group.items.map((item) => <span key={item}>{item}</span>)}
            </div>
          </article>
        ))}
      </div>
      <div className="certifications">
        <h3>Certifications & training</h3>
        <div>
          {certifications.map((certification) => (
            <span key={certification}><Icon name="check" /> {certification}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section shell contactSection">
      <div>
        <SectionTitle
          eyebrow="Contact"
          title=""
          description="The site is designed as a product-role portfolio: case studies first, measurable outcomes second, experience and skills third."
        />
        <div className="contactActions">
          <a className="button primary" href={`mailto:${profile.email}`}>Email Prajna</a>
          <a className="button secondary" href={profile.linkedin} target="_blank" rel="noreferrer">Open LinkedIn <Icon name="external" /></a>
        </div>
      </div>
      <aside className="contactCard">
        <h3>Quick profile</h3>
        <p>Product Manager / Product Owner candidate with 7+ years of software engineering depth, AI product exposure and hands-on case study portfolio.</p>
        <a href={profile.portfolio} target="_blank" rel="noreferrer">Portfolio placeholder <Icon name="external" /></a>
      </aside>
    </section>
  );
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Metrics />
        <Work />
        <CaseStudies />
        <ProductProcess />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <footer className="footer shell">
        <span>© {new Date().getFullYear()} Prajna Shetty</span>
        <span>Product portfolio built with React + Vite</span>
      </footer>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
