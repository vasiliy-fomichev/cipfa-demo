export type SitePage = {
  label: string;
  path: string;
  eyebrow: string;
  title: string;
  intro: string;
  cta: string;
  sections: {
    title: string;
    body: string;
  }[];
};

export const primaryNavigation: SitePage[] = [
  {
    label: "About",
    path: "/about",
    eyebrow: "Who we are",
    title: "Dedicated to stronger public finance",
    intro:
      "CIPFA supports public finance professionals with standards, guidance, learning, and practical support for better public services.",
    cta: "Explore our work",
    sections: [
      {
        title: "Our purpose",
        body: "We help public bodies build financial confidence, improve accountability, and make decisions that stand up to scrutiny.",
      },
      {
        title: "Global community",
        body: "Our membership brings together finance leaders, students, partners, and organisations working across public service.",
      },
      {
        title: "Public value",
        body: "Everything we do is shaped by the needs of people who manage public money and the communities they serve.",
      },
    ],
  },
  {
    label: "Services",
    path: "/services",
    eyebrow: "What we offer",
    title: "Practical support for public sector finance",
    intro:
      "Find advisory, training, standards, and transformation support built for the realities of public financial management.",
    cta: "View services",
    sections: [
      {
        title: "Advisory",
        body: "Specialist guidance for governance, resilience, reporting, audit, and organisational improvement.",
      },
      {
        title: "Standards",
        body: "Clear frameworks and technical insight for finance teams that need confidence in complex environments.",
      },
      {
        title: "Capability",
        body: "Programmes that help teams strengthen skills, leadership, and financial decision-making.",
      },
    ],
  },
  {
    label: "Sectors",
    path: "/sectors",
    eyebrow: "Public sector expertise",
    title: "Support shaped around your sector",
    intro:
      "Navigate guidance for central government, local government, health, policing, and international public finance.",
    cta: "Find your sector",
    sections: [
      {
        title: "Central government",
        body: "Finance, reporting, governance, and transformation support for national public bodies.",
      },
      {
        title: "Local government",
        body: "Tools and insight for councils managing demand, risk, service pressure, and financial resilience.",
      },
      {
        title: "Public health and safety",
        body: "Resources for health, policing, and other essential services balancing outcomes with affordability.",
      },
    ],
  },
  {
    label: "Membership",
    path: "/membership",
    eyebrow: "Join CIPFA",
    title: "A professional home for public finance",
    intro:
      "Connect with a specialist membership body for public finance professionals at every stage of their career.",
    cta: "Become a member",
    sections: [
      {
        title: "Member support",
        body: "Access technical updates, networks, events, and guidance designed around public service finance.",
      },
      {
        title: "Career progression",
        body: "Build recognised capability through qualifications, CPD, and professional development pathways.",
      },
      {
        title: "Community",
        body: "Share knowledge with peers who understand the standards and pressures of public finance work.",
      },
    ],
  },
  {
    label: "Training",
    path: "/training",
    eyebrow: "Learning and qualifications",
    title: "Build skills that public services rely on",
    intro:
      "Explore courses, qualifications, and CPD for finance professionals working across public organisations.",
    cta: "Browse training",
    sections: [
      {
        title: "Qualifications",
        body: "Structured learning pathways for students and professionals pursuing public finance expertise.",
      },
      {
        title: "Short courses",
        body: "Focused training for governance, audit, accounting, leadership, and financial management.",
      },
      {
        title: "Team development",
        body: "Flexible learning support for organisations building finance capability at scale.",
      },
    ],
  },
  {
    label: "Insights",
    path: "/insights",
    eyebrow: "CIPFA Thinks",
    title: "Analysis for public finance decisions",
    intro:
      "Read current thinking on public finance risk, reform, accountability, service pressure, and long-term resilience.",
    cta: "Read insights",
    sections: [
      {
        title: "Finance risk",
        body: "Understand the pressures reshaping budgets, reserves, governance, and financial sustainability.",
      },
      {
        title: "Policy change",
        body: "Track the implications of reform across social care, health, local government, and public services.",
      },
      {
        title: "Good practice",
        body: "Practical perspectives from finance leaders and specialists working close to public sector delivery.",
      },
    ],
  },
];

export const utilityNavigation = [
  {
    label: "Contact",
    path: "/contact",
  },
  {
    label: "Member Login",
    path: "/login",
  },
  {
    label: "Join Us",
    path: "/join",
  },
];

export const allNavigation = [...primaryNavigation, ...utilityNavigation];

export function getPageByPath(path: string) {
  return primaryNavigation.find((item) => item.path === path);
}
