/**
 * ScaleNova Careers Portal Dataset (Simplified & Concise)
 * 
 * Defines company culture, remote working principles, perks,
 * 2 Full-Time Roles, and 4 Internship Roles with realistic Indian market compensation.
 */
const SCALENOVA_CAREERS = {
  culture: {
    headline: "Build the Future of Connected Business Operations",
    subheadline: "Remote-first, ownership-driven, and built around continuous learning.",
    description: "ScaleNova builds unified cloud software that replaces disconnected spreadsheets with structured CRM, ERP, and operations for growing Indian MSMEs."
  },

  pillars: [
    {
      icon: "fas fa-laptop-house",
      title: "Remote Work",
      detail: "Work from wherever you are most productive with flexible daily collaboration."
    },
    {
      icon: "fas fa-book-open",
      title: "Continuous Learning",
      detail: "Build practical skills across SaaS, ERP, AI, and enterprise business technology."
    },
    {
      icon: "fas fa-rocket",
      title: "Direct Ownership",
      detail: "Take end-to-end responsibility for real customer-facing features and projects."
    },
    {
      icon: "fas fa-seedling",
      title: "Team Growth",
      detail: "Develop your career and technical craftsmanship as ScaleNova expands."
    }
  ],

  perks: [
    { icon: "fas fa-globe", title: "Remote-First", desc: "Work comfortably from your home or remote setup." },
    { icon: "fas fa-clock", title: "Flexible Schedule", desc: "Manage your day around core collaboration hours." },
    { icon: "fas fa-trophy", title: "Merit-Driven", desc: "Transparent growth and quarterly performance rewards." },
    { icon: "fas fa-laptop-code", title: "Modern Tech", desc: "Top developer, design, and AI productivity tools." },
    { icon: "fas fa-chalkboard-user", title: "Mentorship", desc: "Direct mentorship and collaborative code reviews." },
    { icon: "fas fa-mug-hot", title: "Great Culture", desc: "Supportive, high-trust, and low-ego team environment." }
  ],

  roles: [
    {
      id: "frappe-erpnext-developer",
      title: "Frappe / ERPNext Developer",
      category: "Full-Time",
      department: "Engineering",
      location: "Remote (India)",
      experience: "1–3 Years",
      compensationRange: "₹4.0L – ₹7.0L / year",
      compensationNote: "Based on Python/Frappe proficiency, problem-solving, and code review.",
      overview: "Develop and scale core CRM, ERP, inventory, and billing modules on Frappe Framework and Python.",
      responsibilities: [
        "Develop custom Frappe DocTypes, server scripts, client scripts, and REST APIs.",
        "Design and optimize relational MariaDB database schemas and analytical queries.",
        "Integrate external webhooks (WhatsApp API, payment gateways, GST portals).",
        "Write clean, well-tested code and participate in code reviews."
      ],
      requiredSkills: [
        "Proficiency with Frappe Framework, Python, and JavaScript.",
        "Strong relational database (MariaDB / MySQL) and SQL query skills.",
        "Experience building and consuming RESTful APIs.",
        "Familiarity with Git and Linux / Docker environments."
      ],
      niceToHave: [
        "Experience with Vue 3 / Tailwind CSS.",
        "Understanding of Indian GST, invoicing, or inventory workflows."
      ],
      whatYouLearn: "Master multi-tenant SaaS architecture, cloud scaling, and enterprise ERP engineering.",
      workMode: "100% Remote (India)"
    },
    {
      id: "bde-sales-executive",
      title: "Business Development / Sales Executive",
      category: "Full-Time",
      department: "Growth & Sales",
      location: "Remote / Hybrid (India)",
      experience: "1–3 Years",
      compensationRange: "₹3.0L – ₹6.0L / year + Incentives",
      compensationNote: "Base package plus uncapped performance incentives on closed subscriptions.",
      overview: "Engage with business founders and operations heads of growing Indian MSMEs to drive platform adoption.",
      responsibilities: [
        "Follow up with inbound demo inquiries and conduct targeted outbound outreach.",
        "Understand business bottlenecks and present tailored live platform demonstrations.",
        "Manage sales pipeline from qualification to deal closing in ScaleNova CRM.",
        "Coordinate with the onboarding team for smooth client handover."
      ],
      requiredSkills: [
        "Track record in B2B software, SaaS, or tech solutions sales in India.",
        "Excellent communication in English and Hindi (regional languages a plus).",
        "Ability to explain software value in clear business terms.",
        "Strong pipeline discipline and consultative selling skills."
      ],
      niceToHave: [
        "Experience selling CRM, ERP, or billing software to Indian MSMEs.",
        "Network in manufacturing, trading, or distribution sectors."
      ],
      whatYouLearn: "Master consultative B2B sales, SaaS deal negotiation, and revenue growth strategies.",
      workMode: "Remote-first with optional travel for select client meetings"
    },
    {
      id: "frappe-dev-intern",
      title: "Frappe / ERPNext Development Intern",
      category: "Internship",
      department: "Engineering",
      location: "Remote (India)",
      duration: "3–6 Months",
      experience: "Fresher / CS Student",
      compensationRange: "Stipend (Subject to approval) / PPO",
      compensationNote: "Hands-on engineering with mentorship and Pre-Placement Offer (PPO) opportunity.",
      overview: "Build real SaaS features and custom DocTypes using Frappe Framework, Python, and SQL.",
      responsibilities: [
        "Build custom DocTypes, reports, and scripts for business workflows.",
        "Write unit tests and optimize database queries under senior mentorship."
      ],
      requiredSkills: [
        "Foundations in Python, JavaScript, HTML, and CSS.",
        "Basic understanding of SQL databases and Git."
      ],
      niceToHave: ["Familiarity with Frappe Framework or ERPNext."],
      whatYouLearn: "Production enterprise backend engineering with Python and Frappe.",
      workMode: "100% Remote (India)"
    },
    {
      id: "frontend-ui-intern",
      title: "Frontend / UI Development Intern",
      category: "Internship",
      department: "Engineering",
      location: "Remote (India)",
      duration: "3–6 Months",
      experience: "Fresher / CS & Design Student",
      compensationRange: "Stipend (Subject to approval) / PPO",
      compensationNote: "Real-world UI engineering on a modern design system with PPO opportunity.",
      overview: "Develop accessible, responsive, and animated user interfaces using HTML5, CSS3, and modern JS.",
      responsibilities: [
        "Build reusable UI components and responsive dashboard layouts.",
        "Optimize page loading speeds and micro-interactions across mobile screens."
      ],
      requiredSkills: [
        "Solid semantic HTML5, modern CSS3, and JavaScript.",
        "Experience building mobile-first responsive layouts without overflow."
      ],
      niceToHave: ["Tailwind CSS, SVG animations, or Three.js visualizers."],
      whatYouLearn: "Frontend performance, design tokens, and modern SPA architecture.",
      workMode: "100% Remote (India)"
    },
    {
      id: "bde-sales-intern",
      title: "Business Development / Sales Intern",
      category: "Internship",
      department: "Growth & Sales",
      location: "Remote (India)",
      duration: "3–6 Months",
      experience: "Fresher / Final Year Student",
      compensationRange: "Stipend (Subject to approval) + Incentives",
      compensationNote: "Practical exposure to B2B SaaS growth and lead generation with PPO opportunity.",
      overview: "Learn modern B2B SaaS sales, prospect research, and lead qualification.",
      responsibilities: [
        "Research growing MSME prospect accounts across target industrial hubs.",
        "Draft outreach messages and assist during live product demonstration calls."
      ],
      requiredSkills: [
        "Strong communication skills in English and Hindi.",
        "Curiosity about business operations and eagerness to learn SaaS sales."
      ],
      niceToHave: ["Background in Commerce, Business, or Marketing."],
      whatYouLearn: "B2B sales funnels, CRM workflows, and consultative client communication.",
      workMode: "100% Remote (India)"
    },
    {
      id: "digital-marketing-intern",
      title: "Digital Marketing / Content Intern",
      category: "Internship",
      department: "Marketing",
      location: "Remote (India)",
      duration: "3–6 Months",
      experience: "Fresher / Marketing Student",
      compensationRange: "Stipend (Subject to approval) / PPO",
      compensationNote: "Hands-on experience in SEO, technical content, and social media campaigns.",
      overview: "Research and create high-quality educational articles, guides, and social campaigns.",
      responsibilities: [
        "Conduct keyword research on MSME business software and operations.",
        "Draft informative blog articles and engaging social media posts."
      ],
      requiredSkills: [
        "Clear, engaging written English communication.",
        "Basic understanding of SEO fundamentals and content research."
      ],
      niceToHave: ["Canva/Figma graphic creation skills."],
      whatYouLearn: "B2B content marketing, SEO ranking strategies, and organic audience growth.",
      workMode: "100% Remote (India)"
    }
  ]
};

// Freeze careers dataset
if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_CAREERS);
}
