import type { Core } from '@strapi/strapi';

const LANDING_PAGE_SEED = {
  title: 'NCompassTV Dev Portal',
  sections: [
    {
      __component: 'landing.hero',
      eyebrow: 'Internal Developer Platform',
      headline: 'One portal for',
      headlineAccent: 'every team.',
      subheadline:
        'The NCompassTV Dev Portal centralises documentation, project registries, coding standards, and onboarding guides for all engineering and design teams — so everyone ships faster.',
      links: [
        { type: 'primary', label: 'Login to Portal', url: '/login' },
        { type: 'secondary', label: 'Explore Teams', url: '/teams' },
      ],
    },
    { __component: 'landing.stats-item', value: '7', label: 'TEAMS' },
    { __component: 'landing.stats-item', value: '20+', label: 'PROJECTS' },
    { __component: 'landing.stats-item', value: '8', label: 'TOOLS' },
    { __component: 'landing.stats-item', value: 'Angular 21', label: 'CORE STACK' },
    {
      __component: 'landing.team-showcase',
      eyebrow: 'OUR SEVEN TEAMS',
      title: 'Every team. Every stack.',
      description: 'Click any team card to jump directly to their documentation inside the portal.',
    },
    {
      __component: 'landing.features-grid',
      eyebrow: "WHAT'S INSIDE",
      title: 'Everything a dev needs.',
      description:
        "From onboarding to production — one place for all the context that usually lives in people's heads.",
      items: [
        {
          icon: 'book-open',
          title: 'Team Documentation',
          description:
            'Every team has structured docs covering tech stack, getting started guides, folder architecture, and coding patterns.',
        },
        {
          icon: 'code',
          title: 'Code Standards',
          description:
            'Canonical patterns, common mistakes, and approved libraries — one source of truth for how we write code at NCompassTV.',
        },
        {
          icon: 'layers',
          title: 'Project Registry',
          description:
            'Live project cards with status, stack, contacts, and getting-started steps for every app owned by each team.',
        },
        {
          icon: 'zap',
          title: 'Fast Onboarding',
          description:
            'New engineers and designers go from zero to productive in hours, not days — all the context they need is here.',
        },
        {
          icon: 'users',
          title: 'Cross-team Visibility',
          description:
            'See how every team works, what they own, and who to contact — essential for cross-functional collaboration.',
        },
        {
          icon: 'shield',
          title: 'Always Up to Date',
          description:
            'Documentation lives alongside the codebase and is updated every sprint by the teams who own it.',
        },
      ],
    },
    {
      __component: 'landing.company-about',
      eyebrow: 'ABOUT THE COMPANY',
      title: 'Your brand, seen where it matters.',
      description:
        'N-Compass TV is a US-based indoor digital billboard company placing high-impact advertising screens in the high-traffic venues your customers already visit — restaurants, gyms, medical offices, and auto shops. Headquartered in Lakewood, Colorado, the company connects local businesses to their communities through a nationwide franchise dealership network.',
      bullets: [
        { text: 'Indoor digital billboards placed in high-traffic community venues across the US' },
        { text: 'Reach customers where they already spend time — restaurants, gyms, and clinics' },
        { text: 'Business-to-business marketing network connecting local advertisers to audiences' },
        { text: 'Franchise dealership model with high revenue potential and low startup costs' },
        { text: 'Community-focused coverage putting brands in front of local customers daily' },
      ],
      metaItems: [
        { icon: 'building', label: 'INDUSTRY', value: 'Digital Advertising' },
        { icon: 'monitor', label: 'FORMAT', value: 'Indoor Digital Billboards' },
        { icon: 'map-pin', label: 'HQ', value: 'Lakewood, CO, USA' },
        { icon: 'wifi', label: 'NETWORK', value: 'High-traffic venues' },
        { icon: 'layout', label: 'PLACEMENT', value: 'Community-wide coverage' },
        { icon: 'users', label: 'MODEL', value: 'Dealership franchise' },
      ],
      venuesLabel: 'VENUES & INDUSTRIES',
      venues: [
        { label: 'Restaurants' },
        { label: 'Fitness & Gyms' },
        { label: 'Medical Offices' },
        { label: 'Auto Repair' },
        { label: 'Retail' },
        { label: 'Local Business' },
      ],
      link: { type: 'outline', label: 'Visit n-compass.tv', url: 'https://n-compass.tv' },
    },
    {
      __component: 'landing.cta-banner',
      eyebrow: 'READY TO EXPLORE?',
      title: 'Built by the team, for the team.',
      description:
        'The NCompassTV Dev Portal is maintained by all seven engineering and design teams. Documentation is updated every sprint — if something is missing, raise a ticket and own it.',
      links: [
        { type: 'primary', label: 'Enter the Portal', url: '/teams' },
        { type: 'secondary', label: 'View Teams', url: '/teams' },
      ],
    },
  ],
};

const NAVBAR_SEED = {
  logoText: 'NCompassTV',
  logoSubtext: 'DEV PORTAL',
  links: [
    { type: 'internal', label: 'Teams', url: '/teams' },
    { type: 'internal', label: 'Features', url: '/features' },
    { type: 'internal', label: 'About', url: '/about' },
    { type: 'internal', label: 'Company', url: '/company' },
    { type: 'external', label: 'Official Site', url: 'https://n-compass.tv' },
  ],
  cta: { type: 'primary', label: 'Login', url: '/login' },
};

export default {
  register(/* { strapi }: { strapi: Core.Strapi } */) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    // Seed landing page
    const existingLanding = await strapi
      .documents('api::landing-page.landing-page')
      .findFirst({});

    if (!existingLanding) {
      await strapi.documents('api::landing-page.landing-page').create({
        data: LANDING_PAGE_SEED as any,
        status: 'published',
      });
      strapi.log.info('[seed] Landing page seeded successfully.');
    } else {
      strapi.log.info('[seed] Landing page already exists — skipping.');
    }

    // Seed navbar
    const existingNavbar = await strapi
      .documents('api::navbar.navbar')
      .findFirst({});

    if (!existingNavbar) {
      await strapi.documents('api::navbar.navbar').create({
        data: NAVBAR_SEED as any,
        status: 'published',
      });
      strapi.log.info('[seed] Navbar seeded successfully.');
    } else {
      strapi.log.info('[seed] Navbar already exists — skipping.');
    }
  },
};
