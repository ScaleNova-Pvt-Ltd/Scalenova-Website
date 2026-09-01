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
    shortSummary: "Revenue overview, sales performance, receivables and key business indicators.",
    icon: "fas fa-chart-pie",
    color: "brand",
    bgClass: "bg-brand-500/10 text-brand-600 dark:text-brand-400",
    borderClass: "hover:border-brand-500/50",
    textClass: "text-brand-600 dark:text-brand-400",
    workflow: ["Sales", "Revenue", "Receivables", "Overview"],
    fullDetails: {
      title: "Executive Dashboard",
      subtitle: "See the important parts of your business in one place.",
      flowText: "Sales → Revenue → Receivables → Overview",
      whatItDoes: "Monitor sales, revenue, receivables and key business indicators from a central dashboard.",
      whyItHelps: "Small and growing teams that need a simple way to organise work and follow progress.",
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
    shortSummary: "Lead capture, customer records, sales stages, follow-ups and proposal management.",
    icon: "fas fa-users-gear",
    color: "blue",
    bgClass: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    borderClass: "hover:border-blue-500/50",
    textClass: "text-blue-600 dark:text-blue-400",
    workflow: ["Lead", "Follow-up", "Proposal", "Customer"],
    fullDetails: {
      title: "CRM & Sales",
      subtitle: "Keep leads, customers and sales activity organised in one place.",
      flowText: "Lead → Follow-up → Proposal → Customer",
      whatItDoes: "Capture leads, manage opportunities and follow the customer journey from enquiry to conversion.",
      whyItHelps: "Prevent lost inquiries and give your sales team clear follow-up visibility.",
      keyCapabilities: [
        "Lead capture",
        "Customer records",
        "Sales pipeline",
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
    shortSummary: "Purchasing, inventory, invoicing and daily operational records.",
    icon: "fas fa-boxes-stacked",
    color: "emerald",
    bgClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    borderClass: "hover:border-emerald-500/50",
    textClass: "text-emerald-600 dark:text-emerald-400",
    workflow: ["Request", "Purchase", "Stock", "Invoice"],
    fullDetails: {
      title: "Business Operations",
      subtitle: "Manage everyday business activity with connected records and workflows.",
      flowText: "Request → Purchase → Stock → Invoice",
      whatItDoes: "Manage purchasing, stock registers, invoices, and daily operational activity records.",
      whyItHelps: "Eliminate spreadsheet errors and keep stock, purchasing, and billing synchronized.",
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
    shortSummary: "Employee records, attendance, leave, payroll and role-based access.",
    icon: "fas fa-user-group",
    color: "purple",
    bgClass: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    borderClass: "hover:border-purple-500/50",
    textClass: "text-purple-600 dark:text-purple-400",
    workflow: ["Employee", "Attendance", "Leave", "Records"],
    fullDetails: {
      title: "People Operations",
      subtitle: "Keep employee information, attendance and everyday people processes organised.",
      flowText: "Employee → Attendance → Leave → Records",
      whatItDoes: "Manage employee records, daily attendance, leave approvals, payroll, and role-based access.",
      whyItHelps: "Save administrative time and maintain clear team records in one place.",
      keyCapabilities: [
        "Employee records",
        "Attendance",
        "Leave management",
        "Employee information",
        "Role permissions",
        "Payroll workflows"
      ]
    }
  },
  {
    id: "projects",
    slug: "projects-tasks",
    title: "Projects & Tasks",
    shortTitle: "Projects & Tasks",
    shortSummary: "Task ownership, milestones, Kanban boards, due dates and deliverables.",
    icon: "fas fa-list-check",
    color: "amber",
    bgClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    borderClass: "hover:border-amber-500/50",
    textClass: "text-amber-600 dark:text-amber-400",
    workflow: ["Plan", "Assign", "In Progress", "Complete"],
    fullDetails: {
      title: "Projects & Tasks",
      subtitle: "Keep work organised from planning to completion.",
      flowText: "Plan → Assign → In Progress → Complete",
      whatItDoes: "Assign responsibilities, track milestones and monitor deliverables from one organised workspace.",
      whyItHelps: "Keep your team clear on what needs to be done, who owns it and when it is due.",
      keyCapabilities: [
        "Project planning",
        "Task assignment",
        "Kanban-style work tracking",
        "Milestones",
        "Due dates",
        "Deliverables"
      ]
    }
  },
  {
    id: "finance",
    slug: "finance-tracking",
    title: "Finance Tracking",
    shortTitle: "Finance Tracking",
    shortSummary: "Invoices, payments, receivables, expenses and financial tracking.",
    icon: "fas fa-file-invoice-dollar",
    color: "rose",
    bgClass: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
    borderClass: "hover:border-rose-500/50",
    textClass: "text-rose-600 dark:text-rose-400",
    workflow: ["Billing", "Receivables", "Expenses", "Accounts"],
    fullDetails: {
      title: "Finance Tracking",
      subtitle: "Keep billing, receivables and everyday financial activity organised.",
      flowText: "Billing → Receivables → Expenses → Accounts",
      whatItDoes: "Track sales invoices, payments, receivables, expenses and financial tracking.",
      whyItHelps: "Know what is earned, what is owed, and keep accounts current without manual bookkeeping.",
      keyCapabilities: [
        "Sales invoices",
        "Receivables",
        "Expense records",
        "Payment tracking",
        "Financial records",
        "Business financial visibility"
      ]
    }
  },
  {
    id: "bi",
    slug: "business-intelligence",
    title: "Business Intelligence",
    shortTitle: "Business Intelligence",
    shortSummary: "Business KPIs, sales trends, margins and management reporting.",
    icon: "fas fa-brain",
    color: "cyan",
    bgClass: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    borderClass: "hover:border-cyan-500/50",
    textClass: "text-cyan-600 dark:text-cyan-400",
    workflow: ["Business Data", "KPIs", "Reports", "Decisions"],
    fullDetails: {
      title: "Business Intelligence",
      subtitle: "Turn everyday business activity into useful management insights.",
      flowText: "Business Data → KPIs → Reports → Decisions",
      whatItDoes: "Review business KPIs, sales trends, margins and management reporting.",
      whyItHelps: "Make informed business decisions based on real facts instead of guesswork.",
      keyCapabilities: [
        "KPI summaries",
        "Business reports",
        "Sales trends",
        "Margin indicators",
        "Performance analysis"
      ]
    }
  },
  {
    id: "mobile",
    slug: "mobile-access",
    title: "Mobile Access",
    shortTitle: "Mobile Access",
    shortSummary: "Responsive access to business information and everyday approvals from mobile devices.",
    icon: "fas fa-mobile-screen-button",
    color: "indigo",
    bgClass: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    borderClass: "hover:border-indigo-500/50",
    textClass: "text-indigo-600 dark:text-indigo-400",
    workflow: ["Open", "Review", "Approve", "Manage"],
    fullDetails: {
      title: "Mobile Access",
      subtitle: "Stay connected to your business from any modern browser.",
      flowText: "Open → Review → Approve → Manage",
      whatItDoes: "Access business information, check inquiries, and manage activity securely from desktop, tablet, and mobile web browsers.",
      whyItHelps: "Check important business updates and stay in control on the go without waiting to reach a desk.",
      keyCapabilities: [
        "Responsive web interface",
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
