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
    shortSummary: "See revenue, sales, receivables and key business numbers.",
    icon: "fas fa-chart-pie",
    color: "brand",
    bgClass: "bg-brand-500/10 text-brand-600 dark:text-brand-400",
    borderClass: "hover:border-brand-500/50",
    textClass: "text-brand-600 dark:text-brand-400",
    workflow: ["Track", "Review", "Understand", "Decide"],
    fullDetails: {
      title: "Executive Dashboard",
      subtitle: "See the critical operational pulse of your business in one place.",
      flowText: "Track → Review → Understand → Decide",
      whatItDoes: "ScaleNova sets up and maintains a centralized executive dashboard tracking sales, revenue, receivables, and key operational indicators.",
      whyItHelps: "Gives business owners complete operational clarity without spending hours compiling fragmented spreadsheets.",
      keyCapabilities: [
        "Revenue overview",
        "Sales performance",
        "Outstanding receivables",
        "Key business indicators",
        "Management summaries"
      ]
    }
  },
  {
    id: "crm",
    slug: "crm-sales",
    title: "CRM & Sales",
    shortTitle: "CRM & Sales",
    shortSummary: "Keep leads, customers, quotes and follow ups organised.",
    icon: "fas fa-users-gear",
    color: "blue",
    bgClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    borderClass: "hover:border-blue-500/50",
    textClass: "text-blue-600 dark:text-blue-400",
    workflow: ["Capture", "Follow Up", "Quote", "Close"],
    fullDetails: {
      title: "CRM & Sales",
      subtitle: "Keep leads, customers, and sales activity organized in one connected workflow.",
      flowText: "Capture → Follow Up → Quote → Close",
      whatItDoes: "We connect your website lead forms directly to an organized CRM pipeline, structure follow-up workflows, and maintain customer history.",
      whyItHelps: "Prevents lost inquiries, standardizes sales follow-ups, and gives your sales team structured visibility.",
      keyCapabilities: [
        "Website lead capture",
        "Customer records",
        "Sales pipeline stages",
        "Follow-up management",
        "Contact history",
        "Proposal management"
      ]
    }
  },
  {
    id: "erp",
    slug: "business-operations",
    title: "Business Operations",
    shortTitle: "Business Operations",
    shortSummary: "Manage purchasing, stock, invoicing and daily records.",
    icon: "fas fa-boxes-stacked",
    color: "emerald",
    bgClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    borderClass: "hover:border-emerald-500/50",
    textClass: "text-emerald-600 dark:text-emerald-400",
    workflow: ["Request", "Purchase", "Stock", "Invoice"],
    fullDetails: {
      title: "Business Operations",
      subtitle: "Manage everyday business activity with connected records and streamlined workflows.",
      flowText: "Request → Purchase → Stock → Invoice",
      whatItDoes: "We configure and manage your inventory stock registers, vendor purchasing, sales invoicing, and daily operational documentation.",
      whyItHelps: "Eliminates spreadsheet errors and keeps stock, purchasing, and billing synchronized across teams.",
      keyCapabilities: [
        "Stock management",
        "Purchase management",
        "Sales transactions",
        "Invoicing",
        "Vendor records",
        "Operational records",
        "Document workflows"
      ]
    }
  },
  {
    id: "hr",
    slug: "people-operations",
    title: "People Operations",
    shortTitle: "People Operations",
    shortSummary: "Keep employee, attendance, leave and payroll records together.",
    icon: "fas fa-user-group",
    color: "purple",
    bgClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    borderClass: "hover:border-purple-500/50",
    textClass: "text-purple-600 dark:text-purple-400",
    workflow: ["People", "Attendance", "Leave", "Payroll"],
    fullDetails: {
      title: "People Operations",
      subtitle: "Keep employee information, attendance, and everyday team processes organized.",
      flowText: "People → Attendance → Leave → Payroll",
      whatItDoes: "We organize your employee master records, daily attendance tracking, leave approval workflows, payroll, and role permissions.",
      whyItHelps: "Saves administrative overhead and maintains clear, compliant team records in one secure system.",
      keyCapabilities: [
        "Employee master records",
        "Attendance tracking",
        "Leave management",
        "Employee self-service",
        "Role-based permissions",
        "Payroll workflows"
      ]
    }
  },
  {
    id: "projects",
    slug: "projects-tasks",
    title: "Projects & Tasks",
    shortTitle: "Projects & Tasks",
    shortSummary: "Assign work, track progress and keep deadlines visible.",
    icon: "fas fa-list-check",
    color: "amber",
    bgClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    borderClass: "hover:border-amber-500/50",
    textClass: "text-amber-600 dark:text-amber-400",
    workflow: ["Plan", "Assign", "Track", "Complete"],
    fullDetails: {
      title: "Projects & Tasks",
      subtitle: "Keep client projects and internal work organized from planning to delivery.",
      flowText: "Plan → Assign → Track → Complete",
      whatItDoes: "We configure milestone tracking, task assignments, and visual Kanban boards for clear deliverable ownership.",
      whyItHelps: "Ensures your team knows exactly what needs to be done, who owns each task, and when deliverables are due.",
      keyCapabilities: [
        "Project planning",
        "Task assignment",
        "Kanban-style tracking",
        "Milestone tracking",
        "Due date alerts",
        "Deliverable sign-offs"
      ]
    }
  },
  {
    id: "finance",
    slug: "finance-tracking",
    title: "Finance Tracking",
    shortTitle: "Finance Tracking",
    shortSummary: "Keep billing, payments, expenses and receivables organised.",
    icon: "fas fa-file-invoice-dollar",
    color: "rose",
    bgClass: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    borderClass: "hover:border-rose-500/50",
    textClass: "text-rose-600 dark:text-rose-400",
    workflow: ["Bill", "Collect", "Record", "Review"],
    fullDetails: {
      title: "Finance Tracking",
      subtitle: "Keep billing, receivables, and everyday financial activity organized.",
      flowText: "Bill → Collect → Record → Review",
      whatItDoes: "We set up and connect your sales invoicing, payment tracking, customer receivables, and expense logging.",
      whyItHelps: "Know what is earned, what is owed, and keep receivables healthy without manual accounting errors.",
      keyCapabilities: [
        "Sales invoices & GST billing",
        "Customer receivables tracking",
        "Expense records",
        "Payment reconciliation",
        "Ledger records",
        "Financial visibility"
      ]
    }
  },
  {
    id: "bi",
    slug: "business-intelligence",
    title: "Business Intelligence",
    shortTitle: "Business Intelligence",
    shortSummary: "Turn business data into useful management information.",
    icon: "fas fa-brain",
    color: "cyan",
    bgClass: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    borderClass: "hover:border-cyan-500/50",
    textClass: "text-cyan-600 dark:text-cyan-400",
    workflow: ["Data", "KPIs", "Insights", "Decisions"],
    fullDetails: {
      title: "Business Intelligence",
      subtitle: "Turn everyday operational records into actionable management insights.",
      flowText: "Data → KPIs → Insights → Decisions",
      whatItDoes: "We compile business KPIs, sales trends, margin indicators, and deliver regular operational reviews to leadership.",
      whyItHelps: "Enables business owners to make confident decisions based on verified facts rather than guesswork.",
      keyCapabilities: [
        "KPI summaries",
        "Operational reports",
        "Sales trend analysis",
        "Product margin indicators",
        "Performance reviews"
      ]
    }
  },
  {
    id: "mobile",
    slug: "mobile-access",
    title: "Mobile Access",
    shortTitle: "Mobile Access",
    shortSummary: "Check important business information and approvals from mobile devices.",
    icon: "fas fa-mobile-screen-button",
    color: "indigo",
    bgClass: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    borderClass: "hover:border-indigo-500/50",
    textClass: "text-indigo-600 dark:text-indigo-400",
    workflow: ["Open", "Review", "Approve", "Act"],
    fullDetails: {
      title: "Mobile Access",
      subtitle: "Stay connected to your business operations securely from any modern browser.",
      flowText: "Open → Review → Approve → Act",
      whatItDoes: "We ensure all business workflows, lead notifications, quotation reviews, and status approvals are accessible securely on desktop, tablet, and mobile.",
      whyItHelps: "Check important updates and maintain operational control on the go without being tied to an office desk.",
      keyCapabilities: [
        "Responsive browser access",
        "On-the-go KPI checks",
        "Mobile lead notifications",
        "Quotation & invoice reviews",
        "Secure user authentication",
        "Real-time operational updates"
      ]
    }
  }
];

// Freeze feature dataset
if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_FEATURES);
}
