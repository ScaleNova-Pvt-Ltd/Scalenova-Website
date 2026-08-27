/**
 * ScaleNova Affiliate & Partner Programme Dataset
 * 
 * Defines the 20% recurring monthly revenue share structure, partner benefits,
 * qualification rules, and payout policies.
 */
const SCALENOVA_AFFILIATE = {
  overview: {
    badge: "ScaleNova Partner Network",
    headline: "Earn 20% Recurring Monthly Revenue Share — With No Earnings Cap",
    description: "Partner with ScaleNova to empower Indian businesses with modern operating technology. Refer businesses looking for centralized CRM, ERP, and automation software and earn 20% of their subscription fee every month they remain an active subscriber.",
    commissionRate: "20%",
    commissionType: "Recurring Monthly Revenue Share",
    capPolicy: "No Revenue Cap — Unlimited Earning Potential",
    cookieDuration: "60-Day Attribution Window",
    payoutFrequency: "Monthly Direct Bank Transfer (NEFT/IMPS)"
  },

  whoCanJoin: [
    {
      icon: "fas fa-briefcase",
      title: "Business & Management Consultants",
      desc: "Help your MSME clients streamline operations, eliminate duplicate work, and adopt structured digital workflows with ScaleNova OS."
    },
    {
      icon: "fas fa-file-invoice-dollar",
      title: "Chartered Accountants & Financial Advisors",
      desc: "Recommend a connected inventory and invoicing platform that simplifies client records, transaction logs, and GST compliance."
    },
    {
      icon: "fas fa-bullhorn",
      title: "Digital Agencies & Web Developers",
      desc: "Provide complete business transformation by connecting digital marketing campaigns directly to ScaleNova CRM and sales pipelines."
    },
    {
      icon: "fas fa-network-wired",
      title: "IT Vendors & System Integrators",
      desc: "Expand your product portfolio with a modern, cloud-native Business OS that replaces outdated desktop-bound legacy software."
    },
    {
      icon: "fas fa-heart",
      title: "Active ScaleNova Customers",
      desc: "Share your genuine operational success with fellow entrepreneurs and offset your own subscription while earning recurring income."
    }
  ],

  howItWorks: [
    {
      step: "1. Apply & Receive Partner Link",
      detail: "Submit our short affiliate form. Upon approval, you receive a unique referral link and access to your partner dashboard."
    },
    {
      step: "2. Introduce ScaleNova to MSMEs",
      detail: "Share your link, introduce prospects to our team, or recommend ScaleNova to businesses seeking CRM, ERP, and automation solutions."
    },
    {
      step: "3. We Handle Walkthroughs & Onboarding",
      detail: "Our engineering and sales team conducts live demos, manages customer onboarding, provides staff training, and handles all ongoing technical support."
    },
    {
      step: "4. Earn 20% Every Single Month",
      detail: "Receive 20% recurring commission on the net monthly subscription for every active referred customer directly into your bank account."
    }
  ],

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
      title: "Qualification & Attribution",
      detail: "A referral qualifies when a customer signs up using your partner link or is registered via your partner dashboard and completes payment for any monthly or annual ScaleNova OS plan."
    },
    {
      title: "Recurring 20% Structure",
      detail: "Commissions are calculated on the net plan subscription fee (excluding statutory GST). As long as the customer maintains an active subscription in good standing, you receive 20% every billing cycle."
    },
    {
      title: "Payout Schedule",
      detail: "Commissions are calculated at the end of each calendar month and disbursed on a Net-30 basis via direct bank transfer (NEFT/IMPS/UPI) for balances exceeding ₹1,000 INR."
    },
    {
      title: "No Revenue Cap & Fair Play",
      detail: "There is no limit on how many businesses you can refer or how much you can earn. Self-referrals and misleading advertising or bidding on ScaleNova brand terms on search engines are strictly prohibited."
    }
  ]
};

// Freeze affiliate dataset
if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_AFFILIATE);
}
