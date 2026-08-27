/**
 * ScaleNova 6 Core Business Features Deep-Dive Dataset
 * 
 * Defines concise homepage summaries and comprehensive interactive data for drawer views.
 */
const SCALENOVA_FEATURES = [
  {
    id: "crm",
    slug: "centralized-crm-database",
    title: "Centralized CRM & Database",
    shortTitle: "CRM & Database",
    shortSummary: "Manage leads, customers, interactions, and sales workflows in one connected workspace.",
    icon: "fas fa-database",
    badge: "Customer Growth Engine",
    color: "brand",
    summary4Lines: [
      "Unifies customer leads, communication history, and sales pipelines in one workspace.",
      "Eliminates duplicate spreadsheets and ensures every lead gets timely follow-up.",
      "Accelerates deal closing cycles through automated reminders and structured stages.",
      "Enables Indian MSMEs to scale customer acquisition without losing lead context."
    ],
    fullDetails: {
      headline: "Eliminate Duplicate Records and Accelerate Your Sales Pipeline",
      whatItDoes: "Centralizes every lead, prospect, customer interaction, deal stage, and follow-up history into one structured, searchable workspace across your entire sales and support teams.",
      howItWorks: "Inbound enquiries from WhatsApp, website forms, email, and trade portals automatically flow into the CRM. Leads are assigned to sales executives with automated reminder triggers, pipeline stages, and complete activity logs.",
      problemsSolved: [
        "Leads getting lost across personal WhatsApp chats, loose notebooks, and disjointed Excel sheets.",
        "Sales reps failing to follow up on high-value quotation requests in a timely manner.",
        "Zero visibility for business owners into individual team performance or true pipeline value.",
        "Duplicate outreach causing confusion and unprofessional customer impressions."
      ],
      mainBenefits: [
        "100% Single Source of Truth for customer contact info and purchase history.",
        "Visual Kanban Pipeline stages tailored to your business negotiation stages.",
        "Quick quotation creation and instant customer history lookup on desktop and mobile.",
        "Enhanced team accountability with clear lead ownership and follow-up trails."
      ],
      operationalImpact: "Cuts lead-to-first-response time drastically, improves follow-up consistency across reps, and provides management with instantaneous visibility into revenue in progress.",
      automationOpportunities: [
        "Instant WhatsApp & Email acknowledgement when a new lead enquires.",
        "Automated task creation for reps when a quote remains pending for >48 hours.",
        "Lead auto-reassignment if unattended within a designated timeframe.",
        "Triggering welcome onboarding sequence when a deal is marked 'Closed Won'."
      ],
      msmeScalingImpact: "As your enquiry volume grows from 10 to 1,000 leads per month, your sales team can handle 3x more deals without adding administrative overhead or misplacing client requirements.",
      exampleWorkflow: "New website inquiry arrives → Auto-logged into CRM → Assigned to Area Rep → Rep calls and logs notes → System sets follow-up task for 2 days → Quote generated and tracked to closure.",
      whatToExpect: "Clean, intuitive UI requiring zero coding. Most sales teams master lead tracking and deal updates within their first 60-minute onboarding walkthrough."
    }
  },
  {
    id: "erp",
    slug: "erp-financial-tracking",
    title: "ERP & Financial Tracking",
    shortTitle: "ERP & Financials",
    shortSummary: "Connect inventory, purchasing, invoicing, and key business operations.",
    icon: "fas fa-chart-pie",
    badge: "Connected Operations",
    color: "blue",
    summary4Lines: [
      "Connects inventory, purchasing, invoicing, and business transaction workflows.",
      "Replaces multiple disconnected tools with a unified operational ledger.",
      "Provides real-time visibility into stock levels, vendor orders, and receivable aging.",
      "Helps MSMEs maintain healthy working capital and prevent stockouts or overbuying."
    ],
    fullDetails: {
      headline: "Connect Inventory, Purchasing, and Invoicing in One Reliable System",
      whatItDoes: "Unifies inventory management, purchase orders, billing, and core financial transaction tracking so physical goods, supplier orders, and customer billing always stay in sync.",
      howItWorks: "When sales orders are approved, inventory quantities adjust automatically, purchase requisitions trigger when stock dips below reorder thresholds, and GST-compliant invoices generate directly from delivery challans.",
      problemsSolved: [
        "Selling items that are already out of stock due to manual stock register delays.",
        "Paying high monthly subscriptions for 4-5 different single-purpose software tools.",
        "Delays in customer billing leading to late payments and strained working capital.",
        "Human errors when manually re-entering sales data into invoicing or accounting sheets."
      ],
      mainBenefits: [
        "Real-time multi-warehouse and shop-floor inventory visibility.",
        "GST-ready professional invoicing and delivery documentation.",
        "Automated low-stock alerts and smart vendor purchase order generation.",
        "Clear receivables tracking to follow up on outstanding client balances."
      ],
      operationalImpact: "Eliminates duplicate data entry between warehouse and billing teams, reduces stock discrepancies, and accelerates the cash collection cycle.",
      automationOpportunities: [
        "Automatic purchase order drafting when inventory hits safety stock limits.",
        "Scheduled invoice payment reminder emails and WhatsApp notifications to clients.",
        "Real-time margin calculation on quotes based on latest vendor purchase rates.",
        "Automated stock valuation updates upon receiving goods delivery."
      ],
      msmeScalingImpact: "Allows manufacturers, distributors, and traders to manage multiple godowns, thousands of SKUs, and heavy daily billing volumes with complete inventory accuracy and financial control.",
      exampleWorkflow: "Customer orders 50 units → System checks stock across branches → Reserves items → Creates Delivery Challan → Generates GST Invoice → Updates accounts receivable ledger.",
      whatToExpect: "Structured stock categories, simple invoice templates, and clear operational dashboards that your warehouse and accounts staff can operate daily without friction."
    }
  },
  {
    id: "hr",
    slug: "hr-employee-management",
    title: "HR & Employee Management",
    shortTitle: "HR & Workforce",
    shortSummary: "Manage employees, attendance, leave, and team workflows more efficiently.",
    icon: "fas fa-users-gear",
    badge: "Workforce Efficiency",
    color: "emerald",
    summary4Lines: [
      "Manages employee records, attendance records, leave approvals, and team roles.",
      "Eliminates paper registers, biometric sync confusion, and manual leave calculations.",
      "Standardizes internal employee requests and departmental coordination.",
      "Frees business owners and managers from repetitive administrative tasks."
    ],
    fullDetails: {
      headline: "Structured Team Operations, Attendance, and Leave Workflows",
      whatItDoes: "Provides a centralized digital workspace for staff records, daily attendance tracking, leave applications and approvals, department structures, and internal employee requests.",
      howItWorks: "Employees access a simplified portal or mobile interface to mark attendance and request leaves. Supervisors review and approve requests with a single click, automatically updating attendance balances and team calendars.",
      problemsSolved: [
        "Disputes over attendance, overtime, or remaining leave balances at month-end.",
        "Scattered employee documents across physical files, loose emails, and messaging apps.",
        "Unplanned team absences disrupting shop-floor or client project delivery schedules.",
        "Excessive time spent by business leadership manually reconciling payroll inputs."
      ],
      mainBenefits: [
        "Secure digital personnel files containing contact info, IDs, and joining records.",
        "Configurable leave policy rules (Casual, Sick, Earned) with automatic balance deduction.",
        "Department-wise attendance dashboards for quick supervisor review.",
        "Clear organizational hierarchy and role-based operational permissions."
      ],
      operationalImpact: "Reduces month-end HR reconciliation from days to minutes, improves workplace discipline, and provides staff with a transparent, professional experience.",
      automationOpportunities: [
        "Automated leave approval escalation if supervisor does not respond in 24 hours.",
        "Daily attendance summary notification sent to business owners every morning.",
        "Automated onboarding checklist for newly joined team members.",
        "Birthday and work-anniversary team notification triggers."
      ],
      msmeScalingImpact: "Enables business owners to scale team headcount from 10 to 100+ employees across multiple branches without hiring dedicated administrative staff merely to track time and paperwork.",
      exampleWorkflow: "Employee applies for 2 days leave on mobile → Manager receives instant notification → Approves request → System updates team calendar and deducts leave balance automatically.",
      whatToExpect: "Clean, self-explanatory employee interface with zero unnecessary HR complexity, tailored specifically for Indian workplace workflows."
    }
  },
  {
    id: "security",
    slug: "cloud-based-security",
    title: "Cloud-Based Security",
    shortTitle: "Cloud Security",
    shortSummary: "Protect business information with controlled access and managed cloud infrastructure.",
    icon: "fas fa-shield-halved",
    badge: "Data Governance",
    color: "cyan",
    summary4Lines: [
      "Protects business information through role-based access control and encryption.",
      "Ensures each team member only accesses data relevant to their specific role.",
      "Maintains dependable cloud infrastructure with regular backups and updates.",
      "Safeguards company data from device failures, accidental loss, and unauthorized access."
    ],
    fullDetails: {
      headline: "Role-Based Access Controls and Dependable Cloud Infrastructure",
      whatItDoes: "Implements strict role-based access permissions, encrypted data transmission, managed cloud hosting, and continuous operational maintenance for your company's proprietary data.",
      howItWorks: "Administrators assign distinct access levels (e.g., Sales Rep, Warehouse Manager, Accountant, Director). Users only see the exact screens and fields permitted by their profile, protecting confidential financial and client data.",
      problemsSolved: [
        "Data loss caused by local computer hard-drive crashes, viruses, or stolen laptops.",
        "Staff downloading or viewing sensitive customer databases or profit margin data.",
        "Ex-employees retaining unauthorized access to business records after leaving.",
        "Costly physical server maintenance, UPS backups, and local IT hardware headaches."
      ],
      mainBenefits: [
        "Granular role-based permissions (View, Edit, Delete, Export restrictions).",
        "Encrypted SSL/TLS communication protocols for all web and mobile traffic.",
        "Centralized session management with instant one-click user deactivation.",
        "Cloud-native reliability with automated system maintenance and infrastructure protection."
      ],
      operationalImpact: "Protects your intellectual property and customer lists while ensuring authorized team members can work securely from anywhere without VPN bottlenecks.",
      automationOpportunities: [
        "Automated session logout upon extended inactivity.",
        "Security audit logging recording all critical records created, modified, or exported.",
        "Automated routine data backups stored in redundant cloud facilities.",
        "Alert notifications on multiple failed login attempts."
      ],
      msmeScalingImpact: "Gives growing businesses the robust data governance, access controls, and operational continuity typically reserved for large corporate enterprises at a fraction of the cost.",
      exampleWorkflow: "Admin creates new Sales Rep profile → System assigns restricted CRM-only view → Export button hidden → Rep leaves company → Admin deactivates account with 1 click → Access revoked instantly.",
      whatToExpect: "Peace of mind knowing your customer lists, sales records, and financial numbers are safeguarded in a dedicated, managed cloud environment."
    }
  },
  {
    id: "projects",
    slug: "project-planning-tasks",
    title: "Project Planning & Tasks",
    shortTitle: "Projects & Tasks",
    shortSummary: "Plan work, assign tasks, track milestones, and keep teams aligned.",
    icon: "fas fa-list-check",
    badge: "Execution Clarity",
    color: "purple",
    summary4Lines: [
      "Organizes client projects, team task assignments, timelines, and milestones.",
      "Provides complete visibility into task progress and pending deliverables.",
      "Reduces internal communication gaps and missed client commitments.",
      "Helps businesses deliver services and production orders consistently on schedule."
    ],
    fullDetails: {
      headline: "Plan Milestones, Assign Responsibilities, and Deliver on Schedule",
      whatItDoes: "Enables teams to coordinate complex client deliverables, manufacturing orders, field installations, and internal initiatives with clear ownership, due dates, and milestone tracking.",
      howItWorks: "Projects are divided into visual milestones and actionable tasks. Team members update task statuses on Kanban boards or task lists, uploading deliverable files and keeping all discussions linked to the task.",
      problemsSolved: [
        "Client commitments slipping because tasks were discussed in meetings but never logged.",
        "Confusion over who is currently responsible for the next stage of a project.",
        "Project status updates requiring lengthy, unproductive daily coordination meetings.",
        "Disjointed file attachments scattered across multiple chat threads and email chains."
      ],
      mainBenefits: [
        "Visual Kanban and list views for clear task progression (To Do, In Progress, Completed).",
        "Milestone tracking tied directly to customer orders and billing phases.",
        "Centralized task comment threads and document attachments.",
        "Priority flags and clear due-date calendars across all active projects."
      ],
      operationalImpact: "Drives timely project completion, reduces internal status meeting overhead by over 50%, and improves client satisfaction through dependable delivery.",
      automationOpportunities: [
        "Automated notifications to assignees when a new task is created or blocked.",
        "Due-date reminder alerts 24 hours prior to deadline.",
        "Automatic project status progression when all dependent subtasks are completed.",
        "Milestone completion notifications sent to relevant managers or accounts team."
      ],
      msmeScalingImpact: "Allows service providers, contractors, design firms, and custom manufacturers to handle multiple simultaneous client projects with predictable, high-quality execution.",
      exampleWorkflow: "New project created → Milestones defined → Tasks assigned to team with deadlines → Team updates progress daily → Manager monitors overall project health from dashboard.",
      whatToExpect: "A clean, modern task board that team members actually enjoy using, free of bloated unnecessary enterprise project management bloat."
    }
  },
  {
    id: "bi",
    slug: "executive-bi-dashboards",
    title: "Executive BI Dashboards",
    shortTitle: "Executive BI",
    shortSummary: "Turn business data into useful dashboards and insights for better decisions.",
    icon: "fas fa-chart-line",
    badge: "Decision Intelligence",
    color: "amber",
    summary4Lines: [
      "Transforms daily operational data into visual, actionable business intelligence.",
      "Enables business owners and leaders to monitor vital sales and operational KPIs.",
      "Identifies pipeline bottlenecks, inventory turnover trends, and top performers.",
      "Supports informed, data-driven decisions for sustainable business growth."
    ],
    fullDetails: {
      headline: "Actionable Operational Visibility to Make More Informed Decisions",
      whatItDoes: "Aggregates real-time metrics across sales, inventory, projects, and workforce activity into visual executive dashboards, giving leadership clarity on business health at a glance.",
      howItWorks: "As transactions and tasks occur in the system, BI widgets calculate key performance indicators automatically, displaying interactive charts, trend comparisons, and operational summaries.",
      problemsSolved: [
        "Business owners making strategic decisions based on guesswork rather than facts.",
        "Waiting until the end of the month or quarter to find out if revenue targets were met.",
        "Inability to spot sluggish sales regions, slow-moving inventory, or team bottlenecks early.",
        "Spending hours manually consolidating numbers into summary charts before reviews."
      ],
      mainBenefits: [
        "Real-time executive summary dashboard accessible anytime on laptop or mobile.",
        "Visual sales funnel, conversion rates, and average deal closing velocity metrics.",
        "Operational breakdown of pending tasks, inventory movement, and team output.",
        "Comparative period filters (Today, This Week, This Month, This Quarter, Year-to-Date)."
      ],
      operationalImpact: "Helps leadership spot emerging operational issues before they become expensive problems and identify highest-margin growth opportunities quickly.",
      automationOpportunities: [
        "Weekly automated KPI summary snapshot delivered via email to business founders.",
        "Anomaly alerts if sales inquiries drop below baseline thresholds.",
        "Automated top-performing product and sales executive monthly highlight reports."
      ],
      msmeScalingImpact: "Gives MSME founders the operational command and high-level clarity necessary to steer multi-crore business expansions with confidence.",
      exampleWorkflow: "Owner opens Executive Dashboard on mobile → Reviews today's lead inflows and closed deals → Inspects receivables aging → Identifies top sales rep → Takes action immediately.",
      whatToExpect: "Clear, beautifully formatted graphical charts designed for busy executives who want fast answers rather than overwhelming spreadsheets."
    }
  }
];

// Freeze feature dataset
if (typeof Object.freeze === 'function') {
  Object.freeze(SCALENOVA_FEATURES);
}
