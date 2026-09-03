/**
 * ScaleNova Dedicated OS Plans Detailed Dataset
 * 
 * Defines architectural comparisons, inclusions, user limits, workflow, and support details.
 */
const SCALENOVA_PLANS = [
  {
    id: "core",
    slug: "core-os",
    name: "Core OS",
    badge: "Start with the Essentials",
    headline: "Managed Website, Lead Capture & Customer CRM Foundation",
    monthlyPrice: 4899,
    annualPrice: 48990,
    monthlyPriceFormatted: "₹4,899",
    annualPriceFormatted: "₹48,990",
    annualMonthlyEquivalent: "₹4,083",
    targetAudience: "Startups and small businesses looking to establish a professional digital presence and organize customer sales records without operational complexity.",
    userCapacity: "3 Users · 1 GB Business Data · 2.5 GB File Storage",
    reviewFrequency: "Monthly Business Review",
    isPopular: false,
    colorScheme: "blue",
    
    mainIncludedFunctions: [
      "Managed Landing Page / Business Website",
      "Lead Capture Connected to CRM Records",
      "Customer History & Quotation Workflows",
      "Search Engine Indexing & Online Presence",
      "Hands-on Team Onboarding & Training",
      "Monthly Business Systems Review"
    ],

    setupJourney: [
      { step: "Phase 1: Business Discovery & Cloud Setup", detail: "Map basic customer inquiry stages and configure your secure cloud workspace." },
      { step: "Phase 2: Web Presence & Lead Routing", detail: "Design your responsive web presence and link lead capture directly into your CRM." },
      { step: "Phase 3: Team Walkthrough & Launch", detail: "Live orientation for your team to manage incoming leads, quotes, and customer records." }
    ],

    trainingIncluded: "Live team onboarding walkthrough, custom workflow reference guides, and monthly reporting review.",
    supportIncluded: "Standard support assistance via WhatsApp & Email with 24 business hour initial contact SLA and monthly reviews.",
    ctaText: "Book Core OS Walkthrough"
  },
  {
    id: "growth",
    slug: "growth-os",
    name: "Growth OS",
    badge: "Build a Stronger Business Growth Engine",
    headline: "Managed Website, Connected CRM, Operations, Invoicing, HR, Inventory & Marketing",
    monthlyPrice: 13699,
    annualPrice: 136990,
    monthlyPriceFormatted: "₹13,699",
    annualPriceFormatted: "₹1,36,990",
    annualMonthlyEquivalent: "₹11,416",
    targetAudience: "Growing MSMEs, trading businesses, and service agencies needing connected workflows across departments.",
    userCapacity: "25 Users · 2 GB Business Data · 5 GB File Storage",
    reviewFrequency: "Biweekly Business Review",
    isPopular: true,
    colorScheme: "brand",

    mainIncludedFunctions: [
      "Includes Core OS Capabilities",
      "Multi-Page Website & Multi-Form Capture",
      "Connected Sales Invoicing, GST Billing & Accounts",
      "Inventory, Purchasing & Stock Management",
      "People Operations: HR, Attendance & Payroll",
      "Managed SEO & Social Media Content",
      "Biweekly Business Reviews & Reports"
    ],

    setupJourney: [
      { step: "Phase 1: Operational Discovery", detail: "Map out multi-department sales, inventory, purchasing, and billing workflows." },
      { step: "Phase 2: Master Data Migration", detail: "Import existing customer, inventory, supplier, and employee records into your system." },
      { step: "Phase 3: Departmental Training", detail: "Hands-on live workshops for Sales, Operations, and Accounts teams." },
      { step: "Phase 4: Monitored Go-Live", detail: "Operational handholding and monitoring during initial transaction weeks." }
    ],

    trainingIncluded: "Multi-session live training for department leads, workflow SOPs, and ongoing operational guides.",
    supportIncluded: "Dedicated support contact, direct WhatsApp channel, 24 business hour SLA, and biweekly business reviews.",
    ctaText: "Book Growth OS Walkthrough"
  },
  {
    id: "elite",
    slug: "elite-os",
    name: "Elite OS",
    badge: "Complete Managed Systems & Digital Operations",
    headline: "Complete ERP, Manufacturing, Asset Control, Advanced Automation, BI & Documentation",
    monthlyPrice: 35799,
    annualPrice: 357990,
    monthlyPriceFormatted: "₹35,799",
    annualPriceFormatted: "₹3,57,990",
    annualMonthlyEquivalent: "₹29,833",
    targetAudience: "Established MSMEs, manufacturing units, and multi-branch enterprises needing an extended systems and operations partner.",
    userCapacity: "100 Users · 4 GB+ Business Data · 25 GB File Storage",
    reviewFrequency: "Weekly Executive Review",
    isPopular: false,
    colorScheme: "dark",

    mainIncludedFunctions: [
      "Includes Growth OS Capabilities",
      "Advanced Multi-Page Web Presence & Lead Routing",
      "Complete ERP, Manufacturing BOM & Asset Lifecycle",
      "Internal Departmental Helpdesk & Automation",
      "Executive BI Dashboards & Margin Analytics",
      "Business Documentation & Branded Templates",
      "Proactive Search Visibility & Content Management",
      "Weekly Executive Business Reviews"
    ],

    setupJourney: [
      { step: "Phase 1: Enterprise Architecture & Policy Design", detail: "Custom multi-branch topology, data governance rules, and workflow automation design." },
      { step: "Phase 2: System Configuration & Staging", detail: "Staging environment setup, custom dashboard creation, and data validation." },
      { step: "Phase 3: Executive & Team Workshops", detail: "Executive walkthroughs for business leadership and departmental managers." },
      { step: "Phase 4: Full Supervised Deployment", detail: "Complete go-live execution with real-time operational supervision and support." }
    ],

    trainingIncluded: "Custom enterprise training program with dedicated live workshops, executive SOPs, and ongoing optimization.",
    supportIncluded: "Dedicated Account Manager, priority resolution queue, direct hotline, 24 business hour SLA, and weekly executive reviews.",
    ctaText: "Book Elite OS Walkthrough"
  }
];

if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_PLANS);
}
