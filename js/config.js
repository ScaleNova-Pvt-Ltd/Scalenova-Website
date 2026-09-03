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
    tagline: "You focus on your business. We manage the systems behind it.",
    description: "Managed business systems and digital operations company for MSMEs. From website and lead capture to operational workflows, billing, digital presence, and ongoing support — we manage the systems behind your business.",
    gstin: "37ABUCS4883M1Z5",
    foundedYear: 2026,
    websiteUrl: "https://scalenovasys.com"
  },
  
  contact: {
    officialPhone: "+91 7801049178",
    phoneDisplay: "+91 78010 49178",
    officialEmail: "info@scalenovasys.com",
    whatsAppNumber: "917801049178",
    whatsAppDefaultMessage: "Hello ScaleNova Team, I would like to learn more about your managed business systems and operations services.",
    get whatsAppLink() {
      return `https://wa.me/${this.whatsAppNumber}?text=${encodeURIComponent(this.whatsAppDefaultMessage)}`;
    }
  },

  social: {
    linkedin: "https://www.linkedin.com/company/scalenovasys/",
    instagram: "https://www.instagram.com/scalenovasys/"
  },

  pricing: {
    annualDiscountMonths: 2, // Pay for 10 months, get 12 months (2 months free)
    plans: {
      core: {
        id: "core",
        name: "Core OS",
        tagline: "Start with the Essentials",
        setupPrice: 4899,
        monthlyPrice: 4899,
        annualPrice: 48990, // 4899 * 10
        badge: "Essential Starter",
        highlight: false,
        websitePageLimit: "1 Landing Page",
        leadCaptureCount: "1 Structured Form",
        socialPostsPerMonth: 0,
        directoryListings: "Basic Profile Setup",
        trainingSessions: "1 × 90-Minute Orientation",
        reviewFrequency: "Monthly Business Review",
        supportSLA: "Initial contact < 24 business hours",
        featuresSummary: [
          "1-Page High-Converting Landing Website",
          "Single Lead Capture Connected to CRM",
          "Basic Customer Records & Quotation Flow",
          "Essential Master Data Onboarding Included",
          "1 × 90-Minute Live Team Orientation",
          "Monthly Business Systems Review"
        ]
      },
      growth: {
        id: "growth",
        name: "Growth OS",
        tagline: "Build a Stronger Business Growth Engine",
        setupPrice: 13699,
        monthlyPrice: 13699,
        annualPrice: 136990, // 13699 * 10
        badge: "Most Popular",
        highlight: true,
        websitePageLimit: "Up to 5 Pages",
        leadCaptureCount: "Multiple Forms + WhatsApp",
        socialPostsPerMonth: 4,
        directoryListings: "Up to 4 Managed Listings",
        trainingSessions: "3 × 90-Minute Sessions",
        reviewFrequency: "Biweekly Business Review",
        supportSLA: "Initial contact < 24 business hours",
        featuresSummary: [
          "Includes Core OS Capabilities",
          "Up to 5-Page Premium Business Website",
          "Connected Invoicing, Inventory & HRMS",
          "4 Branded Social Posts / Month",
          "Up to 4 Managed Business Directory Listings",
          "3 × 90-Minute Departmental Training Sessions",
          "Biweekly Business Reviews & Reports"
        ]
      },
      elite: {
        id: "elite",
        name: "Elite OS",
        tagline: "Complete Managed Systems & Digital Operations",
        setupPrice: 35799,
        monthlyPrice: 35799,
        annualPrice: 357990, // 35799 * 10
        badge: "Complete Managed OS",
        highlight: false,
        websitePageLimit: "Up to 10 Pages",
        leadCaptureCount: "Advanced Routing Pipelines",
        socialPostsPerMonth: 8,
        directoryListings: "Up to 10 Managed Listings",
        trainingSessions: "5 × 90-Minute Role-Based Workshops",
        reviewFrequency: "Weekly Executive Review",
        supportSLA: "Priority contact < 24 business hours",
        featuresSummary: [
          "Includes Growth OS Capabilities",
          "Up to 10-Page Tailored Web Architecture",
          "Complete Commercial ERP, BOMs & Fixed Assets",
          "Executive BI Dashboards & Margin Insights",
          "8 Branded Social Posts / Month",
          "Up to 10 Managed Business Directory Listings",
          "5 × 90-Minute Role-Based Workshop Sessions",
          "Weekly Executive Business Reviews"
        ]
      }
    }
  },

  affiliate: {
    commissionRate: 20, // 20% recurring monthly revenue share
    payoutCycle: "Monthly (Net-30)",
    minPayout: 1000,
    cookieDays: 60
  },

  backend: {
    googleAppsScriptUrl: ""
  }
};

if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_CONFIG);
}
