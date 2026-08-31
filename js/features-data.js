/**
 * ScaleNova 8 Connected Business Modules Single Source of Truth
 * 
 * Powers the canonical homepage module cards and interactive detail popup modals.
 */
const SCALENOVA_FEATURES = [
  {
    id: "executive",
    slug: "executive-dashboard",
    title: "Executive Dashboard",
    shortTitle: "Executive Dashboard",
    shortSummary: "Revenue overview, sales velocity, outstanding receivables and core business KPIs.",
    icon: "fas fa-chart-pie",
    color: "brand",
    bgClass: "bg-brand-500/10 text-brand-600 dark:text-brand-400",
    borderClass: "hover:border-brand-500/50",
    textClass: "text-brand-600 dark:text-brand-400",
    workflow: ["Revenue", "Sales", "KPIs"],
    fullDetails: {
      title: "Executive Dashboard",
      subtitle: "See the important parts of your business in one place.",
      whatItDoes: "Monitor key sales, revenue, receivables and operational indicators from a central dashboard.",
      flowText: "View: Executive Summary",
      keyCapabilities: [
        "Revenue overview",
        "Sales performance",
        "Outstanding receivables",
        "Business KPIs",
        "Executive summaries"
      ]
    }
  },
  {
    id: "crm",
    slug: "crm-and-sales",
    title: "CRM & Sales",
    shortTitle: "CRM & Sales",
    shortSummary: "Inbound lead capture, visual deal stages, contact histories and proposal management.",
    icon: "fas fa-database",
    color: "blue",
    bgClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    borderClass: "hover:border-blue-500/50",
    textClass: "text-blue-600 dark:text-blue-400",
    workflow: ["Lead", "Quote", "Customer"],
    fullDetails: {
      title: "CRM & Sales",
      subtitle: "Keep customer and sales activity organised.",
      whatItDoes: "Capture leads, manage opportunities and follow the customer journey from enquiry to conversion.",
      flowText: "Flow: Lead → Quote → Customer",
      keyCapabilities: [
        "Lead capture",
        "Customer records",
        "Deal stages",
        "Contact history",
        "Proposal management",
        "Follow-up tracking"
      ]
    }
  },
  {
    id: "erp",
    slug: "business-operations",
    title: "Business Operations",
    shortTitle: "Business Operations",
    shortSummary: "Stock registers, vendor purchase orders, GST invoices and operational activity logs.",
    icon: "fas fa-gears",
    color: "emerald",
    bgClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    borderClass: "hover:border-emerald-500/50",
    textClass: "text-emerald-600 dark:text-emerald-400",
    workflow: ["Requisition", "PO", "Invoice"],
    fullDetails: {
      title: "Business Operations",
      subtitle: "Connect everyday operational activity in one workspace.",
      whatItDoes: "Manage purchasing, stock, invoices and operational records.",
      flowText: "Flow: Requisition → PO → Invoice",
      keyCapabilities: [
        "Stock management",
        "Purchase requests",
        "Vendor records",
        "Purchase orders",
        "GST invoices",
        "Operational activity"
      ]
    }
  },
  {
    id: "hr",
    slug: "people-operations",
    title: "People Operations",
    shortTitle: "People Operations",
    shortSummary: "Digital staff directories, attendance, leave applications and role permissions.",
    icon: "fas fa-users",
    color: "purple",
    bgClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    borderClass: "hover:border-purple-500/50",
    textClass: "text-purple-600 dark:text-purple-400",
    workflow: ["Attendance", "Leaves", "Staff"],
    fullDetails: {
      title: "People Operations",
      subtitle: "Keep employee information and routine people processes organised.",
      whatItDoes: "Manage employee records, attendance, leave and access permissions.",
      flowText: "Flow: Attendance → Leaves → Staff",
      keyCapabilities: [
        "Employee records",
        "Attendance",
        "Leave management",
        "Staff information",
        "Role permissions"
      ]
    }
  },
  {
    id: "projects",
    slug: "projects-and-tasks",
    title: "Projects & Tasks",
    shortTitle: "Projects & Tasks",
    shortSummary: "Kanban milestone boards, task ownership, due-date tracking and deliverable management.",
    icon: "fas fa-list-check",
    color: "amber",
    bgClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    borderClass: "hover:border-amber-500/50",
    textClass: "text-amber-600 dark:text-amber-400",
    workflow: ["Plan", "In Progress", "Done"],
    fullDetails: {
      title: "Projects & Tasks",
      subtitle: "Keep work organised from planning to completion.",
      whatItDoes: "Assign responsibilities, track milestones and monitor deliverables.",
      flowText: "Flow: Plan → In Progress → Done",
      keyCapabilities: [
        "Project planning",
        "Task assignment",
        "Kanban boards",
        "Milestone tracking",
        "Due dates",
        "Deliverable monitoring"
      ]
    }
  },
  {
    id: "finance",
    slug: "finance-tracking",
    title: "Finance Tracking",
    shortTitle: "Finance Tracking",
    shortSummary: "Sales invoices, receivables ageing, expense tracking and operational cash-flow indicators.",
    icon: "fas fa-receipt",
    color: "indigo",
    bgClass: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    borderClass: "hover:border-indigo-500/50",
    textClass: "text-indigo-600 dark:text-indigo-400",
    workflow: ["Billing", "Receivables", "Ledger"],
    fullDetails: {
      title: "Finance Tracking",
      subtitle: "Keep core financial activity visible and organised.",
      whatItDoes: "Track billing, receivables, expenses and operational financial indicators.",
      flowText: "Flow: Billing → Receivables → Ledger",
      keyCapabilities: [
        "Sales invoices",
        "Receivables",
        "Expense tracking",
        "Payment activity",
        "Cash-flow indicators",
        "Ledger information"
      ]
    }
  },
  {
    id: "bi",
    slug: "business-intelligence",
    title: "Business Intelligence",
    shortTitle: "Business Intelligence",
    shortSummary: "KPI summaries, sales velocity charts, margin indicators and business trends.",
    icon: "fas fa-chart-line",
    color: "cyan",
    bgClass: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    borderClass: "hover:border-cyan-500/50",
    textClass: "text-cyan-600 dark:text-cyan-400",
    workflow: ["Data", "Insights", "Decisions"],
    fullDetails: {
      title: "Business Intelligence",
      subtitle: "Turn operational information into useful business views.",
      whatItDoes: "Review KPIs and trends to understand business performance.",
      flowText: "Views: Margin & Velocity",
      keyCapabilities: [
        "KPI summaries",
        "Sales velocity",
        "Margin indicators",
        "Business trends",
        "Management reports"
      ]
    }
  },
  {
    id: "mobile",
    slug: "mobile-access",
    title: "Mobile Access",
    shortTitle: "Mobile Access",
    shortSummary: "Responsive browser-based access for business owners to view KPIs and manage business activity on the go.",
    icon: "fas fa-mobile-screen-button",
    color: "teal",
    bgClass: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    borderClass: "hover:border-teal-500/50",
    textClass: "text-teal-600 dark:text-teal-400",
    workflow: ["Web", "Mobile", "Access"],
    fullDetails: {
      title: "Mobile Access",
      subtitle: "Stay connected with your business wherever you work.",
      whatItDoes: "ScaleNova uses a responsive web interface so authorised users can access important business information from mobile devices.",
      flowText: "Access: Responsive Web UI",
      keyCapabilities: [
        "Responsive web interface",
        "KPI viewing",
        "Business activity",
        "Mobile-friendly workflows",
        "Accessible business information"
      ]
    }
  }
];

// Freeze feature dataset
if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_FEATURES);
}
