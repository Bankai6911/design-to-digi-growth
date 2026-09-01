export type FieldType = "text" | "textarea" | "icon" | "url" | "list";

export interface Field {
  key: string;
  label: string;
  type: FieldType;
  /** Only for type === "list" */
  fields?: Field[];
  /** Only for type === "list": template used when adding a new item */
  itemDefaults?: Record<string, string>;
  help?: string;
}

export interface Section {
  key: string;
  label: string;
  description?: string;
  fields: Field[];
}

/** The complete editable content model of the website. */
export const sections: Section[] = [
  {
    key: "navbar",
    label: "Navigation Bar",
    description: "Logo text, menu links and the header button.",
    fields: [
      { key: "logoAccent", label: "Logo — accent part", type: "text" },
      { key: "logoRest", label: "Logo — rest", type: "text" },
      { key: "ctaLabel", label: "Header button label", type: "text" },
      { key: "ctaHref", label: "Header button target", type: "url" },
      {
        key: "links",
        label: "Menu links",
        type: "list",
        itemDefaults: { label: "New link", href: "#contact" },
        fields: [
          { key: "label", label: "Label", type: "text" },
          { key: "href", label: "Target (e.g. #services)", type: "url" },
        ],
      },
    ],
  },
  {
    key: "hero",
    label: "Hero Section",
    fields: [
      { key: "badge", label: "Badge text", type: "text" },
      { key: "headingStart", label: "Heading — start", type: "text" },
      { key: "headingHighlight", label: "Heading — highlighted words", type: "text" },
      { key: "headingEnd", label: "Heading — end", type: "text" },
      { key: "subtext", label: "Subtext", type: "textarea" },
      { key: "primaryLabel", label: "Primary button label", type: "text" },
      { key: "primaryHref", label: "Primary button target", type: "url" },
      { key: "secondaryLabel", label: "Secondary button label", type: "text" },
      { key: "secondaryHref", label: "Secondary button target", type: "url" },
    ],
  },
  {
    key: "ecosystem",
    label: "Growth Ecosystem",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "headingStart", label: "Heading — start", type: "text" },
      { key: "headingHighlight", label: "Heading — highlighted", type: "text" },
      {
        key: "nodes",
        label: "Flow nodes",
        type: "list",
        itemDefaults: { label: "New node", icon: "Sparkles" },
        fields: [
          { key: "label", label: "Label", type: "text" },
          { key: "icon", label: "Icon", type: "icon" },
        ],
      },
    ],
  },
  {
    key: "services",
    label: "Services",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "subtext", label: "Subtext", type: "textarea" },
      {
        key: "items",
        label: "Service cards",
        type: "list",
        itemDefaults: { title: "New service", desc: "Description", icon: "Sparkles" },
        fields: [
          { key: "title", label: "Title", type: "text" },
          { key: "desc", label: "Description", type: "textarea" },
          { key: "icon", label: "Icon", type: "icon" },
        ],
      },
    ],
  },
  {
    key: "industries",
    label: "Industries We Serve",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "headingStart", label: "Heading — start", type: "text" },
      { key: "headingHighlight", label: "Heading — highlighted", type: "text" },
      {
        key: "items",
        label: "Industry cards",
        type: "list",
        itemDefaults: { name: "New industry", icon: "Sparkles" },
        fields: [
          { key: "name", label: "Name", type: "text" },
          { key: "icon", label: "Icon", type: "icon" },
        ],
      },
    ],
  },
  {
    key: "process",
    label: "Our Process",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "headingHighlight", label: "Heading — highlighted", type: "text" },
      { key: "headingRest", label: "Heading — rest", type: "text" },
      {
        key: "steps",
        label: "Steps",
        type: "list",
        itemDefaults: { title: "New step", desc: "Description", icon: "Sparkles" },
        fields: [
          { key: "title", label: "Title", type: "text" },
          { key: "desc", label: "Description", type: "textarea" },
          { key: "icon", label: "Icon", type: "icon" },
        ],
      },
    ],
  },
  {
    key: "whyUs",
    label: "Why Choose Us",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "headingStart", label: "Heading — start", type: "text" },
      { key: "headingHighlight", label: "Heading — highlighted", type: "text" },
      {
        key: "items",
        label: "Points",
        type: "list",
        itemDefaults: { name: "New point", desc: "Description", icon: "Sparkles" },
        fields: [
          { key: "name", label: "Title", type: "text" },
          { key: "desc", label: "Description", type: "textarea" },
          { key: "icon", label: "Icon", type: "icon" },
        ],
      },
    ],
  },
  {
    key: "cta",
    label: "Call To Action",
    fields: [
      { key: "headingStart", label: "Heading — start", type: "text" },
      { key: "headingHighlight", label: "Heading — highlighted", type: "text" },
      { key: "headingEnd", label: "Heading — end", type: "text" },
      { key: "subtext", label: "Subtext", type: "textarea" },
      { key: "buttonLabel", label: "Button label", type: "text" },
      { key: "buttonHref", label: "Button target", type: "url" },
    ],
  },
  {
    key: "contact",
    label: "Contact Section",
    fields: [
      { key: "eyebrow", label: "Eyebrow", type: "text" },
      { key: "heading", label: "Heading", type: "text" },
      { key: "subtext", label: "Subtext", type: "textarea" },
      { key: "cardTitle", label: "Side card title", type: "text" },
      { key: "cardText", label: "Side card text", type: "textarea" },
      { key: "submitLabel", label: "Submit button label", type: "text" },
      { key: "successMessage", label: "Success message", type: "text" },
      { key: "namePlaceholder", label: "Name placeholder", type: "text" },
      { key: "phonePlaceholder", label: "Phone placeholder", type: "text" },
      { key: "emailPlaceholder", label: "Email placeholder", type: "text" },
      { key: "messagePlaceholder", label: "Message placeholder", type: "text" },
      {
        key: "info",
        label: "Contact details",
        type: "list",
        itemDefaults: { label: "Label", value: "Value", icon: "Mail" },
        fields: [
          { key: "label", label: "Label", type: "text" },
          { key: "value", label: "Value", type: "text" },
          { key: "icon", label: "Icon", type: "icon" },
        ],
      },
    ],
  },
  {
    key: "footer",
    label: "Footer",
    fields: [
      { key: "logoAccent", label: "Logo — accent part", type: "text" },
      { key: "logoRest", label: "Logo — rest", type: "text" },
      { key: "tagline", label: "Tagline", type: "textarea" },
      { key: "linksTitle", label: "Links column title", type: "text" },
      { key: "servicesTitle", label: "Services column title", type: "text" },
      { key: "socialTitle", label: "Social column title", type: "text" },
      { key: "copyright", label: "Copyright line", type: "text" },
      {
        key: "links",
        label: "Quick links",
        type: "list",
        itemDefaults: { label: "New link", href: "#contact" },
        fields: [
          { key: "label", label: "Label", type: "text" },
          { key: "href", label: "Target", type: "url" },
        ],
      },
      {
        key: "services",
        label: "Services list",
        type: "list",
        itemDefaults: { label: "New service" },
        fields: [{ key: "label", label: "Label", type: "text" }],
      },
      {
        key: "socials",
        label: "Social links",
        type: "list",
        itemDefaults: { icon: "Facebook", href: "#" },
        fields: [
          { key: "icon", label: "Icon", type: "icon" },
          { key: "href", label: "URL", type: "url" },
        ],
      },
    ],
  },
  {
    key: "seo",
    label: "SEO & Meta",
    description: "Page title and description used by search engines.",
    fields: [
      { key: "title", label: "Page title", type: "text" },
      { key: "description", label: "Meta description", type: "textarea" },
    ],
  },
];

export type ContentValue = Record<string, unknown>;

/** Default content — used until an admin overrides it in the CMS. */
export const defaultContent: Record<string, ContentValue> = {
  navbar: {
    logoAccent: "Ad",
    logoRest: "Metaverse",
    ctaLabel: "Get Started",
    ctaHref: "#contact",
    links: [
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Why Us", href: "#why-us" },
      { label: "Contact", href: "#contact" },
    ],
  },
  hero: {
    badge: "Digital Growth Agency",
    headingStart: "We Engineer",
    headingHighlight: "Digital Growth",
    headingEnd: "Systems for Modern Businesses.",
    subtext:
      "Web Design. SEO. Paid Ads. Marketplace Optimization. Everything your business needs to attract, convert, and scale online.",
    primaryLabel: "🚀 Launch My Business Online",
    primaryHref: "#contact",
    secondaryLabel: "📈 Get a Free Growth Plan",
    secondaryHref: "#services",
  },
  ecosystem: {
    eyebrow: "Ecosystem",
    headingStart: "One Strategy.",
    headingHighlight: "Multiple Growth Channels.",
    nodes: [
      { label: "Website", icon: "Globe" },
      { label: "SEO", icon: "Search" },
      { label: "Paid Ads", icon: "Target" },
      { label: "Marketplace", icon: "ShoppingCart" },
      { label: "Growth", icon: "TrendingUp" },
    ],
  },
  services: {
    eyebrow: "What We Engineer",
    heading: "Services",
    subtext: "Comprehensive digital solutions designed to accelerate your online growth.",
    items: [
      {
        title: "Website Development",
        desc: "High-performance, conversion-focused websites engineered to turn visitors into customers.",
        icon: "Globe",
      },
      {
        title: "SEO",
        desc: "We engineer visibility with data-driven search optimization strategies.",
        icon: "Search",
      },
      {
        title: "Social Media Advertising",
        desc: "Precision-targeted paid campaigns built for measurable ROI.",
        icon: "Target",
      },
      {
        title: "E-commerce & Marketplace Optimization",
        desc: "We optimize product listings and digital storefronts for higher conversions and visibility.",
        icon: "ShoppingCart",
      },
    ],
  },
  industries: {
    eyebrow: "Who We Serve",
    headingStart: "Industries We",
    headingHighlight: "Serve",
    items: [
      { name: "Clinics", icon: "Stethoscope" },
      { name: "Local Businesses", icon: "Store" },
      { name: "Startups", icon: "Rocket" },
      { name: "Service Providers", icon: "Wrench" },
      { name: "E-commerce Brands", icon: "ShoppingBag" },
    ],
  },
  process: {
    eyebrow: "Growth Framework",
    headingHighlight: "Discover",
    headingRest: "→ Design → Deploy → Scale",
    steps: [
      {
        title: "Strategy & Research",
        desc: "Deep-dive into your market, audience, and competition to build a data-driven foundation.",
        icon: "Search",
      },
      {
        title: "UI/UX Engineering",
        desc: "Craft visually stunning, user-centric designs that guide visitors toward conversion.",
        icon: "Palette",
      },
      {
        title: "Development & Optimization",
        desc: "Build high-performance, SEO-ready digital solutions with clean, scalable code.",
        icon: "Code",
      },
      {
        title: "Launch & Growth Scaling",
        desc: "Deploy, monitor, and continuously optimize for maximum ROI and scalability.",
        icon: "Rocket",
      },
    ],
  },
  whyUs: {
    eyebrow: "Why Us",
    headingStart: "Why",
    headingHighlight: "AdMetaverse",
    items: [
      {
        name: "Conversion-Focused Architecture",
        desc: "Every pixel designed to drive action and maximize conversions.",
        icon: "Layers",
      },
      {
        name: "SEO-Ready Foundations",
        desc: "Built from the ground up for search engine visibility.",
        icon: "Search",
      },
      {
        name: "High-Performance Code",
        desc: "Lightning-fast load times with optimized, clean code.",
        icon: "Zap",
      },
      {
        name: "Mobile-First Design",
        desc: "Flawless experiences across every screen size.",
        icon: "Smartphone",
      },
      {
        name: "Scalable Growth Systems",
        desc: "Architecture that grows with your business.",
        icon: "TrendingUp",
      },
    ],
  },
  cta: {
    headingStart: "Ready to Turn Your Online Presence Into a",
    headingHighlight: "Revenue Engine",
    headingEnd: "?",
    subtext: "Let's build a digital growth system that drives real results for your business.",
    buttonLabel: "⚡ Let's Build Your Growth System",
    buttonHref: "#contact",
  },
  contact: {
    eyebrow: "Get In Touch",
    heading: "Contact Us",
    subtext: "Ready to grow your business? Let's start a conversation.",
    cardTitle: "Free Strategy Call",
    cardText:
      "Book a 30-minute call with our experts and get actionable insights for your business.",
    submitLabel: "Send Message",
    successMessage: "Message sent! We'll get back to you soon.",
    namePlaceholder: "Your name",
    phonePlaceholder: "Phone number",
    emailPlaceholder: "your@email.com",
    messagePlaceholder: "Tell us about your requirements...",
    info: [
      { label: "Email", value: "wasades851@gmail.com", icon: "Mail" },
      { label: "Phone", value: "+91-9511646998", icon: "Phone" },
      { label: "Location", value: "INDIA", icon: "MapPin" },
    ],
  },
  footer: {
    logoAccent: "Ad",
    logoRest: "Metaverse",
    tagline: "Engineering Digital Growth for Ambitious Businesses.",
    linksTitle: "Quick Links",
    servicesTitle: "Services",
    socialTitle: "Follow Us",
    copyright: "© 2026 AdMetaverse. All rights reserved.",
    links: [
      { label: "Services", href: "#services" },
      { label: "Process", href: "#process" },
      { label: "Why Us", href: "#why-us" },
      { label: "Contact", href: "#contact" },
    ],
    services: [
      { label: "Website Development" },
      { label: "SEO" },
      { label: "Social Media Ads" },
      { label: "Marketplace Optimization" },
    ],
    socials: [
      { icon: "Facebook", href: "#" },
      { icon: "Twitter", href: "#" },
      { icon: "Instagram", href: "#" },
      { icon: "Linkedin", href: "#" },
    ],
  },
  seo: {
    title: "AdMetaverse — Engineering Digital Growth Systems",
    description:
      "AdMetaverse builds high-performance websites, SEO, paid social campaigns and marketplace optimization for ambitious businesses.",
  },
};
