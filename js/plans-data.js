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
    headline: "Centralize Leads, Customer Records & Sales Workflows",
    monthlyPrice: 3299,
    annualPrice: 32990, // 2 months free equivalent (10 months * 3299)
    monthlyPriceFormatted: "₹3,299",
    annualPriceFormatted: "₹32,990",
    annualMonthlyEquivalent: "₹2,749",
    targetAudience: "Early-stage businesses, boutique agencies, independent consultants, and single-location traders looking to transition away from scattered spreadsheets and disorganized WhatsApp chats.",
    userCapacity: "Up to 5 User Seats Included",
    isPopular: false,
    colorScheme: "blue",
    
    mainIncludedFunctions: [
      "Centralized Lead Capture & Contact Database",
      "Visual Kanban Sales Pipeline with Stage Tracking",
      "Customer Activity Timeline & Interaction Logs",
      "Standard Quotation & Invoicing Generation",
      "Role-Based User Permissions (Sales Rep / Admin)",
      "Daily Cloud System Backups & Managed Infrastructure",
      "Mobile-Responsive Web App Access for Field Reps"
    ],

    setupJourney: [
      { step: "Phase 1: Setup & Data Import", detail: "Our onboarding team configures your secure cloud instance and assists in importing your existing customer and lead contact spreadsheets." },
      { step: "Phase 2: Pipeline Customization", detail: "We map out your standard sales stages, lead sources, and quotation templates to match your everyday operational workflow." },
      { step: "Phase 3: Live Staff Orientation", detail: "A dedicated 45-minute live screen walkthrough for your sales team to ensure immediate comfort with lead entry, status updates, and note-taking." }
    ],

    trainingIncluded: "1x Live Team Onboarding Walkthrough, guided setup documentation, and recorded feature training modules accessible anytime by your team.",
    supportIncluded: "Standard email and ticket support with response within regular business hours (Monday to Saturday, 9:30 AM to 6:30 PM IST), plus continuous cloud system updates.",
    
    manualWorkReduction: [
      "Eliminates hours spent copying contact numbers from WhatsApp into Excel.",
      "Stops manual searching for past customer quotes or previous discussion notes.",
      "Removes guesswork on pending lead follow-ups through structured status views."
    ],

    automationOpportunities: [
      "Instant email and WhatsApp welcome responses on new website inquiries.",
      "Automated follow-up reminders for reps when deals remain in quotation stage.",
      "One-click quotation generation populated directly from lead records."
    ],

    scalingUseCases: "Ideal for handling enquiry growth from 20 to 200+ leads per month while keeping your sales pipeline transparent, organized, and responsive.",
    upgradePath: "As your operations expand to require warehouse inventory tracking, employee attendance, or multi-department project management, you can upgrade seamlessly to Growth OS with zero data migration or system downtime.",
    ctaText: "Book Core OS Walkthrough"
  },
  {
    id: "growth",
    name: "Growth OS",
    badge: "Most Popular",
    headline: "Unify Sales, Inventory, HR, Projects & Invoicing",
    monthlyPrice: 11999,
    annualPrice: 119990, // 2 months free equivalent (10 months * 11999)
    monthlyPriceFormatted: "₹11,999",
    annualPriceFormatted: "₹1,19,990",
    annualMonthlyEquivalent: "₹9,999",
    targetAudience: "Established MSMEs, manufacturers, wholesale distributors, retail chains, and expanding service firms (10 to 50+ staff) requiring connected operational workflows across multiple departments.",
    userCapacity: "Up to 25 User Seats Included (Expandable)",
    isPopular: true,
    colorScheme: "brand",

    mainIncludedFunctions: [
      "Everything Included in Core OS",
      "Real-time Inventory & Multi-Godown Stock Management",
      "Purchasing & Vendor Purchase Orders (PO) Workflows",
      "Delivery Challans & GST-Compliant Invoicing",
      "HR Management: Employee Records, Attendance & Leave Approvals",
      "Project & Task Management with Milestone Tracking",
      "Operational BI Reports across Sales, Stock, and Tasks",
      "Automated Workflow Triggers, Email Alerts & Webhooks",
      "Department-Level Granular Access Permissions"
    ],

    setupJourney: [
      { step: "Phase 1: Architecture & Department Discovery", detail: "Our engineering specialist reviews your inventory structures, billing cycles, leave policies, and sales stages to formulate your customized deployment plan." },
      { step: "Phase 2: Master Data Migration", detail: "Comprehensive migration of item masters, SKU catalogs, supplier details, customer databases, and employee records into your ScaleNova environment." },
      { step: "Phase 3: Multi-Team Departmental Training", detail: "Tailored live training sessions conducted separately for your Sales, Warehouse/Accounts, and HR/Admin teams." },
      { step: "Phase 4: Go-Live & Post-Launch Support", detail: "Dedicated operational handholding during your initial week of daily transactions to guarantee 100% team adoption." }
    ],

    trainingIncluded: "Comprehensive multi-session live training for department heads and operating staff, complete customized workflow SOPs, and ongoing access to interactive adoption guides.",
    supportIncluded: "Priority email, WhatsApp coordination channel, and direct ticket resolution during business hours with dedicated onboarding guidance.",

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

    scalingUseCases: "Powers multi-crore turnover operations with multiple warehouses, 10,000+ SKU catalogs, and active cross-functional teams without operational chaos.",
    upgradePath: "For multi-company consolidation, custom ERP API integrations (Tally, Logistics, Customs), or dedicated enterprise technical management, seamless upgrade to Elite OS is available at any time.",
    ctaText: "Book Growth OS Walkthrough"
  },
  {
    id: "elite",
    name: "Elite OS",
    badge: "Full Enterprise OS",
    headline: "End-to-End Enterprise Control, Custom APIs & Priority Care",
    monthlyPrice: 24599,
    annualPrice: 245990, // 2 months free equivalent (10 months * 24599)
    monthlyPriceFormatted: "₹24,599",
    annualPriceFormatted: "₹2,45,990",
    annualMonthlyEquivalent: "₹20,499",
    targetAudience: "High-growth enterprises, multi-branch corporations, large manufacturing plants, and complex commercial organizations needing bespoke workflow automations and high-tier technical governance.",
    userCapacity: "High Capacity / Custom Seat Allocation",
    isPopular: false,
    colorScheme: "dark",

    mainIncludedFunctions: [
      "Everything Included in Growth OS",
      "Executive BI Intelligence & High-Level Trend Dashboards",
      "Multi-Branch & Multi-Entity Business Management",
      "Custom Approval Hierarchies for Purchases & Credit Limits",
      "Dedicated REST API Endpoints & Third-Party System Connectors",
      "Custom Notification Gateways (WhatsApp Business API, SMS, Webhooks)",
      "Advanced Audit Logs & Comprehensive Security Governance",
      "Dedicated Technical Account Manager & Architecture Consultation",
      "Quarterly Workflow Optimization & Operational Reviews"
    ],

    setupJourney: [
      { step: "Phase 1: Enterprise System Architecture", detail: "In-depth engineering blueprint covering multi-branch topology, data governance policies, custom integrations, and approval workflows." },
      { step: "Phase 2: Staging Deployment & API Configuration", detail: "Dedicated staging environment deployment with custom webhook configurations, ERP bridges, and custom report building." },
      { step: "Phase 3: User Acceptance & Executive Training", detail: "Executive walkthroughs for directors and division heads, combined with structured role-based workshops for all staff." },
      { step: "Phase 4: Monitored Enterprise Go-Live", detail: "Hands-on engineering supervision during the full production rollout with dedicated real-time support." }
    ],

    trainingIncluded: "Custom enterprise training program with dedicated live workshops, tailored executive documentation, and recurring training sessions for new organizational hires.",
    supportIncluded: "Dedicated Technical Account Manager, priority resolution queue, direct technical hotline access, and scheduled quarterly operational workflow reviews.",

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
