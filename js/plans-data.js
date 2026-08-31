/**
 * ScaleNova Dedicated OS Plans Detailed Dataset
 * 
 * Defines deep-dive architectural comparisons, setup journey, training & support,
 * automation capabilities, and upgrade paths for Core OS, Growth OS, and Elite OS.
 */
const SCALENOVA_PLANS = [
  {
    id: "core",
    name: "Core OS",
    badge: "Essential Starter",
    headline: "Centralize Leads, Customer Records & Core Business Management",
    monthlyPrice: 4899,
    annualPrice: 48990, // 2 months free equivalent (10 months * 4899)
    monthlyPriceFormatted: "₹4,899",
    annualPriceFormatted: "₹48,990",
    annualMonthlyEquivalent: "₹4,083",
    targetAudience: "Startups, small businesses, boutique agencies, independent consultants, and single-location traders looking to organize leads, CRM, and basic business presence.",
    userCapacity: "Up to 3 Users Included • 1 GB Cloud Storage",
    isPopular: false,
    colorScheme: "blue",
    
    mainIncludedFunctions: [
      "Premium Website + Lead Capture Experience",
      "CRM + Centralized Lead Pipeline Tracker",
      "Customer Database & Contact Interaction History",
      "Basic SEO + Online Business Presence",
      "Training, Support + Monthly Operational Reports",
      "Role-Based User Access (Up to 3 Users)",
      "Dedicated Cloud Infrastructure (1 GB Database Storage)"
    ],

    setupJourney: [
      { step: "Phase 1: Discovery & Instance Provisioning", detail: "Our onboarding team provisions your cloud instance and assists in importing your existing customer and lead contact spreadsheets." },
      { step: "Phase 2: Lead Capture & Pipeline Configuration", detail: "We map out your standard sales stages, lead sources, and quotation templates to match your everyday operational workflow." },
      { step: "Phase 3: Live Staff Orientation & Training", detail: "A dedicated live screen walkthrough for your team to ensure immediate comfort with lead entry, status updates, and customer management." }
    ],

    trainingIncluded: "Live team onboarding walkthrough, guided setup documentation, monthly reporting review, and access to recorded feature training modules.",
    supportIncluded: "Dedicated support contact for your business with assistance during business hours, plus continuous platform updates.",
    
    manualWorkReduction: [
      "Eliminates hours spent copying contact numbers from WhatsApp into Excel.",
      "Stops manual searching for past customer quotes or previous discussion notes.",
      "Removes guesswork on pending lead follow-ups through structured status views."
    ],

    automationOpportunities: [
      "Instant email and WhatsApp welcome responses on new website inquiries.",
      "Automated follow-up reminders for sales reps when deals remain pending.",
      "One-click quotation generation populated directly from lead records."
    ],

    scalingUseCases: "Ideal for handling enquiry growth while keeping your sales pipeline transparent, organized, and responsive.",
    upgradePath: "As your operations expand to require warehouse inventory tracking, employee attendance, or multi-department project management, you can upgrade seamlessly to Growth OS with zero downtime.",
    ctaText: "Book Core OS Walkthrough"
  },
  {
    id: "growth",
    name: "Growth OS",
    badge: "Most Popular",
    headline: "Unify Sales, Accounts, HR, Inventory & Digital Presence",
    monthlyPrice: 13699,
    annualPrice: 136990, // 2 months free equivalent (10 months * 13699)
    monthlyPriceFormatted: "₹13,699",
    annualPriceFormatted: "₹1,36,990",
    annualMonthlyEquivalent: "₹11,416",
    targetAudience: "Growing MSMEs, expanding agencies, wholesale distributors, retail chains, and service firms (10 to 50+ staff) requiring connected operational workflows across departments.",
    userCapacity: "Up to 25 Users Included • 2 GB Cloud Storage",
    isPopular: true,
    colorScheme: "brand",

    mainIncludedFunctions: [
      "Includes Core OS",
      "Sales + Accounts Management",
      "HR + Payroll + Employee Attendance Management",
      "Inventory + Purchase + Project Management",
      "SEO + Social Media + Content Management",
      "Expanded User Access (Up to 25 Users)",
      "2 GB Cloud Database Storage"
    ],

    setupJourney: [
      { step: "Phase 1: Architecture & Department Discovery", detail: "Our engineering specialist reviews your inventory structures, billing cycles, leave policies, and sales stages to formulate your customized deployment plan." },
      { step: "Phase 2: Master Data Migration", detail: "Comprehensive migration of item masters, SKU catalogs, supplier details, customer databases, and employee records into your ScaleNova environment." },
      { step: "Phase 3: Multi-Team Departmental Training", detail: "Tailored live training sessions conducted separately for your Sales, Warehouse/Accounts, and HR/Admin teams." },
      { step: "Phase 4: Go-Live & Post-Launch Support", detail: "Dedicated operational handholding during your initial week of daily transactions to guarantee 100% team adoption." }
    ],

    trainingIncluded: "Comprehensive multi-session live training for department heads and operating staff, complete customized workflow SOPs, and ongoing access to interactive adoption guides.",
    supportIncluded: "Dedicated support contact for your business, direct WhatsApp & email coordination channel, and structured monthly performance reviews.",

    manualWorkReduction: [
      "Ends duplicate entry between warehouse stock logs and billing spreadsheets.",
      "Automates leave balance calculations and month-end attendance collation.",
      "Reduces internal status-checking calls between sales, accounts, and dispatch."
    ],

    automationOpportunities: [
      "Low-stock purchase order drafting when inventory hits reorder thresholds.",
      "Automatic WhatsApp and email invoice delivery upon dispatch confirmation.",
      "Leave approval escalation triggers for supervisors.",
      "Automated weekly operational progress digest sent to business owners."
    ],

    scalingUseCases: "Powers multi-crore turnover operations with multiple warehouses, extensive SKU catalogs, and active cross-functional teams without operational chaos.",
    upgradePath: "For multi-company consolidation, custom ERP API integrations, or enterprise manufacturing controls, seamless upgrade to Elite OS is available at any time.",
    ctaText: "Book Growth OS Walkthrough"
  },
  {
    id: "elite",
    name: "Elite OS",
    badge: "Full Enterprise OS",
    headline: "End-to-End Enterprise Control, Advanced BI & Account Care",
    monthlyPrice: 35799,
    annualPrice: 357990, // 2 months free equivalent (10 months * 35799)
    monthlyPriceFormatted: "₹35,799",
    annualPriceFormatted: "₹3,57,990",
    annualMonthlyEquivalent: "₹29,833",
    targetAudience: "Established MSMEs, multi-branch corporations, large manufacturing plants, and complex commercial organizations needing complete ERP and enterprise digital growth.",
    userCapacity: "Up to 100 Users Included • 4 GB+ Cloud Storage",
    isPopular: false,
    colorScheme: "dark",

    mainIncludedFunctions: [
      "Includes Growth OS",
      "Complete ERP + Advanced Business Management",
      "Manufacturing + Assets + Advanced Operations",
      "Advanced Digital Marketing + SEO + Social Media",
      "Business Intelligence + Executive Reports & Analysis",
      "Dedicated Training + Dedicated Support Contact & Account Manager",
      "High-Capacity User Access (Up to 100 Users) & 4 GB+ Storage"
    ],

    setupJourney: [
      { step: "Phase 1: Enterprise System Architecture", detail: "In-depth engineering blueprint covering multi-branch topology, data governance policies, custom integrations, and approval workflows." },
      { step: "Phase 2: Staging Deployment & API Configuration", detail: "Dedicated staging environment deployment with custom webhook configurations, ERP bridges, and custom report building." },
      { step: "Phase 3: User Acceptance & Executive Training", detail: "Executive walkthroughs for directors and division heads, combined with structured role-based workshops for all staff." },
      { step: "Phase 4: Monitored Enterprise Go-Live", detail: "Hands-on engineering supervision during the full production rollout with dedicated real-time support." }
    ],

    trainingIncluded: "Custom enterprise training program with dedicated live workshops, tailored executive documentation, and recurring training sessions for new organizational hires.",
    supportIncluded: "Dedicated Account Manager, priority resolution queue, direct technical hotline access, and scheduled quarterly operational workflow reviews.",

    manualWorkReduction: [
      "Eliminates manual inter-branch stock reconciliation and financial consolidations.",
      "Automates multi-tier purchase authorization workflows without paper signoffs.",
      "Replaces manual executive reporting with real-time automated visual dashboards."
    ],

    automationOpportunities: [
      "Custom multi-step approval routing based on transaction values and branch limits.",
      "Automated real-time data sync with external accounting, logistics, or ecommerce systems.",
      "Automated fraud and margin discrepancy flags on high-value orders.",
      "Scheduled executive performance summaries delivered to leadership."
    ],

    scalingUseCases: "Built to run large-scale multi-city business footprints with hundreds of team members and complex daily operational interdependencies.",
    upgradePath: "Enterprise customers benefit from ongoing custom module development, high-throughput dedicated cloud clusters, and customized long-term roadmap integration.",
    ctaText: "Book Elite OS Consultation"
  }
];

// Freeze plans dataset
if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_PLANS);
}
