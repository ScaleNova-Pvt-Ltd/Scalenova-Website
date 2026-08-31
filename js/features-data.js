/**
 * ScaleNova 6 Core Business Features Deep-Dive Dataset
 * 
 * Defines concise homepage card summaries and comprehensive interactive data for centered modal views.
 */
const SCALENOVA_FEATURES = [
  {
    id: "crm",
    slug: "crm-and-sales",
    title: "CRM & Sales",
    shortTitle: "CRM & Sales",
    shortSummary: "Manage leads, customers and sales pipelines from one connected workspace.",
    icon: "fas fa-database",
    badge: "Sales & Customer Growth",
    color: "brand",
    fullDetails: {
      title: "CRM & Sales",
      whatItDoes: "Manage leads, customers and sales opportunities from one connected workspace.",
      businessValue: "Keep your sales process organized and give your team one source of customer information.",
      keyCapabilities: [
        "Lead capture & management",
        "Centralized customer records",
        "Visual sales pipeline tracking",
        "Follow-up task reminders",
        "Complete sales visibility"
      ]
    }
  },
  {
    id: "erp",
    slug: "business-operations",
    title: "Business Operations",
    shortTitle: "Business Operations",
    shortSummary: "Run purchasing, inventory, invoicing and daily operations from one system.",
    icon: "fas fa-chart-pie",
    badge: "Operations & Logistics",
    color: "blue",
    fullDetails: {
      title: "Business Operations",
      whatItDoes: "Connect purchasing, inventory, GST invoicing and daily business transactions.",
      businessValue: "Prevent stockouts, reduce manual billing errors and track receivables in real time.",
      keyCapabilities: [
        "Real-time stock & inventory management",
        "Purchase orders & vendor requisitions",
        "GST-compliant invoicing & challans",
        "Customer accounts receivable tracking",
        "Multi-location warehouse coordination"
      ]
    }
  },
  {
    id: "hr",
    slug: "people-operations",
    title: "People Operations",
    shortTitle: "People Operations",
    shortSummary: "Manage employees, attendance, leave and team processes in one place.",
    icon: "fas fa-users-gear",
    badge: "Workforce Management",
    color: "emerald",
    fullDetails: {
      title: "People Operations",
      whatItDoes: "Manage employee records, daily attendance tracking and leave approvals.",
      businessValue: "Standardize HR workflows and eliminate manual payroll & attendance chaos.",
      keyCapabilities: [
        "Digital personnel records",
        "Daily attendance & shift tracking",
        "Leave requests & approvals",
        "Role-based team permissions",
        "Multi-branch team coordination"
      ]
    }
  },
  {
    id: "projects",
    slug: "projects-and-tasks",
    title: "Projects & Tasks",
    shortTitle: "Projects & Tasks",
    shortSummary: "Plan work, assign ownership and track delivery across your teams.",
    icon: "fas fa-list-check",
    badge: "Execution Clarity",
    color: "purple",
    fullDetails: {
      title: "Projects & Tasks",
      whatItDoes: "Organize project deliverables, assign task ownership and track milestones.",
      businessValue: "Keep internal teams aligned and ensure client projects deliver on schedule.",
      keyCapabilities: [
        "Visual Kanban task boards",
        "Clear task assignment & deadlines",
        "Milestone tracking for client projects",
        "Centralized task discussion threads",
        "Real-time delivery progress tracking"
      ]
    }
  },
  {
    id: "bi",
    slug: "business-intelligence",
    title: "Business Intelligence",
    shortTitle: "Business Intelligence",
    shortSummary: "Turn business activity into clear KPIs and management insights.",
    icon: "fas fa-chart-line",
    badge: "Decision Intelligence",
    color: "amber",
    fullDetails: {
      title: "Business Intelligence",
      whatItDoes: "Convert daily business transactions into real-time visual KPI dashboards.",
      businessValue: "Monitor sales velocity, receivables and overall business health from anywhere.",
      keyCapabilities: [
        "Executive summary KPI dashboards",
        "Visual sales funnel & conversion metrics",
        "Receivables aging & financial snapshots",
        "Operational bottleneck tracking",
        "Mobile management visibility"
      ]
    }
  },
  {
    id: "security",
    slug: "security-and-control",
    title: "Security & Control",
    shortTitle: "Security & Control",
    shortSummary: "Protect business data with roles, permissions, backups and controlled access.",
    icon: "fas fa-shield-halved",
    badge: "Data Governance",
    color: "cyan",
    fullDetails: {
      title: "Security & Control",
      whatItDoes: "Safeguard proprietary business data with role-based permissions and cloud backups.",
      businessValue: "Maintain data privacy, prevent unauthorized exports and ensure business continuity.",
      keyCapabilities: [
        "Granular role-based permissions",
        "Encrypted SSL data transmission",
        "Centralized user access control",
        "Automated cloud system backups",
        "Security audit logs & session controls"
      ]
    }
  }
];

// Freeze feature dataset
if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_FEATURES);
}
