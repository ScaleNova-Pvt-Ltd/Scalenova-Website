/**
 * ScaleNova Careers Portal Dataset (Platform-Neutral & Clean)
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
      detail: "Build practical skills across SaaS, cloud systems, AI, and modern business technology."
    },
    {
      icon: "fas fa-rocket",
      title: "Direct Ownership",
      detail: "Take end-to-end responsibility for real customer-facing features and products."
    },
    {
      icon: "fas fa-seedling",
      title: "Team Growth",
      detail: "Develop your career and engineering craftsmanship as ScaleNova expands."
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
      id: "full-stack-developer",
      title: "Full-Stack Software Developer",
      category: "Full-Time",
      department: "Engineering",
      location: "Remote (India)",
      experience: "1–3 Years",
      compensationRange: "₹4.0L – ₹7.0L / year",
      compensationNote: "Based on full-stack web capabilities, problem-solving, and code evaluation.",
      overview: "Build and improve scalable web applications and business technology products used by growing companies.",
      responsibilities: [
        "Develop and maintain scalable web applications and business platform features.",
        "Build reliable product modules, workflow automations, and data services.",
        "Design and optimize relational database schemas and REST APIs.",
        "Improve application performance, responsiveness, and code quality.",
        "Collaborate across product, design, and business teams to turn requirements into practical software."
      ],
      requiredSkills: [
        "Proficiency with JavaScript, HTML5, and CSS3.",
        "Strong backend development and RESTful API architecture experience.",
        "Relational database design and query optimization (SQL).",
        "Version control with Git and collaborative development workflows.",
        "Strong problem-solving and structured debugging skills."
      ],
      niceToHave: [
        "Experience building B2B SaaS, CRM, or business workflow software.",
        "Understanding of cloud deployment, web security, or third-party API integrations."
      ],
      whatYouLearn: "Master modern SaaS architecture, business workflow automation, and high-scale cloud platforms.",
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
        "Experience selling business software, CRM, or billing solutions to Indian MSMEs.",
        "Network in manufacturing, trading, or distribution sectors."
      ],
      whatYouLearn: "Master consultative B2B sales, SaaS deal negotiation, and revenue growth strategies.",
      workMode: "Remote-first with optional travel for select client meetings"
    },
    {
      id: "software-dev-intern",
      title: "Software Development Intern",
      category: "Internship",
      department: "Engineering",
      location: "Remote (India)",
      duration: "3–6 Months",
      experience: "Fresher / CS Student",
      compensationRange: "Stipend (Subject to approval) / PPO",
      compensationNote: "Hands-on engineering with mentorship and Pre-Placement Offer (PPO) opportunity.",
      overview: "Work with the product team to build, test, and improve web applications and business technology solutions.",
      responsibilities: [
        "Build, test, and improve web application components and business workflow logic.",
        "Write clean, modular code, integrate APIs, and assist in database queries under mentorship."
      ],
      requiredSkills: [
        "Foundations in HTML, CSS, JavaScript, and programming fundamentals.",
        "Basic understanding of REST APIs, databases, and Git version control.",
        "Strong curiosity, problem-solving mindset, and eagerness to learn."
      ],
      niceToHave: ["Familiarity with backend web frameworks or relational SQL databases."],
      whatYouLearn: "Production full-stack development, SaaS architecture, and professional engineering workflows.",
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

// Attach to window for browser global accessibility
if (typeof window !== 'undefined') {
  window.SCALENOVA_CAREERS = SCALENOVA_CAREERS;
}

// Freeze careers dataset
if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_CAREERS);
}
