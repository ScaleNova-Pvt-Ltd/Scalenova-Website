/**
 * ScaleNova Centralized Configuration
 * 
 * Central repository of official contact info, pricing, social destinations,
 * legal metadata, and backend integration endpoints.
 */
const SCALENOVA_CONFIG = {
  brand: {
    name: "ScaleNova",
    legalName: "ScaleNova Private Limited",
    tagline: "One platform for every business need",
    description: "Unified Business Operating System for growing Indian MSMEs. Centralizing CRM, ERP, HR, Projects, and Financial operations into one seamless cloud workspace.",
    gstin: "37ABUCS4883M1Z5",
    foundedYear: 2026,
    websiteUrl: "https://scalenovasystems.com"
  },
  
  contact: {
    officialPhone: "+91 7801049178",
    phoneDisplay: "+91 78010 49178",
    officialEmail: "info@scalenovasys.com",
    whatsAppNumber: "917801049178",
    whatsAppDefaultMessage: "Hi ScaleNova team, I would like to schedule a personalized live demo of the ScaleNova Business OS.",
    get whatsAppLink() {
      return `https://wa.me/${this.whatsAppNumber}?text=${encodeURIComponent(this.whatsAppDefaultMessage)}`;
    }
  },

  social: {
    // Official public LinkedIn company URL
    linkedin: "https://www.linkedin.com/company/scalenovasystems",
    instagram: "https://www.instagram.com/scalenovasystems",
    youtube: "https://www.youtube.com/@scalenovasystems",
    twitter: "https://x.com/scalenovasys"
  },

  pricing: {
    gstRate: 0.18, // 18% standard GST in India
    gstLabel: "+ GST",
    annualDiscountMonths: 2, // Pay for 10 months, get 12 months (2 months free)
    plans: {
      core: {
        id: "core",
        name: "Core OS",
        tagline: "For Startups, Growing Traders & Lean Teams",
        monthlyPrice: 3299,
        annualPrice: 32990, // 3299 * 10
        badge: "Essential Starter",
        highlight: false,
        featuresSummary: [
          "Centralized CRM, Leads & Pipeline Tracker",
          "Customer Database & Interaction History",
          "Quotations & Basic Invoicing System",
          "Role-Based User Permissions (Up to 5 Users)",
          "Guided Workflow Onboarding & Team Orientation",
          "Standard Cloud Infrastructure & Data Protection",
          "Email & Ticket Support during Business Hours"
        ]
      },
      growth: {
        id: "growth",
        name: "Growth OS",
        tagline: "For Scaling MSMEs, Agencies & Multi-Team Businesses",
        monthlyPrice: 11999,
        annualPrice: 119990, // 11999 * 10
        badge: "Most Popular",
        highlight: true,
        featuresSummary: [
          "Includes Everything in Core OS",
          "ERP & Real-time Inventory & Stock Tracking",
          "Purchasing, Vendor & Multi-location Orders",
          "HR & Employee Attendance, Leaves & Payroll Workflows",
          "Project Planning, Milestones & Task Ownership",
          "Operational Business Analytics & Reporting",
          "Automated Notification Triggers & Webhooks",
          "Expanded User Access (Up to 25 Users)",
          "Dedicated Onboarding Specialist & Live Team Training"
        ]
      },
      elite: {
        id: "elite",
        name: "Elite OS",
        tagline: "For Established Enterprises & Complex Multi-Branch Operations",
        monthlyPrice: 24599,
        annualPrice: 245990, // 24599 * 10
        badge: "Full Enterprise OS",
        highlight: false,
        featuresSummary: [
          "Includes Everything in Growth OS",
          "Full-Suite Executive BI Dashboards & Trend Forecasting",
          "Multi-Branch & Multi-Entity Financial Consolidation",
          "Advanced Workflow Automation & Custom Approval Trees",
          "Custom API Integrations (WhatsApp, Tally, Logistics)",
          "Unlimited / High-Capacity User Access",
          "Dedicated Technical Account Manager",
          "Custom Operational Workflows & Continuous Optimization",
          "Priority Resolution & Structured Training Reviews"
        ]
      }
    }
  },

  affiliate: {
    commissionRate: 20, // 20% recurring monthly revenue share
    payoutCycle: "Monthly (Net-30)",
    minPayout: 1000, // ₹1,000 INR
    cookieDays: 60
  },

  backend: {
    /**
     * Paste deployed Google Apps Script Web App URL or custom webhook endpoint here.
     * When left empty or during local testing, forms-service runs in safe development simulation mode.
     */
    googleAppsScriptUrl: ""
  }
};

// Freeze configuration in browser environment
if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_CONFIG);
}
