/**
 * ScaleNova 8 Connected Business Modules Single Source of Truth
 * 
 * Powers the canonical homepage module cards, standalone features page, and detail views.
 */
const SCALENOVA_FEATURES = [
  {
    id: "executive",
    slug: "executive-dashboard",
    title: "Executive Dashboard",
    shortTitle: "Executive Dashboard",
    shortSummary: "Revenue overview, sales performance, outstanding receivables and important business KPIs.",
    icon: "fas fa-chart-pie",
    color: "brand",
    bgClass: "bg-brand-500/10 text-brand-600 dark:text-brand-400",
    borderClass: "hover:border-brand-500/50",
    textClass: "text-brand-600 dark:text-brand-400",
    workflow: ["Sales", "Revenue", "Receivables", "KPIs"],
    fullDetails: {
      title: "Executive Dashboard",
      subtitle: "See the important parts of your business in one place.",
      flowText: "Sales → Revenue → Receivables → KPIs",
      whatItDoes: "Monitor sales, revenue, receivables and important operational indicators from a central dashboard.",
      whyItHelps: "Small and growing teams that need a simple way to organise work and follow progress.",
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
    shortSummary: "Lead capture, customer records, sales stages, follow-ups and proposal management.",
    icon: "fas fa-database",
    color: "blue",
    bgClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    borderClass: "hover:border-blue-500/50",
    textClass: "text-blue-600 dark:text-blue-400",
    workflow: ["Lead", "Follow-up", "Proposal", "Customer"],
    fullDetails: {
      title: "CRM & Sales",
      subtitle: "Keep customer and sales activity organised.",
      flowText: "Lead → Follow-up → Proposal → Customer",
      whatItDoes: "Capture leads, manage opportunities and follow the customer journey from enquiry to conversion.",
      whyItHelps: "Small and growing teams that need a simple way to organise work and follow progress.",
      keyCapabilities: [
        "Lead capture",
        "Customer records",
        "Sales stages",
        "Follow-up management",
        "Proposal generator",
        "Conversion tracking"
      ]
    }
  },
  {
    id: "erp",
    slug: "business-operations",
    title: "Business Operations",
    shortTitle: "Business Operations",
    shortSummary: "Purchasing, stock, invoicing, operational records and everyday business workflows.",
    icon: "fas fa-gears",
    color: "emerald",
    bgClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    borderClass: "hover:border-emerald-500/50",
    textClass: "text-emerald-600 dark:text-emerald-400",
    workflow: ["Request", "Purchase", "Stock", "Invoice"],
    fullDetails: {
      title: "Business Operations",
      subtitle: "Connect everyday operational activity in one workspace.",
      flowText: "Request → Purchase → Stock → Invoice",
      whatItDoes: "Manage purchasing, stock registers, invoices, and everyday operational activity logs.",
      whyItHelps: "Small and growing teams that need a simple way to organise work and follow progress.",
      keyCapabilities: [
        "Stock registers",
        "Purchase requests & POs",
        "GST Invoices",
        "Vendor records",
        "Operational activity logs",
        "Warehouse tracking"
      ]
    }
  },
  {
    id: "hr",
    slug: "people-operations",
    title: "People Operations",
    shortTitle: "People Operations",
    shortSummary: "Employee records, attendance, leave management and role-based access.",
    icon: "fas fa-users",
    color: "purple",
    bgClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    borderClass: "hover:border-purple-500/50",
    textClass: "text-purple-600 dark:text-purple-400",
    workflow: ["Employee", "Attendance", "Leave", "Records"],
    fullDetails: {
      title: "People Operations",
      subtitle: "Keep employee information and routine people processes organised.",
      flowText: "Employee → Attendance → Leave → Records",
      whatItDoes: "Manage employee records, daily attendance, leave approvals, and role permissions.",
      whyItHelps: "Small and growing teams that need a simple way to organise work and follow progress.",
      keyCapabilities: [
        "Digital staff directory",
        "Daily attendance tracking",
        "Leave approval workflows",
        "Staff records storage",
        "Role permissions",
        "Basic payroll summaries"
      ]
    }
  },
  {
    id: "projects",
    slug: "projects-and-tasks",
    title: "Projects & Tasks",
    shortTitle: "Projects & Tasks",
    shortSummary: "Task assignment, project planning, milestones, due dates and deliverable tracking.",
    icon: "fas fa-list-check",
    color: "amber",
    bgClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    borderClass: "hover:border-amber-500/50",
    textClass: "text-amber-600 dark:text-amber-400",
    workflow: ["Plan", "Assign", "Progress", "Complete"],
    fullDetails: {
      title: "Projects & Tasks",
      subtitle: "Keep work organised from planning to completion.",
      flowText: "Plan → Assign → Progress → Complete",
      whatItDoes: "Assign responsibilities, track milestones and monitor deliverables from one organised workspace.",
      whyItHelps: "Small and growing teams that need a simple way to organise work and follow progress.",
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
    shortSummary: "Invoices, receivables, expenses and financial activity visibility.",
    icon: "fas fa-receipt",
    color: "indigo",
    bgClass: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    borderClass: "hover:border-indigo-500/50",
    textClass: "text-indigo-600 dark:text-indigo-400",
    workflow: ["Invoice", "Receivable", "Expense", "Cash Flow"],
    fullDetails: {
      title: "Finance Tracking",
      subtitle: "Keep core financial activity visible and organised.",
      flowText: "Invoice → Receivable → Expense → Cash Flow",
      whatItDoes: "Track sales invoices, receivables ageing, operational expenses, and payment activity.",
      whyItHelps: "Small and growing teams that need a simple way to organise work and follow progress.",
      keyCapabilities: [
        "Sales invoices & billing",
        "Receivables ageing",
        "Expense tracking",
        "Payment activity",
        "Cash-flow indicators",
        "Operational ledger"
      ]
    }
  },
  {
    id: "bi",
    slug: "business-intelligence",
    title: "Business Intelligence",
    shortTitle: "Business Intelligence",
    shortSummary: "Business summaries, performance indicators, trends and management reporting.",
    icon: "fas fa-chart-line",
    color: "cyan",
    bgClass: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    borderClass: "hover:border-cyan-500/50",
    textClass: "text-cyan-600 dark:text-cyan-400",
    workflow: ["Data", "Analysis", "KPI", "Decision"],
    fullDetails: {
      title: "Business Intelligence",
      subtitle: "Turn operational information into useful business views.",
      flowText: "Data → Analysis → KPI → Decision",
      whatItDoes: "Review performance indicators, margin summaries, business trends, and executive reports.",
      whyItHelps: "Small and growing teams that need a simple way to organise work and follow progress.",
      keyCapabilities: [
        "Business summaries",
        "Performance indicators",
        "Margin & velocity charts",
        "Business trends",
        "Management reporting",
        "Data exports"
      ]
    }
  },
  {
    id: "mobile",
    slug: "mobile-access",
    title: "Mobile Access",
    shortTitle: "Mobile Access",
    shortSummary: "Responsive access for business owners and teams to view information and manage business activity from mobile devices.",
    icon: "fas fa-mobile-screen-button",
    color: "teal",
    bgClass: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
    borderClass: "hover:border-teal-500/50",
    textClass: "text-teal-600 dark:text-teal-400",
    workflow: ["Login", "View", "Approve", "Manage"],
    fullDetails: {
      title: "Mobile Access",
      subtitle: "Stay connected with your business wherever you work.",
      flowText: "Login → View → Approve → Manage",
      whatItDoes: "Access business information, check inquiries, and manage activity securely from mobile web browsers.",
      whyItHelps: "Small and growing teams that need a simple way to organise work and follow progress.",
      keyCapabilities: [
        "Responsive web interface",
        "Mobile KPI viewing",
        "Business activity tracking",
        "Mobile-friendly approvals",
        "Accessible business records",
        "Secure remote access"
      ]
    }
  }
];

// Freeze feature dataset
if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_FEATURES);
}
