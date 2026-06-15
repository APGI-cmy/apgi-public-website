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
  { key: 'training', path: '/training', label: 'Training', title: 'Training', description: 'APGI classroom, contact-delivery and e-learning training catalogue covering security investigations, supervision, risk management, VPSHR, diamond controls and specialist awareness programmes.', footer: true },
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

export const classroomTraining = [
  { title: 'Security Investigations', category: 'Investigations', duration: '4.5 days', delivery: 'Classroom / residential contact', audience: 'Personnel responsible for conducting investigations at mining operations.', overview: 'Basic investigations training covering scene handling, observation, preliminary evidence collection and case-docket preparation for handover.', assessment: 'Formative, summative, practical and post-training assignment.', cta: 'Contact APGI for classroom delivery' },
  { title: 'Security Supervisor', category: 'Supervision', duration: '4.5 days', delivery: 'Classroom / residential contact', audience: 'Individuals responsible for supervising security personnel.', overview: 'Hands-on security supervisory training focused on assessing, guiding, coaching and mentoring subordinates in operational duties.', assessment: 'Formative and summative assessment.', cta: 'Contact APGI for classroom delivery' },
  { title: 'Diamond Mining and Processing - A Security Perspective', category: 'Diamond controls', duration: '5 days', delivery: 'Classroom / residential contact', audience: 'Security Process Expert personnel in diamond mining operations.', overview: 'Detailed training on diamond recovery operations, vulnerabilities, indicators of theft, operational failures and loss-prevention opportunities.', assessment: 'Formative, summative, practical and post-training assignment.', cta: 'Contact APGI for classroom delivery' },
  { title: 'Security Surveillance and Control Monitoring', category: 'Surveillance', duration: '4.5 days', delivery: 'Classroom / residential contact', audience: 'People and Process Monitoring personnel in mining operations.', overview: 'Surveillance, post-event review and targeted analysis training for high-risk activities, suspicious behaviour indicators and rights-respecting observation.', assessment: 'Formative, summative, practical and post-training assignment.', cta: 'Contact APGI for classroom delivery' },
  { title: 'X-ray Scanning and Search Techniques', category: 'Search and screening', duration: '3.5 days', delivery: 'Classroom / residential contact', audience: 'Personnel viewing X-ray images at diamond mining operations.', overview: 'Training for critically interrogating X-ray images to detect diamonds concealed on or in the human body and prevent diamond theft.', assessment: 'Formative, summative, practical and post-training assignment.', cta: 'Contact APGI for classroom delivery' },
  { title: 'Security Risk Management Training Programme', category: 'Risk management', duration: '4.5 days', delivery: 'Classroom / residential contact', audience: 'Key personnel managing security risk and conducting operational risk assessments.', overview: 'Security-context risk management training covering principles, frameworks, risk assessments and credible security-domain application.', assessment: 'Formative, summative and post-training assignment.', cta: 'Contact APGI for classroom delivery' },
  { title: 'Voluntary Principles on Security and Human Rights - Level 1', category: 'VPSHR', duration: '3.5 days classroom / 1 month e-learning pathway', delivery: 'Classroom and e-learning pathway', audience: 'Security officers requiring foundational human-rights practice in law-enforcement responsibilities.', overview: 'Introduces VPSHR, broader human rights, workplace protection duties and practical human-rights awareness.', assessment: 'Formative and summative assessment.', cta: 'Open Thinkific or contact APGI' },
  { title: 'Voluntary Principles on Security and Human Rights - Level 2', category: 'VPSHR', duration: '3.5 days', delivery: 'Classroom / residential contact', audience: 'Security officers with more advanced cognitive capabilities and human-rights responsibilities.', overview: 'Intermediate VPSHR and human-rights training for security officers applying international best-practice principles.', assessment: 'Formative and summative assessment.', cta: 'Contact APGI for classroom delivery' },
  { title: 'Voluntary Principles on Security and Human Rights - Level 3', category: 'VPSHR', duration: '1.5 days', delivery: 'Classroom / residential contact', audience: 'Senior management responsible for designing and implementing VPSHR compliance.', overview: 'Management-level VPSHR training for implementation responsibility, due diligence and compliance oversight.', assessment: 'Formative, summative and post-training assignment.', cta: 'Contact APGI for classroom delivery' },
  { title: 'Security Project Management', category: 'Project controls', duration: '5 days', delivery: 'Classroom / residential contact', audience: 'Security officials involved in or responsible for project environments.', overview: 'Training for applying security principles, norms and controls within project environments.', assessment: 'Formative, summative and post-training assignment.', cta: 'Contact APGI for classroom delivery' },
  { title: 'Customer Relations in Security', category: 'Public interaction', duration: '2.5 days', delivery: 'Classroom / residential contact', audience: 'Security officers who deal with the public in rule or law-enforcement contexts.', overview: 'Practical role-play training for non-verbal communication, complaint handling, conflict defusing and assertive conduct without aggression.', assessment: 'Formative, summative and practical assessment.', cta: 'Contact APGI for classroom delivery' }
];

export const eLearningTraining = [
  { title: 'Voluntary Principles on Security and Human Rights Level 0', status: 'Available on e-learning platform', detail: 'Foundational VPSHR course surface shown on the APGI platform catalogue.', meta: '17 lessons' },
  { title: 'Voluntary Principles on Security and Human Rights Level 1 - Refresher 2025', status: 'Available on e-learning platform', detail: 'Refresher pathway for VPSHR Level 1 learners.', meta: '38 lessons' },
  { title: 'Mastering Diamond Control Standards: A Comprehensive Guide', status: 'Available on e-learning platform', detail: 'Diamond control standards course aligned with APGI diamond-loss-prevention training depth.', meta: '62 lessons' },
  { title: 'Tiger Kidnapping Awareness Programme', status: 'Available on e-learning platform', detail: 'Awareness training programme for tiger kidnapping threat recognition and mitigation.', meta: '30 lessons' },
  { title: 'Tiger Kidnapping: Know the Threat / Assess Your Risk', status: 'Available on e-learning platform', detail: 'Short risk-awareness offering for tiger kidnapping threat assessment.', meta: '4 lessons' }
];

export const trainingOffers = [
  { name: 'Classroom and contact-delivery catalogue', status: `${classroomTraining.length} programmes`, detail: 'Security investigations, supervision, risk management, VPSHR, diamond controls, surveillance, search, projects and customer relations.' },
  { name: 'E-learning platform offerings', status: `${eLearningTraining.length} offerings`, detail: 'Thinkific/public-platform course surface including VPSHR, Diamond Control and Tiger Kidnapping offerings.' },
  { name: 'Group and custom training', status: 'Contact APGI', detail: 'Custom cohorts, classroom delivery and organization-specific outcomes are handled through direct public contact.' }
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
    heading: 'Training that extends beyond VPSHR into a full APGI catalogue.',
    intro: 'APGI training is presented as a structured catalogue with classroom/contact-delivery programmes and a separate public e-learning platform surface. VPSHR is one training family, not the whole training offer.',
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
