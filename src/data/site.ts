export const site = {
  name: 'Assurance Protection Group Inc.',
  shortName: 'APGI',
  tagline: 'Protecting people, process and property.',
  url: import.meta.env.APW_PUBLIC_SITE_URL || 'https://apginc.ca',
  email: 'info@apginc.ca',
  phone: '(416) 642-9974',
  phoneHref: 'tel:+14166429974',
  address: ['310 - 3660 Midland Ave.', 'Scarborough, Ontario', 'Canada M1V 0B8'],
  thinkificUrl: 'https://apgi.thinkific.com/'
};

export const routes = [
  { key: 'home', path: '/', label: 'Home', title: 'APGI Public Website', description: 'Assurance Protection Group Inc. protects people, process and property through security risk mitigation, training, assurance and APGI Hub capabilities.', footer: true },
  { key: 'services', path: '/services', label: 'Services', title: 'Services', description: 'Security risk mitigation, assurance, training and operational support services for organizations protecting people, process and property.', footer: true },
  { key: 'platform', path: '/platform', label: 'APGI Hub', title: 'APGI Hub Platform', description: 'Public overview of the APGI Hub ecosystem and module readiness states.', footer: true },
  { key: 'training', path: '/training', label: 'Training', title: 'Training', description: 'Security human rights, risk mitigation and custom training pathways with public Thinkific handoff.', footer: true },
  { key: 'about', path: '/about', label: 'About', title: 'About APGI', description: 'APGI story, operating principles and independent risk mitigation approach.', footer: true },
  { key: 'team', path: '/team', label: 'Team', title: 'Team', description: 'Governed team profile area with approved public-facing profile placeholders.', footer: true },
  { key: 'contact', path: '/contact', label: 'Contact', title: 'Contact APGI', description: 'Public APGI email, phone and office handoffs without backend form capture.', footer: true },
  { key: 'privacy', path: '/privacy', label: 'Privacy', title: 'Privacy', description: 'Governed privacy placeholder for the APGI public website.', footer: true },
  { key: 'terms', path: '/terms', label: 'Terms', title: 'Terms', description: 'Governed terms placeholder for the APGI public website.', footer: true }
];

export const services = [
  { name: 'Security risk mitigation advisory', need: 'Complex operations need clear, proportionate protection decisions.', outcome: 'Risk posture, controls and next actions are clarified for leaders.', cta: '/contact' },
  { name: 'Human rights security training', need: 'Teams need practical training that starts with people, not paperwork.', outcome: 'Learners understand risk, conduct and escalation expectations.', cta: '/training' },
  { name: 'Independent assurance and verification', need: 'Executives need unbiased checks that separate claims from evidence.', outcome: 'Assurance findings, gaps and readiness states are made visible.', cta: '/contact' },
  { name: 'Operational mentorship and readiness', need: 'Security programs need guided improvement over time.', outcome: 'Teams receive mentorship, improvement sequencing and accountable handoff.', cta: '/contact' }
];

export const hubModules = [
  { name: 'Maturity Roadmap / MMM', slug: 'marketing/maturity-roadmap' },
  { name: 'Risk Management', slug: 'marketing/risk-management' },
  { name: 'Project Implementation Tracker / PIT', slug: 'marketing/project-implementation' },
  { name: 'Incident & Intelligence Hub', slug: 'marketing/incident-intelligence' },
  { name: 'Data Analytics & Remote Assurance', slug: 'marketing/data-analytics-assurance' },
  { name: 'Systems Integration / RADAM', slug: 'marketing/systems-integration' },
  { name: 'Skills Development Portal', slug: 'marketing/skills-development' }
];

export const trainingOffers = [
  { name: 'Security human rights foundations', status: 'Public storefront handoff', detail: 'Training pathway for practical security human rights awareness and decision-making.' },
  { name: 'Risk mitigation skills', status: 'Structured offering', detail: 'Applied risk assessment, escalation and field-ready judgement training.' },
  { name: 'Group and custom training', status: 'Contact APGI', detail: 'Custom cohorts and organizational programs are handled through direct public contact.' }
];

export const pageContent = {
  services: {
    eyebrow: 'Services',
    heading: 'Risk mitigation services with substance, evidence and human judgement.',
    intro: 'APGI supports organizations that need practical security, assurance and training capability without turning the public website into a private system.',
    sections: [
      'Service delivery focuses on real-world protection of people, process and property.',
      'Each service block connects a client need to an outcome and a safe public CTA.',
      'Detailed implementation or private client workflows remain outside this public website scope.'
    ]
  },
  platform: {
    eyebrow: 'APGI Hub',
    heading: 'A public view of the APGI Hub ecosystem.',
    intro: 'The platform page explains the APGI Hub direction and renders module states safely. If the Hub base URL is unavailable, module actions remain pending rather than broken.',
    sections: []
  },
  training: {
    eyebrow: 'Training',
    heading: 'Training that starts with people and moves toward safer decisions.',
    intro: 'APGI training content is presented through structured offering cards and a public Thinkific handoff. No Thinkific administration or private course management URL is exposed.',
    sections: []
  },
  about: {
    eyebrow: 'About',
    heading: 'Independent protection advice for people, process and property.',
    intro: 'APGI positions security risk mitigation as a people-first discipline supported by experience, integrity and practical verification.',
    sections: ['APGI gives clients what they need, not what they do not.', 'The public site presents APGI clearly while keeping private delivery systems out of scope.', 'Philanthropy, training and mentorship remain important parts of the APGI story.']
  },
  team: {
    eyebrow: 'Team',
    heading: 'Experienced specialists, governed public profiles.',
    intro: 'Team content is structured for approved public profiles. Where final biography content is not approved, this page uses honest placeholders rather than invented claims.',
    sections: ['Founder / principal profile: pending approved public biography.', 'Advisory and delivery specialists: pending approved public profile content.', 'Public profile content will not invent credentials, client claims or regulated statements.']
  },
  contact: {
    eyebrow: 'Contact',
    heading: 'Talk to APGI without a backend form.',
    intro: 'The contact page provides direct public handoffs only. It intentionally avoids backend form capture, CRM storage or database persistence.',
    sections: []
  },
  privacy: {
    eyebrow: 'Legal',
    heading: 'Privacy placeholder for governed final copy.',
    intro: 'This route exists so the public site does not ship broken legal navigation. Final privacy copy should be reviewed and approved before launch.',
    sections: ['This static public website does not add authentication, account storage, CRM capture or backend form processing.', 'External links may take visitors to third-party services such as Thinkific or future APGI Hub destinations.', 'Final legal wording remains a governed content decision.']
  },
  terms: {
    eyebrow: 'Legal',
    heading: 'Terms placeholder for governed final copy.',
    intro: 'This route exists so the public site has a stable terms destination while final legal content is governed.',
    sections: ['Website information is public-facing and informational.', 'Training, advisory and platform engagements require separate approved agreements or handoffs.', 'Final legal wording remains a governed content decision.']
  }
};

export function hubHref(moduleSlug: string) {
  const base = import.meta.env.ISMS_PUBLIC_BASE_URL;
  if (!base) return null;
  return `${base.replace(/\/$/, '')}/${moduleSlug}`;
}
