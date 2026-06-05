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
};

const STORAGE_KEY = "harbourline-demo-v2";

function loadPersisted() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    return {
      ...defaultPersisted,
      ...saved,
      screenings: { ...defaultPersisted.screenings, ...(saved.screenings || {}) },
      calc: { ...defaultPersisted.calc, ...(saved.calc || {}) },
      toggles: { ...defaultPersisted.toggles, ...(saved.toggles || {}) },
      ruleApprovals: { ...defaultPersisted.ruleApprovals, ...(saved.ruleApprovals || {}) },
      registers: saved.registers || defaultPersisted.registers,
      approvals: saved.approvals || defaultPersisted.approvals,
      incidents: saved.incidents || defaultPersisted.incidents,
      activities: saved.activities || defaultPersisted.activities,
      tasks: saved.tasks || [],
    };
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
  activities: persisted.activities,
  calc: persisted.calc,
  toggles: persisted.toggles,
};

const nav = [
  ["overview", "grid", "Overview"],
  ["clients", "users", "Clients & entities"],
  ["obligations", "checkCircle", "Obligations"],
  ["rules", "layers", "Rule packs"],
  ["registers", "fileText", "Statutory registers"],
  ["relationships", "network", "Ownership & KYC"],
  ["calendar", "calendar", "Calendar"],
  ["documents", "folder", "Documents"],
  ["approvals", "userCheck", "Approvals"],
  ["privacy", "lock", "Data protection"],
  ["reports", "download", "Reports"],
  ["audit", "activity", "Audit trail"],
];

const navDescriptions = {
  overview: "Heatmap & queue",
  clients: "Structures & owners",
  obligations: "Tasks & deadlines",
  rules: "Singapore controls",
  registers: "RORC · ROND · RONS",
  relationships: "Map & screening",
  calendar: "Filings & reviews",
  documents: "Evidence library",
  approvals: "Maker-checker",
  privacy: "DPO & retention",
  reports: "Board packs",
  audit: "Activity history",
  security: "Roles & MFA",
  settings: "Workflow defaults",
};

function icon(name) {
  return `<svg aria-hidden="true" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">${iconPaths[name] || iconPaths.activity}</svg>`;
}

function titleCase(value) {
  return value.replace("-", " ").replace(/\b\w/g, (char) => char.toUpperCase());
}

function statusLabel(value) {
  return value === "action" ? "Action due" : value === "at-risk" ? "At risk" : "On track";
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
      activities: state.activities,
      calc: state.calc,
      toggles: state.toggles,
    }),
  );
}

function visibleClients() {
  if (state.workspace === "sfo") return clients.filter((client) => client.office === "SFO");
  if (state.workspace === "mfo") return clients.filter((client) => client.office === "MFO");
  return clients;
}

function workspaceLabel() {
  return state.workspace === "sfo" ? "Tan family SFO workspace" : state.workspace === "mfo" ? "Meridian MFO workspace" : "All family offices";
}

function allObligations() {
  return [...state.tasks, ...obligations];
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
          <input id="global-search" aria-label="Search" autocomplete="off" placeholder="Search clients, entities, obligations..." value="${state.search}" />
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
  const matchedObligations = allObligations().filter((item) => `${item.name} ${item.description} ${item.group}`.toLowerCase().includes(query)).slice(0, 2);
  const rows = [
    ...matchedClients.map((item) => `<button class="search-result" data-review="${item.id}"><span class="result-icon">${icon("users")}</span><span><span class="result-name">${item.name}</span><span class="result-meta">${item.type} · ${item.category}</span></span></button>`),
    ...matchedObligations.map((item) => `<button class="search-result" data-action="show-obligations"><span class="result-icon">${icon("checkCircle")}</span><span><span class="result-name">${item.name}</span><span class="result-meta">${item.group} · ${statusLabel(item.status)}</span></span></button>`),
  ];
  return `<div class="search-results">${rows.length ? rows.join("") : `<div class="queue-empty">No matching records found.</div>`}</div>`;
}

function viewLabel() {
  return nav.find(([id]) => id === state.view)?.[2] || "Overview";
}

function sidebar() {
  const navItem = ([id, iconName, label]) => `<button class="nav-link ${state.view === id ? "active" : ""}" data-view="${id}"><span class="nav-icon">${icon(iconName)}</span><span class="nav-copy"><span>${label}</span><small>${navDescriptions[id] || ""}</small></span>${id === "obligations" || id === "approvals" ? `<span class="nav-count">${id === "obligations" ? state.taskCount : state.approvals.filter((item) => item[5] === "pending").length}</span>` : ""}</button>`;
  const monitorItems = nav.slice(0, 3).map(navItem).join("");
  const governanceItems = nav.slice(3, 11).map(navItem).join("");
  const historyItems = nav.slice(11).map(navItem).join("");
  return `
    <aside class="rail">
      <div class="rail-mark">H</div>
      ${nav.map(([id, iconName, label]) => `<button class="rail-button ${state.view === id ? "active" : ""}" aria-label="${label}" data-view="${id}">${icon(iconName)}</button>`).join("")}
      <div class="rail-spacer"></div>
      <button class="rail-button ${state.view === "security" ? "active" : ""}" aria-label="Access control" data-view="security">${icon("lock")}</button>
      <button class="rail-button ${state.view === "settings" ? "active" : ""}" aria-label="Settings" data-view="settings">${icon("settings")}</button>
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
        <div class="workspace-micro"><span>${visibleClients().length} entities</span><span>${allObligations().length} tasks</span></div>
      </div>
      <div class="nav-group"><div class="nav-section-title">Monitor</div>${monitorItems}</div>
      <div class="nav-group"><div class="nav-section-title">Governance</div>${governanceItems}</div>
      <div class="nav-group"><div class="nav-section-title">History</div>${historyItems}</div>
      <div class="nav-group"><div class="nav-section-title">Administration</div>
      <button class="nav-link ${state.view === "security" ? "active" : ""}" data-view="security">${icon("lock")} Access control</button>
      <button class="nav-link ${state.view === "settings" ? "active" : ""}" data-view="settings">${icon("settings")} Workspace settings</button>
      </div>
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
        <div class="eyebrow">Singapore · family office compliance</div>
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
          <div><h2>Singapore compliance tracker</h2><p class="panel-subtitle">Conditions and controls requiring evidence</p></div>
          <button class="ghost-button" data-action="show-obligations">View board ${icon("chevronRight")}</button>
        </div>
        <div class="obligation-list">
          ${allObligations().slice(0, 5).map((item) => `
            <div class="obligation-row">
              <div><div class="obligation-name">${item.name}</div><div class="obligation-desc">${item.description}</div></div>
              <div class="progress-track"><div class="progress-fill ${item.status === "at-risk" ? "warn" : item.status === "action" ? "action" : ""}" style="width:${item.progress}%"></div></div>
              <span class="status-pill ${item.status}">${statusLabel(item.status)}</span>
            </div>
          `).join("")}
        </div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><h2>Upcoming deadlines</h2><p class="panel-subtitle">June 2026 · next 30 days</p></div><button class="ghost-button" data-view="calendar">Calendar ${icon("chevronRight")}</button></div>
        <div class="deadline-list">
          ${deadlines.map(([day, month, name, meta]) => `<div class="deadline-row"><div class="date-box"><div class="date-day">${day}</div><div class="date-month">${month}</div></div><div><div class="deadline-name">${name}</div><div class="deadline-meta">${meta}</div></div></div>`).join("")}
        </div>
      </div>
    </div>
  `;
}

function overview() {
  const visible = visibleClients();
  return `
    ${pageHead("Risk assessment & oversight", `${workspaceLabel()} · entity risk, Singapore obligations, and targeted review activity.`)}
    <div class="notice">${icon("shield")} Operational tracker for family-office teams. Regulatory interpretation and filings should be reviewed with Singapore counsel and tax advisers.</div>
    <div class="stat-grid">
      ${statCard("Monitored structures", visible.length, `<span class="delta">Workspace scoped</span> records`, "briefcase", "clients")}
      ${statCard("Critical reviews", visible.filter((client) => client.risk === "critical").length, `<span class="delta warn">1 overdue</span> action required`, "alertCircle", "clients")}
      ${statCard("Open obligations", allObligations().length, `${state.taskCount} active workflow items`, "checkCircle", "obligations")}
      ${statCard("On-track controls", "86%", `<span class="delta">+6%</span> this month`, "trendingUp", "rules")}
      ${statCard("Evidence current", "93%", `79 of 85 documents`, "fileText", "documents")}
    </div>
    <div class="panel risk-layout">
      <div>
        <div class="panel-head"><div><h2>Risk heatmap · residual exposure</h2><p class="panel-subtitle">Select a cell to focus the monitoring queue</p></div><span class="tag">${visible.length} entities</span></div>
        <div class="heatmap-wrap">${heatmap()}</div>
      </div>
      ${queue()}
    </div>
    <div class="category-grid">
      ${categoryCard("AML / CFT", "shield", [["KYC refresh overdue", "1"], ["Enhanced reviews", "2"], ["Screening exceptions", "0"]])}
      ${categoryCard("Regulatory & tax", "landmark", [["13O / 13U trackers", "3"], ["CMS attestation", "1"], ["Local spend evidence", "6"]])}
      ${categoryCard("Governance & operations", "briefcase", [["Trust approvals", "1"], ["VCC return prep", "1"], ["Cyber exercises", "1"]])}
    </div>
    ${explainer()}
    ${trackers()}
  `;
}

function clientsView() {
  const filters = ["all", "critical", "high", "medium", "low"];
  const filtered = visibleClients().filter((client) => state.clientFilter === "all" || client.risk === state.clientFilter);
  return `
    ${pageHead("Clients & entities", "Maintain a complete view of structures, ownership reviews, and open compliance actions.", `<button class="secondary-button" data-action="open-task">${icon("plus")} Add review</button>`)}
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
  `;
}

function obligationsView() {
  const groups = [
    ["action", "Action due"],
    ["at-risk", "At risk"],
    ["on-track", "On track"],
  ];
  return `
    ${pageHead("Obligations board", "Track regulatory, tax-incentive, reporting, and governance evidence through completion.", `<button class="secondary-button" data-action="open-task">${icon("plus")} Add obligation</button>`)}
    <div class="notice">${icon("landmark")} 13O and 13U readiness cards reflect the current EDB-published conditions: AUM, staffing, tiered local spend, and qualifying capital deployment.</div>
    <div class="panel view-panel">
      <div class="toolbar"><span class="tag">June 2026 cycle</span><span class="tag">All owners</span><div class="toolbar-spacer"></div><button class="secondary-button">${icon("filter")} Filter</button></div>
      <div class="obligation-board">
        ${groups.map(([status, label]) => {
          const items = allObligations().filter((item) => item.status === status);
          return `
            <div class="board-column">
              <div class="board-head"><span>${label}</span><span class="board-count">${items.length}</span></div>
              ${items.map((item) => `
                <div class="obligation-card">
                  <span class="tag">${item.group}</span>
                  <div class="obligation-name" style="margin-top:8px">${item.name}</div>
                  <div class="obligation-desc">${item.description}</div>
                  <div class="progress-track"><div class="progress-fill ${item.status === "action" ? "action" : item.status === "at-risk" ? "warn" : ""}" style="width:${item.progress}%"></div></div>
                  <div class="card-meta">${icon("calendar")} ${item.due} · ${item.owner}</div>
                </div>
              `).join("")}
            </div>
          `;
        }).join("")}
      </div>
    </div>
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
            <div class="category-head"><span class="category-icon">${icon(pack.id === "vcc" ? "landmark" : pack.id === "trust" ? "users" : "layers")}</span><span class="status-pill ${approval === "approved" ? "on-track" : "at-risk"}">${approval === "approved" ? "Adviser approved" : "Review due"}</span></div>
            <h3>${pack.name}</h3><p>${pack.scope}</p>
            <div class="rule-card-foot"><span>${pack.controls} controls</span><span>${pack.effective}</span></div>
            <div class="button-row" style="margin-top:9px"><a class="text-link" href="${pack.url}" target="_blank" rel="noreferrer">${pack.source}</a>${approval !== "approved" ? `<button class="table-action" data-rule-approve="${pack.id}">Attest</button>` : ""}</div>
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
            ${state.registers.map(([id, name, detail, due, status]) => `<tr><td><div class="table-name">${name}</div><div class="table-meta">${id.toUpperCase()} · statutory register</div></td><td>${detail}</td><td>${due}</td><td><span class="status-pill ${status}">${statusLabel(status)}</span></td><td><button class="table-action" data-register-action="${id}">${status === "action" ? "Send to checker" : "Record verification"}</button></td></tr>`).join("")}
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
        ${state.approvals.map(([id, name, entity, maker, area, status]) => `<tr><td><div class="table-name">${name}</div></td><td>${entity}</td><td>${maker}</td><td><span class="tag">${area}</span></td><td><span class="status-pill ${status === "approved" ? "on-track" : "at-risk"}">${titleCase(status)}</span></td><td>${status === "pending" ? `<button class="table-action" data-approval="${id}" ${canApprove() ? "" : "disabled"}>Approve</button>` : "Completed"}</td></tr>`).join("")}
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
  return `
    ${pageHead("Data protection", "Manage retention, redaction, breach-response readiness, and DPO oversight.", `<button class="secondary-button" data-action="open-incident">${icon("plus")} Log incident</button>`)}
    <div class="notice">${icon("lock")} NRIC numbers must not be used for authentication. Harbourline records the transition target of <strong>31 Dec 2026</strong> ahead of stepped-up PDPC enforcement from 01 Jan 2027.</div>
    <div class="stat-grid">
      ${statCard("DPO owner", "1", "Sarah Lim · assigned", "userCheck", "privacy")}
      ${statCard("Retention classes", retentionClasses.length, "Policy-driven lifecycle", "fileText", "privacy")}
      ${statCard("Open incidents", state.incidents.filter((item) => item[3] !== "Closed").length, "Breach-response tracker", "alertCircle", "privacy")}
      ${statCard("Sensitive fields", "Redacted", "Role-based reveal only", "eye", "security")}
      ${statCard("NRIC auth", "Disabled", "Target met", "lock", "security")}
    </div>
    <div class="tracker-grid">
      <div class="panel">
        <div class="panel-head"><div><h2>Retention and handling policy</h2><p class="panel-subtitle">Applied by evidence classification</p></div><a class="text-link" href="https://www.pdpc.gov.sg/help-and-resources/2026/01/advisory-on-common-data-protection-lapses-and-recommended-measures" target="_blank" rel="noreferrer">PDPC advisory</a></div>
        <div class="deadline-rule-list">${retentionClasses.map(([name, rule, access]) => `<div class="deadline-rule"><div><div class="obligation-name">${name}</div><div class="obligation-desc">${rule}</div></div><span class="tag">${access}</span></div>`).join("")}</div>
      </div>
      <div class="panel">
        <div class="panel-head"><div><h2>Breach-response tracker</h2><p class="panel-subtitle">Assessment, notification, and remediation history</p></div><span class="tag">${state.incidents.length} records</span></div>
        <div class="audit-list compact-audit">${state.incidents.map(([, name, type, status, date, note]) => `<div class="audit-row"><span class="audit-icon">${icon(status === "Closed" ? "checkCircle" : "alertCircle")}</span><div class="audit-text"><strong>${name}</strong><br />${type} · ${note}</div><div class="audit-time">${date}</div></div>`).join("")}</div>
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
        ["PDPA control pack", "Retention, access, and incident records", "DPO", "29 May 2026"],
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
        ${state.activities.map(([iconName, actor, action, time]) => `<div class="audit-row"><span class="audit-icon">${icon(iconName)}</span><div class="audit-text"><strong>${actor}</strong> ${action}</div><div class="audit-time">${time}</div></div>`).join("")}
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
    clients: clientsView,
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
              <div class="form-field"><label for="task-client">Client or structure</label><select id="task-client">${visibleClients().map((client) => `<option>${client.name}</option>`).join("")}</select></div>
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

function modal() {
  if (state.modal === "client") return clientModal();
  if (state.modal === "task") return taskModal();
  if (state.modal === "incident") return incidentModal();
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
  const header = ["Client", "Entity type", "Office", "Risk", "Score", "Category", "Next review"];
  const rows = visibleClients().map((client) => [client.name, client.type, client.office, client.risk, client.score, client.category, client.nextReview]);
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
    ...visibleClients().map((client) => `- ${client.name}: ${titleCase(client.risk)} (${client.score}) · ${client.issue}`),
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
