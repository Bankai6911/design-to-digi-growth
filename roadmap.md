# AdMetaverse — Roadmap

## Done

### Phase 0 — Foundations (complete)
- Shared primitives added: `src/components/ui-kit/Section.tsx`, `SectionHeading.tsx`, `GlassCard.tsx`, `NeonButton.tsx`.
- Shared motion variants + reveal config: `src/lib/motion.ts`; `prefers-reduced-motion` respected in `src/index.css`.
- Sections refactored onto the primitives with no visual change: Services, Industries, WhyChooseUs, Process, CTASection, Hero buttons.
- SEO cleanup: accurate title/description/OG/Twitter, canonical, font preconnect, ProfessionalService JSON-LD in `index.html`; `public/sitemap.xml` added.
- Services copy aligned to Website Development, SEO, Meta Ads (+ E-commerce & Marketplace Optimization).

### Phase 1 (partial) — Contact form persistence (complete)
- `contact_submissions` table with public insert and admin-only read/update/delete.
- `Contact.tsx` saves inquiries, shows a sending state and an error toast on failure. Verified end to end.

## Requested, not yet built

### 1. Email notification for the contact form
Forward inquiries to wasades851@gmail.com. Sender domain chosen: `mail.admetaverse.in`.
Blocked on completing the email domain setup (DNS records at the registrar).

### 2. Admin login + CMS (paused)
Admin-only login and a WordPress-like editor so every element of every page is editable.
Backend groundwork applied (site content table, admin role, role check, first-admin claim);
content model in `src/content/schema.ts` and `src/content/icons.ts`. UI not built.

### 3. Phases 2-5 of the approved plan
Routes with lazy loading (`/work`, `/blog`, `/playground`, `/audit`, `/pricing`, `/admin/*`);
interactive showcase layer (hero upgrade, playground, before/after slider, device demos, scroll storytelling);
tools (pricing estimator, SEO/Meta Ads calculator, audit, AI assistant, multi-step lead form, WhatsApp);
polish pass (micro-interactions, carousel, performance, Lighthouse/CWV).

## Notes / constraints
- Services positioning: Website Development, SEO, Meta Ads.
- No testimonials, portfolio or client stats/counters.
- Preserve existing architecture; avoid unnecessary rewrites.
