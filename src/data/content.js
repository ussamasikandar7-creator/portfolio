// Central content file — edit everything about the site's copy here.

export const profile = {
  name: "Ussama Sikandar",
  role: "GTM & AI Automation",
  tagline: "I build B2B revenue systems and AI automation workflows that turn manual GTM work into repeatable infrastructure.",
  location: "London, UK",
  email: "ussama.sikandar7@gmail.com",
  phone: "+44 7944 467426",
  linkedin: "https://www.linkedin.com/in/ussama-sikandar",
  github: "https://github.com/ussamasikandar7-creator",
};

// Only numbers Ussama confirmed he can stand behind. "YC Startups" was dropped
// entirely (couldn't be defined/sourced). Leads was corrected down from an
// unverified 1M+ to a figure he's actually comfortable with.
export const stats = [
  { value: 50, suffix: "+", label: "Systems Built" },
  { value: 50, suffix: "K+", label: "Leads Processed" },
];

export const flagshipProof = {
  headline: "Every build",
  detail: "demoed and documented on LinkedIn as it shipped —",
  linkLabel: "watch the videos",
};

export const about = [
  "I sit at the intersection of GTM and AI — two and a half years running outbound, revenue, and account growth for B2B teams, now channeled into building the automation systems that used to take those teams hours of manual work.",
  "I design and ship n8n / OpenAI-powered workflows, lightweight internal tools, and lead-gen pipelines that founders and RevOps teams can actually run without babysitting them — with human approval built in wherever it matters.",
];

export const caseStudies = [
  {
    id: "voice-qualification",
    tag: "Flagship · Client work",
    number: "01",
    title: "AI Voice Qualification Workflow",
    subtitle:
      "Inbound leads get validated, called and qualified by an AI voice agent before a human ever picks up the thread.",
    problem:
      "Every inbound form submission needed a manual call to validate the number, run through qualification questions, and log the outcome — slow, and inconsistent depending on who made the call.",
    context:
      "Response speed decides whether an inbound lead converts. Manually dialling every submission, catching voicemail versus a real answer, and writing up notes by hand doesn't hold up once volume grows.",
    system: [
      "A form submission triggers the workflow",
      "The phone number is validated before any call is placed",
      "Vapi places an AI-driven qualification call to the lead",
      "Voicemail and incomplete-call scenarios are detected and routed separately from completed calls",
      "Budget, timeline and business challenge are captured during successful calls",
      "Call outcome and structured responses are logged to Google Sheets",
      "Sales is only notified once a lead is confirmed qualified",
    ],
    outcome:
      "Cut the delay between form submission and first qualification touch, and handed sales structured call data instead of a raw voicemail to sort through by hand.",
    tools: ["n8n", "Vapi", "OpenAI", "Google Sheets"],
    linkLabel: "Watch the workflow demo on LinkedIn",
    url: "https://www.linkedin.com/posts/ussama-sikandar_aiautomation-voiceai-n8n-activity-7485257415148556289-zZH9",
  },
  {
    id: "proposal-automation",
    tag: "Client work",
    number: "02",
    title: "AI Proposal Automation System",
    subtitle:
      "From meeting information to a structured, client-ready proposal — with human approval built into the process.",
    problem:
      "Client information and meeting notes were stored across different tools. Proposal content had to be written manually, approval was handled separately, and proposal progress was difficult to monitor.",
    context:
      "Sales proposals often require information to be manually transferred between emails, meeting notes, spreadsheets, AI tools and presentation software. This creates unnecessary delays and makes it difficult to track whether a proposal has been prepared, reviewed or delivered.",
    system: [
      "Captures client and meeting information from Gmail or an intake form",
      "Uses AI to extract and structure important details",
      "Records client requirements, goals, budgets and timelines in Google Sheets",
      "Waits for human approval before generating proposal content",
      "Uses OpenAI to create structured, proposal-ready copy",
      "Produces and distributes the proposal deck link through Gmail",
      "Automatically updates the proposal status for easier tracking",
    ],
    outcome:
      "Created a repeatable meeting-to-proposal process that reduces manual handoffs, keeps proposal information organised and maintains human control over important client communication.",
    tools: ["n8n", "OpenAI", "Gmail", "Google Sheets", "Google Slides"],
    linkLabel: "View full case study",
    url: null,
  },
  {
    id: "email-assistant",
    tag: "Client work",
    number: "03",
    title: "Human-Approved AI Email Assistant",
    subtitle:
      "An AI email workflow that prepares context-aware replies without sending anything unsupervised.",
    problem:
      "Incoming emails had to be reviewed individually before a response could be written. This slowed down communication, while completely automatic replies would have removed too much human control.",
    context:
      "Businesses regularly receive repetitive enquiries that take time to review and answer. Fully automated replies may save time, but they can also create accuracy, tone and compliance risks.",
    system: [
      "Gmail triggers the workflow",
      "An AI agent analyses the email and prepares a relevant response",
      "Conversation memory helps preserve the context of the email thread",
      "Google Sheets can provide additional reference information",
      "The proposed response is delivered to Slack for review",
      "The email is sent through Gmail only after approval",
    ],
    outcome:
      "Made email response preparation faster while ensuring that every message can still be reviewed and approved by a real person before it reaches the recipient.",
    tools: ["n8n", "OpenAI", "Gmail", "Slack", "Google Sheets"],
    linkLabel: "View project",
    url: null,
  },
  {
    id: "unlock-crm",
    tag: "Client work",
    number: "04",
    title: "Unlock CRM",
    subtitle:
      "A lightweight CRM application designed to centralise customer information and sales activity.",
    problem:
      "Customer information was difficult to organise consistently across separate files. There was no clear, accessible workspace for maintaining structured records and reviewing sales activity.",
    context:
      "Small teams often begin managing leads and customer information through disconnected spreadsheets and documents. As the amount of information grows, records become harder to maintain and important follow-ups can be missed.",
    system: [
      "A responsive React-based user interface",
      "Structured storage for customer and sales information",
      "Supabase as the cloud database and backend",
      "Type-safe development using TypeScript",
      "Deployment through Vercel for easy online access",
      "A scalable technical foundation for adding future CRM features",
    ],
    outcome:
      "Produced a working and deployable CRM foundation that brings fragmented customer information into one accessible system.",
    tools: ["React", "TypeScript", "Supabase", "Vercel"],
    linkLabel: "View live project",
    url: null,
  },
  {
    id: "lead-research",
    tag: "Client work",
    number: "05",
    title: "B2B Lead Research and Outreach System",
    subtitle:
      "A structured process for turning broad target markets into qualified prospect lists and organised outbound campaigns.",
    problem:
      "Manual prospect research took significant time and produced inconsistent results. Without defined qualification rules, sales teams could spend time contacting businesses that were not suitable potential customers.",
    context:
      "Outbound campaigns perform poorly when targeting is too broad, contact information is unreliable or leads are added without clear qualification criteria.",
    system: [
      "Defines qualification criteria by industry, location, company size and revenue",
      "Identifies relevant companies through LinkedIn Sales Navigator",
      "Enriches prospect and company information using Apollo and Lusha",
      "Verifies decision-maker roles and contact information",
      "Segments leads according to campaign and market requirements",
      "Organises qualified prospects in Google Sheets",
      "Prepares structured email campaigns through outbound sequencing tools",
    ],
    outcome:
      "Improved the consistency of prospect qualification, reduced unnecessary research and created a clearer process for preparing targeted outbound campaigns.",
    tools: ["LinkedIn Sales Navigator", "Apollo", "Lusha", "Instantly", "Google Sheets"],
    linkLabel: "View project",
    url: null,
  },
];

export const experience = [
  {
    company: "Simplify Sales & Marketing",
    role: "Sales & Marketing Associate",
    period: "Jun 2024 – Present",
    place: "Australia (Remote)",
    points: [
      "Lifted qualified pipeline generation by ~30% for B2B clients through targeted outbound campaigns, combining prospect research, personalised messaging, and consistent follow-up cadences.",
      "Reduced revenue leakage by ~20% by re-engineering the sales funnel, tightening lead nurturing sequences, and improving mid-funnel conversion.",
      "Maintained CRM discipline with zero missed cases across six months — every prospect tracked, every touchpoint logged, every commitment actioned.",
    ],
  },
  {
    company: "Vix Commerce",
    role: "Brand Portfolio Manager",
    period: "Dec 2023 – Jul 2025",
    place: "Lahore, Pakistan (Remote)",
    points: [
      "Grew account revenue from $500 to $3,500 in month one and sustained ~30% MoM growth by identifying upsell opportunities and expanding wallet share within existing accounts.",
      "Improved account retention by 25% through structured account reviews, proactive stewardship, and quarterly performance reporting.",
      "Delivered 45% engagement lift and 22% CTR improvement across social channels by optimising content strategy and A/B testing campaign creative.",
    ],
  },
  {
    company: "Bizmate Solutions",
    role: "Client Acquisition Specialist",
    period: "Nov 2024 – Jun 2025",
    place: "Ontario, Canada (Remote)",
    points: [
      "Expanded client base by 30% in three months and drove a 20% revenue increase through targeted outbound acquisition and relationship-led onboarding.",
      "Cut time-to-activation by 15% by redesigning the onboarding workflow, reducing handover friction between sales and account management.",
      "Retained and expanded at-risk acquisition-stage accounts by providing consultative brand and positioning support beyond scope, converting churn-risk clients into long-term revenue contributors.",
    ],
  },
  {
    company: "Cube Online",
    role: "Client Communication & Support Associate",
    period: "Jul 2023 – Sep 2023",
    place: "Lahore, Pakistan",
    points: [
      "Managed inbound client interactions across multiple digital channels, sustaining sub-two-hour response times through disciplined ticket handling and consistent follow-up.",
      "Resolved escalated client issues with structured, empathetic problem-solving, contributing to a 25% lift in customer satisfaction and engagement scores.",
      "Supported multi-channel communication campaigns, coordinating messaging across email and social channels to strengthen brand consistency and client trust.",
    ],
  },
];

export const education = [
  {
    school: "University of East Anglia",
    degree: "MSc Business Analytics and Management",
    period: "Sept 2024 – Present",
    place: "Norwich, UK",
    detail: "Modules: Data Analytics for Business, Digital Business, Marketing Theory, AI in Business.",
  },
  {
    school: "Lahore School of Economics",
    degree: "BSc (Hons) Accounting and Finance",
    period: "Sept 2019 – 2023",
    place: "Lahore, Pakistan",
    detail: "First Class Honours.",
  },
];

export const certifications = [
  "Data Analytics & Python — IBM / Coursera",
  "Digital Marketing & E-commerce — Google",
  "Data Visualisation & Dashboards",
  "Web Development — edX",
];

export const skills = [
  {
    group: "GTM & Sales",
    items: [
      "Outbound prospecting",
      "Lead qualification",
      "Pipeline development",
      "Funnel optimisation",
      "Conversion analysis",
      "Account growth",
      "Upsell",
      "Retention",
    ],
  },
  {
    group: "Sales & RevOps Tools",
    items: [
      "HubSpot",
      "Salesforce",
      "Monday",
      "GoHighLevel",
      "Smartlead",
      "Zapier",
      "Sales cadences",
      "KPI reporting",
      "A/B testing",
      "Dashboard design",
    ],
  },
  {
    group: "Data & AI",
    items: [
      "Excel (Advanced)",
      "SQL",
      "Python",
      "Claude Code",
      "n8n",
      "OpenAI API",
      "Data visualisation",
      "Canva",
    ],
  },
];

export const navLinks = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];
