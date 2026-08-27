/**
 * ScaleNova Careers Portal Dataset
 * 
 * Defines company culture, remote working philosophy, perks & benefits,
 * 2 Full-Time Roles, and 4 Internship Roles with realistic Indian MSME compensation.
 */
const SCALENOVA_CAREERS = {
  culture: {
    headline: "Build the Operating System Powering Growing Indian MSMEs",
    subheadline: "Join ScaleNova and help build practical, unified business technology that replaces chaos with clarity.",
    description: "At ScaleNova, we build modern cloud software that unifies CRM, ERP, HR, Projects, and Financial operations for ambitious business owners across India. We value high autonomy, craftsmanship, direct communication, and deep respect for customer outcomes.",
    pillars: [
      {
        icon: "fas fa-laptop-house",
        title: "Remote-First Collaboration",
        detail: "Work from wherever you are most productive. We prioritize clear asynchronous communication, structured documentation, and high trust over micromanagement."
      },
      {
        icon: "fas fa-rocket",
        title: "High Ownership & Impact",
        detail: "No corporate bureaucracy. You will own meaningful parts of our product features and customer workflows from day one, seeing your work directly empower growing businesses."
      },
      {
        icon: "fas fa-seedling",
        title: "Continuous Learning",
        detail: "Continuous skill development with access to top technical resources, engineering mentorship, and exposure to real-world multi-tenant SaaS scaling challenges."
      },
      {
        icon: "fas fa-users",
        title: "Transparent & Supportive Culture",
        detail: "We value candor, constructive feedback, empathy for users, and a supportive team environment where great ideas win regardless of seniority."
      }
    ]
  },

  remoteWorking: {
    title: "How We Work: Remote-First & Performance-Driven",
    description: "ScaleNova is designed from the ground up as a remote-first technology company. We believe the best talent shouldn't be constrained by geographic boundaries or daily commutes.",
    principles: [
      {
        icon: "fas fa-clock",
        title: "Flexible Collaboration",
        detail: "Manage your own daily schedule around core team overlap hours. We focus on output, customer value, and dependable delivery rather than clocked hours."
      },
      {
        icon: "fas fa-book",
        title: "Documentation Culture",
        detail: "Decisions, specifications, and architecture are documented clearly in writing, ensuring everyone stays aligned without endless unproductive status meetings."
      },
      {
        icon: "fas fa-comments",
        title: "Asynchronous Communication",
        detail: "We use structured digital channels for regular check-ins and thoughtful asynchronous collaboration, giving you uninterrupted time for deep focus work."
      },
      {
        icon: "fas fa-bullseye",
        title: "Ownership & Accountability",
        detail: "Every team member takes end-to-end ownership of their deliverables, proactively communicating roadblocks and celebrating team milestones."
      }
    ]
  },

  perks: [
    { icon: "fas fa-globe", title: "Remote-First Environment", desc: "Work comfortably from your home or remote workspace with flexible working hours." },
    { icon: "fas fa-trophy", title: "Merit-Driven Growth", desc: "Clear performance reviews and career progression opportunities based on demonstrated results." },
    { icon: "fas fa-laptop-code", title: "Modern Tech Tooling", desc: "Access to top developer, design, and AI productivity tools to help you do your best work." },
    { icon: "fas fa-book-open", title: "Learning & Mentorship", desc: "Direct mentorship from senior engineers, code reviews, and support for professional certifications." },
    { icon: "fas fa-layer-group", title: "Real SaaS / ERP Exposure", desc: "Hands-on experience architecting multi-tenant cloud systems, database schemas, and business automation." },
    { icon: "fas fa-mug-hot", title: "Collaborative Team Culture", desc: "Supportive, low-ego team environment where your ideas and initiatives are genuinely valued." }
  ],

  // 2 Full-Time Roles + 4 Internship Opportunities
  roles: [
    {
      id: "frappe-erpnext-developer",
      title: "Frappe / ERPNext Developer",
      category: "Full-Time",
      department: "Engineering",
      location: "Remote (India)",
      experience: "1–3 Years",
      compensationRange: "₹4.0L – ₹7.0L per annum",
      compensationNote: "Market-aligned package based on demonstrated Python/Frappe experience, problem-solving, and code review performance.",
      overview: "We are looking for a skilled Frappe / ERPNext Developer to build and enhance core operational modules (CRM, ERP, Inventory, Invoicing, and HR) within the ScaleNova Business OS ecosystem.",
      responsibilities: [
        "Develop custom DocTypes, server scripts, client scripts, and RESTful APIs using Frappe Framework and Python.",
        "Design and optimize relational MariaDB / PostgreSQL database schemas and complex analytical queries.",
        "Implement responsive Frappe / Vue / Tailwind UI components and customer-facing portal workflows.",
        "Integrate external webhooks and third-party services (WhatsApp Business API, payment gateways, GST portals).",
        "Write clean, unit-tested code and participate actively in peer code reviews and deployment pipelines."
      ],
      requiredSkills: [
        "Hands-on proficiency with Frappe Framework, ERPNext architecture, Python, and JavaScript.",
        "Strong understanding of relational database management (MariaDB / MySQL) and SQL query optimization.",
        "Experience building and consuming RESTful APIs and webhook data pipelines.",
        "Solid command of Git, version control, and Linux / Docker deployment environments."
      ],
      niceToHave: [
        "Experience with Vue 3 / Frappe UI and modern CSS frameworks (Tailwind).",
        "Knowledge of Indian GST, invoicing rules, and inventory valuation methods (FIFO / Moving Average)."
      ],
      whatYouLearn: "Deep expertise in building scalable multi-tenant SaaS systems, real-time business intelligence, and enterprise-grade operational architectures.",
      workMode: "100% Remote (India) with flexible working hours."
    },
    {
      id: "bde-sales-executive",
      title: "Business Development / Sales Executive",
      category: "Full-Time",
      department: "Growth & Sales",
      location: "Remote / Hybrid (India)",
      experience: "1–3 Years",
      compensationRange: "₹3.0L – ₹6.0L per annum + Performance Incentives",
      compensationNote: "Base salary aligned with experience plus attractive uncapped quarterly performance incentives on closed deals.",
      overview: "Drive the adoption of ScaleNova Business OS by engaging directly with founders, managing directors, and operations heads of growing Indian MSMEs across manufacturing, trading, and services.",
      responsibilities: [
        "Engage with inbound demo inquiries and execute consultative outbound outreach across targeted industrial clusters.",
        "Understand business operational bottlenecks (spreadsheet chaos, stockouts, lead leakage) and conduct tailored live platform demonstrations.",
        "Guide prospects through plan selection (Core, Growth, Elite), commercial proposals, and deal closure.",
        "Maintain clean CRM pipeline tracking, deal notes, and revenue forecasts in ScaleNova CRM.",
        "Collaborate with the customer onboarding engineering team to ensure a seamless implementation experience."
      ],
      requiredSkills: [
        "Demonstrated track record in B2B software, SaaS, or technology solutions sales in the Indian market.",
        "Excellent verbal and written communication skills in English and Hindi (regional languages are a strong advantage).",
        "Ability to translate technical software capabilities into simple, high-value business benefits.",
        "Disciplined sales pipeline management, active listening, and strong negotiation skills."
      ],
      niceToHave: [
        "Prior experience selling CRM, ERP, accounting, or billing software to Indian MSMEs.",
        "Existing professional network in manufacturing, distribution, or agency sectors."
      ],
      whatYouLearn: "Master consultative B2B SaaS selling, executive deal negotiation, and high-velocity SaaS growth strategies.",
      workMode: "Remote-first with optional travel for select client meetings or industry expos."
    },
    {
      id: "frappe-dev-intern",
      title: "Frappe / ERPNext Development Intern",
      category: "Internship",
      department: "Engineering",
      location: "Remote (India)",
      duration: "3–6 Months",
      experience: "Fresher / CS Student",
      compensationRange: "Stipend (Subject to approval) / Performance-based PPO",
      compensationNote: "Hands-on internship with structured mentorship, real SaaS feature delivery, and potential Pre-Placement Offer (PPO) for top performers.",
      overview: "Gain hands-on experience building production business applications using Frappe Framework, Python, and modern web technologies under senior developer mentorship.",
      responsibilities: [
        "Build custom Frappe DocTypes, reports, and client/server scripts for real MSME workflows.",
        "Assist in writing unit tests, debugging edge cases, and optimizing database queries.",
        "Participate in daily engineering standups, sprint reviews, and technical documentation."
      ],
      requiredSkills: [
        "Foundational knowledge of Python, JavaScript, HTML, and CSS.",
        "Basic understanding of relational databases (SQL, tables, foreign keys, queries).",
        "Familiarity with Git version control and GitHub workflows.",
        "Strong problem-solving curiosity, eagerness to learn, and self-motivation."
      ],
      niceToHave: [
        "Prior exposure to Frappe Framework or ERPNext is a major plus.",
        "Academic projects involving full-stack web applications."
      ],
      whatYouLearn: "How to build production-grade enterprise software, master Frappe/Python backend development, and write clean, scalable code.",
      workMode: "100% Remote (India)."
    },
    {
      id: "frontend-ui-intern",
      title: "Frontend / UI Development Intern",
      category: "Internship",
      department: "Engineering",
      location: "Remote (India)",
      duration: "3–6 Months",
      experience: "Fresher / Design & CS Student",
      compensationRange: "Stipend (Subject to approval) / Performance-based PPO",
      compensationNote: "Direct UI engineering experience building accessible, animated, and responsive web applications with potential PPO opportunity.",
      overview: "Work closely with product designers to implement clean, pixel-perfect, accessible, and fast user interfaces for the ScaleNova platform.",
      responsibilities: [
        "Develop reusable, accessible UI components using HTML5, CSS3, Tailwind CSS, and Vanilla JavaScript / Vue.",
        "Optimize web page loading speeds, micro-animations, and responsive layouts across all mobile screen sizes.",
        "Ensure seamless cross-browser compatibility and web accessibility (a11y) standards."
      ],
      requiredSkills: [
        "Strong understanding of semantic HTML5, modern CSS3 (Flexbox, Grid, CSS Variables), and JavaScript.",
        "Experience building mobile-first responsive layouts without layout bugs or overflow.",
        "Eye for clean visual typography, spacing, contrast, and interactive micro-animations.",
        "Basic familiarity with Git."
      ],
      niceToHave: [
        "Familiarity with Tailwind CSS, SVG animations, or Three.js WebGL visualizers.",
        "Portfolio of personal web projects or design prototypes."
      ],
      whatYouLearn: "Modern frontend performance optimization, design token architecture, interactive UI engineering, and web accessibility.",
      workMode: "100% Remote (India)."
    },
    {
      id: "bde-sales-intern",
      title: "Business Development / Sales Intern",
      category: "Internship",
      department: "Growth & Sales",
      location: "Remote (India)",
      duration: "3–6 Months",
      experience: "Fresher / Final Year Student",
      compensationRange: "Stipend (Subject to approval) + Incentive Opportunities",
      compensationNote: "Practical exposure to B2B SaaS lead generation, sales qualification, and client discovery with potential PPO opportunity.",
      overview: "Learn the fundamentals of modern B2B SaaS growth, market research, and consultative sales outreach while working closely with our sales leadership.",
      responsibilities: [
        "Research and map growing MSME prospect accounts across target Indian industrial corridors.",
        "Assist in crafting personalized outreach emails, WhatsApp introductions, and scheduling demo calls.",
        "Maintain lead records in ScaleNova CRM and assist during live product demonstration calls.",
        "Analyze campaign conversion rates and help refine outreach messaging."
      ],
      requiredSkills: [
        "Strong verbal and written communication abilities in English and Hindi.",
        "High energy, curiosity about business operations, and persistence.",
        "Good research skills and proficiency with spreadsheets and productivity tools.",
        "Eagerness to pursue a career in technology sales or business management."
      ],
      niceToHave: [
        "Background in Business Administration (BBA/MBA), Commerce, or Marketing."
      ],
      whatYouLearn: "B2B sales funnels, CRM pipeline discipline, consultative pitching, objection handling, and customer discovery.",
      workMode: "100% Remote (India)."
    },
    {
      id: "digital-marketing-intern",
      title: "Digital Marketing / Content Intern",
      category: "Internship",
      department: "Marketing",
      location: "Remote (India)",
      duration: "3–6 Months",
      experience: "Fresher / Marketing Student",
      compensationRange: "Stipend (Subject to approval) / Performance-based PPO",
      compensationNote: "Hands-on content marketing, SEO research, and social media growth experience for a high-growth B2B SaaS platform.",
      overview: "Help tell the ScaleNova story by researching, writing, and distributing high-quality educational content, blog guides, and social media campaigns for Indian business owners.",
      responsibilities: [
        "Conduct keyword and topic research on business software, GST compliance, inventory workflows, and MSME growth.",
        "Draft informative blog articles, case studies, and practical guides for ScaleNova Insights.",
        "Create engaging LinkedIn and social media posts, visual carousels, and newsletter snippets.",
        "Track search engine rankings, website traffic analytics, and engagement metrics."
      ],
      requiredSkills: [
        "Exceptional written English communication skills with clear, engaging writing style.",
        "Basic understanding of SEO fundamentals (keywords, headers, meta tags, content structure).",
        "Creativity, structured research skills, and keen attention to detail.",
        "Active presence on professional social networks (LinkedIn)."
      ],
      niceToHave: [
        "Experience using Canva or Figma for creating simple social graphics.",
        "Familiarity with Google Analytics and Google Search Console."
      ],
      whatYouLearn: "B2B SaaS content marketing, SEO ranking strategies, brand storytelling, and analytics-driven content distribution.",
      workMode: "100% Remote (India)."
    }
  ]
};

// Freeze careers dataset
if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_CAREERS);
}
