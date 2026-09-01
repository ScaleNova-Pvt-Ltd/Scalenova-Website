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
    tagline: "One system every business needs",
    description: "Unified Business Operating System for growing Indian MSMEs. Bringing website, lead capture, CRM, ERP, HR, operations, and digital growth into one connected workspace.",
    gstin: "37ABUCS4883M1Z5",
    foundedYear: 2026,
    websiteUrl: "https://scalenovasystems.com"
  },
  
  contact: {
    officialPhone: "+91 7801049178",
    phoneDisplay: "+91 78010 49178",
    officialEmail: "info@scalenovasys.com",
    whatsAppNumber: "917801049178",
    whatsAppDefaultMessage: "Hello ScaleNova Team, I would like to learn more about ScaleNova Business OS and your services.",
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
        tagline: "For Startups & Small Businesses",
        monthlyPrice: 4899,
        annualPrice: 48990, // 4899 * 10
        badge: "Essential Starter",
        highlight: false,
        userLimit: "Up to 3 Users",
        storageLimit: "1 GB Cloud Storage",
        featuresSummary: [
          "Premium Website + Lead Capture",
          "CRM + Core Business Management",
          "Basic SEO + Online Presence",
          "Training, Support + Monthly Reports",
          "Up to 3 Users Included",
          "1 GB Cloud Database Storage"
        ]
      },
      growth: {
        id: "growth",
        name: "Growth OS",
        tagline: "For Growing MSMEs, Agencies & Teams",
        monthlyPrice: 13699,
        annualPrice: 136990, // 13699 * 10
        badge: "Most Popular",
        highlight: true,
        userLimit: "Up to 25 Users",
        storageLimit: "2 GB Cloud Storage",
        featuresSummary: [
          "Includes Core OS",
          "Sales + Accounts Management",
          "HR + Payroll + Employee Management",
          "Inventory + Purchase + Project Management",
          "SEO + Social Media + Content Management",
          "Up to 25 Users Included",
          "2 GB Cloud Database Storage"
        ]
      },
      elite: {
        id: "elite",
        name: "Elite OS",
        tagline: "For Established MSMEs & Enterprises",
        monthlyPrice: 35799,
        annualPrice: 357990, // 35799 * 10
        badge: "Full Enterprise OS",
        highlight: false,
        userLimit: "Up to 100 Users",
        storageLimit: "4 GB+ Cloud Storage",
        featuresSummary: [
          "Includes Growth OS",
          "Complete ERP + Advanced Business Management",
          "Manufacturing + Assets + Advanced Operations",
          "Advanced Digital Marketing + SEO + Social Media",
          "Business Intelligence + Reports + Analysis",
          "Dedicated Training + Support + Account Management",
          "Up to 100 Users Included",
          "4 GB+ Cloud Database Storage"
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
