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
    badge: "For Startups & Small Businesses",
    headline: "Professional Website, CRM, Sales & Invoicing for Growing Teams",
    monthlyPrice: 4899,
    annualPrice: 48990,
    monthlyPriceFormatted: "₹4,899",
    annualPriceFormatted: "₹48,990",
    annualMonthlyEquivalent: "₹4,083",
    targetAudience: "Startups and small businesses looking to establish a professional digital presence and organize customer sales records.",
    userCapacity: "3 Users · 1 GB Business Data · 2.5 GB File Storage",
    isPopular: false,
    colorScheme: "blue",
    
    mainIncludedFunctions: [
      "Professional Website + Lead Capture",
      "Customers, Leads, Sales & Invoicing",
      "Basic SEO & Online Presence",
      "Training + Ongoing Support",
      "Monthly Business Review & Reports"
    ],

    setupJourney: [
      { step: "Phase 1: Discovery & Provisioning", detail: "Provision your business workspace and set up your brand website." },
      { step: "Phase 2: CRM & Lead Capture", detail: "Configure lead capture forms and customer management workflows." },
      { step: "Phase 3: Team Orientation", detail: "Live walkthrough for your team to handle leads, sales, and invoicing." }
    ],

    trainingIncluded: "Live team onboarding walkthrough, setup documentation, and monthly reporting review.",
    supportIncluded: "Standard support assistance during business hours via WhatsApp & Email.",
    ctaText: "Book Core OS Walkthrough"
  },
  {
    id: "growth",
    slug: "growth-os",
    name: "Growth OS",
    badge: "For Growing MSMEs, Agencies & Teams",
    headline: "Website, Leads, Sales, Accounts, HR, Payroll, Inventory & Projects",
    monthlyPrice: 13699,
    annualPrice: 136990,
    monthlyPriceFormatted: "₹13,699",
    annualPriceFormatted: "₹1,36,990",
    annualMonthlyEquivalent: "₹11,416",
    targetAudience: "Growing MSMEs, agencies, and operational teams needing connected workflows across departments.",
    userCapacity: "25 Users · 2 GB Business Data · 5 GB File Storage",
    isPopular: true,
    colorScheme: "brand",

    mainIncludedFunctions: [
      "Website, Leads & Customer Management",
      "Sales, Accounts & Payments",
      "HR, Payroll, Inventory & Projects",
      "Automation + Document Management",
      "SEO, Digital Marketing & Social Media",
      "Training + Ongoing Support",
      "Biweekly Business Review & Reports"
    ],

    setupJourney: [
      { step: "Phase 1: Departmental Discovery", detail: "Map out multi-department inventory, sales, HR, and billing workflows." },
      { step: "Phase 2: Master Data Migration", detail: "Import existing customer, inventory, supplier, and employee records." },
      { step: "Phase 3: Multi-Team Training", detail: "Hands-on live workshops for Sales, Operations, HR, and Finance teams." },
      { step: "Phase 4: Monitored Go-Live", detail: "Operational handholding during initial transaction weeks." }
    ],

    trainingIncluded: "Multi-session live training for department leads, workflow SOPs, and ongoing adoption guides.",
    supportIncluded: "Dedicated support contact, direct WhatsApp channel, and biweekly business reviews.",
    ctaText: "Book Growth OS Walkthrough"
  },
  {
    id: "elite",
    slug: "elite-os",
    name: "Elite OS",
    badge: "For Established MSMEs & Enterprises",
    headline: "Complete ERP, Manufacturing, Asset Control, Advanced Automation & BI",
    monthlyPrice: 35799,
    annualPrice: 357990,
    monthlyPriceFormatted: "₹35,799",
    annualPriceFormatted: "₹3,57,990",
    annualMonthlyEquivalent: "₹29,833",
    targetAudience: "Established MSMEs, multi-branch businesses, and enterprises needing full business control.",
    userCapacity: "100 Users · 4 GB+ Business Data · 25 GB File Storage",
    isPopular: false,
    colorScheme: "dark",

    mainIncludedFunctions: [
      "Complete Website, CRM, Sales & Accounts",
      "HR, Payroll, Inventory & Projects",
      "Manufacturing & Asset Management",
      "Advanced Operations + Automation",
      "SEO, Digital Marketing & Social Media",
      "Business Insights & Performance Reports",
      "Dedicated Support + Training",
      "Weekly Business Review & Reports"
    ],

    setupJourney: [
      { step: "Phase 1: Enterprise Architecture", detail: "Custom multi-branch topology, data policies, and automation design." },
      { step: "Phase 2: Staging & Custom Dashboards", detail: "Staging environment setup, custom dashboard creation, and testing." },
      { step: "Phase 3: Executive Orientation", detail: "Executive walkthroughs for business owners, directors, and department heads." },
      { step: "Phase 4: Full Deployment", detail: "Supervised enterprise launch with real-time technical support." }
    ],

    trainingIncluded: "Custom enterprise training program with dedicated live workshops and executive documentation.",
    supportIncluded: "Dedicated Account Manager, direct hotline access, priority resolution queue, and weekly reports.",
    ctaText: "Book Elite OS Walkthrough"
  }
];

if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_PLANS);
}
