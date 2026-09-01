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
      flowText: "View: Executive Summary",
      whatItDoes: "Monitor sales, revenue, receivables and important operational indicators from a central dashboard.",
      whyItHelps: "Get a quick view of business performance without checking multiple systems.",
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
    shortSummary: "Inbound lead capture, visual deal stages, contact histories and quotation management.",
    icon: "fas fa-database",
    color: "blue",
    bgClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    borderClass: "hover:border-blue-500/50",
    textClass: "text-blue-600 dark:text-blue-400",
    workflow: ["Lead", "Quote", "Customer"],
    fullDetails: {
      title: "CRM & Sales",
      subtitle: "Keep customer and sales activity organised.",
      flowText: "Flow: Lead → Quote → Customer",
      whatItDoes: "Capture inquiries, manage deal stages and follow the customer journey from first contact to conversion.",
      whyItHelps: "Prevent lost inquiries and give your sales team clear follow-up visibility.",
      keyCapabilities: [
        "Inbound lead capture",
        "Customer contact histories",
        "Visual deal stages",
        "Quotation generator",
        "Follow-up reminders",
        "Conversion tracking"
      ]
    }
  },
  {
    id: "erp",
    slug: "business-operations",
    title: "Business Operations",
    shortTitle: "Business Operations",
    shortSummary: "Stock registers, vendor purchase orders, GST billing and everyday operational activity logs.",
    icon: "fas fa-gears",
    color: "emerald",
    bgClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    borderClass: "hover:border-emerald-500/50",
    textClass: "text-emerald-600 dark:text-emerald-400",
    workflow: ["Requisition", "PO", "Invoice"],
    fullDetails: {
      title: "Business Operations",
      subtitle: "Connect everyday operational activity in one workspace.",
      flowText: "Flow: Requisition → PO → Invoice",
      whatItDoes: "Manage inventory, vendor purchase orders, GST billing, and everyday business workflows.",
      whyItHelps: "Eliminate spreadsheet errors and keep stock, purchasing, and billing synchronized.",
      keyCapabilities: [
        "Real-time stock registers",
        "Purchase orders & vendor records",
        "Automated GST invoices",
        "Delivery notes",
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
    shortSummary: "Digital staff directories, attendance, leave applications and role-based permissions.",
    icon: "fas fa-users",
    color: "purple",
    bgClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    borderClass: "hover:border-purple-500/50",
    textClass: "text-purple-600 dark:text-purple-400",
    workflow: ["Attendance", "Leaves", "Staff"],
    fullDetails: {
      title: "People Operations",
      subtitle: "Keep employee information and routine people processes organised.",
      flowText: "Flow: Attendance → Leaves → Staff",
      whatItDoes: "Manage staff directories, daily attendance, leave applications, and role-based access.",
      whyItHelps: "Save administrative time and maintain clear team records in one place.",
      keyCapabilities: [
        "Digital employee directory",
        "Daily attendance tracking",
        "Leave approval workflows",
        "Staff document storage",
        "Role-based permissions",
        "Basic payroll summaries"
      ]
    }
  },
  {
    id: "projects",
    slug: "projects-and-tasks",
    title: "Projects & Tasks",
    shortTitle: "Projects & Tasks",
    shortSummary: "Kanban milestone boards, task ownership, due-date tracking and deliverable monitoring.",
    icon: "fas fa-list-check",
    color: "amber",
    bgClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    borderClass: "hover:border-amber-500/50",
    textClass: "text-amber-600 dark:text-amber-400",
    workflow: ["Plan", "In Progress", "Done"],
    fullDetails: {
      title: "Projects & Tasks",
      subtitle: "Keep work organised from planning to completion.",
      flowText: "Flow: Plan → In Progress → Done",
      whatItDoes: "Assign responsibilities, track milestones and monitor deliverables from one workspace.",
      whyItHelps: "Keep your team clear on what needs to be done, who owns it and when it is due.",
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
      flowText: "Flow: Billing → Receivables → Ledger",
      whatItDoes: "Track billing, receivables, operational expenses, and everyday accounting records.",
      whyItHelps: "Know what is earned, what is owed, and keep accounts current without manual bookkeeping.",
      keyCapabilities: [
        "Sales invoices & receipts",
        "Overdue receivables tracking",
        "Expense recording",
        "Payment status monitoring",
        "Operational cash-flow views",
        "Standard ledger entries"
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
      flowText: "Views: Margin & Velocity",
      whatItDoes: "Review KPI trends, sales velocities, and operational performance summaries.",
      whyItHelps: "Make informed business decisions based on real facts instead of guesswork.",
      keyCapabilities: [
        "Executive KPI summaries",
        "Sales velocity analytics",
        "Profit & margin indicators",
        "Operational trend reports",
        "Performance digests",
        "Management exports"
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
      flowText: "Access: Responsive Web UI",
      whatItDoes: "Access your dashboard, check inquiries, and review operations securely on any mobile device.",
      whyItHelps: "Check important business updates and stay in control on the go without waiting to reach a desk.",
      keyCapabilities: [
        "Mobile-responsive interface",
        "On-the-go KPI checks",
        "Mobile inquiry alerts",
        "Quick quotation review",
        "Secure browser login",
        "Real-time status updates"
      ]
    }
  }
];

// Freeze feature dataset
if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_FEATURES);
}
