/**
 * ScaleNova 8 Connected Business Modules Deep-Dive Dataset
 * 
 * Defines concise homepage card summaries and comprehensive interactive data for detail popup modals.
 */
const SCALENOVA_FEATURES = [
  {
    id: "executive",
    slug: "executive-dashboard",
    title: "Executive Dashboard",
    shortTitle: "Executive Dashboard",
    shortSummary: "Revenue overview, sales velocity, outstanding receivables and core business KPIs.",
    icon: "fas fa-chart-pie",
    badge: "Executive Summary",
    flowLabel: "View: Executive Summary",
    color: "brand",
    fullDetails: {
      title: "Executive Dashboard",
      subtitle: "See the business at a glance.",
      whatItDoes: "Monitor key sales, finance, customer and operational indicators from one dashboard.",
      businessValue: "Provides real-time executive visibility into company-wide performance without manual status calls.",
      flowText: "Includes: Revenue • Sales • Receivables • KPIs",
      keyCapabilities: [
        "Revenue & growth tracking",
        "Sales velocity monitoring",
        "Outstanding receivables aging",
        "Key operational KPI cards",
        "Real-time business health indicators"
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
    badge: "Sales & CRM",
    flowLabel: "Flow: Lead → Quote → Customer",
    color: "blue",
    fullDetails: {
      title: "CRM & Sales",
      subtitle: "Keep the sales pipeline organised.",
      whatItDoes: "Capture leads, track opportunities, manage customer information and move deals through the sales process.",
      businessValue: "Eliminates lost leads and gives your sales team one organized workspace for customer communication.",
      flowText: "Flow: Lead → Quote → Customer",
      keyCapabilities: [
        "Inbound lead capture forms",
        "Visual deal pipeline stages",
        "Centralized contact histories",
        "Fast quotation generation",
        "Follow-up task scheduling"
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
    badge: "Operations & Logistics",
    flowLabel: "Flow: Requisition → PO → Invoice",
    color: "emerald",
    fullDetails: {
      title: "Business Operations",
      subtitle: "Keep daily operations connected.",
      whatItDoes: "Manage purchasing, stock activity, invoices and operational records from one workspace.",
      businessValue: "Prevents inventory stockouts, eliminates manual billing errors, and keeps purchases organized.",
      flowText: "Flow: Requisition → PO → Invoice",
      keyCapabilities: [
        "Real-time stock & inventory registers",
        "Vendor purchase orders & requisitions",
        "GST-compliant billing & challans",
        "Supplier payment tracking",
        "Operational activity audit logs"
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
    badge: "Workforce & HR",
    flowLabel: "Flow: Attendance → Leaves → Staff",
    color: "purple",
    fullDetails: {
      title: "People Operations",
      subtitle: "Keep employee information organised.",
      whatItDoes: "Manage staff records, attendance, leave and role-based access.",
      businessValue: "Standardizes team management and removes paper-based leave and attendance tracking.",
      flowText: "Flow: Attendance → Leaves → Staff",
      keyCapabilities: [
        "Digital personnel directories",
        "Daily shift attendance tracking",
        "Leave applications & approvals",
        "Granular role-based permissions",
        "Employee onboarding records"
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
    badge: "Project Execution",
    flowLabel: "Flow: Plan → In Progress → Done",
    color: "amber",
    fullDetails: {
      title: "Projects & Tasks",
      subtitle: "Keep work moving.",
      whatItDoes: "Assign tasks, track milestones and monitor deliverables across teams.",
      businessValue: "Ensures projects deliver on time with clear accountability for every task.",
      flowText: "Flow: Plan → In Progress → Done",
      keyCapabilities: [
        "Visual Kanban task boards",
        "Explicit task assignees & due dates",
        "Milestone tracking for client projects",
        "Task discussion & document attachments",
        "Real-time delivery progress bars"
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
    badge: "Financial Health",
    flowLabel: "Flow: Billing → Receivables → Ledger",
    color: "indigo",
    fullDetails: {
      title: "Finance Tracking",
      subtitle: "Keep financial activity visible.",
      whatItDoes: "Track invoices, receivables, expenses and key cash-flow indicators.",
      businessValue: "Accelerates customer payment recovery and gives business owners clarity on cash availability.",
      flowText: "Flow: Billing → Receivables → Ledger",
      keyCapabilities: [
        "Sales invoice generation & delivery",
        "Customer receivables aging analysis",
        "Operational expense tracking",
        "Cash-flow health indicators",
        "GST tax summaries & ledger views"
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
    badge: "Decision Intelligence",
    flowLabel: "Views: Margin & Velocity",
    color: "cyan",
    fullDetails: {
      title: "Business Intelligence",
      subtitle: "Turn business data into useful views.",
      whatItDoes: "Review KPIs, sales velocity, margin indicators and operational trends.",
      businessValue: "Converts transactional data into actionable insights for strategic planning.",
      flowText: "Views: Margin & Velocity",
      keyCapabilities: [
        "Executive KPI summary widgets",
        "Sales velocity & conversion funnels",
        "Gross margin & profitability indicators",
        "Month-over-month trend analytics",
        "Exportable business intelligence reports"
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
    badge: "Responsive Web",
    flowLabel: "Access: Responsive Web UI",
    color: "teal",
    fullDetails: {
      title: "Mobile Access",
      subtitle: "Stay connected from anywhere.",
      whatItDoes: "Use the responsive web interface to check business information and manage approved activities from a mobile device.",
      businessValue: "Empowers business leaders to stay updated and approve urgent requests from any smartphone.",
      flowText: "Access: Responsive Web UI",
      keyCapabilities: [
        "100% web-responsive interface",
        "Mobile KPI summary dashboards",
        "Quick approval workflows on the go",
        "Instant notification alerts",
        "Zero app installation required"
      ]
    }
  }
];

// Freeze feature dataset
if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_FEATURES);
}
