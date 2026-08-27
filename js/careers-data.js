/**
 * ScaleNova Careers Portal Dataset
 * 
 * Defines company culture, perks & benefits, and available job positions with complete specs.
 */
const SCALENOVA_CAREERS = {
  culture: {
    headline: "Build the Operating System Powering the Next Generation of Indian MSMEs",
    description: "At ScaleNova, we are building unified, elegant cloud software that replaces disjointed spreadsheets, paper registers, and high-cost fragmented tools for thousands of ambitious business owners across India. We believe in high autonomy, craft-driven engineering, and deep respect for customer outcomes.",
    pillars: [
      {
        icon: "fas fa-laptop-house",
        title: "Remote-First Collaboration",
        detail: "Work from wherever you are most productive. We prioritize clear asynchronous communication, focused deep work, and high trust over micromanagement."
      },
      {
        icon: "fas fa-rocket",
        title: "High Ownership & Impact",
        detail: "No endless bureaucracy. You will own meaningful parts of our products and customer journeys from day one, seeing your work make a tangible difference for real businesses."
      },
      {
        icon: "fas fa-seedling",
        title: "Continuous Learning",
        detail: "We encourage continuous growth with access to top technical resources, engineering mentorship, and opportunities to solve complex real-world scaling problems."
      },
      {
        icon: "fas fa-users",
        title: "Transparent & Direct Culture",
        detail: "We value candor, constructive feedback, empathy for users, and a supportive team environment where great ideas win regardless of seniority."
      }
    ]
  },

  perks: [
    { icon: "fas fa-globe", title: "Flexible Remote Work", desc: "Work comfortably from your home or remote workspace with flexible working hours." },
    { icon: "fas fa-trophy", title: "Performance Incentives", desc: "Competitive base packages with transparent, merit-driven quarterly performance bonuses." },
    { icon: "fas fa-laptop-code", title: "Modern Tech Tooling", desc: "Access to top developer, design, and productivity tools to do your best work." },
    { icon: "fas fa-book-open", title: "Learning & Book Stipend", desc: "Dedicated budget for technical books, online courses, and professional certifications." },
    { icon: "fas fa-calendar-day", title: "Generous Leave Policy", desc: "Paid annual leaves, sick days, and company-wide holidays to maintain healthy work-life balance." },
    { icon: "fas fa-mug-hot", title: "Team Retreats & Meetups", desc: "Periodic team offsites and meetups to collaborate in person and celebrate milestones." }
  ],

  roles: [
    {
      id: "fs-engineer",
      title: "Full-Stack Software Engineer",
      department: "Engineering",
      location: "Remote (India)",
      type: "Full-Time",
      experience: "2–4 Years",
      overview: "We are seeking a versatile Full-Stack Engineer passionate about crafting robust, performant web applications and clean RESTful APIs that power multi-tenant enterprise business operations.",
      responsibilities: [
        "Architect and implement scalable frontend interfaces and backend business logic for CRM, ERP, and inventory modules.",
        "Design efficient relational schemas, optimize complex database queries, and ensure seamless data integrity.",
        "Collaborate closely with product designers to implement pixel-perfect, accessible, and responsive user experiences.",
        "Write clean, well-tested code, perform peer code reviews, and contribute to continuous delivery automation pipelines."
      ],
      requiredSkills: [
        "Strong proficiency in JavaScript/TypeScript, modern frontend frameworks (Vue/React), and CSS design systems.",
        "Solid backend experience with Python (Frappe/Django/FastAPI) or Node.js.",
        "Strong understanding of relational databases (MariaDB / MySQL / PostgreSQL) and query optimization.",
        "Hands-on familiarity with Git, REST APIs, and containerized deployment workflows."
      ],
      niceToHave: [
        "Experience building multi-tenant SaaS applications or ERP/CRM software.",
        "Familiarity with Three.js or WebGL data visualizers.",
        "Understanding of Indian GST, invoicing, and inventory accounting workflows."
      ]
    },
    {
      id: "bde-sales",
      title: "Business Development Executive",
      department: "Growth & Sales",
      location: "Remote / Hybrid (India)",
      type: "Full-Time",
      experience: "1–3 Years",
      overview: "Drive the customer adoption of ScaleNova Business OS by engaging with founders, managing directors, and operational heads of growing Indian MSMEs.",
      responsibilities: [
        "Conduct consultative outbound outreach and follow up with inbound demo inquiries from Indian business owners.",
        "Understand client operational pain points (inventory chaos, lead leakage, attendance tracking) and present tailored live platform demonstrations.",
        "Manage the sales pipeline from qualification through commercial negotiation and closing in ScaleNova CRM.",
        "Coordinate with the onboarding engineering team to ensure smooth handover and rapid customer adoption."
      ],
      requiredSkills: [
        "Proven track record in B2B SaaS or technology solutions sales in the Indian market.",
        "Exceptional verbal and written communication skills in English and Hindi (regional languages are a plus).",
        "Ability to articulate technical business software concepts clearly in simple, value-driven business terms.",
        "Self-motivated, disciplined in pipeline management, and driven to exceed targets."
      ],
      niceToHave: [
        "Prior experience selling CRM, ERP, accounting, or HR software to Indian SMEs.",
        "Existing network in manufacturing, distribution, or professional services sectors."
      ]
    },
    {
      id: "customer-success",
      title: "Operations & Customer Success Specialist",
      department: "Customer Operations",
      location: "Remote (India)",
      type: "Full-Time",
      experience: "1–3 Years",
      overview: "Lead customer onboarding, staff training, and ongoing operational support to ensure our MSME subscribers achieve maximum daily value from ScaleNova OS.",
      responsibilities: [
        "Conduct live, interactive onboarding and workflow orientation sessions for client teams across departments.",
        "Assist clients with initial master data migration (customer lists, SKU catalogs, supplier records).",
        "Handle customer inquiries and technical support tickets via email, phone, and WhatsApp with high empathy and prompt resolution.",
        "Gather direct customer feedback and synthesize actionable product improvement recommendations for the engineering team."
      ],
      requiredSkills: [
        "Experience in customer success, software implementation, or technical customer support.",
        "Strong interpersonal and presentation skills with patience for training non-technical business operators.",
        "High problem-solving aptitude and ability to debug user workflow queries methodically.",
        "Structured organization and clear documentation habits."
      ],
      niceToHave: [
        "Familiarity with business accounting, inventory management, or CRM terminology.",
        "Fluency in multiple Indian languages."
      ]
    },
    {
      id: "bde-intern",
      title: "Business Development & Growth Intern",
      department: "Growth & Sales",
      location: "Remote (India)",
      type: "Internship (3–6 Months)",
      experience: "Fresher / Final Year Student",
      overview: "Learn the fundamentals of B2B SaaS growth, market research, and sales outreach while working closely with our leadership team.",
      responsibilities: [
        "Conduct market research and identify potential MSME prospect clusters across target Indian industrial hubs.",
        "Assist in creating personalized outreach campaigns, scheduling product walkthroughs, and managing CRM records.",
        "Analyze conversion metrics and participate in live client demonstration sessions."
      ],
      requiredSkills: [
        "Enthusiasm for business development, sales strategy, and technology products.",
        "Strong communication, research, and organizational abilities.",
        "Curiosity, hunger to learn, and readiness to take proactive ownership."
      ],
      niceToHave: [
        "Background in business administration, marketing, or commerce."
      ]
    },
    {
      id: "software-intern",
      title: "Software Engineering Intern",
      department: "Engineering",
      location: "Remote (India)",
      type: "Internship (3–6 Months)",
      experience: "Fresher / CS Student",
      overview: "Gain hands-on experience building production SaaS features, designing clean frontend components, and writing reliable backend integrations.",
      responsibilities: [
        "Develop reusable UI components, dashboard widgets, and responsive layouts.",
        "Assist in writing unit tests, API endpoints, and database scripts under senior developer mentorship.",
        "Investigate bug reports and propose clean, tested fixes."
      ],
      requiredSkills: [
        "Solid foundations in JavaScript/TypeScript, HTML5, CSS3, and Python or Node.js.",
        "Basic familiarity with Git, relational databases, and REST APIs.",
        "Demonstrated project portfolio or open-source contributions."
      ],
      niceToHave: [
        "Experience with Tailwind CSS and modern web animations."
      ]
    }
  ]
};

// Freeze careers dataset
if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_CAREERS);
}
