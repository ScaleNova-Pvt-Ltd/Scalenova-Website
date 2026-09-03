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
    gstRate: 0.18, // 18% standard GST in India
    gstLabel: "+ GST",
    annualDiscountMonths: 2, // Pay for 10 months, get 12 months (2 months free)
    plans: {
      core: {
        id: "core",
        name: "Core OS",
        tagline: "Start with the Essentials",
        monthlyPrice: 4899,
        annualPrice: 48990, // 4899 * 10
        badge: "Essential Starter",
        highlight: false,
        userLimit: "Up to 3 Users",
        storageLimit: "1 GB Cloud Storage",
        reviewFrequency: "Monthly Business Review",
        featuresSummary: [
          "Managed Website + Lead Capture",
          "Organized CRM & Customer Records",
          "Search Engine Indexing & Online Presence",
          "Hands-on Team Onboarding & Training",
          "Monthly Business Systems Review",
          "24-Hour Support Response SLA"
        ]
      },
      growth: {
        id: "growth",
        name: "Growth OS",
        tagline: "Build a Stronger Business Growth Engine",
        monthlyPrice: 13699,
        annualPrice: 136990, // 13699 * 10
        badge: "Most Popular",
        highlight: true,
        userLimit: "Up to 25 Users",
        storageLimit: "2 GB Cloud Storage",
        reviewFrequency: "Biweekly Business Review",
        featuresSummary: [
          "Includes Core OS Capabilities",
          "Multi-Page Website & Multi-Form Capture",
          "Connected Sales, Invoicing & GST Billing",
          "Inventory, Purchasing & People Operations",
          "Managed SEO & Social Media Content",
          "Biweekly Operational Reviews & Reports",
          "Dedicated Support Contact"
        ]
      },
      elite: {
        id: "elite",
        name: "Elite OS",
        tagline: "Complete Managed Systems & Digital Operations",
        monthlyPrice: 35799,
        annualPrice: 357990, // 35799 * 10
        badge: "Complete Managed OS",
        highlight: false,
        userLimit: "Up to 100 Users",
        storageLimit: "4 GB+ Cloud Storage",
        reviewFrequency: "Weekly Executive Review",
        featuresSummary: [
          "Includes Growth OS Capabilities",
          "Complete ERP, Production & Asset Operations",
          "Executive Dashboards & Business Intelligence",
          "Official Business Documentation & Templates",
          "Advanced Search Visibility & Content Management",
          "Weekly Executive Reviews & Optimization",
          "Priority Support Queue & Account Manager"
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
