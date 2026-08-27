/**
 * ScaleNova Affiliate & Partner Programme Dataset
 * 
 * Defines the 20% recurring monthly revenue share structure, 4-step process,
 * partner benefits, training, dedicated support, and programme terms & conditions.
 */
const SCALENOVA_AFFILIATE = {
  overview: {
    badge: "ScaleNova Partner Network",
    headline: "Partner with ScaleNova",
    subheadline: "Earn 20% recurring monthly revenue share with no revenue cap by referring businesses to ScaleNova Business OS.",
    description: "Empower Indian small and medium enterprises with unified CRM, ERP, HR, and automation software. When you introduce businesses looking to modernize their operations, you earn 20% of their subscription fee every month they remain an active subscriber.",
    commissionRate: "20%",
    commissionType: "Recurring Monthly Revenue Share",
    capPolicy: "No Revenue Cap — Unlimited Earning Potential",
    cookieDuration: "60-Day Attribution Window",
    payoutFrequency: "Monthly Direct Bank Transfer (Net-30)"
  },

  howItWorks: [
    {
      stepNumber: 1,
      title: "Apply for Partner Access",
      detail: "Complete our short partner application form. Our partner operations team reviews your application and activates your partner account within 24 hours."
    },
    {
      stepNumber: 2,
      title: "Get Your Unique Referral Link",
      detail: "Receive your dedicated partner referral link and access partner sales materials, product one-pagers, and presentation decks to share with prospective businesses."
    },
    {
      stepNumber: 3,
      title: "Introduce Businesses to ScaleNova",
      detail: "Share your link, introduce prospects to our team, or register leads via your dashboard. Our technical team conducts tailored live demos and handles customer onboarding."
    },
    {
      stepNumber: 4,
      title: "Earn 20% Recurring Every Month",
      detail: "Receive 20% recurring revenue share on the net monthly subscription for every active customer you refer, deposited directly into your bank account on a monthly Net-30 cycle."
    }
  ],

  whoCanJoin: [
    {
      icon: "fas fa-briefcase",
      title: "Business & Management Consultants",
      desc: "Help your MSME clients eliminate duplicate spreadsheets, reduce operational friction, and adopt structured digital workflows with ScaleNova OS."
    },
    {
      icon: "fas fa-file-invoice-dollar",
      title: "Chartered Accountants & Tax Advisors",
      desc: "Recommend a connected inventory and invoicing platform that simplifies client records, transaction logs, and GST compliance."
    },
    {
      icon: "fas fa-bullhorn",
      title: "Digital Agencies & Web Developers",
      desc: "Provide complete digital transformation by connecting marketing lead funnels directly into ScaleNova CRM and sales pipelines."
    },
    {
      icon: "fas fa-network-wired",
      title: "IT Vendors & System Integrators",
      desc: "Expand your product offerings with a modern, cloud-native Business OS that replaces outdated desktop-bound legacy software."
    },
    {
      icon: "fas fa-laptop",
      title: "Freelancers & Tech Advisors",
      desc: "Monetize your professional network by recommending a reliable, all-in-one business software suite to growing small business owners."
    },
    {
      icon: "fas fa-heart",
      title: "Active ScaleNova Customers",
      desc: "Share your genuine operational success with fellow business owners, offset your own subscription, and earn predictable recurring income."
    }
  ],

  partnerSupport: {
    title: "Comprehensive Partner Support",
    description: "We don't expect you to be a software expert. ScaleNova provides all the resources, materials, and support you need to refer businesses with confidence.",
    pillars: [
      {
        icon: "fas fa-file-lines",
        title: "Product Collateral & One-Pagers",
        detail: "Access professionally designed PDF brochures, feature comparison sheets, and customer ROI calculators to share with clients."
      },
      {
        icon: "fas fa-laptop-code",
        title: "Co-Selling & Live Demo Support",
        detail: "Our senior solution engineers conduct live platform walkthroughs for your referred prospects, answering technical questions and scoping custom workflows."
      },
      {
        icon: "fas fa-chalkboard-user",
        title: "Dedicated Partner Manager",
        detail: "Get direct WhatsApp and email access to a dedicated partner manager for fast question resolution and deal assistance."
      },
      {
        icon: "fas fa-gauge-high",
        title: "Transparent Referral Tracking",
        detail: "Track your clicks, demo requests, active converted subscribers, and monthly recurring payout statements in real time."
      }
    ]
  },

  partnerTraining: {
    title: "Structured Partner Onboarding & Training",
    description: "Our partner onboarding roadmap helps you understand ScaleNova OS capabilities and identify the best-fit opportunities in your network.",
    modules: [
      {
        step: "Module 1",
        title: "ScaleNova Platform Overview",
        detail: "Understand the core architecture: CRM, ERP, Inventory, HR Attendance, Projects, and Financial Invoicing."
      },
      {
        step: "Module 2",
        title: "Understanding OS Plans & Target Profiles",
        detail: "Learn which businesses need Core OS (₹3,299/mo), Growth OS (₹11,999/mo), or Elite OS (₹24,599/mo)."
      },
      {
        step: "Module 3",
        title: "Identifying High-Fit MSME Pain Points",
        detail: "Recognize symptoms of operational chaos: lost leads, stockout discrepancies, attendance disputes, and delayed billing."
      },
      {
        step: "Module 4",
        title: "The Referral & Handoff Process",
        detail: "How to introduce a prospect, register a lead, and facilitate a smooth handover to the ScaleNova demo team."
      }
    ]
  },

  revenueExamples: [
    {
      clients: "5 Growth OS Clients",
      calculation: "5 × ₹11,999 × 20%",
      monthlyEarnings: "₹11,999 / month",
      annualEarnings: "₹1,43,988 / year"
    },
    {
      clients: "15 Growth OS Clients",
      calculation: "15 × ₹11,999 × 20%",
      monthlyEarnings: "₹35,997 / month",
      annualEarnings: "₹4,31,964 / year"
    },
    {
      clients: "10 Elite OS Clients",
      calculation: "10 × ₹24,599 × 20%",
      monthlyEarnings: "₹49,198 / month",
      annualEarnings: "₹5,90,376 / year"
    },
    {
      clients: "25 Mixed OS Clients (Growth + Elite)",
      calculation: "15 Growth + 10 Elite",
      monthlyEarnings: "₹85,195 / month",
      annualEarnings: "₹10,22,340 / year"
    }
  ],

  programmeTerms: [
    {
      title: "1. Eligibility & Partner Acceptance",
      detail: "The ScaleNova Partner Programme is open to consultants, advisors, agencies, IT vendors, business professionals, and existing clients. ScaleNova reserves the right to review and approve partner applications to ensure brand alignment."
    },
    {
      title: "2. Referral Attribution Window (60 Days)",
      detail: "Referred leads are attributed to your account via your unique tracking link or direct lead registration form. A 60-day cookie and attribution window applies from the prospect's initial visit."
    },
    {
      title: "3. Qualified Customer Definition",
      detail: "A qualified customer is a distinct business entity that purchases an active monthly or annual ScaleNova OS subscription (Core, Growth, or Elite) and remains in good standing."
    },
    {
      title: "4. Commission Calculation (20% Net)",
      detail: "Commissions are calculated as exactly 20% of the net subscription fee collected (excluding statutory GST/taxes and any one-time custom development fees). As long as the subscriber stays active, you receive 20% every billing cycle."
    },
    {
      title: "5. Payout Timing & Threshold (Net-30)",
      detail: "Commissions accrue on a calendar month basis and are disbursed on a Net-30 schedule via direct bank transfer (NEFT/IMPS/UPI) for balances exceeding ₹1,000 INR."
    },
    {
      title: "6. Refund & Cancellation Handling",
      detail: "If a referred customer cancels their subscription or receives a statutory refund, recurring commission for subsequent unpaid months ceases automatically."
    },
    {
      title: "7. Anti-Fraud & Fair Play Policy",
      detail: "Self-referrals (referring your own business or sister entities under your ownership) are not eligible for commission. Bidding on ScaleNova brand keywords in search ads or making unauthorized functional claims is strictly prohibited."
    },
    {
      title: "8. Programme Modifications",
      detail: "ScaleNova maintains transparent partner operations. In the event of material programme updates, existing attributed active customer commissions remain protected under their established terms."
    }
  ]
};

// Freeze affiliate dataset
if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_AFFILIATE);
}
