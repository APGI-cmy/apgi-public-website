export const site = {
  name: "APGI Public Website",
  title: "APGI | Public Website",
  description: "APGI public website for services, training handoffs, APGI Hub routing, and contact information.",
  canonical: "https://apgi-public-website.vercel.app/",
  contact: {
    email: "info@apginc.ca",
    phoneDisplay: "+1 (416) 642-9974",
    phoneHref: "tel:+14166429974"
  },
  training: {
    vpshr: "https://training-urls-module.vercel.app/courses/vpshr-level-0",
    thinkific: "https://apgi.thinkific.com/"
  },
  nav: [
    ["About", "#about"],
    ["Services", "#services"],
    ["Training", "#training"],
    ["APGI Hub", "#hub"],
    ["Team", "#team"],
    ["Contact", "#contact"]
  ],
  hubTiles: [
    ["mmm", "Maturity Roadmap / MMM", "Roadmap planning and maturity navigation.", "/marketing/maturity-roadmap"],
    ["risk", "Risk Management", "Risk context and governance handoff.", "/marketing/risk-management"],
    ["pit", "Project Implementation Tracker / PIT", "Governed implementation tracking handoff.", "/marketing/project-implementation"],
    ["intel", "Incident & Intelligence Hub", "Incident and intelligence handoff.", "/marketing/incident-intelligence"],
    ["analytics", "Data Analytics & Remote Assurance", "Data and remote assurance handoff.", "/marketing/data-analytics-assurance"],
    ["radam", "Systems Integration / RADAM", "Systems integration handoff.", "/marketing/systems-integration"],
    ["skills", "Skills Development Portal", "Skills and learning handoff.", "/marketing/skills-development"]
  ],
  services: [
    "Advisory and planning support",
    "Governed delivery and assurance support",
    "Training pathways and capability development",
    "Public website routing and contact handoffs"
  ],
  impact: [
    "Text-first public website with honest placeholder handling.",
    "Static-first delivery with no database, sign-in, or contact form processing in v1.",
    "Governed handoffs to training, APGI Hub destinations, and direct contact channels."
  ],
  team: [
    "Team/profile content is text-first until final approved bios and imagery are supplied.",
    "No unapproved client marks, testimonials, or third-party imagery are used in this v1 build."
  ]
};
