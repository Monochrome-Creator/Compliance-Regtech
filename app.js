const clients = [
  {
    id: "tan-heritage",
    name: "Tan Heritage Trust",
    type: "Discretionary trust",
    office: "SFO",
    jurisdiction: "Singapore",
    risk: "critical",
    likelihood: "likely",
    score: 92,
    category: "AML / CFT",
    issue: "Source-of-wealth refresh overdue for two beneficial owners",
    owner: "Sarah Lim",
    ownerInitials: "SL",
    nextReview: "Overdue 12d",
    days: -12,
    aum: "S$76.4m",
    structure: "13U enhanced-tier fund",
    updated: "28 May 2026",
    sanctions: "Clear",
    pep: "Enhanced review",
    documents: "11 / 13 current",
  },
  {
    id: "meridian-grove",
    name: "Meridian Grove Holdings",
    type: "Family holding company",
    office: "MFO",
    jurisdiction: "Singapore · BVI",
    risk: "high",
    likelihood: "likely",
    score: 84,
    category: "Regulatory",
    issue: "Quarterly CMS licence compliance attestation pending",
    owner: "Marcus Goh",
    ownerInitials: "MG",
    nextReview: "Due in 3d",
    days: 3,
    aum: "S$112.8m",
    structure: "MFO managed account",
    updated: "30 May 2026",
    sanctions: "Clear",
    pep: "Clear",
    documents: "14 / 15 current",
  },
  {
    id: "aurelia-family",
    name: "Aurelia Family Holdings",
    type: "Private investment company",
    office: "SFO",
    jurisdiction: "Singapore",
    risk: "high",
    likelihood: "possible",
    score: 78,
    category: "Tax incentive",
    issue: "13O local deployment ratio requires monitoring",
    owner: "Sarah Lim",
    ownerInitials: "SL",
    nextReview: "Due in 8d",
    days: 8,
    aum: "S$34.6m",
    structure: "13O onshore fund",
    updated: "27 May 2026",
    sanctions: "Clear",
    pep: "Clear",
    documents: "9 / 9 current",
  },
  {
    id: "ong-legacy",
    name: "Ong Legacy Trust",
    type: "Family trust",
    office: "MFO",
    jurisdiction: "Singapore · Jersey",
    risk: "medium",
    likelihood: "possible",
    score: 63,
    category: "Governance",
    issue: "Annual trust governance minutes awaiting approval",
    owner: "Priya Nair",
    ownerInitials: "PN",
    nextReview: "Due in 14d",
    days: 14,
    aum: "S$58.2m",
    structure: "Foreign trust structure",
    updated: "26 May 2026",
    sanctions: "Clear",
    pep: "Clear",
    documents: "12 / 13 current",
  },
  {
    id: "straits-horizon",
    name: "Straits Horizon VCC",
    type: "Variable capital company",
    office: "MFO",
    jurisdiction: "Singapore",
    risk: "medium",
    likelihood: "unlikely",
    score: 48,
    category: "Corporate",
    issue: "VCC annual return preparation in progress",
    owner: "Jia Wei",
    ownerInitials: "JW",
    nextReview: "Due in 21d",
    days: 21,
    aum: "S$145.0m",
    structure: "Umbrella VCC · 3 sub-funds",
    updated: "31 May 2026",
    sanctions: "Clear",
    pep: "Clear",
    documents: "18 / 18 current",
  },
  {
    id: "lim-family",
    name: "Lim Family Ventures",
    type: "Investment holding company",
    office: "SFO",
    jurisdiction: "Singapore",
    risk: "low",
    likelihood: "unlikely",
    score: 31,
    category: "Operational",
    issue: "Cyber recovery tabletop exercise scheduled",
    owner: "Marcus Goh",
    ownerInitials: "MG",
    nextReview: "Due in 32d",
    days: 32,
    aum: "S$42.8m",
    structure: "Family investment vehicle",
    updated: "29 May 2026",
    sanctions: "Clear",
    pep: "Clear",
    documents: "8 / 8 current",
  },
  {
    id: "cedar-coast",
    name: "Cedar Coast Foundation",
    type: "Philanthropic vehicle",
    office: "SFO",
    jurisdiction: "Singapore",
    risk: "low",
    likelihood: "rare",
    score: 22,
    category: "Philanthropy",
    issue: "PTIS donation ledger reconciled",
    owner: "Priya Nair",
    ownerInitials: "PN",
    nextReview: "Due in 45d",
    days: 45,
    aum: "S$18.7m",
    structure: "Grant-making foundation",
    updated: "01 Jun 2026",
    sanctions: "Clear",
    pep: "Clear",
    documents: "7 / 7 current",
  },
];

const vccStructures = [
  {
    id: "straits-horizon-vcc",
    name: "Straits Horizon VCC",
    client: "Meridian Grove Holdings",
    office: "MFO",
    type: "Umbrella VCC",
    registration: "VCC2024-0019",
    manager: "Meridian Grove Capital Pte Ltd",
    custodian: "DBS Trustee Ltd",
    fye: "31 Dec 2025",
    agmDue: "30 Jun 2026",
    arDue: "31 Jul 2026",
    status: "at-risk",
    issue: "Sub-fund financial statements and board pack still need checker review",
    subFunds: [
      {
        id: "straits-growth",
        name: "Straits Horizon Growth Sub-Fund",
        strategy: "Asia growth equities",
        assets: "S$52.4m",
        navDate: "31 May 2026",
        filing: "Draft FS uploaded",
        status: "on-track",
      },
      {
        id: "straits-income",
        name: "Straits Horizon Income Sub-Fund",
        strategy: "Investment-grade credit",
        assets: "S$61.8m",
        navDate: "31 May 2026",
        filing: "Manager attestation pending",
        status: "at-risk",
      },
      {
        id: "straits-opportunities",
        name: "Straits Horizon Opportunities Sub-Fund",
        strategy: "Private markets co-investments",
        assets: "S$30.8m",
        navDate: "31 May 2026",
        filing: "Valuation memo required",
        status: "action",
      },
    ],
  },
];

const riskStatements = [
  {
    id: "rs1",
    area: "CDD / AML-CFT",
    risk: "Client accepted before SOW and SOF are independently corroborated.",
    inherent: "Critical",
    residual: "Action due",
    owner: "Marcus Goh",
    evidence: "SOW narrative, bank trail, sale agreements, tax records",
    next: "Tan Heritage evidence pack due now",
    status: "action",
  },
  {
    id: "rs2",
    area: "MAS TRM",
    risk: "Critical SaaS and outsourced systems lack tested recovery evidence.",
    inherent: "High",
    residual: "At risk",
    owner: "Sarah Lim",
    evidence: "System inventory, RTO/RPO test, vendor assurance",
    next: "Run recovery tabletop before board pack",
    status: "at-risk",
  },
  {
    id: "rs3",
    area: "Cyber Hygiene",
    risk: "Privileged access and patch evidence not reviewed on time.",
    inherent: "High",
    residual: "At risk",
    owner: "Jia Wei",
    evidence: "Admin account review, patch register, MFA report",
    next: "Checker review by 12 Jun",
    status: "at-risk",
  },
  {
    id: "rs4",
    area: "VCC governance",
    risk: "Umbrella VCC filings do not reflect sub-fund records and accounts.",
    inherent: "High",
    residual: "Action due",
    owner: "Jia Wei",
    evidence: "Sub-fund FS, directors' statement, VCC annual return",
    next: "Opportunities sub-fund valuation memo",
    status: "action",
  },
  {
    id: "rs5",
    area: "EWRA",
    risk: "Portfolio climate transition data is incomplete for discretionary mandates.",
    inherent: "Medium",
    residual: "At risk",
    owner: "Priya Nair",
    evidence: "Issuer data coverage, sector heatmap, stewardship notes",
    next: "Fill VCC income fund data gap",
    status: "at-risk",
  },
];

const trmControls = [
  ["Technology governance", "Board-approved risk appetite, accountable owner, annual review", "on-track", "Director", "Evidence current"],
  ["Information asset inventory", "Critical systems, outsourced systems, owners, data classification", "at-risk", "Sarah Lim", "SaaS owner mapping due"],
  ["Third-party technology risk", "Due diligence, service levels, concentration risk, exit plan", "action", "Marcus Goh", "Vendor assurance pack missing"],
  ["Secure change and SDLC", "Security requirements, testing, approval, production release evidence", "on-track", "Jia Wei", "Last release signed off"],
  ["Incident and recovery", "Critical-system RTO/RPO, recovery testing, incident escalation", "at-risk", "Sarah Lim", "Tabletop scheduled"],
];

const cyberHygieneControls = [
  ["Administrative accounts", "Inventory and secure privileged accounts", "action", "Privileged access review overdue"],
  ["Security patches", "Risk-ranked patching and mitigation record", "at-risk", "macOS and browser patch evidence due"],
  ["Security standards", "Written baseline standards for systems", "on-track", "Endpoint standard approved"],
  ["Network perimeter defence", "Restrict unauthorised network traffic", "on-track", "Firewall rules reviewed"],
  ["Malware protection", "Endpoint protection and alert handling", "on-track", "No unresolved alerts"],
  ["Multi-factor authentication", "MFA for admin and internet access to customer information", "at-risk", "Two adviser accounts pending"],
];

const ewraAssessments = [
  ["Aurelia Family Holdings", "13O onshore portfolio", "Listed equities and private credit", "Medium", "Low", "78%", "on-track"],
  ["Straits Horizon VCC", "Umbrella VCC", "Credit, equities, private markets", "Medium", "Medium", "64%", "at-risk"],
  ["Tan Heritage Trust", "13U enhanced-tier fund", "Concentrated operating-company exposure", "High", "Medium", "58%", "action"],
];

const clientOnboardingDefaults = [
  {
    id: "ng-family",
    name: "Ng Family Investment Office",
    entity: "Singapore investment holding company",
    stage: "CDD evidence",
    risk: "high",
    progress: 56,
    owner: "Marcus Goh",
    sow: "In review",
    sof: "Requested",
    next: "Corroborate business-sale proceeds and first funding transfer",
  },
  {
    id: "raffles-vcc",
    name: "Raffles Quay Master VCC",
    entity: "Proposed umbrella VCC · 2 sub-funds",
    stage: "Structure review",
    risk: "medium",
    progress: 42,
    owner: "Jia Wei",
    sow: "Accepted",
    sof: "In review",
    next: "Confirm fund manager appointment and sub-fund register setup",
  },
  {
    id: "chen-trust",
    name: "Chen Legacy Trust",
    entity: "Foreign trust with Singapore investment account",
    stage: "Risk acceptance",
    risk: "critical",
    progress: 68,
    owner: "Sarah Lim",
    sow: "Escalated",
    sof: "In review",
    next: "Director sign-off required before account activation",
  },
];

const employeeOnboardingDefaults = [
  {
    id: "elena-wee",
    name: "Elena Wee",
    role: "Investment analyst",
    start: "17 Jun 2026",
    progress: 63,
    owner: "Sarah Lim",
    checklist: {
      fitProper: true,
      conflicts: true,
      pdpa: true,
      cyber: false,
      trm: false,
      access: false,
    },
  },
  {
    id: "arun-menon",
    name: "Arun Menon",
    role: "Operations associate",
    start: "24 Jun 2026",
    progress: 45,
    owner: "Marcus Goh",
    checklist: {
      fitProper: true,
      conflicts: false,
      pdpa: true,
      cyber: false,
      trm: false,
      access: false,
    },
  },
];

const obligations = [
  {
    id: "o1",
    name: "13U local capital deployment",
    description: "Lower of S$10m or 10% AUM into qualifying investments",
    status: "at-risk",
    progress: 72,
    due: "30 Jun",
    owner: "Sarah Lim",
    group: "Tax incentive",
  },
  {
    id: "o2",
    name: "Tan Heritage KYC refresh",
    description: "Complete source-of-wealth evidence for two UBOs",
    status: "action",
    progress: 46,
    due: "Overdue",
    owner: "Marcus Goh",
    group: "AML / CFT",
  },
  {
    id: "o3",
    name: "CMS licence quarterly attestation",
    description: "MFO representative and mandate review",
    status: "action",
    progress: 63,
    due: "05 Jun",
    owner: "Marcus Goh",
    group: "Regulatory",
  },
  {
    id: "o4",
    name: "13O local business spending",
    description: "Track tiered Singapore local business spend",
    status: "on-track",
    progress: 88,
    due: "30 Jun",
    owner: "Sarah Lim",
    group: "Tax incentive",
  },
  {
    id: "o5",
    name: "VCC annual return",
    description: "Review register, directors and sub-fund records",
    status: "on-track",
    progress: 81,
    due: "23 Jun",
    owner: "Jia Wei",
    group: "Corporate",
  },
  {
    id: "o6",
    name: "CRS / FATCA classification review",
    description: "Confirm entity classifications and controlling persons",
    status: "on-track",
    progress: 93,
    due: "18 Jun",
    owner: "Priya Nair",
    group: "Tax reporting",
  },
  {
    id: "o7",
    name: "Trust governance minutes",
    description: "Approve annual trustee and protector resolutions",
    status: "at-risk",
    progress: 66,
    due: "16 Jun",
    owner: "Priya Nair",
    group: "Governance",
  },
  {
    id: "o8",
    name: "Sanctions screening review",
    description: "Validate monthly rescreening exceptions",
    status: "on-track",
    progress: 100,
    due: "30 Jun",
    owner: "Marcus Goh",
    group: "AML / CFT",
  },
];

const deadlines = [
  ["05", "Jun", "CMS licence quarterly attestation", "Meridian Grove Holdings", "action"],
  ["16", "Jun", "Trust governance minutes", "Ong Legacy Trust", "warn"],
  ["18", "Jun", "CRS / FATCA classification review", "All structures", ""],
  ["23", "Jun", "VCC annual return preparation", "Straits Horizon VCC", ""],
  ["30", "Jun", "13O / 13U spend and deployment snapshot", "Tax incentive vehicles", "warn"],
];

const documents = [
  ["fileText", "Family office compliance policy", "Policy · v4.2 · Updated 22 May 2026"],
  ["fileText", "AML / CFT procedure manual", "Procedure · v3.8 · Updated 18 May 2026"],
  ["shield", "CMS licence controls matrix", "Matrix · MFO scope · Updated 28 May 2026"],
  ["landmark", "13O / 13U evidence pack", "Workbook · FY2026 · Updated 31 May 2026"],
  ["users", "Beneficial owner register", "Register · 42 persons · Updated 01 Jun 2026"],
  ["briefcase", "VCC governance pack", "Minutes · 3 sub-funds · Updated 27 May 2026"],
  ["shield", "SOW and SOF evidence index", "CDD · 3 onboarding cases · Updated 07 Jun 2026"],
  ["activity", "MAS TRM control evidence", "Control pack · Recovery and vendor evidence"],
  ["lock", "Cyber Hygiene evidence pack", "Admin accounts · MFA · Patching · Updated 07 Jun 2026"],
  ["trendingUp", "EWRA portfolio assessment", "Environmental risk · Data coverage · Updated 07 Jun 2026"],
  ["fileText", "CRS / FATCA classifications", "Register · 7 entities · Updated 25 May 2026"],
  ["heartHandshake", "PTIS donation ledger", "Ledger · FY2026 · Updated 20 May 2026"],
  ["lock", "Cyber incident response plan", "Plan · v2.1 · Updated 15 May 2026"],
];

const audits = [
  ["checkCircle", "Sarah Lim", "completed the monthly sanctions rescreening review", "Today, 09:42"],
  ["fileText", "Jia Wei", "uploaded VCC annual return working papers", "Yesterday, 16:18"],
  ["alertCircle", "System", "raised an overdue KYC refresh for Tan Heritage Trust", "Yesterday, 08:00"],
  ["edit", "Marcus Goh", "updated Meridian Grove Holdings licence attestation", "30 May, 14:07"],
  ["users", "Priya Nair", "assigned trust governance minutes to external counsel", "29 May, 11:23"],
  ["landmark", "Sarah Lim", "reconciled 13O local business spending evidence", "28 May, 17:51"],
  ["lock", "System", "completed nightly audit log integrity check", "28 May, 02:00"],
];

const calendarEvents = {
  5: [["CMS licence attestation", "action"]],
  9: [["KYC evidence review", "action"]],
  16: [["Trust governance minutes", "warn"]],
  18: [["CRS / FATCA review", ""]],
  23: [["VCC return prep", ""]],
  25: [["Investment committee", ""]],
  30: [["13O / 13U snapshot", "warn"], ["Sanctions review", ""]],
};

const rulePacks = [
  {
    id: "sfo",
    name: "SFO readiness",
    scope: "Single family offices",
    controls: 9,
    source: "EDB SFO setup guide",
    url: "https://invest.edb.gov.sg/gov-support/sfo-setup-guide",
    effective: "Reviewed 02 Jun 2026",
  },
  {
    id: "mfo",
    name: "MFO regulated business",
    scope: "CMS-licensed multi-family offices",
    controls: 12,
    source: "MAS financial institutions directory",
    url: "https://eservices.mas.gov.sg/fid",
    effective: "Reviewed 02 Jun 2026",
  },
  {
    id: "13o",
    name: "Section 13O",
    scope: "Onshore fund tax incentive",
    controls: 7,
    source: "EDB SFO setup guide",
    url: "https://invest.edb.gov.sg/gov-support/sfo-setup-guide",
    effective: "Reviewed 02 Jun 2026",
  },
  {
    id: "13u",
    name: "Section 13U",
    scope: "Enhanced-tier fund tax incentive",
    controls: 7,
    source: "EDB SFO setup guide",
    url: "https://invest.edb.gov.sg/gov-support/sfo-setup-guide",
    effective: "Reviewed 02 Jun 2026",
  },
  {
    id: "vcc",
    name: "VCC governance",
    scope: "VCC and umbrella sub-funds",
    controls: 11,
    source: "ACRA VCC overview",
    url: "https://www.acra.gov.sg/manage/variable-capital-companies/overview/",
    effective: "Reviewed 02 Jun 2026",
  },
  {
    id: "trm",
    name: "MAS TRM",
    scope: "Technology risk governance, resilience, third-party, and incident controls",
    controls: 14,
    source: "MAS TRM Guidelines",
    url: "https://www.mas.gov.sg/-/media/MAS/Regulations-and-Financial-Stability/Regulatory-and-Supervisory-Framework/Risk-Management/TRM-Guidelines-18-January-2021.pdf",
    effective: "Reviewed 07 Jun 2026",
  },
  {
    id: "cyber",
    name: "Cyber Hygiene",
    scope: "Administrative accounts, patching, baseline standards, malware, perimeter, MFA",
    controls: 6,
    source: "MAS Cyber Hygiene",
    url: "https://www.mas.gov.sg/-/media/mas/notices/pdf/psn06-notice-on-cyber-hygiene.pdf",
    effective: "Reviewed 07 Jun 2026",
  },
  {
    id: "ewra",
    name: "EWRA / environmental risk",
    scope: "Environmental risk assessment for discretionary portfolios and mandates",
    controls: 9,
    source: "MAS ERM asset managers",
    url: "https://www.mas.gov.sg/regulation/guidelines/guidelines-on-environmental-risk-management-for-asset-managers",
    effective: "Reviewed 07 Jun 2026",
  },
  {
    id: "cdd",
    name: "CDD and SOW/SOF",
    scope: "Client due diligence, source of wealth, source of funds, screening, risk acceptance",
    controls: 10,
    source: "MAS AML/CFT expectations",
    url: "https://www.mas.gov.sg/regulation/anti-money-laundering",
    effective: "Adviser review due",
  },
  {
    id: "trust",
    name: "Trust oversight",
    scope: "Trustee, protector, and beneficiary reviews",
    controls: 8,
    source: "Internal policy",
    url: "#",
    effective: "Adviser review due",
  },
  {
    id: "corporate",
    name: "Corporate registers",
    scope: "Singapore companies and foreign companies",
    controls: 10,
    source: "ACRA company registers",
    url: "https://www.acra.gov.sg/manage/companies/legal-requirements-common-offences/maintaining-local-companys-information-registers/company-registers/",
    effective: "Reviewed 02 Jun 2026",
  },
];

const people = [
  ["p1", "Daniel Tan", "Settlor · Tan Heritage Trust", "PEP-linked family member", "Enhanced", "12 Jun 2026"],
  ["p2", "Michelle Tan", "Beneficial owner · Tan Heritage Trust", "Ownership evidence", "Refresh due", "04 Jun 2026"],
  ["p3", "Adrian Ong", "Protector · Ong Legacy Trust", "Trust governance", "Clear", "18 Sep 2026"],
  ["p4", "Cheryl Lim", "Director · Lim Family Ventures", "Corporate", "Clear", "28 Nov 2026"],
  ["p5", "James Koh", "Director · Straits Horizon VCC", "VCC", "Clear", "14 Jan 2027"],
];

const statutoryDeadlines = [
  ["VCC AGM", "Within 6 months after FYE", "Straits Horizon VCC", "30 Jun 2026", "warn"],
  ["VCC annual return", "Within 7 months after FYE", "Straits Horizon VCC", "31 Jul 2026", ""],
  ["VCC officer / manager update", "Within 14 days after change", "All VCC structures", "Event-driven", ""],
  ["VCC charge registration", "30 days in Singapore · 37 days outside Singapore", "All VCC structures", "Event-driven", ""],
  ["RORC private-register update", "Within 7 calendar days after confirmation", "Companies and LLPs", "Event-driven", ""],
  ["Central RORC / ROND / RONS update", "Within 2 business days after private-register update", "Applicable companies", "Event-driven", "action"],
  ["Controller verification notice", "At least annually", "Applicable companies", "31 Dec 2026", ""],
];

const retentionClasses = [
  ["KYC and source-of-wealth evidence", "7 years after relationship ends", "Restricted"],
  ["Statutory registers", "Life of entity + adviser review", "Restricted"],
  ["Board and committee minutes", "Permanent", "Confidential"],
  ["Operational task attachments", "3 years after task closure", "Internal"],
];

const complianceWorkItems = [
  ["sfa-licence", "MAS / SFA", "CMS licence scope", "Confirm fund management, dealing, advisory, and exempt FA scope against actual business.", "Quarterly", "action", "obligations"],
  ["sfa-fid", "MAS / SFA", "MAS FID status", "Check licence status, activity permissions, key personnel, and lodged cessations.", "Monthly", "at-risk", "obligations"],
  ["sfa-reps", "MAS / SFA", "Representative notifications", "Maintain appointed representatives, CMFAS status, fit-and-proper certification, and cessation notices.", "Event-driven", "action", "employee-onboarding"],
  ["sfa-key-person", "MAS / SFA", "Key appointment changes", "Track CEO, director, compliance, portfolio manager, and substantial shareholder changes.", "Event-driven", "at-risk", "obligations"],
  ["sfa-financial", "MAS / SFA", "Base capital / financial resources", "Monitor base capital, financial resources, risk requirement, and solvency buffers.", "Monthly", "at-risk", "obligations"],
  ["sfa-returns", "MAS / SFA", "MAS returns and notifications", "Track MASNET submissions, annual declarations, incident notices, and ad-hoc regulator queries.", "Monthly", "action", "obligations"],
  ["sfa-conduct", "MAS / SFA", "Business conduct controls", "Maintain fair dealing, disclosure, mandate, fee, and client communication controls.", "Quarterly", "on-track", "obligations"],
  ["sfa-conflicts", "MAS / SFA", "Conflicts of interest", "Track related-party transactions, allocation conflicts, outside interests, gifts, and inducements.", "Monthly", "at-risk", "employee-onboarding"],
  ["sfa-pa", "MAS / SFA", "Personal account dealing", "Record employee dealing declarations, restricted lists, pre-clearance, and exceptions.", "Monthly", "at-risk", "employee-onboarding"],
  ["sfa-market", "MAS / SFA", "Market conduct surveillance", "Watch insider dealing, market manipulation, restricted securities, and wall-crossing records.", "Weekly", "action", "obligations"],
  ["sfa-order", "MAS / SFA", "Order handling and best execution", "Monitor dealing instructions, broker selection, aggregation, allocation, and execution review.", "Monthly", "at-risk", "obligations"],
  ["sfa-trade", "MAS / SFA", "Trade errors and mandate breaches", "Log investment restriction breaches, pricing/NAV errors, remediation, and client notification decisions.", "Event-driven", "action", "obligations"],
  ["sfa-custody", "MAS / SFA", "Custody and client assets", "Maintain custodian due diligence, asset segregation, confirmations, and reconciliation evidence.", "Monthly", "on-track", "documents"],
  ["sfa-outsourcing", "MAS / SFA", "Outsourcing and service providers", "Track due diligence, agreements, service levels, concentration risk, and exit plans.", "Quarterly", "at-risk", "trm-cyber"],
  ["sfa-complaints", "MAS / SFA", "Complaints and incidents", "Register complaints, regulator-impacting incidents, root cause, remediation, and closure evidence.", "Event-driven", "at-risk", "obligations"],
  ["aml-ewra", "CDD / KYC", "Enterprise-wide ML/TF/PF risk assessment", "Assess client, country, product, transaction, channel, and delivery risk.", "Annual", "action", "cdd"],
  ["aml-policy", "CDD / KYC", "AML/CFT policy and controls", "Maintain board-approved policy, procedures, controls, screening rules, and escalation routes.", "Annual", "at-risk", "cdd"],
  ["aml-onboarding", "CDD / KYC", "Client onboarding CDD", "Identify and verify clients, authorised persons, controllers, settlors, protectors, and beneficial owners.", "Per client", "action", "client-onboarding"],
  ["aml-sow", "CDD / KYC", "Source of wealth", "Corroborate how wealth was accumulated using business, sale, inheritance, salary, investment, or tax evidence.", "Per client", "action", "cdd"],
  ["aml-sof", "CDD / KYC", "Source of funds", "Trace exact funds entering the relationship through bank trail, subscription source, and transaction logic.", "Per funding", "action", "cdd"],
  ["aml-screening", "CDD / KYC", "Sanctions, PEP, adverse media", "Run onboarding and ongoing screening for clients, UBOs, connected parties, and counterparties.", "Ongoing", "at-risk", "cdd"],
  ["aml-ongoing", "CDD / KYC", "Ongoing monitoring and periodic review", "Refresh CDD based on risk, trigger events, changes in structure, or unusual activity.", "Risk-based", "action", "cdd"],
  ["aml-tm", "CDD / KYC", "Transaction monitoring", "Review unusual movements, investment funding, redemptions, third-party payments, and round-tripping indicators.", "Monthly", "at-risk", "cdd"],
  ["aml-str", "CDD / KYC", "Suspicious transaction escalation", "Maintain internal escalation, MLRO review, STR rationale, and confidentiality controls.", "Event-driven", "action", "cdd"],
  ["aml-records", "CDD / KYC", "AML recordkeeping", "Retain CDD, transactions, screening, investigation notes, and risk acceptance evidence.", "Ongoing", "on-track", "documents"],
  ["tax-ai", "Tax / reporting", "Accredited and institutional investor status", "Track AI/II classification, opt-in/opt-out records, disclosures, and renewal evidence.", "Annual", "at-risk", "client-onboarding"],
  ["tax-fatca", "Tax / reporting", "FATCA / CRS classifications", "Maintain self-certifications, controlling-person data, reporting status, and annual IRAS submission evidence.", "Annual", "action", "documents"],
  ["tax-13o", "Tax / reporting", "13O conditions", "Track AUM, local business spend, investment professionals, deployment, and annual tax-incentive evidence.", "Quarterly", "at-risk", "obligations"],
  ["tax-13u", "Tax / reporting", "13U conditions", "Track enhanced-tier fund conditions, assets, staffing, local spend, deployment, and evidence packs.", "Quarterly", "at-risk", "obligations"],
  ["fund-cisnet", "Funds / VCC", "Restricted scheme notification", "Track CISNet notification, annual declaration, amendments, responsible person endorsement, and access codes.", "Event-driven", "at-risk", "vccs"],
  ["fund-vcc", "Funds / VCC", "VCC annual return and AGM", "Track AGM, annual return, officer updates, registers, and late filing risk.", "Annual", "action", "vccs"],
  ["fund-subfund", "Funds / VCC", "Umbrella VCC sub-fund records", "Track sub-fund accounts, assets/liabilities, NAV dates, filings, and sub-fund changes.", "Monthly", "action", "vccs"],
  ["fund-valuation", "Funds / VCC", "Valuation and NAV governance", "Maintain valuation policy, pricing sources, override approvals, stale prices, and valuation committee minutes.", "Monthly", "at-risk", "vccs"],
  ["fund-sideletters", "Funds / VCC", "Side letters and investor terms", "Track preferential terms, MFN clauses, fee terms, liquidity, and disclosure conflicts.", "Event-driven", "at-risk", "documents"],
  ["tech-trm", "Technology / data", "Technology risk management", "Maintain critical systems inventory, RTO/RPO, incident reporting, backup tests, and service-provider evidence.", "Quarterly", "at-risk", "trm-cyber"],
  ["tech-cyber", "Technology / data", "Cyber hygiene", "Track privileged accounts, patching, security baselines, perimeter controls, malware protection, and MFA.", "Monthly", "action", "trm-cyber"],
  ["tech-pdpa", "Technology / data", "PDPA / DPO obligations", "Maintain DPO, policies, consent, purpose limitation, access/correction, retention, transfer, and breach workflows.", "Ongoing", "at-risk", "privacy"],
  ["tech-ewra", "Technology / data", "Environmental risk assessment", "Track climate transition and physical risk for discretionary portfolios and investee data coverage.", "Semi-annual", "at-risk", "ewra"],
  ["ops-staff", "Operating controls", "Staff onboarding and annual attestations", "Track fit-and-proper, conflicts, training, confidentiality, access, and annual attestations.", "Per hire / annual", "action", "employee-onboarding"],
  ["ops-bcp", "Operating controls", "BCP and operational resilience", "Track business continuity tests, remote work controls, crisis contacts, and lessons learned.", "Annual", "at-risk", "trm-cyber"],
];

const TRAINING_CHECK_DATE = "14 Jun 2026";
const TRAINING_PASS_MARK = 80;
const TRAINING_VERSION = "HL-TRM-CYB-2026.1";
const TRAINING_TITLE = "TRM, Cyber Hygiene, PDPA and Responsible AI Awareness";

const trainingQuiz = [
  {
    id: "q1",
    topic: "PDPA",
    question: "Which habit best reduces misdirected personal-data incidents?",
    options: [
      "Verify recipients and sharing permissions before sending.",
      "Use shorter emails so mistakes are less visible.",
      "Archive personal data once a year.",
      "Send from a personal account if the work account is busy.",
    ],
    answer: 0,
    explain: "Recipient checks and approved sharing channels reduce accidental disclosure risk.",
  },
  {
    id: "q2",
    topic: "Incident response",
    question: "When should staff report a suspected data breach?",
    options: [
      "After they know every detail and the root cause.",
      "Immediately through the office reporting channel.",
      "Only if a client, family member or vendor complains.",
      "At month end when the compliance report is prepared.",
    ],
    answer: 1,
    explain: "Fast reporting supports containment, evidence capture and notification assessment.",
  },
  {
    id: "q3",
    topic: "Vendor risk",
    question: "What should happen before a new vendor handles client or family data?",
    options: [
      "A risk, security, contract and data-protection review.",
      "A verbal approval from the person who wants the tool.",
      "No review if the vendor is popular in the market.",
      "A review only after the first incident happens.",
    ],
    answer: 0,
    explain: "Vendor review checks data, security, contract, resilience and exit risks.",
  },
  {
    id: "q4",
    topic: "Cyber hygiene",
    question: "What is the safer response to an unexpected MFA prompt?",
    options: [
      "Approve it quickly so your account is not locked.",
      "Do not approve it, change password if needed and report it.",
      "Share the MFA code with IT by chat.",
      "Disable MFA for the day and try again later.",
    ],
    answer: 1,
    explain: "Unexpected prompts may mean someone has your password. Do not approve them.",
  },
  {
    id: "q5",
    topic: "Culture",
    question: "Why does compliance readiness involve everyone?",
    options: [
      "Daily work creates the evidence and the risk.",
      "Only the DPO handles compliance matters.",
      "Audits only look at policy documents.",
      "Compliance applies only to licensed investment staff.",
    ],
    answer: 0,
    explain: "Policies matter, but real readiness comes from everyday behaviour and records.",
  },
  {
    id: "q6",
    topic: "Confidential documents",
    question: "Which choice is safest before sending a trust deed and passport copy externally?",
    options: [
      "Check the purpose, recipient, approval, channel and minimum data needed.",
      "Send the full file because external advisers are trusted.",
      "Forward the last email thread because it is fastest.",
      "Use any messaging app if the recipient says it is urgent.",
    ],
    answer: 0,
    explain: "Sensitive family-office documents need purpose, recipient and channel checks before sharing.",
  },
  {
    id: "q7",
    topic: "Access control",
    question: "A staff member leaves the office. What is the compliance-ready access action?",
    options: [
      "Wait until the next quarterly review.",
      "Remove or suspend access promptly and record completion.",
      "Keep access open in case handover questions arise.",
      "Ask the former staff member not to log in.",
    ],
    answer: 1,
    explain: "Leaver access should be removed quickly and evidenced to reduce data and cyber risk.",
  },
  {
    id: "q8",
    topic: "Responsible AI",
    question: "Which statement about public AI tools is safest for staff?",
    options: [
      "They can be used for any data if the answer is useful.",
      "They are safe if the prompt is deleted afterwards.",
      "They should not receive client, family or confidential data unless approved.",
      "They are outside compliance because they are not office systems.",
    ],
    answer: 2,
    explain: "Public AI tools can create data disclosure and vendor risks when used with confidential or personal data.",
  },
  {
    id: "q9",
    topic: "Resilience",
    question: "What should staff do during an outage of a critical work system?",
    options: [
      "Use the approved continuity workaround and inform the service owner.",
      "Move files to personal storage until the system returns.",
      "Stop recording work because the system is unavailable.",
      "Keep retrying silently so no one is disturbed.",
    ],
    answer: 0,
    explain: "Continuity procedures keep work controlled and protect confidentiality during disruptions.",
  },
  {
    id: "q10",
    topic: "Audit evidence",
    question: "Which action best supports MAS and PDPA audit readiness?",
    options: [
      "Tell auditors that staff know the process.",
      "Keep evidence of training, reviews, incidents, approvals and exceptions.",
      "Use fewer systems so there is less to explain.",
      "Ask vendors to confirm controls only after an audit starts.",
    ],
    answer: 1,
    explain: "Audit readiness depends on reliable evidence that controls are understood and operating.",
  },
];

const trainingSources = [
  ["MAS TRM", "Technology Risk Management Guidelines", "Technology governance, cyber resilience and third-party technology risk.", "https://www.mas.gov.sg/regulation/guidelines/technology-risk-management-guidelines"],
  ["MAS", "Notice FSM-N22 on Cyber Hygiene", "Administrative accounts, patching, malware protection, perimeter controls and MFA.", "https://www.mas.gov.sg/regulation/notices/notice-fsm-n22"],
  ["PDPC", "Data breach reporting", "Breach assessment, reporting route and notification considerations.", "https://www.pdpc.gov.sg/organisations/e-services/report-your-organisations-data-breach"],
  ["PDPC", "PDPA key concepts", "Protection, retention, transfer limitation, accountability and DPO duties.", "https://www.pdpc.gov.sg/guidelines-and-consultation/2020/03/advisory-guidelines-on-key-concepts-in-the-pdpa"],
];

const defaultPersisted = {
  theme: "light",
  workspace: "all",
  taskCount: 4,
  tasks: [],
  currentRole: "Compliance lead",
  locked: false,
  reportCount: 3,
  screenings: {
    lastRun: "01 Jun 2026, 02:00",
    persons: 42,
    exceptions: 2,
  },
  ruleApprovals: {
    sfo: "approved",
    mfo: "pending",
    "13o": "approved",
    "13u": "approved",
    vcc: "approved",
    trm: "pending",
    cyber: "pending",
    ewra: "pending",
    cdd: "pending",
    trust: "pending",
    corporate: "approved",
  },
  registers: [
    ["rorc", "Register of Registrable Controllers", "Annual confirmation due", "31 Dec 2026", "at-risk"],
    ["rond", "Register of Nominee Directors", "Private and central register current", "Event-driven", "on-track"],
    ["rons", "Register of Nominee Shareholders", "Central update awaiting checker", "04 Jun 2026", "action"],
  ],
  approvals: [
    ["a1", "Central RONS update", "Aurelia Family Holdings", "Prepared by Sarah Lim", "Regulatory filing", "pending"],
    ["a2", "13U deployment evidence snapshot", "Tan Heritage Trust", "Prepared by Marcus Goh", "Tax incentive", "pending"],
    ["a3", "VCC annual-return working papers", "Straits Horizon VCC", "Prepared by Jia Wei", "Corporate", "approved"],
  ],
  incidents: [
    ["i1", "Quarterly access review", "Control test", "Closed", "28 May 2026", "No exceptions identified"],
  ],
  strReports: [
    ["str-4417", "Aurelia Family Holdings", "Unusual third-party inflow", "Marcus Goh", "21 May 2026", "Filed (STRO)", "SONAR-2026-004417"],
    ["str-4421", "Tan Heritage Trust", "Source-of-funds inconsistency", "Sarah Lim", "28 May 2026", "MLRO review", "—"],
    ["str-4409", "Straits Horizon VCC", "Sanctions / adverse media hit", "Jia Wei", "12 May 2026", "No-file (documented)", "Rationale logged"],
  ],
  activities: audits.map((item) => [...item]),
  calc: {
    scheme: "13U",
    aum: 76.4,
    professionals: 3,
    localSpend: 420000,
    deployment: 7200000,
  },
  toggles: {
    screening: true,
    reminders: true,
    evidence: true,
    counsel: false,
    redaction: true,
    retention: true,
  },
  onboarding: {
    clients: clientOnboardingDefaults.map((item) => ({ ...item })),
    employees: employeeOnboardingDefaults.map((item) => ({
      ...item,
      checklist: { ...item.checklist },
    })),
  },
  training: {
    learnerName: "Sarah Lim",
    learnerRole: "Operations analyst",
    companyName: "Meridian Family Office",
    complianceOfficer: "Compliance lead",
    answers: {},
    submitted: false,
    certificateId: "",
    completedAt: "",
    attempts: [],
  },
};

const STORAGE_KEY = "harbourline-demo-v2";

function loadPersisted() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    const next = {
      ...defaultPersisted,
      ...saved,
      screenings: { ...defaultPersisted.screenings, ...(saved.screenings || {}) },
      calc: { ...defaultPersisted.calc, ...(saved.calc || {}) },
      toggles: { ...defaultPersisted.toggles, ...(saved.toggles || {}) },
      ruleApprovals: { ...defaultPersisted.ruleApprovals, ...(saved.ruleApprovals || {}) },
      registers: saved.registers || defaultPersisted.registers,
      approvals: saved.approvals || defaultPersisted.approvals,
      incidents: saved.incidents || defaultPersisted.incidents,
      strReports: saved.strReports || defaultPersisted.strReports,
      activities: saved.activities || defaultPersisted.activities,
      tasks: saved.tasks || [],
      onboarding: {
        clients: saved.onboarding?.clients || defaultPersisted.onboarding.clients,
        employees: saved.onboarding?.employees || defaultPersisted.onboarding.employees,
      },
      training: {
        ...defaultPersisted.training,
        ...(saved.training || {}),
        answers: saved.training?.answers || defaultPersisted.training.answers,
        attempts: saved.training?.attempts || defaultPersisted.training.attempts,
      },
    };
    const legacyRoleMarker = ["so", "lo"].join("");
    const roleText = String(next.currentRole || "").toLowerCase();
    if (roleText.includes(legacyRoleMarker) && roleText.includes("compliance officer")) next.currentRole = "Compliance lead";
    next.activities = (next.activities || []).map((item) => {
      const [iconName, actor, action, time] = item;
      const actorText = String(actor || "").toLowerCase();
      const nextActor = actorText.includes(legacyRoleMarker) && actorText.includes("compliance officer") ? "Compliance lead" : actor;
      return [iconName, nextActor, action, time];
    });
    return next;
  } catch {
    return structuredClone(defaultPersisted);
  }
}

const persisted = loadPersisted();

const iconPaths = {
  activity: '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',
  alertCircle: '<circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line>',
  bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path><path d="M13.7 21a2 2 0 0 1-3.4 0"></path>',
  briefcase: '<rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',
  calendar: '<path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path>',
  check: '<path d="m20 6-11 11-5-5"></path>',
  checkCircle: '<path d="M22 11.1V12a10 10 0 1 1-5.9-9.1"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',
  chevronDown: '<path d="m6 9 6 6 6-6"></path>',
  chevronRight: '<path d="m9 18 6-6-6-6"></path>',
  clock: '<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',
  download: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line>',
  eye: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z"></path><circle cx="12" cy="12" r="3"></circle>',
  edit: '<path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path>',
  fileText: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line>',
  filter: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',
  flag: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" x2="4" y1="22" y2="15"></line>',
  folder: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',
  gauge: '<path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path>',
  grid: '<rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect>',
  heartHandshake: '<path d="M19.5 12.572 12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572Z"></path>',
  landmark: '<line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="18" y2="11"></line><line x1="10" x2="10" y1="18" y2="11"></line><line x1="14" x2="14" y1="18" y2="11"></line><line x1="18" x2="18" y1="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon>',
  layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',
  lock: '<rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',
  network: '<rect width="6" height="6" x="9" y="2" rx="1"></rect><rect width="6" height="6" x="3" y="16" rx="1"></rect><rect width="6" height="6" x="15" y="16" rx="1"></rect><path d="M12 8v4"></path><path d="M6 16v-4h12v4"></path>',
  more: '<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',
  moon: '<path d="M12 3a6.8 6.8 0 0 0 8.7 8.7A8 8 0 1 1 12 3z"></path>',
  plus: '<line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line>',
  search: '<circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.35-4.35"></path>',
  settings: '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',
  sun: '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path>',
  trendingUp: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',
  undo: '<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" x2="12" y1="3" y2="15"></line>',
  userCheck: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',
  x: '<line x1="18" x2="6" y1="6" y2="18"></line><line x1="6" x2="18" y1="6" y2="18"></line>',
};

const state = {
  view: "overview",
  search: "",
  riskFilter: null,
  clientFilter: "all",
  obligationFilter: "all",
  modal: null,
  selectedClient: null,
  toast: null,
  theme: persisted.theme,
  workspace: persisted.workspace,
  taskCount: persisted.taskCount,
  tasks: persisted.tasks,
  currentRole: persisted.currentRole,
  locked: persisted.locked,
  reportCount: persisted.reportCount,
  screenings: persisted.screenings,
  ruleApprovals: persisted.ruleApprovals,
  registers: persisted.registers,
  approvals: persisted.approvals,
  incidents: persisted.incidents,
  strReports: persisted.strReports,
  activities: persisted.activities,
  calc: persisted.calc,
  toggles: persisted.toggles,
  onboarding: persisted.onboarding,
  training: persisted.training,
};

const navGroups = [
  {
    label: "Control centre",
    items: [
      ["overview", "grid", "Dashboard", "Daily control priorities"],
      ["workbench", "checkCircle", "Control register", "40 managed controls"],
      ["obligations", "landmark", "MAS SFA rules", "Licence and conduct"],
      ["clients", "users", "Client dashboard", "Families and entities"],
      ["cdd", "shield", "CDD & KYC", "SOW, SOF, screening"],
      ["str", "flag", "STR & AML alerts", "Suspicious transaction reporting"],
    ],
  },
  {
    label: "Operating files",
    items: [
      ["client-onboarding", "userCheck", "Client onboarding", "SOW & SOF gates"],
      ["vccs", "landmark", "VCC & funds", "Umbrella and sub-funds"],
      ["employee-onboarding", "briefcase", "Staff controls", "Fit, proper, access"],
      ["documents", "folder", "Documents", "Evidence library"],
    ],
  },
  {
    label: "Risk & privacy",
    items: [
      ["trm-cyber", "lock", "TRM & cyber", "Systems and access"],
      ["training", "checkCircle", "Training quiz", "TRM cyber attestation"],
      ["ewra", "trendingUp", "EWRA", "Environmental risk"],
      ["privacy", "lock", "PDPA / DPO", "Privacy controls"],
      ["settings", "settings", "Settings", "Workspace preferences"],
    ],
  },
];

const nav = navGroups.flatMap((group) => group.items);

function icon(name) {
  return `<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">${iconPaths[name] || iconPaths.activity}</svg>`;
}

function titleCase(value) {
  return value.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function statusLabel(value) {
  return value === "action" ? "Action due" : value === "at-risk" ? "At risk" : "On track";
}

function statusClass(value) {
  const text = String(value).toLowerCase();
  if (text.includes("action") || text.includes("overdue") || text.includes("escalated") || text.includes("requested")) return "action";
  if (text.includes("risk") || text.includes("review") || text.includes("pending") || text.includes("medium")) return "at-risk";
  return "on-track";
}

function evidenceStatus(status) {
  return `<span class="status-pill ${statusClass(status)}">${status}</span>`;
}

function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function savePersisted() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      theme: state.theme,
      workspace: state.workspace,
      taskCount: state.taskCount,
      tasks: state.tasks,
      currentRole: state.currentRole,
      locked: state.locked,
      reportCount: state.reportCount,
      screenings: state.screenings,
      ruleApprovals: state.ruleApprovals,
      registers: state.registers,
      approvals: state.approvals,
      incidents: state.incidents,
      strReports: state.strReports,
      activities: state.activities,
      calc: state.calc,
      toggles: state.toggles,
      onboarding: state.onboarding,
      training: state.training,
    }),
  );
}

function visibleClients() {
  if (state.workspace === "sfo") return clients.filter((client) => client.office === "SFO");
  if (state.workspace === "mfo") return clients.filter((client) => client.office === "MFO");
  return clients;
}

function visibleVccStructures() {
  if (state.workspace === "sfo") return [];
  if (state.workspace === "mfo") return vccStructures.filter((structure) => structure.office === "MFO");
  return vccStructures;
}

function workspaceLabel() {
  return state.workspace === "sfo" ? "Tan family SFO workspace" : state.workspace === "mfo" ? "Meridian MFO workspace" : "All family offices";
}

function allObligations() {
  return [...state.tasks, ...obligations];
}

function workItemsFor(view) {
  if (!view) return complianceWorkItems;
  return complianceWorkItems.filter((item) => item[6] === view);
}

function workbenchSummary(items = complianceWorkItems) {
  return {
    total: items.length,
    action: items.filter((item) => item[5] === "action").length,
    atRisk: items.filter((item) => item[5] === "at-risk").length,
    onTrack: items.filter((item) => item[5] === "on-track").length,
  };
}

function workItemCard([id, group, name, detail, cadence, status, view]) {
  return `
    <article class="work-item-card">
      <div class="category-head">
        <div><span class="tag">${group}</span><h3>${name}</h3></div>
        <span class="status-pill ${status}">${statusLabel(status)}</span>
      </div>
      <p>${detail}</p>
      <div class="work-item-meta">
        <span>${icon("clock")} ${cadence}</span>
        <span>${icon("folder")} ${viewLabelFor(view)}</span>
      </div>
      <button class="table-action" data-work-item="${id}">Record work done</button>
    </article>
  `;
}

function viewLabelFor(id) {
  return nav.find(([viewId]) => viewId === id)?.[2] || id;
}

function structureOptions() {
  const clientOptions = visibleClients().map((client) => client.name);
  const vccOptions = visibleVccStructures().flatMap((vcc) => [vcc.name, ...vcc.subFunds.map((fund) => fund.name)]);
  return [...clientOptions, ...vccOptions];
}

function canApprove() {
  return ["Director", "External adviser"].includes(state.currentRole);
}

function readiness() {
  const calc = state.calc;
  const is13U = calc.scheme === "13U";
  const minimumAum = is13U ? 50 : 20;
  const minimumProfessionals = is13U ? 3 : 2;
  const minimumSpend = 200000;
  const minimumDeployment = Math.min(10000000, calc.aum * 100000);
  const checks = [
    ["Assets under management", calc.aum >= minimumAum, `S$${calc.aum.toFixed(1)}m / S$${minimumAum}m`],
    ["Investment professionals", calc.professionals >= minimumProfessionals, `${calc.professionals} / ${minimumProfessionals}`],
    ["Local business spending", calc.localSpend >= minimumSpend, `S$${calc.localSpend.toLocaleString()} / S$${minimumSpend.toLocaleString()}`],
    ["Qualifying capital deployment", calc.deployment >= minimumDeployment, `S$${calc.deployment.toLocaleString()} / S$${minimumDeployment.toLocaleString()}`],
  ];
  return { checks, passed: checks.filter(([, pass]) => pass).length, minimumDeployment };
}

function todayIso() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function todayLabel() {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date();
  return `${String(date.getDate()).padStart(2, "0")} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

function makeTrainingEvidenceId() {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let index = 0; index < 5; index += 1) code += chars[Math.floor(Math.random() * chars.length)];
  return `HL-TRAIN-${new Date().getFullYear()}-${code}`;
}

function trainingAnswered() {
  return trainingQuiz.filter((item) => state.training.answers[item.id] !== undefined).length;
}

function trainingCorrect() {
  return trainingQuiz.filter((item) => Number(state.training.answers[item.id]) === item.answer).length;
}

function trainingPercent() {
  return Math.round((trainingCorrect() / trainingQuiz.length) * 100);
}

function trainingPassed() {
  return state.training.submitted && trainingPercent() >= TRAINING_PASS_MARK;
}

function trainingStatusLabel() {
  if (!state.training.submitted) return "Draft";
  return trainingPassed() ? "Passed" : "Review required";
}

function trainingOptionClass(item, optionIndex) {
  const selected = Number(state.training.answers[item.id]) === optionIndex;
  if (!state.training.submitted) return selected ? "selected" : "";
  if (optionIndex === item.answer) return "correct";
  if (selected) return "wrong";
  return "";
}

function addAudit(actor, action) {
  state.activities.unshift(["activity", actor, action, "Just now"]);
}

function getFilteredQueue() {
  const risk = state.riskFilter;
  return visibleClients()
    .filter((client) => !risk || (client.risk === risk.level && client.likelihood === risk.likelihood))
    .slice(0, 5);
}

function topbar() {
  const nextTheme = state.theme === "dark" ? "light" : "dark";
  return `
    <header class="topbar">
      <div class="breadcrumb">Harbourline <strong>/ ${viewLabel()}</strong></div>
      <div class="search-wrap">
        <div class="search-box">
          ${icon("search")}
          <input id="global-search" aria-label="Search" autocomplete="off" placeholder="Search clients, SFA rules, SOW/SOF, VCCs, PDPA..." value="${state.search}" />
          <span class="search-shortcut">⌘ K</span>
        </div>
        ${searchResults()}
      </div>
      <div class="top-spacer"></div>
      <span class="demo-badge">Demo data</span>
      <span class="role-badge">${state.currentRole}</span>
      <button class="theme-toggle" data-action="toggle-theme" aria-label="Switch to ${nextTheme} mode">${icon(state.theme === "dark" ? "sun" : "moon")}<span>${state.theme === "dark" ? "Light" : "Dark"}</span></button>
      <button class="icon-button" aria-label="Notifications">${icon("bell")}<span class="notify-dot"></span></button>
      <button class="primary-button" data-action="open-task">${icon("plus")} New task</button>
    </header>
  `;
}

function searchResults() {
  const query = state.search.trim().toLowerCase();
  if (!query) return "";
  const matchedClients = visibleClients().filter((item) => `${item.name} ${item.type} ${item.category}`.toLowerCase().includes(query)).slice(0, 3);
  const matchedVccs = visibleVccStructures()
    .filter((item) => `${item.name} ${item.client} ${item.type} ${item.subFunds.map((fund) => fund.name).join(" ")}`.toLowerCase().includes(query))
    .slice(0, 2);
  const matchedControls = complianceWorkItems.filter((item) => `${item[1]} ${item[2]} ${item[3]}`.toLowerCase().includes(query)).slice(0, 4);
  const matchedObligations = allObligations().filter((item) => `${item.name} ${item.description} ${item.group}`.toLowerCase().includes(query)).slice(0, 2);
  const rows = [
    ...matchedClients.map((item) => `<button class="search-result" data-review="${item.id}"><span class="result-icon">${icon("users")}</span><span><span class="result-name">${item.name}</span><span class="result-meta">${item.type} · ${item.category}</span></span></button>`),
    ...matchedVccs.map((item) => `<button class="search-result" data-view="vccs"><span class="result-icon">${icon("landmark")}</span><span><span class="result-name">${item.name}</span><span class="result-meta">${item.type} · ${item.subFunds.length} sub-funds</span></span></button>`),
    ...matchedControls.map((item) => `<button class="search-result" data-view="${item[6]}"><span class="result-icon">${icon("checkCircle")}</span><span><span class="result-name">${item[2]}</span><span class="result-meta">${item[1]} · ${statusLabel(item[5])}</span></span></button>`),
    ...matchedObligations.map((item) => `<button class="search-result" data-action="show-obligations"><span class="result-icon">${icon("checkCircle")}</span><span><span class="result-name">${esc(item.name)}</span><span class="result-meta">${esc(item.group)} · ${statusLabel(item.status)}</span></span></button>`),
  ];
  return `<div class="search-results">${rows.length ? rows.join("") : `<div class="queue-empty">No matching records found.</div>`}</div>`;
}

function viewLabel() {
  return nav.find(([id]) => id === state.view)?.[2] || "Overview";
}

function sidebar() {
  const navCount = (id) => {
    if (id === "workbench") return complianceWorkItems.filter((item) => item[5] !== "on-track").length;
    if (id === "obligations") return complianceWorkItems.filter((item) => item[1] === "MAS / SFA" && item[5] !== "on-track").length;
    if (id === "trm-cyber") return complianceWorkItems.filter((item) => ["tech-trm", "tech-cyber", "ops-bcp"].includes(item[0]) && item[5] !== "on-track").length;
    if (id === "training") return trainingPassed() ? null : 1;
    if (id === "client-onboarding") return state.onboarding.clients.filter((item) => item.progress < 100).length;
    if (id === "employee-onboarding") return state.onboarding.employees.filter((item) => item.progress < 100).length;
    if (id === "vccs") return visibleVccStructures().reduce((total, item) => total + item.subFunds.length, 0);
    return null;
  };
  const navItem = ([id, iconName, label, description]) => {
    const count = navCount(id);
    return `<button class="nav-link ${state.view === id ? "active" : ""}" data-view="${id}"><span class="nav-icon">${icon(iconName)}</span><span class="nav-copy"><span>${label}</span><small>${description || ""}</small></span>${count ? `<span class="nav-count">${count}</span>` : ""}</button>`;
  };
  const railGroup = (group) => `<div class="rail-group" aria-label="${group.label}">${group.items.map(([id, iconName, label]) => `<button class="rail-button ${state.view === id ? "active" : ""}" title="${label}" aria-label="${label}" data-view="${id}">${icon(iconName)}</button>`).join("")}</div>`;
  const sideGroups = navGroups.map((group) => `<div class="nav-group"><div class="nav-section-title">${group.label}</div>${group.items.map(navItem).join("")}</div>`).join("");
  return `
    <aside class="rail">
      <div class="rail-mark">H</div>
      ${navGroups.map(railGroup).join("")}
      <div class="rail-spacer"></div>
      <div class="rail-avatar">SL</div>
    </aside>
    <aside class="side-nav">
      <div class="brand">
        <div>
          <div class="brand-lockup">Harbour<span>line</span></div>
          <div class="brand-sub">Family Office Governance</div>
        </div>
      </div>
      <div class="workspace-card">
        <div class="workspace-label">Workspace</div>
        <select id="workspace-select" class="workspace-native" aria-label="Workspace">
          <option value="all" ${state.workspace === "all" ? "selected" : ""}>All family offices</option>
          <option value="sfo" ${state.workspace === "sfo" ? "selected" : ""}>Tan family SFO</option>
          <option value="mfo" ${state.workspace === "mfo" ? "selected" : ""}>Meridian MFO</option>
        </select>
        <div class="workspace-micro"><span>${visibleClients().length + visibleVccStructures().reduce((total, item) => total + item.subFunds.length, 0)} records</span><span>${allObligations().length} tasks</span></div>
      </div>
      ${sideGroups}
      <div class="side-bottom">
        <div class="profile">
          <div class="profile-avatar">SL</div>
          <div>
          <div class="profile-name">Sarah Lim</div>
            <div class="profile-role">Compliance lead</div>
          </div>
        </div>
      </div>
    </aside>
  `;
}

function pageHead(title, subtitle, extra = "") {
  return `
    <div class="page-head">
      <div>
        <div class="eyebrow">Singapore · SFO/MFO compliance</div>
        <h1>${title}</h1>
        <p class="page-subtitle">${subtitle}</p>
      </div>
      <div class="head-actions">
        ${extra}
        <button class="secondary-button" data-action="export">${icon("download")} Export</button>
      </div>
    </div>
  `;
}

function statCard(label, value, foot, iconName, view) {
  return `<button class="stat-card stat-button" data-view="${view}"><div class="stat-top"><span>${label}</span><span class="stat-icon">${icon(iconName)}</span></div><div class="stat-value">${value}</div><div class="stat-foot">${foot}</div></button>`;
}

function heatCell(likelihood, level, count) {
  const className = count === 0 ? "empty" : level;
  return `<button class="heat-cell ${className}" data-heat="${likelihood}|${level}" aria-label="${titleCase(level)} impact, ${titleCase(likelihood)} likelihood, ${count} entities">${count ? `<strong>${count}</strong><span>${count === 1 ? "entity" : "entities"}</span>` : ""}</button>`;
}

function heatmap() {
  const likelihoods = ["rare", "unlikely", "possible", "likely", "almost certain"];
  const levels = ["critical", "high", "medium", "low"];
  const matrix = {
    critical: [0, 0, 0, 1, 0],
    high: [0, 0, 1, 1, 0],
    medium: [0, 1, 1, 0, 0],
    low: [1, 1, 0, 0, 0],
  };
  return `
    <div class="heatmap-axis-top"><span></span>${likelihoods.map((item) => `<span>${item}</span>`).join("")}</div>
    <div class="heatmap">
      ${levels.map((level) => `<div class="heat-label">${level}</div>${likelihoods.map((likelihood, index) => heatCell(likelihood, level, matrix[level][index])).join("")}`).join("")}
    </div>
    <div class="heat-legend"><span>Impact × likelihood</span><span><i class="legend-dot" style="background:#e8f5ee"></i>Low</span><span><i class="legend-dot" style="background:#fff3d9"></i>Medium</span><span><i class="legend-dot" style="background:#fbe2dd"></i>High</span><span><i class="legend-dot" style="background:#f7cfcb"></i>Critical</span></div>
  `;
}

function queue() {
  const filtered = getFilteredQueue();
  return `
    <div class="queue">
      <div class="panel-head">
        <div>
          <h2>${state.riskFilter ? `${titleCase(state.riskFilter.level)} risk queue` : "Targeted monitoring queue"}</h2>
          <p class="panel-subtitle">${state.riskFilter ? `${titleCase(state.riskFilter.likelihood)} likelihood filter applied` : "Risk-prioritised reviews and deadlines"}</p>
        </div>
        ${state.riskFilter ? `<button class="ghost-button" data-action="clear-heat">Clear</button>` : ""}
      </div>
      <div class="queue-list">
        ${filtered.length ? filtered.map((client) => `
          <button class="queue-row" data-review="${client.id}">
            <span class="risk-pill ${client.risk}">${titleCase(client.risk)}</span>
            <span>
              <span class="queue-name">${client.name}</span>
              <span class="queue-detail">${client.issue}</span>
            </span>
            <span class="queue-days ${client.days < 0 ? "overdue" : ""}">${client.nextReview}</span>
          </button>
        `).join("") : `<div class="queue-empty">No entities in this risk cell. Select another cell or clear the filter.</div>`}
      </div>
    </div>
  `;
}

function categoryCard(title, iconName, items) {
  return `
    <div class="panel category-card">
      <div class="category-head"><h3>${title}</h3><span class="category-icon">${icon(iconName)}</span></div>
      <div class="category-list">${items.map(([label, value]) => `<div class="category-item"><span>${label}</span><strong>${value}</strong></div>`).join("")}</div>
    </div>
  `;
}

function explainer() {
  return `
    <div class="panel explainer">
      <div class="panel-head">
        <div>
          <h2>Top risk · explainable view</h2>
          <p class="panel-subtitle">Why this entity is rated critical and where the controls stand</p>
        </div>
        <button class="ghost-button" data-review="tan-heritage">Full profile ${icon("chevronRight")}</button>
      </div>
      <div class="explainer-body">
        <div>
          <div class="tiny-label">Client / structure</div>
          <div class="client-title">Tan Heritage Trust</div>
          <div><span class="risk-pill critical">Critical · 92</span></div>
          <div class="mini-meta" style="margin-top:9px">KYC refresh overdue by 12 days<br />2 beneficial owners require evidence</div>
          <svg class="sparkline" viewBox="0 0 220 60" preserveAspectRatio="none">
            <defs><linearGradient id="sparkGradient" x1="0" x2="0" y1="0" y2="1"><stop offset="0%" stop-color="#8bc3b8" stop-opacity=".36"/><stop offset="100%" stop-color="#8bc3b8" stop-opacity="0"/></linearGradient></defs>
            <path class="fill" d="M0 40 C25 30 40 24 62 27 C85 30 97 38 116 31 C139 22 150 16 168 18 C185 20 199 16 220 10 L220 60 L0 60 Z"></path>
            <path class="line" d="M0 40 C25 30 40 24 62 27 C85 30 97 38 116 31 C139 22 150 16 168 18 C185 20 199 16 220 10"></path>
          </svg>
        </div>
        <div>
          <div class="tiny-label">Why this is rated critical</div>
          <div class="driver-list">
            ${[["Source-of-wealth evidence", 91], ["PEP-linked review scope", 74], ["Review timeliness", 68], ["Structure complexity", 45]].map(([label, value]) => `<div class="driver-row"><span class="driver-label">${label}</span><span class="driver-bar"><span class="driver-fill" style="width:${value}%"></span></span><span class="driver-value">${value}</span></div>`).join("")}
          </div>
        </div>
        <div>
          <div class="tiny-label">Controls in place</div>
          <div class="control-list">
            ${[["77", "Monthly sanctions screening", "Clear · 01 Jun"], ["62", "Manual KYC refresh", "In progress"], ["81", "Source-of-funds ledger", "Current"]].map(([score, name, cadence]) => `<div class="control-row"><span class="control-score">${score}</span><span><div class="control-name">${name}</div><div class="control-cadence">${cadence}</div></span>${icon("chevronRight")}</div>`).join("")}
          </div>
        </div>
      </div>
    </div>
  `;
}

function trackers() {
  return `
    <div class="tracker-grid">
      <div class="panel">
        <div class="panel-head">
          <div><h2>MAS SFA tracker</h2><p class="panel-subtitle">Licence, conduct, financial, market conduct, and notification controls</p></div>
          <button class="ghost-button" data-action="show-obligations">Open MAS SFA rules ${icon("chevronRight")}</button>
        </div>
        <div class="obligation-list">
          ${workItemsFor("obligations").slice(0, 5).map(([id, group, name, detail, cadence, status]) => `
            <div class="obligation-row">
              <div><div class="obligation-name">${name}</div><div class="obligation-desc">${detail}</div></div>
              <span class="tag">${cadence}</span>
              <span class="status-pill ${status}">${statusLabel(status)}</span>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><h2>Evidence reminders</h2><p class="panel-subtitle">Next practical items for the compliance owner</p></div><button class="ghost-button" data-view="workbench">Control register ${icon("chevronRight")}</button></div>
        <div class="deadline-list">
          ${deadlines.map(([day, month, name, meta]) => `<div class="deadline-row"><div class="date-box"><div class="date-day">${day}</div><div class="date-month">${month}</div></div><div><div class="deadline-name">${name}</div><div class="deadline-meta">${meta}</div></div></div>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function workbenchView() {
  const summary = workbenchSummary();
  const grouped = [...new Set(complianceWorkItems.map((item) => item[1]))];
  return `
    ${pageHead("Compliance control register", "40 managed SFO/MFO compliance items covering MAS/SFA, CDD/KYC, VCCs, tax, PDPA, technology, staff controls, and evidence follow-up.", `<button class="secondary-button" data-action="open-task">${icon("plus")} Add control item</button>`)}
    <div class="notice">${icon("checkCircle")} Built for a Singapore family-office compliance function: one operating list for regulatory controls, onboarding gates, fund structures, privacy, technology risk, and staff attestations.</div>
    <div class="stat-grid">
      ${statCard("Total controls", summary.total, "Managed control items", "checkCircle", "workbench")}
      ${statCard("Action due", summary.action, "Needs immediate work", "alertCircle", "workbench")}
      ${statCard("At risk", summary.atRisk, "Evidence or review gap", "gauge", "workbench")}
      ${statCard("On track", summary.onTrack, "Current evidence", "trendingUp", "workbench")}
      ${statCard("SOW/SOF gates", "2", "Separate onboarding checks", "shield", "cdd")}
    </div>
    <div class="workbench-sections">
      ${grouped.map((group) => {
        const items = complianceWorkItems.filter((item) => item[1] === group);
        const counts = workbenchSummary(items);
        return `<section class="panel workbench-section">
          <div class="panel-head"><div><h2>${group}</h2><p class="panel-subtitle">${items.length} controls · ${counts.action} action · ${counts.atRisk} at risk</p></div><span class="tag">${counts.onTrack} on track</span></div>
          <div class="work-item-grid">${items.map(workItemCard).join("")}</div>
        </section>`;
      }).join("")}
    </div>
  `;
}

function overview() {
  const visible = visibleClients();
  const vccCount = visibleVccStructures().reduce((total, item) => total + 1 + item.subFunds.length, 0);
  const activeClientOnboarding = state.onboarding.clients.filter((item) => item.progress < 100);
  const sowSofGaps = state.onboarding.clients.filter((item) => item.sow !== "Accepted" || item.sof !== "Accepted");
  const openRiskStatements = riskStatements.filter((item) => item.status !== "on-track");
  const workSummary = workbenchSummary();
  return `
    ${pageHead("SFO/MFO compliance dashboard", `${workspaceLabel()} · daily operating view for compliance controls, onboarding, VCCs, MAS/SFA, PDPA, and technology risk.`)}
    <section class="overview-hero">
      <div class="hero-copy">
        <span class="tag">Today’s operating picture</span>
        <h2>Start with the items that block onboarding, filings, or risk acceptance.</h2>
      </div>
      <div class="hero-actions">
        <button class="primary-button" data-view="workbench">${icon("checkCircle")} Open control register</button>
        <button class="secondary-button" data-view="client-onboarding">${icon("userCheck")} Review onboarding</button>
      </div>
    </section>
    <div class="stat-grid">
      ${statCard("Control items", workSummary.total, `${workSummary.action} action · ${workSummary.atRisk} at risk`, "checkCircle", "workbench")}
      ${statCard("MAS SFA rules", workItemsFor("obligations").length, "Licence, conduct, financial controls", "landmark", "obligations")}
      ${statCard("Client onboarding", activeClientOnboarding.length, `${sowSofGaps.length} SOW/SOF evidence gaps`, "userCheck", "client-onboarding")}
      ${statCard("VCC / funds", vccCount || "0", "Umbrella, sub-funds, CISNet", "landmark", "vccs")}
      ${statCard("PDPA / DPO", workItemsFor("privacy").length, "Privacy and breach workflow", "lock", "privacy")}
    </div>
    <div class="dashboard-focus-grid">
      <div class="panel priority-panel">
        <div class="panel-head"><div><h2>Priority decisions</h2><p class="panel-subtitle">The next items a compliance lead should work through</p></div><button class="ghost-button" data-view="workbench">Full register ${icon("chevronRight")}</button></div>
        <div class="priority-list">
          ${complianceWorkItems.filter((item) => item[5] === "action").slice(0, 6).map(([id, group, name, detail, cadence, status, view]) => `
            <button class="priority-row" data-view="${view}">
              <span class="status-pill ${status}">${statusLabel(status)}</span>
              <span><strong>${name}</strong><small>${group} · ${detail}</small></span>
              ${icon("chevronRight")}
            </button>
          `).join("")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><h2>SOW / SOF blockers</h2><p class="panel-subtitle">Client onboarding should not clear without these two pieces</p></div><span class="tag">${sowSofGaps.length} open</span></div>
        <div class="evidence-grid compact-evidence">
          ${state.onboarding.clients.map((item) => `
            <div class="evidence-card">
              <div class="category-head"><h3>${item.name}</h3><span class="risk-pill ${item.risk}">${titleCase(item.risk)}</span></div>
              <div class="evidence-row"><span>Source of wealth</span>${evidenceStatus(item.sow)}</div>
              <div class="evidence-row"><span>Source of funds</span>${evidenceStatus(item.sof)}</div>
              <button class="table-action" data-view="client-onboarding">Open case</button>
            </div>
          `).join("")}
        </div>
      </div>
    </div>
    <div class="category-grid">
      ${categoryCard("CDD & KYC", "shield", [["SOW gates", "3"], ["SOF gates", "3"], ["STR escalations", "1"]])}
      ${categoryCard("TRM & cyber", "lock", [["Admin accounts", "Review"], ["RTO/RPO evidence", "Due"], ["MFA exceptions", "2"]])}
      ${categoryCard("Tax / fund admin", "fileText", [["FATCA / CRS", "Due"], ["13O / 13U", "At risk"], ["CISNet / VCC", "Open"]])}
    </div>
    ${trackers()}
  `;
}

function clientsView() {
  const filters = ["all", "critical", "high", "medium", "low"];
  const visible = visibleClients();
  const filtered = visible.filter((client) => state.clientFilter === "all" || client.risk === state.clientFilter);
  const vccs = visibleVccStructures();
  return `
    ${pageHead("Client dashboard", "Single view of families, legal entities, VCC umbrellas, sub-funds, CDD state, ownership reviews, and open actions.", `<button class="secondary-button" data-action="open-task">${icon("plus")} Add review</button>`)}
    <div class="notice">${icon("landmark")} VCCs are shown as legal structures, not just as clients. Umbrella VCCs and each sub-fund have their own filing and evidence status.</div>
    <div class="structure-summary">
      ${categoryCard("Clients", "users", [["Workspace clients", filtered.length], ["Enhanced reviews", filtered.filter((client) => client.risk === "critical" || client.risk === "high").length], ["SFO / MFO split", `${visible.filter((client) => client.office === "SFO").length} / ${visible.filter((client) => client.office === "MFO").length}`]])}
      ${categoryCard("VCCs", "landmark", [["Umbrella VCCs", vccs.length], ["Sub-funds", vccs.reduce((total, item) => total + item.subFunds.length, 0)], ["Filing actions", vccs.reduce((total, item) => total + item.subFunds.filter((fund) => fund.status !== "on-track").length, 0)]])}
      ${categoryCard("Onboarding", "userCheck", [["Open cases", state.onboarding.clients.length], ["SOW gaps", state.onboarding.clients.filter((item) => item.sow !== "Accepted").length], ["SOF gaps", state.onboarding.clients.filter((item) => item.sof !== "Accepted").length]])}
    </div>
    <div class="panel view-panel">
      <div class="toolbar">
        ${filters.map((filter) => `<button class="secondary-button ${state.clientFilter === filter ? "active" : ""}" data-client-filter="${filter}">${titleCase(filter)}</button>`).join("")}
        <div class="toolbar-spacer"></div>
        <button class="secondary-button">${icon("filter")} More filters</button>
      </div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Client / entity</th><th>Office</th><th>Risk</th><th>Primary issue</th><th>Owner</th><th>Next review</th><th></th></tr></thead>
          <tbody>
            ${filtered.map((client) => `
              <tr>
                <td><div class="table-name">${client.name}</div><div class="table-meta">${client.type} · ${client.structure}</div></td>
                <td><span class="tag">${client.office}</span></td>
                <td><span class="risk-pill ${client.risk}">${titleCase(client.risk)} · ${client.score}</span></td>
                <td><div class="table-name">${client.category}</div><div class="table-meta">${client.issue}</div></td>
                <td><span class="owner"><span class="owner-dot">${client.ownerInitials}</span>${client.owner}</span></td>
                <td class="${client.days < 0 ? "queue-days overdue" : ""}">${client.nextReview}</td>
                <td><button class="table-action" data-review="${client.id}">Review</button></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </div>
    <div class="panel" style="margin-top:12px">
      <div class="panel-head"><div><h2>VCC umbrella and sub-fund hierarchy</h2><p class="panel-subtitle">Visible legal-structure view for VCC governance and annual filing evidence</p></div><button class="ghost-button" data-view="vccs">Open VCC workspace ${icon("chevronRight")}</button></div>
      <div class="structure-tree">
        ${vccs.length ? vccs.map((vcc) => `
          <article class="structure-card umbrella-card">
            <div class="category-head"><div><div class="tiny-label">Umbrella VCC</div><h3>${vcc.name}</h3><p>${vcc.client} · ${vcc.registration}</p></div><span class="status-pill ${vcc.status}">${statusLabel(vcc.status)}</span></div>
            <div class="structure-meta">
              <span>Manager: ${vcc.manager}</span>
              <span>AGM: ${vcc.agmDue}</span>
              <span>Annual return: ${vcc.arDue}</span>
            </div>
            <div class="subfund-grid">
              ${vcc.subFunds.map((fund) => `<div class="subfund-card"><div class="table-name">${fund.name}</div><div class="table-meta">${fund.strategy} · ${fund.assets}</div><div class="card-meta">${fund.filing}</div><span class="status-pill ${fund.status}">${statusLabel(fund.status)}</span></div>`).join("")}
            </div>
          </article>
        `).join("") : `<div class="queue-empty">No VCC structures in this workspace.</div>`}
      </div>
    </div>
  `;
}

function riskAssessmentView() {
  return `
    ${pageHead("Risk assessment", "Use clear risk statements, evidence, treatment owners, and next actions instead of a generic heatmap.", `<button class="secondary-button" data-action="open-task">${icon("plus")} Add treatment</button>`)}
    <div class="notice">${icon("gauge")} The useful unit is a risk statement: what can go wrong, why it matters, which evidence proves control, and who owns the next decision.</div>
    <div class="risk-register-grid">
      ${riskStatements.map((item) => `
        <article class="risk-statement-card">
          <div class="category-head"><div><span class="tag">${item.area}</span><h3>${item.risk}</h3></div><span class="status-pill ${item.status}">${statusLabel(item.status)}</span></div>
          <div class="risk-statement-meta">
            <span><strong>Inherent</strong>${item.inherent}</span>
            <span><strong>Residual</strong>${item.residual}</span>
            <span><strong>Owner</strong>${item.owner}</span>
          </div>
          <div class="evidence-row"><span>Evidence needed</span><small>${item.evidence}</small></div>
          <div class="evidence-row"><span>Next action</span><small>${item.next}</small></div>
          <button class="table-action" data-control-task="${item.area} risk treatment">Record treatment action</button>
        </article>
      `).join("")}
    </div>
  `;
}

function cddView() {
  const gates = [
    ["Client identity", "Legal name, registration, authority to act, connected parties", "on-track"],
    ["Beneficial ownership", "UBO, controllers, protectors, settlors, directors, nominees", "at-risk"],
    ["Source of wealth", "How the wealth was generated over time; corroborated narrative and documents", "action"],
    ["Source of funds", "Exact origin of the funds entering this relationship; bank trail and transfer logic", "action"],
    ["Screening", "Sanctions, PEP, adverse media, geography, product and channel risk", "at-risk"],
    ["Risk acceptance", "Director or adviser sign-off before activation where risk is high", "at-risk"],
  ];
  return `
    ${pageHead("CDD & KYC", "Make source of wealth, source of funds, beneficial ownership, screening, and risk acceptance the centre of client onboarding.", `<button class="secondary-button" data-action="run-screening">${icon("shield")} Run screening</button>`)}
    <div class="notice">${icon("alertCircle")} SOW answers how wealth was built. SOF answers where the specific onboarding money comes from. Both should be evidenced before a high-risk relationship is activated.</div>
    <div class="gate-grid">
      ${gates.map(([name, detail, status]) => `<div class="gate-card"><span class="status-pill ${status}">${statusLabel(status)}</span><h3>${name}</h3><p>${detail}</p><button class="table-action" data-control-task="${name} CDD evidence">Record evidence</button></div>`).join("")}
    </div>
    <div class="panel" style="margin-top:12px">
      <div class="panel-head"><div><h2>Client evidence matrix</h2><p class="panel-subtitle">SOW and SOF are visible as separate gates</p></div><span class="tag">${state.onboarding.clients.length} cases</span></div>
      <div class="table-wrap"><table><thead><tr><th>Case</th><th>Entity</th><th>Risk</th><th>Source of wealth</th><th>Source of funds</th><th>Next action</th><th></th></tr></thead><tbody>
        ${state.onboarding.clients.map((item) => `<tr><td><div class="table-name">${item.name}</div><div class="table-meta">${item.stage}</div></td><td>${item.entity}</td><td><span class="risk-pill ${item.risk}">${titleCase(item.risk)}</span></td><td>${evidenceStatus(item.sow)}</td><td>${evidenceStatus(item.sof)}</td><td>${item.next}</td><td><div class="button-row"><button class="table-action" data-advance-client="${item.id}">Advance</button><button class="table-action ghost" data-reverse-client="${item.id}" title="Undo last step">Undo</button></div></td></tr>`).join("")}
      </tbody></table></div>
    </div>
  `;
}

function clientOnboardingView() {
  const stages = ["Intake", "CDD evidence", "SOW/SOF review", "Risk acceptance", "Activation"];
  return `
    ${pageHead("Client onboarding", "A practical onboarding workflow where SOW and SOF are hard gates before activation.", `<button class="secondary-button" data-action="open-task">${icon("plus")} Add onboarding task</button>`)}
    <div class="pipeline">
      ${stages.map((stage, index) => `<div class="pipeline-step ${state.onboarding.clients.some((item) => item.stage === stage) ? "active" : ""}"><span>${index + 1}</span><strong>${stage}</strong></div>`).join("")}
    </div>
    <div class="onboarding-grid">
      ${state.onboarding.clients.map((item) => `
        <article class="onboarding-card">
          <div class="category-head"><div><span class="tag">${item.stage}</span><h3>${item.name}</h3><p>${item.entity}</p></div><span class="risk-pill ${item.risk}">${titleCase(item.risk)}</span></div>
          <div class="progress-track"><div class="progress-fill ${item.progress < 55 ? "action" : item.progress < 85 ? "warn" : ""}" style="width:${item.progress}%"></div></div>
          <div class="evidence-row"><span>Source of wealth</span>${evidenceStatus(item.sow)}</div>
          <div class="evidence-row"><span>Source of funds</span>${evidenceStatus(item.sof)}</div>
          <div class="evidence-row"><span>Owner</span><small>${item.owner}</small></div>
          <p>${item.next}</p>
          <div class="button-row">
            <button class="table-action" data-evidence-case="${item.id}" data-evidence-type="sow">Update SOW</button>
            <button class="table-action ghost" data-reverse-evidence="${item.id}" data-evidence-type="sow" title="Undo SOW step">${icon("undo")} SOW</button>
            <button class="table-action" data-evidence-case="${item.id}" data-evidence-type="sof">Update SOF</button>
            <button class="table-action ghost" data-reverse-evidence="${item.id}" data-evidence-type="sof" title="Undo SOF step">${icon("undo")} SOF</button>
          </div>
          <div class="button-row">
            <button class="primary-button compact-primary" data-advance-client="${item.id}">${icon("check")} Advance</button>
            <button class="secondary-button compact-primary" data-reverse-client="${item.id}">${icon("undo")} Reverse</button>
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function employeeOnboardingView() {
  const labels = {
    fitProper: "Fit and proper declaration",
    conflicts: "Conflicts and outside interests",
    pdpa: "PDPA and confidentiality training",
    cyber: "Cyber Hygiene training",
    trm: "MAS TRM awareness",
    access: "Least-privilege access approval",
  };
  return `
    ${pageHead("Employee onboarding", "Track fit-and-proper, conflicts, training, access, and MAS control awareness for new staff.", `<button class="secondary-button" data-action="open-task">${icon("plus")} Add employee task</button>`)}
    <div class="notice">${icon("briefcase")} Employee onboarding is part of the control environment: staff should not receive production access until training, conflicts, and access approvals are complete.</div>
    <div class="onboarding-grid">
      ${state.onboarding.employees.map((item) => {
        const entries = Object.entries(item.checklist);
        return `<article class="onboarding-card">
          <div class="category-head"><div><span class="tag">Starts ${item.start}</span><h3>${item.name}</h3><p>${item.role} · owner ${item.owner}</p></div><span class="status-pill ${item.progress === 100 ? "on-track" : "at-risk"}">${item.progress}%</span></div>
          <div class="progress-track"><div class="progress-fill ${item.progress < 55 ? "action" : item.progress < 85 ? "warn" : ""}" style="width:${item.progress}%"></div></div>
          <div class="checklist compact-checklist">
            ${entries.map(([key, done]) => `<div class="check-item"><span class="check-name"><span class="check-mark ${done ? "" : "warn"}">${icon(done ? "check" : "alertCircle")}</span>${labels[key]}</span><span class="status-pill ${done ? "on-track" : "action"}">${done ? "Done" : "Open"}</span></div>`).join("")}
          </div>
          <div class="button-row">
            <button class="primary-button compact-primary" data-advance-employee="${item.id}">${icon("check")} Complete next item</button>
            <button class="secondary-button compact-primary" data-reverse-employee="${item.id}">${icon("undo")} Undo item</button>
          </div>
        </article>`;
      }).join("")}
    </div>
  `;
}

function masTrmView() {
  return `
    ${pageHead("MAS TRM control tracker", "Track technology risk evidence for governance, outsourcing, secure change, critical systems, and recovery.", `<button class="secondary-button" data-control-task="MAS TRM review">${icon("plus")} Record review</button>`)}
    <div class="notice">${icon("activity")} Built as an evidence checklist for MAS Technology Risk Management expectations. Production use still needs accountable owners, server-side evidence storage, and adviser review.</div>
    <div class="control-matrix">
      ${trmControls.map(([name, detail, status, owner, evidence]) => `<article class="control-card"><div class="category-head"><h3>${name}</h3><span class="status-pill ${status}">${statusLabel(status)}</span></div><p>${detail}</p><div class="evidence-row"><span>Owner</span><small>${owner}</small></div><div class="evidence-row"><span>Evidence</span><small>${evidence}</small></div><button class="table-action" data-control-task="${name} TRM control">Update evidence</button></article>`).join("")}
    </div>
  `;
}

function cyberHygieneView() {
  return `
    ${pageHead("Cyber Hygiene", "Track the core hygiene controls that matter for family-office systems and regulated MFO operations.", `<button class="secondary-button" data-control-task="Cyber Hygiene attestation">${icon("plus")} Add attestation</button>`)}
    <div class="notice">${icon("lock")} Prioritise administrator accounts, patching, written standards, network perimeter, malware protection, and MFA evidence.</div>
    <div class="control-matrix">
      ${cyberHygieneControls.map(([name, detail, status, evidence]) => `<article class="control-card"><div class="category-head"><h3>${name}</h3><span class="status-pill ${status}">${statusLabel(status)}</span></div><p>${detail}</p><div class="evidence-row"><span>Evidence status</span><small>${evidence}</small></div><button class="table-action" data-control-task="${name} cyber hygiene control">Record check</button></article>`).join("")}
    </div>
  `;
}

function ewraView() {
  return `
    ${pageHead("EWRA / environmental risk", "Assess transition and physical environmental risk across discretionary portfolios and mandates.", `<button class="secondary-button" data-control-task="EWRA review">${icon("plus")} Add EWRA action</button>`)}
    <div class="notice">${icon("trendingUp")} EWRA is presented as a portfolio risk workflow: data coverage, sector exposure, transition risk, physical risk, and stewardship actions.</div>
    <div class="panel view-panel">
      <div class="table-wrap"><table><thead><tr><th>Portfolio</th><th>Structure</th><th>Exposure</th><th>Transition risk</th><th>Physical risk</th><th>Data coverage</th><th>Status</th><th></th></tr></thead><tbody>
        ${ewraAssessments.map(([portfolio, structure, exposure, transition, physical, coverage, status]) => `<tr><td><div class="table-name">${portfolio}</div></td><td>${structure}</td><td>${exposure}</td><td>${transition}</td><td>${physical}</td><td>${coverage}</td><td><span class="status-pill ${status}">${statusLabel(status)}</span></td><td><button class="table-action" data-control-task="${portfolio} EWRA evidence">Update</button></td></tr>`).join("")}
      </tbody></table></div>
    </div>
    <div class="category-grid" style="margin-top:12px">
      ${categoryCard("Governance", "userCheck", [["Board reporting", "Quarterly"], ["Risk appetite", "Defined"], ["Owner", "Priya"]])}
      ${categoryCard("Portfolio data", "fileText", [["Issuer coverage", "64%"], ["Private assets", "Manual"], ["Data gap", "1 fund"]])}
      ${categoryCard("Stewardship", "heartHandshake", [["Engagement notes", "3"], ["Escalations", "1"], ["Review cycle", "Jun"]])}
    </div>
  `;
}

function vccsView() {
  const vccs = visibleVccStructures();
  return `
    ${pageHead("VCCs and umbrella structures", "Track VCC annual returns, AGMs, officer updates, umbrella VCCs, and each sub-fund separately.", `<button class="secondary-button" data-action="open-task">${icon("plus")} Add VCC task</button>`)}
    <div class="notice">${icon("landmark")} ACRA guidance treats VCC filing details and sub-fund details as part of the annual return workflow. This screen keeps umbrella and sub-fund evidence visible.</div>
    <div class="vcc-workspace">
      ${vccs.length ? vccs.map((vcc) => `
        <article class="panel vcc-panel">
          <div class="panel-head"><div><h2>${vcc.name}</h2><p class="panel-subtitle">${vcc.type} · ${vcc.registration} · ${vcc.client}</p></div><span class="status-pill ${vcc.status}">${statusLabel(vcc.status)}</span></div>
          <div class="detail-grid vcc-detail-grid">
            <div class="detail-box"><div class="tiny-label">Fund manager</div><div class="detail-value">${vcc.manager}</div></div>
            <div class="detail-box"><div class="tiny-label">Custodian</div><div class="detail-value">${vcc.custodian}</div></div>
            <div class="detail-box"><div class="tiny-label">FYE</div><div class="detail-value">${vcc.fye}</div></div>
            <div class="detail-box"><div class="tiny-label">AGM due</div><div class="detail-value">${vcc.agmDue}</div></div>
            <div class="detail-box"><div class="tiny-label">Annual return</div><div class="detail-value">${vcc.arDue}</div></div>
          </div>
          <div class="source-note">${vcc.issue}</div>
          <div class="subfund-grid vcc-subfunds">
            ${vcc.subFunds.map((fund) => `<div class="subfund-card"><div class="category-head"><h3>${fund.name}</h3><span class="status-pill ${fund.status}">${statusLabel(fund.status)}</span></div><p>${fund.strategy}</p><div class="evidence-row"><span>Assets</span><small>${fund.assets}</small></div><div class="evidence-row"><span>NAV date</span><small>${fund.navDate}</small></div><div class="evidence-row"><span>Filing evidence</span><small>${fund.filing}</small></div><button class="table-action" data-control-task="${fund.name} VCC evidence">Update sub-fund</button></div>`).join("")}
          </div>
        </article>
      `).join("") : `<div class="panel queue-empty">No VCC structures in this workspace.</div>`}
    </div>
  `;
}

function obligationsView() {
  const sfaItems = workItemsFor("obligations");
  const summary = workbenchSummary(sfaItems);
  return `
    ${pageHead("MAS SFA rules", "Practical MAS/SFA control register for a CMS-licensed multi-family office or a single-family office monitoring adviser-managed structures.", `<button class="secondary-button" data-action="open-task">${icon("plus")} Add MAS task</button>`)}
    <div class="notice">${icon("landmark")} This replaces the generic obligations board. It focuses on licence scope, representative notifications, MAS returns, financial resources, business conduct, market conduct, outsourcing, complaints, and tax-incentive evidence.</div>
    <div class="stat-grid">
      ${statCard("SFA controls", summary.total, "Mapped to control register", "landmark", "obligations")}
      ${statCard("Action due", summary.action, "Needs evidence now", "alertCircle", "obligations")}
      ${statCard("At risk", summary.atRisk, "Review or gap", "gauge", "obligations")}
      ${statCard("13O / 13U", "2", "Tax incentive trackers", "fileText", "obligations")}
      ${statCard("MAS submissions", "Monthly", "MASNET / notifications", "upload", "obligations")}
    </div>
    <div class="panel view-panel">
      <div class="toolbar"><span class="tag">As at June 2026</span><span class="tag">MAS / SFA focus</span><div class="toolbar-spacer"></div><button class="secondary-button" data-view="workbench">${icon("checkCircle")} Full register</button></div>
      <div class="work-item-grid padded-grid">${sfaItems.map(workItemCard).join("")}</div>
    </div>
    <div class="rules-layout" style="margin-top:12px">
      <div class="panel">
        <div class="panel-head"><div><h2>13O / 13U readiness calculator</h2><p class="panel-subtitle">For SFO tax-incentive monitoring where applicable</p></div><span class="status-pill ${readiness().passed === 4 ? "on-track" : "at-risk"}">${readiness().passed} / 4 met</span></div>
        <form id="readiness-form" class="calculator-grid">
          <div class="form-field"><label for="calc-scheme">Scheme</label><select id="calc-scheme"><option ${state.calc.scheme === "13O" ? "selected" : ""}>13O</option><option ${state.calc.scheme === "13U" ? "selected" : ""}>13U</option></select></div>
          <div class="form-field"><label for="calc-aum">AUM · S$m</label><input id="calc-aum" min="0" step=".1" type="number" value="${state.calc.aum}" /></div>
          <div class="form-field"><label for="calc-professionals">Investment professionals</label><input id="calc-professionals" min="0" step="1" type="number" value="${state.calc.professionals}" /></div>
          <div class="form-field"><label for="calc-spend">Local business spend · S$</label><input id="calc-spend" min="0" step="10000" type="number" value="${state.calc.localSpend}" /></div>
          <div class="form-field"><label for="calc-deployment">Qualifying deployment · S$</label><input id="calc-deployment" min="0" step="100000" type="number" value="${state.calc.deployment}" /></div>
          <button class="primary-button calculator-button" type="submit">${icon("activity")} Recalculate</button>
        </form>
        <div class="readiness-list">
          ${readiness().checks.map(([label, pass, value]) => `<div class="readiness-row"><span class="check-mark ${pass ? "" : "warn"}">${icon(pass ? "check" : "alertCircle")}</span><span><strong>${label}</strong><small>${value}</small></span><span class="status-pill ${pass ? "on-track" : "action"}">${pass ? "Met" : "Gap"}</span></div>`).join("")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><h2>Existing MAS/SFA workflow tasks</h2><p class="panel-subtitle">User-created and seeded tasks remain here</p></div><span class="tag">${allObligations().length} tasks</span></div>
        <div class="obligation-list">${allObligations().slice(0, 6).map((item) => `<div class="obligation-row"><div><div class="obligation-name">${esc(item.name)}</div><div class="obligation-desc">${esc(item.description)}</div></div><span class="status-pill ${item.status}">${statusLabel(item.status)}</span></div>`).join("")}</div>
      </div>
    </div>
  `;
}

function trmCyberView() {
  const items = workItemsFor("trm-cyber");
  const summary = workbenchSummary(items);
  return `
    ${pageHead("TRM & cyber controls", "One practical technology-risk screen for SFO/MFO compliance operations: systems, vendors, access, patching, MFA, resilience, and BCP.", `<button class="secondary-button" data-control-task="TRM and cyber review">${icon("plus")} Record review</button>`)}
    <div class="notice">${icon("lock")} MAS TRM and Cyber Hygiene are combined here because family-office compliance teams usually evidence them together with IT vendors and system owners.</div>
    <div class="stat-grid">
      ${statCard("Tech controls", summary.total, "TRM, cyber, BCP", "lock", "trm-cyber")}
      ${statCard("Action due", summary.action, "Patch or access evidence", "alertCircle", "trm-cyber")}
      ${statCard("At risk", summary.atRisk, "Vendor / recovery gaps", "gauge", "trm-cyber")}
      ${statCard("Admin accounts", "Review", "Privileged access", "userCheck", "trm-cyber")}
      ${statCard("MFA exceptions", "2", "Adviser accounts", "shield", "trm-cyber")}
    </div>
    <div class="work-item-grid">${items.map(workItemCard).join("")}</div>
    <div class="tracker-grid" style="margin-top:12px">
      <div class="panel">
        <div class="panel-head"><div><h2>MAS TRM evidence</h2><p class="panel-subtitle">Technology governance, outsourcing, secure change, recovery</p></div><span class="tag">${trmControls.length} checks</span></div>
        <div class="control-matrix compact-control-matrix">${trmControls.map(([name, detail, status, owner, evidence]) => `<article class="control-card"><div class="category-head"><h3>${name}</h3><span class="status-pill ${status}">${statusLabel(status)}</span></div><p>${detail}</p><div class="evidence-row"><span>Evidence</span><small>${evidence}</small></div><button class="table-action" data-control-task="${name} TRM control">Update</button></article>`).join("")}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><h2>Cyber Hygiene evidence</h2><p class="panel-subtitle">Admin accounts, patching, standards, perimeter, malware, MFA</p></div><span class="tag">${cyberHygieneControls.length} checks</span></div>
        <div class="control-matrix compact-control-matrix">${cyberHygieneControls.map(([name, detail, status, evidence]) => `<article class="control-card"><div class="category-head"><h3>${name}</h3><span class="status-pill ${status}">${statusLabel(status)}</span></div><p>${detail}</p><div class="evidence-row"><span>Evidence</span><small>${evidence}</small></div><button class="table-action" data-control-task="${name} cyber hygiene control">Update</button></article>`).join("")}</div>
      </div>
    </div>
  `;
}

function trainingView() {
  const statusClassName = !state.training.submitted ? "at-risk" : trainingPassed() ? "on-track" : "action";
  const evidenceId = state.training.certificateId || "Not issued";
  return `
    ${pageHead("Training quiz", "Staff TRM, cyber hygiene, PDPA and responsible AI awareness attestation with saved score evidence.", `<button class="secondary-button" data-action="export-training">${icon("download")} Export training evidence</button>`)}
    <div class="notice">${icon("checkCircle")} This module turns awareness training into audit evidence: staff details, pass mark, scored MCQ answers, attempt history and source basis are kept together.</div>
    <div class="stat-grid">
      ${statCard("Score", state.training.submitted ? `${trainingPercent()}%` : `${trainingAnswered()} / ${trainingQuiz.length}`, state.training.submitted ? `${trainingCorrect()} correct answers` : "Answered questions", "checkCircle", "training")}
      ${statCard("Pass mark", `${TRAINING_PASS_MARK}%`, trainingPassed() ? "Passed" : "Required", "shield", "training")}
      ${statCard("Status", trainingStatusLabel(), state.training.completedAt || "Not completed", "activity", "training")}
      ${statCard("Evidence ID", evidenceId, TRAINING_VERSION, "fileText", "training")}
      ${statCard("Attempts", state.training.attempts.length, `Checked ${TRAINING_CHECK_DATE}`, "clock", "training")}
    </div>
    <div class="training-layout">
      <section class="panel training-panel">
        <div class="panel-head"><div><h2>Attestation details</h2><p class="panel-subtitle">These values appear in the exported training evidence pack</p></div><span class="status-pill ${statusClassName}">${trainingStatusLabel()}</span></div>
        <div class="training-form">
          <div class="form-field"><label for="training-learner">Learner name</label><input id="training-learner" data-training-field="learnerName" value="${esc(state.training.learnerName)}" /></div>
          <div class="form-field"><label for="training-role">Role / team</label><input id="training-role" data-training-field="learnerRole" value="${esc(state.training.learnerRole)}" /></div>
          <div class="form-field"><label for="training-company">Company / family office</label><input id="training-company" data-training-field="companyName" value="${esc(state.training.companyName)}" /></div>
          <div class="form-field"><label for="training-officer">Compliance owner</label><input id="training-officer" data-training-field="complianceOfficer" value="${esc(state.training.complianceOfficer)}" /></div>
        </div>
        <div class="training-summary ${state.training.submitted ? (trainingPassed() ? "passed" : "failed") : ""}">
          <div>
            <span class="eyebrow">${state.training.submitted ? "Submitted result" : "Draft attempt"}</span>
            <strong>${state.training.submitted ? `${trainingPercent()}%` : `${trainingAnswered()} of ${trainingQuiz.length}`}</strong>
            <p>${state.training.submitted ? (trainingPassed() ? "Training passed. Export the evidence pack for the audit file." : "Review required. Clear or change answers, then submit a new attempt.") : "Answer all MCQs, then submit for scoring."}</p>
          </div>
          <div class="score-ring"><span>${TRAINING_PASS_MARK}%</span><small>Pass mark</small></div>
        </div>
        <div class="button-row training-actions">
          <button class="primary-button" data-action="submit-training">${icon("checkCircle")} Submit quiz</button>
          <button class="secondary-button" data-action="clear-training">${icon("x")} Clear answers</button>
          <button class="secondary-button" data-action="export-training">${icon("download")} Export evidence</button>
          <button class="secondary-button" data-action="print-training"${trainingPassed() ? "" : " disabled"}>${icon("fileText")} Print certificate</button>
        </div>
      </section>
      <section class="panel training-panel">
        <div class="panel-head"><div><h2>Evidence basis</h2><p class="panel-subtitle">Reference sources used for the awareness test</p></div><span class="tag">Singapore sources</span></div>
        <div class="source-stack">
          ${trainingSources.map(([agency, title, note, url]) => `<article class="training-source"><span class="tag">${agency}</span><h3>${title}</h3><p>${note}</p><a class="text-link" href="${url}" target="_blank" rel="noreferrer">Open source</a></article>`).join("")}
        </div>
      </section>
    </div>
    <section class="panel view-panel training-questions-panel">
      <div class="panel-head"><div><h2>Scored MCQs</h2><p class="panel-subtitle">Four answer choices per question. Explanations show after submission.</p></div><span class="tag">${trainingQuiz.length} questions</span></div>
      <div class="quiz-list">
        ${trainingQuiz.map((item, itemIndex) => `
          <article class="quiz-card">
            <div class="quiz-card-head"><span class="tag">${item.topic}</span><span class="tiny-label">Question ${itemIndex + 1}</span></div>
            <h3>${item.question}</h3>
            <div class="option-list">
              ${item.options.map((option, optionIndex) => `
                <button class="${trainingOptionClass(item, optionIndex)}" data-training-answer="${item.id}" data-answer="${optionIndex}">
                  <span>${String.fromCharCode(65 + optionIndex)}</span>
                  <strong>${option}</strong>
                </button>
              `).join("")}
            </div>
            ${state.training.submitted ? `<div class="feedback ${Number(state.training.answers[item.id]) === item.answer ? "correct" : "wrong"}"><strong>${Number(state.training.answers[item.id]) === item.answer ? "Correct" : state.training.answers[item.id] === undefined ? "Unanswered" : "Review this"}</strong><p>${item.explain}</p></div>` : ""}
          </article>
        `).join("")}
      </div>
    </section>
    <section class="panel view-panel">
      <div class="panel-head"><div><h2>Attempt history</h2><p class="panel-subtitle">Browser-saved demo history for audit-trail storytelling</p></div><span class="tag">${state.training.attempts.length} records</span></div>
      <div class="table-wrap"><table><thead><tr><th>Attempt</th><th>Date</th><th>Learner</th><th>Score</th><th>Status</th><th>Evidence ID</th></tr></thead><tbody>
        ${state.training.attempts.length ? state.training.attempts.map((attempt, index) => `<tr><td><div class="table-name">Attempt ${state.training.attempts.length - index}</div></td><td>${attempt.date}</td><td>${esc(attempt.learner)}</td><td>${attempt.score}%</td><td><span class="status-pill ${attempt.passed ? "on-track" : "action"}">${attempt.passed ? "Passed" : "Review required"}</span></td><td>${attempt.evidenceId || "Not issued"}</td></tr>`).join("") : `<tr><td colspan="6"><div class="queue-empty">No submitted attempts yet.</div></td></tr>`}
      </tbody></table></div>
    </section>
  `;
}

function calendarView() {
  const cells = [...Array(35)].map((_, index) => {
    const day = index + 1;
    const muted = day > 30;
    const date = muted ? day - 30 : day;
    const events = muted ? [] : calendarEvents[date] || [];
    return `<div class="calendar-day ${muted ? "muted" : ""}"><div class="calendar-date">${date}</div>${events.map(([title, type]) => `<div class="calendar-event ${type}">${title}</div>`).join("")}</div>`;
  });
  return `
    ${pageHead("Compliance calendar", "Plan filings, recurring reviews, evidence snapshots, and committee dates.", `<button class="secondary-button" data-action="open-task">${icon("plus")} Add deadline</button>`)}
    <div class="panel view-panel">
      <div class="panel-head"><div><h2>June 2026</h2><p class="panel-subtitle">Singapore · GMT+8</p></div><div class="button-row"><button class="secondary-button">${icon("chevronRight")} Today</button></div></div>
      <div class="calendar-grid">${["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => `<div class="calendar-weekday">${day}</div>`).join("")}${cells.join("")}</div>
    </div>
  `;
}

function documentsView() {
  return `
    ${pageHead("Evidence library", "Organise policies, registers, supporting evidence, and working papers.", `<button class="secondary-button" data-action="toast-upload">${icon("upload")} Upload evidence</button>`)}
    <div class="panel view-panel">
      <div class="toolbar"><span class="tag">85 documents</span><span class="tag">93% current</span><div class="toolbar-spacer"></div><button class="secondary-button">${icon("filter")} Categories</button></div>
      <div class="doc-grid">
        ${documents.map(([iconName, title, meta]) => `<div class="doc-card"><span class="doc-icon">${icon(iconName)}</span><span><div class="doc-title">${title}</div><div class="doc-meta">${meta}</div></span></div>`).join("")}
      </div>
    </div>
  `;
}

function rulesView() {
  const result = readiness();
  const packIcon = (id) => ({ vcc: "landmark", trust: "users", trm: "activity", cyber: "lock", ewra: "trendingUp", cdd: "shield" })[id] || "layers";
  return `
    ${pageHead("Singapore rule packs", "Assign versioned control packs by office model, entity type, fund structure, and incentive scheme.")}
    <div class="notice">${icon("layers")} SFO tax-incentive readiness and MFO regulated-business controls are separated. Source links and adviser attestations are recorded for each pack.</div>
    <div class="rules-layout">
      <div class="panel">
        <div class="panel-head"><div><h2>13O / 13U readiness calculator</h2><p class="panel-subtitle">Live eligibility snapshot · operational guidance only</p></div><span class="status-pill ${result.passed === 4 ? "on-track" : "at-risk"}">${result.passed} / 4 met</span></div>
        <form id="readiness-form" class="calculator-grid">
          <div class="form-field"><label for="calc-scheme">Scheme</label><select id="calc-scheme"><option ${state.calc.scheme === "13O" ? "selected" : ""}>13O</option><option ${state.calc.scheme === "13U" ? "selected" : ""}>13U</option></select></div>
          <div class="form-field"><label for="calc-aum">AUM · S$m</label><input id="calc-aum" min="0" step=".1" type="number" value="${state.calc.aum}" /></div>
          <div class="form-field"><label for="calc-professionals">Investment professionals</label><input id="calc-professionals" min="0" step="1" type="number" value="${state.calc.professionals}" /></div>
          <div class="form-field"><label for="calc-spend">Local business spend · S$</label><input id="calc-spend" min="0" step="10000" type="number" value="${state.calc.localSpend}" /></div>
          <div class="form-field"><label for="calc-deployment">Qualifying deployment · S$</label><input id="calc-deployment" min="0" step="100000" type="number" value="${state.calc.deployment}" /></div>
          <button class="primary-button calculator-button" type="submit">${icon("activity")} Recalculate</button>
        </form>
        <div class="readiness-list">
          ${result.checks.map(([label, pass, value]) => `<div class="readiness-row"><span class="check-mark ${pass ? "" : "warn"}">${icon(pass ? "check" : "alertCircle")}</span><span><strong>${label}</strong><small>${value}</small></span><span class="status-pill ${pass ? "on-track" : "action"}">${pass ? "Met" : "Gap"}</span></div>`).join("")}
        </div>
        <div class="source-note">Qualifying deployment target: lower of S$10m or 10% AUM. <a href="https://invest.edb.gov.sg/gov-support/sfo-setup-guide" target="_blank" rel="noreferrer">Open EDB source</a></div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><h2>Generated statutory deadlines</h2><p class="panel-subtitle">Event and FYE driven control library</p></div><span class="tag">7 rules</span></div>
        <div class="deadline-rule-list">
          ${statutoryDeadlines.map(([name, rule, scope, due, type]) => `<div class="deadline-rule"><div><div class="obligation-name">${name}</div><div class="obligation-desc">${rule} · ${scope}</div></div><span class="status-pill ${type === "action" ? "action" : type === "warn" ? "at-risk" : "on-track"}">${due}</span></div>`).join("")}
        </div>
      </div>
    </div>
    <div class="panel" style="margin-top:12px">
      <div class="panel-head"><div><h2>Rule-pack library</h2><p class="panel-subtitle">Versioned sources, scopes, and adviser approval status</p></div><span class="tag">${rulePacks.length} active packs</span></div>
      <div class="rule-pack-grid">
        ${rulePacks.map((pack) => {
          const approval = state.ruleApprovals[pack.id];
          return `<article class="rule-pack-card">
            <div class="category-head"><span class="category-icon">${icon(packIcon(pack.id))}</span><span class="status-pill ${approval === "approved" ? "on-track" : "at-risk"}">${approval === "approved" ? "Adviser approved" : "Review due"}</span></div>
            <h3>${pack.name}</h3><p>${pack.scope}</p>
            <div class="rule-card-foot"><span>${pack.controls} controls</span><span>${pack.effective}</span></div>
            <div class="button-row" style="margin-top:9px"><a class="text-link" href="${pack.url}" target="_blank" rel="noreferrer">${pack.source}</a>${approval !== "approved" ? `<button class="table-action" data-rule-approve="${pack.id}">Attest</button>` : `<button class="table-action ghost" data-rule-revoke="${pack.id}">${icon("undo")} Undo attest</button>`}</div>
          </article>`;
        }).join("")}
      </div>
    </div>
  `;
}

function registersView() {
  return `
    ${pageHead("Statutory registers", "Maintain controller and nominee records with private-register and central-register deadlines.", `<button class="secondary-button" data-action="register-help">${icon("eye")} Filing guide</button>`)}
    <div class="notice">${icon("alertCircle")} RORC changes should be captured in the private register within 7 calendar days after confirmation. Central RORC, ROND, and RONS updates should be filed within 2 business days after the private register is updated.</div>
    <div class="stat-grid register-stats">
      ${statCard("Tracked registers", state.registers.length, "Private and central records", "fileText", "registers")}
      ${statCard("Central update due", state.registers.filter((item) => item[4] === "action").length, "Checker action required", "alertCircle", "approvals")}
      ${statCard("Annual confirmations", "1", "Controller notice cycle", "calendar", "calendar")}
      ${statCard("Register controls", "92%", "Current evidence coverage", "checkCircle", "documents")}
      ${statCard("Nominee arrangements", "2", "ROND and RONS mapped", "users", "relationships")}
    </div>
    <div class="panel">
      <div class="panel-head"><div><h2>Corporate-register tracker</h2><p class="panel-subtitle">Event-driven updates and annual verification</p></div><a class="text-link" href="https://www.acra.gov.sg/manage/companies/legal-requirements-common-offences/maintaining-local-companys-information-registers/company-registers/" target="_blank" rel="noreferrer">Open ACRA guidance</a></div>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Register</th><th>Current control state</th><th>Deadline</th><th>Status</th><th></th></tr></thead>
          <tbody>
            ${state.registers.map(([id, name, detail, due, status]) => `<tr><td><div class="table-name">${name}</div><div class="table-meta">${id.toUpperCase()} · statutory register</div></td><td>${detail}</td><td>${due}</td><td><span class="status-pill ${status}">${statusLabel(status)}</span></td><td><div class="button-row"><button class="table-action" data-register-action="${id}">${status === "action" ? "Send to checker" : "Record verification"}</button>${status !== "action" ? `<button class="table-action ghost" data-register-revert="${id}" title="Undo last step">Undo</button>` : ""}</div></td></tr>`).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function relationshipsView() {
  return `
    ${pageHead("Ownership & KYC", "Visualise relationships, monitor beneficial-owner evidence, and retain sanctions-screening history.", `<button class="secondary-button" data-action="run-screening">${icon("shield")} Run screening</button>`)}
    <div class="tracker-grid">
      <div class="panel">
        <div class="panel-head"><div><h2>Tan Heritage Trust relationship map</h2><p class="panel-subtitle">Beneficial ownership and oversight relationships</p></div><span class="risk-pill critical">Enhanced review</span></div>
        <div class="relationship-map">
          <div class="map-line line-a"></div><div class="map-line line-b"></div><div class="map-line line-c"></div><div class="map-line line-d"></div>
          <div class="map-node node-trust"><strong>Tan Heritage Trust</strong><small>13U enhanced-tier fund</small></div>
          <div class="map-node node-settlor"><strong>Daniel Tan</strong><small>Settlor · PEP-linked</small></div>
          <div class="map-node node-ubo"><strong>Michelle Tan</strong><small>Beneficial owner</small></div>
          <div class="map-node node-sfo"><strong>Harbourline SFO</strong><small>Investment manager</small></div>
          <div class="map-node node-bank"><strong>Private bank</strong><small>Custody relationship</small></div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><h2>Screening history</h2><p class="panel-subtitle">Sanctions, PEP, and adverse-media workflow</p></div><span class="status-pill on-track">Automated</span></div>
        <div class="screening-summary">
          <div class="detail-box"><div class="tiny-label">Last run</div><div class="detail-value">${state.screenings.lastRun}</div></div>
          <div class="detail-box"><div class="tiny-label">People screened</div><div class="detail-value">${state.screenings.persons}</div></div>
          <div class="detail-box"><div class="tiny-label">Exceptions</div><div class="detail-value">${state.screenings.exceptions}</div></div>
        </div>
        <div class="audit-list compact-audit">
          ${[["shield", "Monthly sanctions rescreening", "Completed · 01 Jun 2026"], ["alertCircle", "PEP-linked review · Daniel Tan", "Enhanced review open"], ["checkCircle", "Adverse-media exception review", "Closed · 28 May 2026"]].map(([iconName, title, detail]) => `<div class="audit-row"><span class="audit-icon">${icon(iconName)}</span><div class="audit-text"><strong>${title}</strong><br />${detail}</div></div>`).join("")}
        </div>
      </div>
    </div>
    <div class="panel" style="margin-top:12px">
      <div class="panel-head"><div><h2>KYC evidence expiry</h2><p class="panel-subtitle">Beneficial owners, directors, protectors, and related persons</p></div><span class="tag">${people.length} monitored people</span></div>
      <div class="table-wrap"><table><thead><tr><th>Person</th><th>Relationship</th><th>Review type</th><th>Evidence state</th><th>Next refresh</th></tr></thead><tbody>${people.map(([, name, relation, category, evidence, refresh]) => `<tr><td><div class="table-name">${name}</div></td><td>${relation}</td><td>${category}</td><td><span class="status-pill ${evidence === "Clear" ? "on-track" : evidence === "Enhanced" ? "at-risk" : "action"}">${evidence}</span></td><td>${refresh}</td></tr>`).join("")}</tbody></table></div>
    </div>
  `;
}

function approvalsView() {
  const pending = state.approvals.filter((item) => item[5] === "pending").length;
  return `
    ${pageHead("Maker-checker approvals", "Route material register, tax-incentive, and evidence actions through independent review.")}
    <div class="notice">${icon("userCheck")} Current demo role: <strong>${state.currentRole}</strong>. ${canApprove() ? "Checker actions are enabled." : "Switch to Director or External adviser in Access control to complete checker actions."}</div>
    <div class="panel">
      <div class="panel-head"><div><h2>Approval queue</h2><p class="panel-subtitle">${pending} items require independent review</p></div><span class="tag">Escalation SLA · 2 days</span></div>
      <div class="table-wrap"><table><thead><tr><th>Item</th><th>Entity</th><th>Maker</th><th>Control area</th><th>Status</th><th></th></tr></thead><tbody>
        ${state.approvals.map(([id, name, entity, maker, area, status]) => `<tr><td><div class="table-name">${name}</div></td><td>${entity}</td><td>${maker}</td><td><span class="tag">${area}</span></td><td><span class="status-pill ${status === "approved" ? "on-track" : "at-risk"}">${titleCase(status)}</span></td><td>${status === "pending" ? `<button class="table-action" data-approval="${id}" ${canApprove() ? "" : "disabled"}>Approve</button>` : `<button class="table-action ghost" data-approval-revert="${id}" ${canApprove() ? "" : "disabled"} title="Revert approval">${icon("undo")} Revert</button>`}</td></tr>`).join("")}
      </tbody></table></div>
    </div>
    <div class="category-grid" style="margin-top:12px">
      ${categoryCard("Escalation rules", "alertCircle", [["Critical KYC overdue", "Immediate"], ["Statutory filing due", "48 hours"], ["Evidence expiry", "30 days"]])}
      ${categoryCard("Segregation of duties", "userCheck", [["Maker", "Compliance"], ["Checker", "Director"], ["Adviser sign-off", "Tax / legal"]])}
      ${categoryCard("Approval coverage", "checkCircle", [["Register updates", "100%"], ["Tax snapshots", "100%"], ["Board packs", "100%"]])}
    </div>
  `;
}

function privacyView() {
  const pdpaItems = workItemsFor("privacy");
  const summary = workbenchSummary(pdpaItems);
  return `
    ${pageHead("PDPA / DPO", "Manage PDPA accountability, DPO ownership, consent, retention, access/correction, transfer controls, and data-breach response.", `<button class="secondary-button" data-action="open-incident">${icon("plus")} Log incident</button>`)}
    <div class="notice">${icon("lock")} PDPA stays in the core app because family-office compliance still needs clear DPO ownership, breach assessment, retention controls, and personal-data handling evidence.</div>
    <div class="stat-grid">
      ${statCard("PDPA controls", summary.total, "Control register mapped", "lock", "privacy")}
      ${statCard("DPO owner", "1", "Sarah Lim · assigned", "userCheck", "privacy")}
      ${statCard("Retention classes", retentionClasses.length, "Policy-driven lifecycle", "fileText", "privacy")}
      ${statCard("Open incidents", state.incidents.filter((item) => item[3] !== "Closed").length, "Breach-response tracker", "alertCircle", "privacy")}
      ${statCard("Data breach", "Assess", "Notify if required", "shield", "privacy")}
    </div>
    <div class="work-item-grid" style="margin-bottom:12px">${pdpaItems.map(workItemCard).join("")}</div>
    <div class="tracker-grid">
      <div class="panel">
        <div class="panel-head"><div><h2>Retention and handling policy</h2><p class="panel-subtitle">Applied by evidence classification</p></div><a class="text-link" href="https://www.pdpc.gov.sg/help-and-resources/2026/01/advisory-on-common-data-protection-lapses-and-recommended-measures" target="_blank" rel="noreferrer">PDPC advisory</a></div>
        <div class="deadline-rule-list">${retentionClasses.map(([name, rule, access]) => `<div class="deadline-rule"><div><div class="obligation-name">${name}</div><div class="obligation-desc">${rule}</div></div><span class="tag">${access}</span></div>`).join("")}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><h2>Breach-response tracker</h2><p class="panel-subtitle">Assessment, notification, and remediation history</p></div><span class="tag">${state.incidents.length} records</span></div>
        <div class="audit-list compact-audit">${state.incidents.map(([, name, type, status, date, note]) => `<div class="audit-row"><span class="audit-icon">${icon(status === "Closed" ? "checkCircle" : "alertCircle")}</span><div class="audit-text"><strong>${esc(name)}</strong><br />${esc(type)} · ${esc(note)}</div><div class="audit-time">${esc(date)}</div></div>`).join("")}</div>
      </div>
    </div>
  `;
}

function strPillClass(status) {
  if (status === "Raised") return "action";
  if (status === "MLRO review") return "at-risk";
  return "on-track";
}

function strView() {
  const open = state.strReports.filter((item) => item[5] === "Raised" || item[5] === "MLRO review").length;
  const filed = state.strReports.filter((item) => item[5] === "Filed (STRO)").length;
  const noFile = state.strReports.filter((item) => item[5].startsWith("No-file")).length;
  const stages = ["Raised", "MLRO review", "Filed (STRO)"];
  return `
    ${pageHead("STR & AML alerts", "Escalate internal suspicions to the MLRO, decide whether to file a Suspicious Transaction Report with STRO, and evidence every decision.", `<button class="secondary-button" data-action="open-str">${icon("flag")} Raise suspicion report</button>`)}
    <div class="notice">${icon("alertCircle")} Filing is mandatory under the CDSA (s.39) and TSOFA when there is knowledge or reasonable suspicion that property is criminal proceeds or linked to terrorism financing. Do not tip off the subject (s.48 CDSA) — continue the relationship only on MLRO direction.</div>
    <div class="stat-grid">
      ${statCard("Open reviews", open, "Awaiting MLRO direction", "alertCircle", "str")}
      ${statCard("Filed with STRO", filed, "SONAR submissions logged", "flag", "str")}
      ${statCard("No-file decisions", noFile, "Rationale documented", "fileText", "str")}
      ${statCard("MLRO owner", "1", "Sarah Lim · MLRO", "userCheck", "str")}
      ${statCard("Filing channel", "SONAR", "STRO online reporting", "shield", "str")}
    </div>
    <div class="pipeline">
      ${stages.map((stage, index) => `<div class="pipeline-step ${state.strReports.some((item) => item[5] === stage) ? "active" : ""}"><span>${index + 1}</span><strong>${stage}</strong></div>`).join("")}
    </div>
    <div class="panel" style="margin-top:12px">
      <div class="panel-head"><div><h2>Suspicious transaction register</h2><p class="panel-subtitle">Internal escalation, MLRO decision, and STRO filing trail</p></div><span class="tag">${state.strReports.length} cases</span></div>
      <div class="table-wrap"><table><thead><tr><th>Reference</th><th>Subject</th><th>Typology / trigger</th><th>Raised by</th><th>Status</th><th>STRO ref</th><th></th></tr></thead><tbody>
        ${state.strReports.map(([id, subject, typology, raisedBy, raised, status, reference]) => `<tr>
          <td><div class="table-name">${esc(id.toUpperCase())}</div><div class="table-meta">${esc(raised)}</div></td>
          <td>${esc(subject)}</td>
          <td>${esc(typology)}</td>
          <td>${esc(raisedBy)}</td>
          <td><span class="status-pill ${strPillClass(status)}">${esc(status)}</span></td>
          <td>${esc(reference)}</td>
          <td><div class="button-row">
            ${status === "Filed (STRO)" || status.startsWith("No-file") ? "" : `<button class="table-action" data-str-advance="${id}">${status === "MLRO review" ? "File with STRO" : "Send to MLRO"}</button>`}
            ${status === "MLRO review" ? `<button class="table-action ghost" data-str-nofile="${id}">No-file</button>` : ""}
            ${status === "Raised" ? "" : `<button class="table-action ghost" data-str-reverse="${id}" title="Undo last step">${icon("undo")} Undo</button>`}
          </div></td>
        </tr>`).join("")}
      </tbody></table></div>
    </div>
    <div class="tracker-grid" style="margin-top:12px">
      <div class="panel">
        <div class="panel-head"><div><h2>When to escalate</h2><p class="panel-subtitle">Common family-office red flags</p></div></div>
        <div class="deadline-rule-list">${[
          ["Source-of-funds mismatch", "Inflows inconsistent with documented SOW/SOF or the client profile."],
          ["Unusual third-party flows", "Funds to or from unrelated third parties without economic rationale."],
          ["Sanctions / adverse media nexus", "Screening hit, negative news, or links to high-risk jurisdictions."],
          ["Structuring or reluctance", "Transactions split to avoid thresholds, or client evasiveness on CDD."],
        ].map(([name, rule]) => `<div class="deadline-rule"><div><div class="obligation-name">${name}</div><div class="obligation-desc">${rule}</div></div></div>`).join("")}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><h2>Statutory basis & filing</h2><p class="panel-subtitle">Singapore AML/CFT reporting</p></div></div>
        <div class="deadline-rule-list">
          <div class="deadline-rule"><div><div class="obligation-name">CDSA s.39 — STR duty</div><div class="obligation-desc">File when you know or suspect property represents proceeds of crime.</div></div><a class="text-link" href="https://sso.agc.gov.sg/Act/CDTOSCCBA1992" target="_blank" rel="noreferrer">Read</a></div>
          <div class="deadline-rule"><div><div class="obligation-name">TSOFA — terrorism financing</div><div class="obligation-desc">Report suspected terrorism-financing property or transactions.</div></div><a class="text-link" href="https://sso.agc.gov.sg/Act/TSFA2002" target="_blank" rel="noreferrer">Read</a></div>
          <div class="deadline-rule"><div><div class="obligation-name">STRO — file via SONAR</div><div class="obligation-desc">Suspicious Transaction Reporting Office online reporting portal.</div></div><a class="text-link" href="https://www.police.gov.sg/sonar" target="_blank" rel="noreferrer">SONAR</a></div>
        </div>
      </div>
    </div>
  `;
}

function reportsView() {
  return `
    ${pageHead("Reports & evidence packs", "Generate adviser-ready, auditor-ready, and board-ready compliance summaries.", `<button class="secondary-button" data-action="create-pack">${icon("plus")} Generate pack</button>`)}
    <div class="notice">${icon("fileText")} Report packs include current risk posture, open actions, statutory deadlines, approvals, and evidence status for the selected workspace.</div>
    <div class="report-grid">
      ${[
        ["Board compliance pack", "Monthly governance summary", "Directors · PDF-ready", "01 Jun 2026"],
        ["Adviser review digest", "Material rule and evidence changes", "Tax and legal advisers", "30 May 2026"],
        ["Audit evidence index", "Document register with control mapping", "Auditor · CSV-ready", "28 May 2026"],
        ["13O / 13U readiness pack", "Eligibility evidence and gaps", "Tax adviser", "02 Jun 2026"],
        ["VCC annual-return pack", "FYE, AGM, sub-fund, and filing evidence", "Company secretary", "31 May 2026"],
        ["Client onboarding pack", "CDD, SOW, SOF, screening, and risk acceptance", "Compliance committee", "07 Jun 2026"],
        ["MAS TRM pack", "Technology risk controls, gaps, and recovery evidence", "Board / adviser", "07 Jun 2026"],
        ["Cyber Hygiene pack", "Admin accounts, patches, standards, malware, perimeter, MFA", "IT owner", "07 Jun 2026"],
        ["EWRA pack", "Environmental risk assessment and portfolio data gaps", "Investment committee", "07 Jun 2026"],
        ["PDPA control pack", "Retention, access, and incident records", "DPO", "29 May 2026"],
        ["STR / AML filing log", "Suspicion reports, MLRO decisions, and STRO references", "MLRO · auditor", "07 Jun 2026"],
      ].map(([title, description, audience, date]) => `<article class="report-card"><span class="doc-icon">${icon("fileText")}</span><div><h3>${title}</h3><p>${description}</p><div class="rule-card-foot"><span>${audience}</span><span>${date}</span></div><button class="table-action" data-action="download-pack" data-pack="${title}">Generate</button></div></article>`).join("")}
    </div>
  `;
}

function securityView() {
  const roles = [
    ["Compliance lead", "Prepare tasks, registers, and evidence", "Maker"],
    ["Director", "Independent approval and workspace oversight", "Checker"],
    ["External adviser", "Rule-pack attestation and report review", "Adviser"],
    ["Read-only auditor", "View evidence and audit history", "Read only"],
  ];
  return `
    ${pageHead("Access control", "Review authentication posture, role permissions, workspace separation, and operational resilience.", `<button class="secondary-button" data-action="lock-session">${icon("lock")} Lock session</button>`)}
    <div class="notice">${icon("shield")} Production deployment requires server-side identity, encrypted storage, backups, and monitored infrastructure. This local demo persists state in this browser only.</div>
    <div class="stat-grid">
      ${statCard("MFA policy", "Enforced", "All privileged roles", "lock", "security")}
      ${statCard("Workspace isolation", "Enabled", "SFO / MFO scoped views", "layers", "security")}
      ${statCard("Encryption", "Required", "Production control", "shield", "security")}
      ${statCard("Backups", "Daily", "Production control", "activity", "security")}
      ${statCard("Audit logging", "Enabled", "Immutable target state", "fileText", "audit")}
    </div>
    <div class="tracker-grid">
      <div class="panel">
        <div class="panel-head"><div><h2>Demo role switcher</h2><p class="panel-subtitle">Exercise maker-checker permissions</p></div><span class="tag">Current · ${state.currentRole}</span></div>
        <div class="security-role-switch"><label for="role-select">Active demo role</label><select id="role-select">${roles.map(([name]) => `<option ${state.currentRole === name ? "selected" : ""}>${name}</option>`).join("")}</select></div>
        <div class="table-wrap"><table><thead><tr><th>Role</th><th>Permission scope</th><th>Control position</th></tr></thead><tbody>${roles.map(([name, scope, position]) => `<tr><td><div class="table-name">${name}</div></td><td>${scope}</td><td><span class="tag">${position}</span></td></tr>`).join("")}</tbody></table></div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><h2>Resilience controls</h2><p class="panel-subtitle">Production deployment checklist</p></div><span class="status-pill at-risk">Implementation boundary</span></div>
        <div class="checklist security-checklist">
          ${[["MFA for privileged users", true], ["Role-based access control", true], ["Workspace isolation model", true], ["Encrypted database and object storage", false], ["Automated backup restore tests", false], ["Monitored production deployment", false]].map(([name, done]) => `<div class="check-item"><span class="check-name"><span class="check-mark ${done ? "" : "warn"}">${icon(done ? "check" : "alertCircle")}</span>${name}</span><span class="status-pill ${done ? "on-track" : "at-risk"}">${done ? "Designed" : "Deploy"}</span></div>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function auditView() {
  return `
    ${pageHead("Audit trail", "Review an immutable activity history for evidence, ownership, and control changes.")}
    <div class="panel view-panel">
      <div class="toolbar"><span class="tag">Last 7 days</span><span class="tag">All activity</span><div class="toolbar-spacer"></div><button class="secondary-button">${icon("filter")} Filter</button></div>
      <div class="audit-list">
        ${state.activities.map(([iconName, actor, action, time]) => `<div class="audit-row"><span class="audit-icon">${icon(iconName)}</span><div class="audit-text"><strong>${esc(actor)}</strong> ${esc(action)}</div><div class="audit-time">${esc(time)}</div></div>`).join("")}
      </div>
    </div>
  `;
}

function settingsView() {
  const cards = [
    ["screening", "Automated rescreening", "Run a monthly sanctions and PEP rescreening workflow for monitored persons."],
    ["reminders", "Deadline reminders", "Notify owners seven days before a compliance obligation is due."],
    ["evidence", "Evidence expiry alerts", "Flag supporting documents 30 days before they require refresh."],
    ["counsel", "External counsel digest", "Prepare a weekly summary of material changes for adviser review."],
    ["redaction", "Sensitive-field redaction", "Mask identifiers and reveal sensitive values only to authorised roles."],
    ["retention", "Retention lifecycle", "Apply evidence retention classes and surface records due for disposal review."],
  ];
  return `
    ${pageHead("Workspace settings", "Configure review workflows, evidence alerts, and adviser collaboration.")}
    <div class="panel view-panel">
      <div class="settings-grid">
        ${cards.map(([key, title, description]) => `<div class="settings-card"><div class="category-head"><h3>${title}</h3><button aria-label="${title}" class="toggle ${state.toggles[key] ? "on" : ""}" data-toggle="${key}"></button></div><p>${description}</p></div>`).join("")}
      </div>
    </div>
  `;
}

function renderMain() {
  const views = {
    overview,
    workbench: workbenchView,
    risk: riskAssessmentView,
    "client-onboarding": clientOnboardingView,
    "employee-onboarding": employeeOnboardingView,
    cdd: cddView,
    str: strView,
    "mas-trm": masTrmView,
    "cyber-hygiene": cyberHygieneView,
    "trm-cyber": trmCyberView,
    training: trainingView,
    ewra: ewraView,
    clients: clientsView,
    vccs: vccsView,
    obligations: obligationsView,
    rules: rulesView,
    registers: registersView,
    relationships: relationshipsView,
    calendar: calendarView,
    documents: documentsView,
    approvals: approvalsView,
    privacy: privacyView,
    reports: reportsView,
    audit: auditView,
    security: securityView,
    settings: settingsView,
  };
  return `<main class="page">${(views[state.view] || overview)()}</main>`;
}

function clientModal() {
  const client = clients.find((item) => item.id === state.selectedClient);
  if (!client) return "";
  const checks = [
    ["Sanctions screening", client.sanctions, "check"],
    ["PEP and adverse media review", client.pep, client.pep === "Clear" ? "check" : "alertCircle"],
    ["Source of wealth evidence", client.risk === "critical" ? "Refresh due" : "Current", client.risk === "critical" ? "alertCircle" : "check"],
    ["Source of funds trail", client.id === "tan-heritage" ? "Partial bank trail" : "Current", client.id === "tan-heritage" ? "alertCircle" : "check"],
    ["Ownership evidence", client.documents, client.documents.includes(" / 13") ? "alertCircle" : "check"],
    ["Singapore obligation mapping", client.structure, "check"],
  ];
  return `
    <div class="modal-backdrop" data-action="close-modal">
      <section class="modal" role="dialog" aria-modal="true" aria-label="${client.name}" data-modal-panel>
        <div class="modal-head">
          <div><div class="eyebrow">${client.office} · ${client.type}</div><h2 style="margin-top:4px">${client.name}</h2><p class="panel-subtitle">${client.jurisdiction} · Last updated ${client.updated}</p></div>
          <button class="modal-close" aria-label="Close" data-action="close-modal">${icon("x")}</button>
        </div>
        <div class="modal-body">
          <div class="detail-grid">
            <div class="detail-box"><div class="tiny-label">Risk rating</div><div class="detail-value"><span class="risk-pill ${client.risk}">${titleCase(client.risk)} · ${client.score}</span></div></div>
            <div class="detail-box"><div class="tiny-label">Assets overseen</div><div class="detail-value">${client.aum}</div></div>
            <div class="detail-box"><div class="tiny-label">Review owner</div><div class="detail-value">${client.owner}</div></div>
          </div>
          <h3>Current issue</h3>
          <p class="page-subtitle" style="line-height:1.6">${client.issue}</p>
          <h3 style="margin-top:16px">Review checklist</h3>
          <div class="checklist">
            ${checks.map(([name, value, mark]) => `<div class="check-item"><span class="check-name"><span class="check-mark ${mark === "alertCircle" ? "warn" : ""}">${icon(mark)}</span>${name}</span><span class="tag">${value}</span></div>`).join("")}
          </div>
        </div>
        <div class="modal-footer">
          <button class="secondary-button" data-action="close-modal">Close</button>
          <button class="primary-button" data-action="schedule-review">${icon("calendar")} Schedule review</button>
        </div>
      </section>
    </div>
  `;
}

function taskModal() {
  return `
    <div class="modal-backdrop" data-action="close-modal">
      <section class="modal small" role="dialog" aria-modal="true" aria-label="Create compliance task" data-modal-panel>
        <div class="modal-head">
          <div><div class="eyebrow">New workflow item</div><h2 style="margin-top:4px">Create compliance task</h2></div>
          <button class="modal-close" aria-label="Close" data-action="close-modal">${icon("x")}</button>
        </div>
        <form id="task-form">
          <div class="modal-body">
            <div class="form-grid">
              <div class="form-field"><label for="task-title">Task title</label><input id="task-title" required placeholder="e.g. Refresh ownership evidence" /></div>
              <div class="form-field"><label for="task-client">Client, VCC, or sub-fund</label><select id="task-client">${structureOptions().map((name) => `<option>${name}</option>`).join("")}</select></div>
              <div class="form-field"><label for="task-due">Due date</label><input id="task-due" required type="date" value="2026-06-16" /></div>
              <div class="form-field"><label for="task-note">Notes</label><textarea id="task-note" placeholder="Add the evidence or review requirement..."></textarea></div>
            </div>
          </div>
          <div class="modal-footer"><button type="button" class="secondary-button" data-action="close-modal">Cancel</button><button class="primary-button" type="submit">${icon("check")} Create task</button></div>
        </form>
      </section>
    </div>
  `;
}

function incidentModal() {
  return `
    <div class="modal-backdrop" data-action="close-modal">
      <section class="modal small" role="dialog" aria-modal="true" aria-label="Log data protection incident" data-modal-panel>
        <div class="modal-head">
          <div><div class="eyebrow">DPO workflow</div><h2 style="margin-top:4px">Log data protection incident</h2></div>
          <button class="modal-close" aria-label="Close" data-action="close-modal">${icon("x")}</button>
        </div>
        <form id="incident-form">
          <div class="modal-body"><div class="form-grid">
            <div class="form-field"><label for="incident-title">Incident title</label><input id="incident-title" required placeholder="e.g. Misaddressed adviser email" /></div>
            <div class="form-field"><label for="incident-type">Assessment type</label><select id="incident-type"><option>Potential data breach</option><option>Control test</option><option>Privacy request</option></select></div>
            <div class="form-field"><label for="incident-note">Initial assessment</label><textarea id="incident-note" required placeholder="Record affected data and immediate containment..."></textarea></div>
          </div></div>
          <div class="modal-footer"><button type="button" class="secondary-button" data-action="close-modal">Cancel</button><button class="primary-button" type="submit">${icon("alertCircle")} Log for DPO review</button></div>
        </form>
      </section>
    </div>
  `;
}

function strModal() {
  return `
    <div class="modal-backdrop" data-action="close-modal">
      <section class="modal small" role="dialog" aria-modal="true" aria-label="Raise suspicion report" data-modal-panel>
        <div class="modal-head">
          <div><div class="eyebrow">MLRO workflow</div><h2 style="margin-top:4px">Raise internal suspicion report</h2></div>
          <button class="modal-close" aria-label="Close" data-action="close-modal">${icon("x")}</button>
        </div>
        <form id="str-form">
          <div class="modal-body"><div class="form-grid">
            <div class="form-field"><label for="str-subject">Subject (client / entity)</label><select id="str-subject">${structureOptions().map((name) => `<option>${name}</option>`).join("")}</select></div>
            <div class="form-field"><label for="str-typology">Typology / trigger</label><select id="str-typology"><option>Source-of-funds inconsistency</option><option>Unusual third-party inflow</option><option>Sanctions / adverse media hit</option><option>Structuring or threshold avoidance</option><option>Client reluctance on CDD</option><option>Other</option></select></div>
            <div class="form-field"><label for="str-note">Grounds for suspicion</label><textarea id="str-note" required placeholder="Describe the transaction, parties, amounts, and why it appears suspicious..."></textarea></div>
          </div></div>
          <div class="modal-footer"><button type="button" class="secondary-button" data-action="close-modal">Cancel</button><button class="primary-button" type="submit">${icon("flag")} Send to MLRO</button></div>
        </form>
      </section>
    </div>
  `;
}

function modal() {
  if (state.modal === "client") return clientModal();
  if (state.modal === "task") return taskModal();
  if (state.modal === "incident") return incidentModal();
  if (state.modal === "str") return strModal();
  return "";
}

function toast() {
  return state.toast ? `<div class="toast">${icon("checkCircle")} ${state.toast}</div>` : "";
}

function lockScreen() {
  if (!state.locked) return "";
  return `
    <div class="lock-screen">
      <section class="lock-card" role="dialog" aria-label="Unlock Harbourline">
        <div class="rail-mark">H</div>
        <div class="eyebrow">Harbourline secure session</div>
        <h2>Workspace locked</h2>
        <p>Enter the demo MFA code <strong>246810</strong> to restore access.</p>
        <form id="unlock-form"><input id="unlock-code" aria-label="MFA code" inputmode="numeric" placeholder="6-digit MFA code" required /><button class="primary-button" type="submit">${icon("lock")} Unlock</button></form>
      </section>
    </div>
  `;
}

function render() {
  document.documentElement.dataset.theme = state.theme;
  document.getElementById("app").innerHTML = `
    <div class="app-shell">
      ${sidebar()}
      <section class="content-shell">
        ${topbar()}
        ${renderMain()}
      </section>
    </div>
    ${modal()}
    ${toast()}
    ${lockScreen()}
  `;
  bindEvents();
}

function setToast(message) {
  state.toast = message;
  savePersisted();
  render();
  window.setTimeout(() => {
    state.toast = null;
    render();
  }, 2600);
}

function exportCsv() {
  const header = ["Record", "Entity type", "Office", "Risk / status", "Score / assets", "Category / evidence", "Next review / deadline"];
  const clientRows = visibleClients().map((client) => [client.name, client.type, client.office, client.risk, client.score, client.category, client.nextReview]);
  const vccRows = visibleVccStructures().flatMap((vcc) => [
    [vcc.name, vcc.type, vcc.office, vcc.status, vcc.registration, "VCC umbrella", vcc.arDue],
    ...vcc.subFunds.map((fund) => [fund.name, "VCC sub-fund", vcc.office, fund.status, fund.assets, fund.filing, vcc.arDue]),
  ]);
  const onboardingRows = state.onboarding.clients.map((item) => [item.name, item.entity, "Onboarding", item.risk, `${item.progress}%`, `SOW ${item.sow} / SOF ${item.sof}`, item.next]);
  const workbenchRows = complianceWorkItems.map(([id, group, name, detail, cadence, status]) => [name, "Compliance control item", group, status, cadence, detail, "As at Jun 2026"]);
  const rows = [...clientRows, ...vccRows, ...onboardingRows, ...workbenchRows];
  const csv = [header, ...rows].map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
  downloadText(csv, "harbourline-compliance-export.csv", "text/csv;charset=utf-8;");
  setToast("Compliance register exported as CSV.");
}

function downloadText(content, filename, type = "text/plain;charset=utf-8;") {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function downloadPack(title) {
  const result = readiness();
  const body = [
    "HARBOURLINE FAMILY OFFICE GOVERNANCE",
    title.toUpperCase(),
    "",
    `Workspace: ${workspaceLabel()}`,
    "Generated: 02 Jun 2026",
    "",
    "RISK SUMMARY",
    ...complianceWorkItems.map(([, group, name, detail, cadence, status]) => `- ${group} / ${name}: ${statusLabel(status)} · ${cadence} · ${detail}`),
    "",
    "CLIENT ONBOARDING / SOW-SOF",
    ...state.onboarding.clients.map((item) => `- ${item.name}: ${item.stage} · SOW ${item.sow} · SOF ${item.sof} · ${item.next}`),
    "",
    "VCC STRUCTURES",
    ...visibleVccStructures().flatMap((vcc) => [`- ${vcc.name}: ${vcc.type} · AR due ${vcc.arDue}`, ...vcc.subFunds.map((fund) => `  - ${fund.name}: ${fund.status} · ${fund.filing}`)]),
    "",
    "OPEN OBLIGATIONS",
    ...allObligations().map((item) => `- ${item.name}: ${statusLabel(item.status)} · ${item.due}`),
    "",
    "13O / 13U READINESS",
    ...result.checks.map(([name, pass, value]) => `- ${name}: ${pass ? "Met" : "Gap"} · ${value}`),
    "",
    "APPROVAL QUEUE",
    ...state.approvals.map(([, name, entity, maker, area, status]) => `- ${name}: ${titleCase(status)} · ${entity} · ${maker} · ${area}`),
    "",
    "Operational report only. Review regulatory interpretation and filings with Singapore counsel and tax advisers.",
  ].join("\n");
  downloadText(body, `${title.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}.txt`);
  setToast(`${title} generated.`);
}

function exportTrainingEvidence() {
  const training = state.training;
  const body = [
    "HARBOURLINE TRAINING ATTESTATION EVIDENCE",
    TRAINING_TITLE.toUpperCase(),
    "",
    `Training version: ${TRAINING_VERSION}`,
    `Source review date: ${TRAINING_CHECK_DATE}`,
    `Workspace: ${workspaceLabel()}`,
    `Generated: ${todayIso()}`,
    "",
    "LEARNER",
    `Name: ${training.learnerName || "Not recorded"}`,
    `Role / team: ${training.learnerRole || "Not recorded"}`,
    `Company / family office: ${training.companyName || "Not recorded"}`,
    `Compliance owner: ${training.complianceOfficer || "Not recorded"}`,
    "",
    "RESULT",
    `Status: ${trainingStatusLabel()}`,
    `Score: ${training.submitted ? `${trainingPercent()}%` : "Not submitted"}`,
    `Correct answers: ${training.submitted ? `${trainingCorrect()} / ${trainingQuiz.length}` : "Not submitted"}`,
    `Pass mark: ${TRAINING_PASS_MARK}%`,
    `Completed date: ${training.completedAt || "Not completed"}`,
    `Evidence ID: ${training.certificateId || "Not issued"}`,
    "",
    "QUESTION RESULTS",
    ...trainingQuiz.map((item, index) => {
      const selectedIndex = training.answers[item.id];
      const selected = selectedIndex === undefined ? "Unanswered" : item.options[selectedIndex];
      const correct = item.options[item.answer];
      const result = Number(selectedIndex) === item.answer ? "Correct" : "Review";
      return `${index + 1}. ${item.topic} | ${result} | Selected: ${selected} | Correct: ${correct}`;
    }),
    "",
    "ATTEMPT HISTORY",
    ...(training.attempts.length ? training.attempts.map((attempt) => `- ${attempt.date}: ${attempt.score}% · ${attempt.passed ? "Passed" : "Review required"} · ${attempt.evidenceId || "No evidence ID"}`) : ["No submitted attempts."]),
    "",
    "SOURCE BASIS",
    ...trainingSources.map(([agency, title, note, url]) => `- ${agency}: ${title} | ${note} | ${url}`),
    "",
    "Demo boundary: browser-saved prototype evidence. Production audit use requires server-side identity, immutable logs, evidence storage and reviewer sign-off.",
  ].join("\n");
  downloadText(body, "harbourline-training-attestation-evidence.txt");
  setToast("Training evidence pack exported.");
}

function printTrainingCertificate() {
  if (!trainingPassed()) {
    setToast(`Pass the quiz (${TRAINING_PASS_MARK}% or higher) to issue a certificate.`);
    return;
  }
  const training = state.training;
  const win = window.open("", "_blank", "noopener,noreferrer,width=900,height=700");
  if (!win) {
    setToast("Allow pop-ups to print the certificate.");
    return;
  }
  const html = `<!doctype html>
<html lang="en"><head><meta charset="UTF-8" />
<title>Harbourline training certificate</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:"DM Sans",Arial,sans-serif;background:#eef1ee;color:#1c241f;padding:40px}
  .cert{max-width:760px;margin:0 auto;background:#fff;border:2px solid #2f3e34;border-radius:18px;padding:56px 60px;position:relative}
  .cert::before{content:"";position:absolute;inset:14px;border:1px solid #c4cfc6;border-radius:12px;pointer-events:none}
  .mark{width:46px;height:46px;border-radius:12px;background:#2f3e34;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:22px;font-family:"Manrope",Arial,sans-serif}
  .eyebrow{letter-spacing:.16em;text-transform:uppercase;font-size:12px;color:#5f6d63;margin-top:22px}
  h1{font-family:"Manrope",Arial,sans-serif;font-size:34px;margin:6px 0 4px}
  .course{font-size:18px;font-weight:600;margin:18px 0 28px;color:#384a3e}
  .name{font-size:30px;font-weight:800;border-bottom:1px solid #d4ddd6;padding-bottom:10px;margin-bottom:8px}
  .sub{color:#5f6d63;font-size:15px}
  .grid{display:grid;grid-template-columns:1fr 1fr;gap:14px 28px;margin:30px 0}
  .grid div span{display:block;font-size:11px;letter-spacing:.08em;text-transform:uppercase;color:#7c8a80}
  .grid div strong{font-size:16px}
  .result{display:inline-block;background:#e7f0e8;color:#27502f;border-radius:999px;padding:6px 16px;font-weight:700;font-size:14px}
  .foot{margin-top:34px;display:flex;justify-content:space-between;align-items:flex-end;gap:24px}
  .sign{flex:1}
  .sign .line{border-top:1px solid #2f3e34;margin-top:42px;padding-top:6px;font-size:13px;color:#5f6d63}
  .note{margin-top:26px;font-size:11px;color:#8a958c;line-height:1.5}
  @media print{body{background:#fff;padding:0}.cert{border:none}.cert::before{display:none}}
</style></head>
<body>
  <div class="cert">
    <div class="mark">H</div>
    <div class="eyebrow">Harbourline Family Office Governance</div>
    <h1>Certificate of Completion</h1>
    <div class="course">${esc(TRAINING_TITLE)}</div>
    <div class="eyebrow">This certifies that</div>
    <div class="name">${esc(training.learnerName || "Not recorded")}</div>
    <div class="sub">${esc(training.learnerRole || "Role not recorded")} &middot; ${esc(training.companyName || "Company not recorded")}</div>
    <div class="grid">
      <div><span>Result</span><strong><span class="result">Passed &middot; ${trainingPercent()}%</span></strong></div>
      <div><span>Pass mark</span><strong>${TRAINING_PASS_MARK}%</strong></div>
      <div><span>Completed</span><strong>${esc(training.completedAt || todayIso())}</strong></div>
      <div><span>Evidence ID</span><strong>${esc(training.certificateId || "Not issued")}</strong></div>
      <div><span>Training version</span><strong>${esc(TRAINING_VERSION)}</strong></div>
      <div><span>Source review date</span><strong>${esc(TRAINING_CHECK_DATE)}</strong></div>
    </div>
    <div class="foot">
      <div class="sign"><div class="line">${esc(training.complianceOfficer || "Compliance owner")}<br />Compliance owner</div></div>
      <div class="sign"><div class="line">${esc(workspaceLabel())}<br />Workspace</div></div>
    </div>
    <div class="note">Demo certificate generated from a browser-saved prototype. Production audit use requires server-side identity, immutable logs, evidence storage and reviewer sign-off. Basis: MAS TRM, MAS Notice FSM-N22 (Cyber Hygiene), and PDPC PDPA guidance.</div>
  </div>
  <script>window.onload=function(){window.print();};<\/script>
</body></html>`;
  win.document.write(html);
  win.document.close();
  addAudit(state.currentRole, `printed training certificate ${training.certificateId || ""}`.trim());
  setToast("Certificate opened for printing.");
}

function applyClientStage(item) {
  if (item.sow === "Accepted" && item.sof === "Accepted" && item.progress >= 82) {
    item.stage = "Activation";
    item.next = "Final checker approval and account activation.";
  } else if (item.progress >= 72) {
    item.stage = "Risk acceptance";
    item.next = "Prepare risk acceptance memo and checker sign-off.";
  } else if (item.progress >= 55) {
    item.stage = "SOW/SOF review";
    item.next = "Corroborate source of wealth and source of funds evidence.";
  } else {
    item.stage = "CDD evidence";
    item.next = "Collect identity, ownership, and screening evidence.";
  }
}

function advanceClientOnboarding(id) {
  const item = state.onboarding.clients.find((client) => client.id === id);
  if (!item) return;
  item.progress = Math.min(100, item.progress + 12);
  applyClientStage(item);
  addAudit(state.currentRole, `advanced client onboarding for ${item.name}`);
  setToast(`${item.name} onboarding advanced.`);
}

function reverseClientOnboarding(id) {
  const item = state.onboarding.clients.find((client) => client.id === id);
  if (!item) return;
  if (item.progress <= 0) {
    setToast(`${item.name} onboarding is already at the start.`);
    return;
  }
  item.progress = Math.max(0, item.progress - 12);
  applyClientStage(item);
  addAudit(state.currentRole, `reversed client onboarding for ${item.name}`);
  setToast(`${item.name} onboarding step reversed.`);
}

function updateEvidenceGate(id, type) {
  const item = state.onboarding.clients.find((client) => client.id === id);
  if (!item) return;
  const key = type === "sof" ? "sof" : "sow";
  const flow = ["Requested", "In review", "Accepted"];
  const current = item[key];
  const next = current === "Escalated" ? "In review" : flow[Math.min(flow.length - 1, flow.indexOf(current) + 1)] || "Requested";
  item[key] = next;
  if (next === "Accepted") item.progress = Math.min(100, item.progress + 10);
  addAudit(state.currentRole, `updated ${key.toUpperCase()} evidence for ${item.name} to ${next}`);
  setToast(`${key.toUpperCase()} evidence updated to ${next}.`);
}

function reverseEvidenceGate(id, type) {
  const item = state.onboarding.clients.find((client) => client.id === id);
  if (!item) return;
  const key = type === "sof" ? "sof" : "sow";
  const flow = ["Requested", "In review", "Accepted"];
  const current = item[key];
  if (current === "Accepted") item.progress = Math.max(0, item.progress - 10);
  const prevIndex = current === "Escalated" ? 0 : Math.max(0, flow.indexOf(current) - 1);
  const prev = flow[prevIndex] || "Requested";
  item[key] = prev;
  addAudit(state.currentRole, `reversed ${key.toUpperCase()} evidence for ${item.name} to ${prev}`);
  setToast(`${key.toUpperCase()} evidence reversed to ${prev}.`);
}

function advanceEmployeeOnboarding(id) {
  const item = state.onboarding.employees.find((employee) => employee.id === id);
  if (!item) return;
  const nextKey = Object.keys(item.checklist).find((key) => !item.checklist[key]);
  if (!nextKey) {
    setToast(`${item.name} onboarding is already complete.`);
    return;
  }
  item.checklist[nextKey] = true;
  const total = Object.keys(item.checklist).length;
  const complete = Object.values(item.checklist).filter(Boolean).length;
  item.progress = Math.round((complete / total) * 100);
  addAudit(state.currentRole, `completed ${nextKey} onboarding check for ${item.name}`);
  setToast(`${item.name} onboarding updated.`);
}

function reverseEmployeeOnboarding(id) {
  const item = state.onboarding.employees.find((employee) => employee.id === id);
  if (!item) return;
  const keys = Object.keys(item.checklist);
  const lastDone = [...keys].reverse().find((key) => item.checklist[key]);
  if (!lastDone) {
    setToast(`${item.name} onboarding has no completed items to undo.`);
    return;
  }
  item.checklist[lastDone] = false;
  const total = keys.length;
  const complete = Object.values(item.checklist).filter(Boolean).length;
  item.progress = Math.round((complete / total) * 100);
  addAudit(state.currentRole, `reversed ${lastDone} onboarding check for ${item.name}`);
  setToast(`${item.name} onboarding item reversed.`);
}

function advanceStr(id) {
  const item = state.strReports.find((report) => report[0] === id);
  if (!item) return;
  const flow = ["Raised", "MLRO review", "Filed (STRO)"];
  const index = flow.indexOf(item[5]);
  if (index < 0 || index >= flow.length - 1) return;
  item[5] = flow[index + 1];
  if (item[5] === "Filed (STRO)") item[6] = `SONAR-2026-${String(Date.now()).slice(-6)}`;
  addAudit(state.currentRole, `advanced STR ${item[0].toUpperCase()} (${item[1]}) to ${item[5]}`);
  setToast(`STR ${item[0].toUpperCase()} moved to ${item[5]}.`);
}

function reverseStr(id) {
  const item = state.strReports.find((report) => report[0] === id);
  if (!item) return;
  const flow = ["Raised", "MLRO review", "Filed (STRO)"];
  if (item[5].startsWith("No-file")) {
    item[5] = "MLRO review";
    item[6] = "—";
  } else {
    const index = flow.indexOf(item[5]);
    if (index <= 0) {
      setToast(`STR ${item[0].toUpperCase()} is already at the first step.`);
      return;
    }
    if (item[5] === "Filed (STRO)") item[6] = "—";
    item[5] = flow[index - 1];
  }
  addAudit(state.currentRole, `reversed STR ${item[0].toUpperCase()} (${item[1]}) to ${item[5]}`);
  setToast(`STR ${item[0].toUpperCase()} reversed to ${item[5]}.`);
}

function noFileStr(id) {
  const item = state.strReports.find((report) => report[0] === id);
  if (!item) return;
  item[5] = "No-file (documented)";
  item[6] = "Rationale logged";
  addAudit(state.currentRole, `recorded a no-file STR decision for ${item[0].toUpperCase()} (${item[1]})`);
  setToast(`No-file decision documented for ${item[0].toUpperCase()}.`);
}

function bindEvents() {
  document.querySelectorAll("[data-view]").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      state.search = "";
      render();
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  });
  const workspaceSelect = document.getElementById("workspace-select");
  workspaceSelect?.addEventListener("change", (event) => {
    state.workspace = event.target.value;
    state.riskFilter = null;
    savePersisted();
    setToast(`${workspaceLabel()} selected.`);
  });
  document.querySelectorAll("[data-review]").forEach((button) => {
    button.addEventListener("click", () => {
      state.selectedClient = button.dataset.review;
      state.modal = "client";
      state.search = "";
      render();
    });
  });
  document.querySelectorAll("[data-client-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      state.clientFilter = button.dataset.clientFilter;
      render();
    });
  });
  document.querySelectorAll("[data-control-task]").forEach((button) => {
    button.addEventListener("click", () => {
      addAudit(state.currentRole, `recorded ${button.dataset.controlTask}`);
      setToast("Control evidence update recorded.");
    });
  });
  document.querySelectorAll("[data-work-item]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = complianceWorkItems.find((entry) => entry[0] === button.dataset.workItem);
      addAudit(state.currentRole, `worked on ${item?.[2] || "a compliance control item"}`);
      setToast(`${item?.[2] || "Compliance item"} logged in the audit trail.`);
    });
  });
  document.querySelectorAll("[data-advance-client]").forEach((button) => {
    button.addEventListener("click", () => advanceClientOnboarding(button.dataset.advanceClient));
  });
  document.querySelectorAll("[data-reverse-client]").forEach((button) => {
    button.addEventListener("click", () => reverseClientOnboarding(button.dataset.reverseClient));
  });
  document.querySelectorAll("[data-evidence-case]").forEach((button) => {
    button.addEventListener("click", () => updateEvidenceGate(button.dataset.evidenceCase, button.dataset.evidenceType));
  });
  document.querySelectorAll("[data-reverse-evidence]").forEach((button) => {
    button.addEventListener("click", () => reverseEvidenceGate(button.dataset.reverseEvidence, button.dataset.evidenceType));
  });
  document.querySelectorAll("[data-advance-employee]").forEach((button) => {
    button.addEventListener("click", () => advanceEmployeeOnboarding(button.dataset.advanceEmployee));
  });
  document.querySelectorAll("[data-reverse-employee]").forEach((button) => {
    button.addEventListener("click", () => reverseEmployeeOnboarding(button.dataset.reverseEmployee));
  });
  document.querySelectorAll("[data-training-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      state.training.answers[button.dataset.trainingAnswer] = Number(button.dataset.answer);
      if (state.training.submitted) {
        state.training.submitted = false;
        state.training.certificateId = "";
        state.training.completedAt = "";
      }
      savePersisted();
      render();
    });
  });
  document.querySelectorAll("[data-training-field]").forEach((input) => {
    input.addEventListener("input", () => {
      state.training[input.dataset.trainingField] = input.value;
      savePersisted();
    });
  });
  document.querySelectorAll("[data-heat]").forEach((button) => {
    button.addEventListener("click", () => {
      const [likelihood, level] = button.dataset.heat.split("|");
      state.riskFilter = { likelihood, level };
      render();
    });
  });
  document.querySelectorAll("[data-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.toggle;
      state.toggles[key] = !state.toggles[key];
      setToast(`${button.getAttribute("aria-label")} ${state.toggles[key] ? "enabled" : "disabled"}.`);
    });
  });
  document.querySelectorAll("[data-rule-approve]").forEach((button) => {
    button.addEventListener("click", () => {
      state.ruleApprovals[button.dataset.ruleApprove] = "approved";
      addAudit(state.currentRole, `attested the ${rulePacks.find((pack) => pack.id === button.dataset.ruleApprove)?.name || "rule"} pack`);
      setToast("Rule-pack attestation recorded.");
    });
  });
  document.querySelectorAll("[data-rule-revoke]").forEach((button) => {
    button.addEventListener("click", () => {
      state.ruleApprovals[button.dataset.ruleRevoke] = "pending";
      addAudit(state.currentRole, `reset the ${rulePacks.find((pack) => pack.id === button.dataset.ruleRevoke)?.name || "rule"} pack to review`);
      setToast("Rule-pack attestation reset to review.");
    });
  });
  document.querySelectorAll("[data-register-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.registers.find((register) => register[0] === button.dataset.registerAction);
      if (!item) return;
      item[2] = item[4] === "action" ? "Submitted to checker queue" : "Verification recorded today";
      item[4] = item[4] === "action" ? "at-risk" : "on-track";
      addAudit(state.currentRole, `recorded a ${item[0].toUpperCase()} register control update`);
      setToast(`${item[0].toUpperCase()} control update recorded.`);
    });
  });
  document.querySelectorAll("[data-register-revert]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = state.registers.find((register) => register[0] === button.dataset.registerRevert);
      if (!item) return;
      if (item[4] === "on-track") {
        item[4] = "at-risk";
        item[2] = "Submitted to checker queue";
      } else if (item[4] === "at-risk") {
        item[4] = "action";
        item[2] = "Returned to maker for action";
      } else {
        setToast(`${item[0].toUpperCase()} register is already at the first step.`);
        return;
      }
      addAudit(state.currentRole, `reversed a ${item[0].toUpperCase()} register control update`);
      setToast(`${item[0].toUpperCase()} control update reversed.`);
    });
  });
  document.querySelectorAll("[data-str-advance]").forEach((button) => {
    button.addEventListener("click", () => advanceStr(button.dataset.strAdvance));
  });
  document.querySelectorAll("[data-str-reverse]").forEach((button) => {
    button.addEventListener("click", () => reverseStr(button.dataset.strReverse));
  });
  document.querySelectorAll("[data-str-nofile]").forEach((button) => {
    button.addEventListener("click", () => noFileStr(button.dataset.strNofile));
  });
  document.querySelectorAll("[data-approval]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!canApprove()) return;
      const approval = state.approvals.find((item) => item[0] === button.dataset.approval);
      if (!approval) return;
      approval[5] = "approved";
      addAudit(state.currentRole, `approved ${approval[1]} for ${approval[2]}`);
      setToast("Independent checker approval recorded.");
    });
  });
  document.querySelectorAll("[data-approval-revert]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!canApprove()) return;
      const approval = state.approvals.find((item) => item[0] === button.dataset.approvalRevert);
      if (!approval) return;
      approval[5] = "pending";
      addAudit(state.currentRole, `reverted approval for ${approval[1]} (${approval[2]})`);
      setToast("Checker approval reverted to pending.");
    });
  });
  const searchInput = document.getElementById("global-search");
  searchInput?.addEventListener("input", (event) => {
    state.search = event.target.value;
    render();
    const nextInput = document.getElementById("global-search");
    nextInput?.focus();
    nextInput?.setSelectionRange(state.search.length, state.search.length);
  });
  document.removeEventListener("keydown", globalKeyHandler);
  document.addEventListener("keydown", globalKeyHandler);
  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", (event) => {
      const action = button.dataset.action;
      if (action === "close-modal") {
        if (button.classList.contains("modal-backdrop") && event.target !== event.currentTarget) return;
        state.modal = null;
        state.selectedClient = null;
        render();
      }
      if (action === "open-task") {
        state.modal = "task";
        render();
      }
      if (action === "toggle-theme") {
        state.theme = state.theme === "dark" ? "light" : "dark";
        setToast(`${titleCase(state.theme)} mode enabled.`);
      }
      if (action === "export") exportCsv();
      if (action === "clear-heat") {
        state.riskFilter = null;
        render();
      }
      if (action === "show-obligations") {
        state.view = "obligations";
        state.search = "";
        render();
      }
      if (action === "schedule-review") {
        state.modal = null;
        state.selectedClient = null;
        setToast("Review scheduled and assigned to the compliance owner.");
      }
      if (action === "toast-upload") setToast("Evidence upload workspace is ready.");
      if (action === "open-incident") {
        state.modal = "incident";
        render();
      }
      if (action === "open-str") {
        state.modal = "str";
        render();
      }
      if (action === "run-screening") {
        state.screenings.lastRun = "02 Jun 2026, just now";
        state.screenings.exceptions = 2;
        addAudit(state.currentRole, "ran a sanctions, PEP, and adverse-media screening workflow");
        setToast("Screening complete. Two exceptions remain under review.");
      }
      if (action === "register-help") {
        window.open("https://www.acra.gov.sg/manage/companies/legal-requirements-common-offences/maintaining-local-companys-information-registers/company-registers/", "_blank", "noopener,noreferrer");
      }
      if (action === "create-pack") {
        state.reportCount += 1;
        addAudit(state.currentRole, `generated board pack ${state.reportCount}`);
        setToast("Board compliance pack generated and logged.");
      }
      if (action === "download-pack") downloadPack(button.dataset.pack || "Compliance report");
      if (action === "submit-training") {
        if (trainingAnswered() < trainingQuiz.length) {
          setToast(`Answer all ${trainingQuiz.length} questions before submitting.`);
          return;
        }
        state.training.submitted = true;
        const passed = trainingPassed();
        state.training.completedAt = passed ? todayIso() : "";
        state.training.certificateId = passed ? state.training.certificateId || makeTrainingEvidenceId() : "";
        state.training.attempts.unshift({
          date: todayIso(),
          learner: state.training.learnerName || "Not recorded",
          score: trainingPercent(),
          passed,
          evidenceId: state.training.certificateId,
        });
        state.training.attempts = state.training.attempts.slice(0, 8);
        addAudit(state.currentRole, `submitted ${TRAINING_TITLE} quiz with ${trainingPercent()}% (${passed ? "passed" : "review required"})`);
        setToast(passed ? "Training quiz passed and evidence ID issued." : "Training quiz submitted. Review required.");
      }
      if (action === "clear-training") {
        state.training.answers = {};
        state.training.submitted = false;
        state.training.certificateId = "";
        state.training.completedAt = "";
        addAudit(state.currentRole, "cleared the training quiz answers");
        setToast("Training quiz answers cleared.");
      }
      if (action === "export-training") exportTrainingEvidence();
      if (action === "print-training") printTrainingCertificate();
      if (action === "lock-session") {
        state.locked = true;
        savePersisted();
        render();
      }
    });
  });
  const readinessForm = document.getElementById("readiness-form");
  readinessForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    state.calc = {
      scheme: document.getElementById("calc-scheme").value,
      aum: Number(document.getElementById("calc-aum").value),
      professionals: Number(document.getElementById("calc-professionals").value),
      localSpend: Number(document.getElementById("calc-spend").value),
      deployment: Number(document.getElementById("calc-deployment").value),
    };
    setToast(`${state.calc.scheme} readiness recalculated.`);
  });
  const roleSelect = document.getElementById("role-select");
  roleSelect?.addEventListener("change", (event) => {
    state.currentRole = event.target.value;
    addAudit("System", `switched demo role to ${state.currentRole}`);
    setToast(`Demo role switched to ${state.currentRole}.`);
  });
  const form = document.getElementById("task-form");
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    state.taskCount += 1;
    const due = document.getElementById("task-due").value;
    state.tasks.unshift({
      id: `task-${Date.now()}`,
      name: document.getElementById("task-title").value,
      description: document.getElementById("task-note").value || `Review item for ${document.getElementById("task-client").value}`,
      status: "action",
      progress: 10,
      due,
      owner: state.currentRole,
      group: "Workflow task",
    });
    addAudit(state.currentRole, `created ${document.getElementById("task-title").value}`);
    state.modal = null;
    setToast("Compliance task created and added to the obligation queue.");
  });
  const incidentForm = document.getElementById("incident-form");
  incidentForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    state.incidents.unshift([
      `incident-${Date.now()}`,
      document.getElementById("incident-title").value,
      document.getElementById("incident-type").value,
      "Assessment open",
      "02 Jun 2026",
      document.getElementById("incident-note").value,
    ]);
    addAudit(state.currentRole, `logged a DPO incident assessment: ${document.getElementById("incident-title").value}`);
    state.modal = null;
    setToast("Incident logged for DPO assessment.");
  });
  const strForm = document.getElementById("str-form");
  strForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const subject = document.getElementById("str-subject").value;
    state.strReports.unshift([
      `str-${String(Date.now()).slice(-4)}`,
      subject,
      document.getElementById("str-typology").value,
      state.currentRole,
      todayLabel(),
      "Raised",
      "—",
    ]);
    addAudit(state.currentRole, `raised an internal suspicion report on ${subject}`);
    state.modal = null;
    setToast("Suspicion report raised and routed to the MLRO.");
  });
  const unlockForm = document.getElementById("unlock-form");
  unlockForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    if (document.getElementById("unlock-code").value !== "246810") {
      setToast("The demo MFA code is incorrect.");
      return;
    }
    state.locked = false;
    savePersisted();
    setToast("Secure session unlocked.");
  });
}

function globalKeyHandler(event) {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    document.getElementById("global-search")?.focus();
  }
}

render();
