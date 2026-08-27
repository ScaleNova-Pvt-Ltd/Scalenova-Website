/**
 * ScaleNova Affiliate & Partner Programme Dataset (Simplified & Visual)
 * 
 * 20% recurring monthly revenue share, 4-step process, partner benefits,
 * support, training, and expandable terms & conditions.
 */
const SCALENOVA_AFFILIATE = {
  overview: {
    badge: "ScaleNova Partner Network",
    headline: "Partner with ScaleNova",
    subheadline: "Earn 20% recurring monthly revenue share with no revenue cap by referring businesses to ScaleNova.",
    description: "Introduce businesses seeking unified CRM, ERP, and operations software. Earn 20% of their subscription fee every month they remain active."
  },

  howItWorks: [
    {
      step: 1,
      title: "Apply Online",
      detail: "Submit our quick 1-minute partner application form."
    },
    {
      step: 2,
      title: "Get Your Link",
      detail: "Receive your unique referral link and marketing materials."
    },
    {
      step: 3,
      title: "Refer Businesses",
      detail: "Introduce businesses to ScaleNova. Our team conducts live demos and handles onboarding."
    },
    {
      step: 4,
      title: "Earn 20% Monthly",
      detail: "Receive 20% recurring revenue share on every active subscription, paid monthly (Net-30)."
    }
  ],

  whoCanJoin: [
    { icon: "fas fa-briefcase", title: "Business Consultants", desc: "Help clients streamline operations and eliminate spreadsheets." },
    { icon: "fas fa-file-invoice-dollar", title: "Chartered Accountants", desc: "Recommend connected inventory and GST-ready invoicing." },
    { icon: "fas fa-bullhorn", title: "Digital Agencies", desc: "Connect client marketing funnels directly into ScaleNova CRM." },
    { icon: "fas fa-network-wired", title: "IT Vendors", desc: "Offer modern cloud Business OS replacing legacy software." },
    { icon: "fas fa-laptop", title: "Freelancers & Advisors", desc: "Monetize your network by recommending all-in-one software." },
    { icon: "fas fa-heart", title: "ScaleNova Customers", desc: "Share your operational success and offset your subscription." }
  ],

  benefits: [
    { icon: "fas fa-arrows-rotate", title: "Recurring Revenue", desc: "Earn 20% every month from qualifying customer subscriptions." },
    { icon: "fas fa-infinity", title: "No Revenue Cap", desc: "No upper limit on eligible referral revenue share." },
    { icon: "fas fa-headset", title: "Partner Support", desc: "Get dedicated sales materials, one-pagers, and demo assistance." },
    { icon: "fas fa-graduation-cap", title: "Product Training", desc: "Understand ScaleNova products, plan tiers, and positioning." }
  ],

  terms: [
    {
      title: "Eligibility & Acceptance",
      detail: "Open to consultants, advisors, agencies, IT vendors, and professionals. ScaleNova reviews applications to ensure brand alignment."
    },
    {
      title: "Referral Attribution (60 Days)",
      detail: "Leads are tracked via your unique link or dashboard registration. A 60-day attribution window applies from the prospect's initial visit."
    },
    {
      title: "Revenue Share Calculation (20% Net)",
      detail: "Commissions are calculated as 20% of the net subscription fee collected (excluding statutory GST and custom development fees)."
    },
    {
      title: "Payment Timing & Threshold (Net-30)",
      detail: "Calculated monthly and disbursed on a Net-30 schedule via direct bank transfer (NEFT/IMPS/UPI) for balances exceeding ₹1,000 INR."
    },
    {
      title: "Refunds & Cancellations",
      detail: "If a referred customer cancels their subscription, recurring revenue share for subsequent unpaid months ceases."
    },
    {
      title: "Anti-Fraud & Prohibited Referrals",
      detail: "Self-referrals (referring your own business or sister entities) and search engine brand keyword bidding are strictly prohibited."
    },
    {
      title: "Programme Changes",
      detail: "Existing active attributed customer commissions remain protected under their established terms."
    }
  ]
};

// Freeze affiliate dataset
if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_AFFILIATE);
}
