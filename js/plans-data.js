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
    setupPrice: 4899,
    setupPriceFormatted: "₹4,899",
    monthlyPrice: 4899,
    annualPrice: 48990,
    monthlyPriceFormatted: "₹4,899",
    annualPriceFormatted: "₹48,990",
    annualMonthlyEquivalent: "₹4,083",
    targetAudience: "Startups, sole proprietors, and small businesses looking to establish a professional digital presence and organize customer sales records without operational complexity.",
    websiteScope: "1-Page Landing Website",
    leadCaptureCount: "1 Structured Form",
    socialContent: "No recurring social content",
    directoryListings: "Basic Business Profile",
    dataMigration: "Current operational data & opening balances included",
    trainingIncluded: "1 × 90-Minute live orientation session covering system usage, lead management & quotation flow.",
    reviewFrequency: "Monthly Business Review",
    supportIncluded: "Standard business-hours support via WhatsApp & Email with initial contact within 24 business hours.",
    isPopular: false,
    colorScheme: "blue",
    
    mainIncludedFunctions: [
      "1-Page High-Converting Landing Website",
      "Single Lead Capture Connected to CRM Records",
      "Customer Interaction History & Quotations",
      "Essential Master Data Onboarding Included",
      "1 × 90-Minute Live Team Orientation",
      "Monthly Business Systems Review"
    ],

    setupJourney: [
      { step: "Phase 1: Business Discovery & Cloud Setup", detail: "Map basic customer inquiry stages and configure your secure cloud workspace." },
      { step: "Phase 2: Web Presence & Lead Routing", detail: "Design your responsive web presence and link lead capture directly into your CRM." },
      { step: "Phase 3: Team Walkthrough & Launch", detail: "Live orientation for your team to manage incoming leads, quotes, and customer records." }
    ],

    ctaText: "Book Core OS Walkthrough"
  },
  {
    id: "growth",
    slug: "growth-os",
    name: "Growth OS",
    badge: "Build a Stronger Business Growth Engine",
    headline: "Managed Website, Connected CRM, Operations, Invoicing, HR, Inventory & Marketing",
    setupPrice: 13699,
    setupPriceFormatted: "₹13,699",
    monthlyPrice: 13699,
    annualPrice: 136990,
    monthlyPriceFormatted: "₹13,699",
    annualPriceFormatted: "₹1,36,990",
    annualMonthlyEquivalent: "₹11,416",
    targetAudience: "Growing MSMEs, trading businesses, and service agencies needing connected workflows across departments.",
    websiteScope: "Up to 5 Pages",
    leadCaptureCount: "Multiple Forms + WhatsApp",
    socialContent: "4 Branded Posts / Month",
    directoryListings: "Up to 4 Managed Listings",
    dataMigration: "Current operational data & opening balances included (Historical migration custom)",
    trainingIncluded: "3 × 90-Minute structured sessions for Sales & CRM, Invoicing & Operations, and Daily workflows.",
    reviewFrequency: "Biweekly Business Review",
    supportIncluded: "Dedicated support contact with direct WhatsApp assistance with initial contact within 24 business hours.",
    isPopular: true,
    colorScheme: "brand",

    mainIncludedFunctions: [
      "Includes Core OS Capabilities",
      "Up to 5-Page Premium Business Website",
      "Connected Sales Invoicing, Accounts & Receivables",
      "Inventory, Purchasing & People Operations (HRMS)",
      "4 Branded Social Posts / Month across Channels",
      "Up to 4 Managed Business Directory Listings",
      "3 × 90-Minute Departmental Training Sessions",
      "Biweekly Business Reviews & Reports"
    ],

    setupJourney: [
      { step: "Phase 1: Operational Discovery", detail: "Map out multi-department sales, inventory, purchasing, and billing workflows." },
      { step: "Phase 2: Master Data Migration", detail: "Import existing active customer, inventory, supplier, and employee records into your system." },
      { step: "Phase 3: Departmental Training", detail: "Hands-on live workshops for Sales, Operations, and Accounts teams." },
      { step: "Phase 4: Monitored Go-Live", detail: "Operational handholding and monitoring during initial transaction weeks." }
    ],

    ctaText: "Book Growth OS Walkthrough"
  },
  {
    id: "elite",
    slug: "elite-os",
    name: "Elite OS",
    badge: "Complete Managed Systems & Digital Operations",
    headline: "Complete ERP, Manufacturing, Asset Control, Advanced Automation, BI & Documentation",
    setupPrice: 35799,
    setupPriceFormatted: "₹35,799",
    monthlyPrice: 35799,
    annualPrice: 357990,
    monthlyPriceFormatted: "₹35,799",
    annualPriceFormatted: "₹3,57,990",
    annualMonthlyEquivalent: "₹29,833",
    targetAudience: "Established MSMEs, manufacturing units, and multi-branch enterprises needing an extended systems and operations partner.",
    websiteScope: "Up to 10 Pages",
    leadCaptureCount: "Advanced Routing Pipelines",
    socialContent: "8 Branded Posts / Month",
    directoryListings: "Up to 10 Managed Listings",
    dataMigration: "Current operational data & opening balances included (Historical migration custom)",
    trainingIncluded: "5 × 90-Minute role-based workshops for Sales, Finance, Operations, ERP & Executive BI.",
    reviewFrequency: "Weekly Executive Review",
    supportIncluded: "Dedicated Account Manager with priority resolution queue and initial contact within 24 business hours.",
    isPopular: false,
    colorScheme: "dark",

    mainIncludedFunctions: [
      "Includes Growth OS Capabilities",
      "Up to 10-Page Tailored Web Architecture",
      "Complete Commercial ERP, BOMs & Fixed Assets",
      "Internal Departmental Helpdesk & Automation",
      "Executive BI Dashboards & Margin Analytics",
      "8 Branded Social Posts / Month across Channels",
      "Up to 10 Managed Business Directory Listings",
      "5 × 90-Minute Role-Based Workshop Sessions",
      "Weekly Executive Business Reviews"
    ],

    setupJourney: [
      { step: "Phase 1: Enterprise Architecture & Policy Design", detail: "Custom multi-branch topology, data governance rules, and workflow automation design." },
      { step: "Phase 2: System Configuration & Staging", detail: "Staging environment setup, custom dashboard creation, and data validation." },
      { step: "Phase 3: Executive & Team Workshops", detail: "Executive walkthroughs for business leadership and departmental managers." },
      { step: "Phase 4: Full Supervised Deployment", detail: "Complete go-live execution with real-time operational supervision and support." }
    ],

    ctaText: "Book Elite OS Walkthrough"
  }
];

if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_PLANS);
}
