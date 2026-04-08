# Shariah Graduation Institute Phase 1 Website Plan

This document defines the implementation plan for **Phase 1** of the Shariah Graduation Institute website. The institute already operates publicly and has at least two branches: a head office in Chattogram and another branch in Dhaka, so the first release should function as a professional bilingual institute website that clearly presents identity, programs, branch presence, and contact paths for prospective students and guardians.[cite:68][cite:70]

Phase 1 is intentionally limited to a **static public website / landing experience** with content-driven features only. Dynamic institutional features such as admin workflows, student management, attendance, results, and finance should be deferred to Phase 2 so the first launch stays simpler, faster, and lower risk while still leaving a clean path for future growth into a secure school management platform.[cite:39][cite:43][cite:61]

## Phase 1 objective

Phase 1 should launch the official public-facing website for **Shariah Graduation Institute** in both English and Bangla. The website should primarily support publicity, trust building, branch discovery, admission interest, and easy access to important public information such as the prospectus, FAQs, notices, and contact details.[cite:43][cite:46][cite:68]

The website should:
- Establish a clear and trustworthy institutional identity.
- Present both branches clearly: Chattogram head office and Dhaka branch.[cite:68][cite:70]
- Support bilingual content in English and Bangla.
- Provide admission-oriented calls to action.
- Include practical public-facing utilities requested for Phase 1 such as prospectus download, branch maps, FAQ, and inquiry/apply CTAs.
- Be architected so Phase 2 can introduce secure dynamic modules without rebuilding the entire front end.[cite:43][cite:61]

## Phase 1 scope

Phase 1 should include only static and content-led features. The site may visually include inquiry or apply calls to action, but any submission workflow in this phase should remain minimal, secure, and non-sensitive.[cite:43][cite:60]

### In scope

- Home page
- About page
- Programs page
- Faculty and leadership page
- Admissions information page
- Notices page
- Events page
- Gallery page
- Contact page
- FAQ page
- Prospectus download
- Branch-wise campus location maps
- Apply / inquiry CTA
- Branch information for Chattogram and Dhaka
- English and Bangla language support
- Google Fonts for both English and Bangla typography
- Single theme only, no dark mode
- Responsive design for mobile and desktop
- SEO metadata and social sharing metadata
- Accessibility and performance optimization[cite:43][cite:46][cite:68]

### Out of scope

These should be postponed to Phase 2:
- Admin panel
- Custom CMS
- Student portal
- Guardian portal
- Attendance entry and reporting
- Fees and accounting workflows
- Results and report cards
- Role-based permissions
- Internal dashboards
- Sensitive student document handling
- Private institutional workflows[cite:39][cite:41][cite:61]

### Phase 1 inquiry and submission boundary (finalized)

To avoid scope creep in a static-first release, inquiry handling in Phase 1 is constrained as follows:
- Primary inquiry path: **WhatsApp CTA**.
- Optional fallback: a simple email contact action (`mailto`) for users who cannot use WhatsApp.
- No custom admissions workflow, no document upload, and no authenticated submission flow in Phase 1.
- If any form is used later in this phase, it must stay minimal and non-sensitive only.

Approved minimal fields for any Phase 1 inquiry form:
- Full name
- Phone number
- Email address
- Preferred branch
- Short message

Operational expectation:
- Inquiry response SLA target: **within 48 hours**.

## Brand and identity inputs

### Institute name
- English: **Shariah Graduation Institute**[cite:68]
- Bangla: **শরীয়াহ গ্রাজুয়েশন ইনস্টিটিউট**[cite:69]

### Branches
- Chattogram branch — head office.[cite:68][cite:70]
- Dhaka branch — second branch.[cite:68]

### Official social presence (for context and linking)
- Facebook page: [https://www.facebook.com/shariahgibd](https://www.facebook.com/shariahgibd)

Usage note:
- Treat this page as a public context source for photos, announcements, and admission-facing messaging ideas, but verify final website copy directly with institute approval before publishing.

### Visual palette

Use the provided Color Hunt palette as the core visual system:
- `#2C3639`
- `#3F4E4F`
- `#A27B5C`
- `#DCD7C9`[cite:74]

Suggested usage:
- Primary background/surfaces: `#DCD7C9`
- Primary text / deep contrast: `#2C3639`
- Secondary surfaces / navigation / muted structure: `#3F4E4F`
- Accent color for CTA buttons, highlights, and section emphasis: `#A27B5C`[cite:74]

This palette should be implemented in a restrained, institutional way rather than as a highly decorative theme.[cite:74]

## Language strategy

The website must support **two languages**: English and Bangla. Because bilingual support is a core product requirement, the information architecture, navigation labels, page structure, and content model should all be designed for localization from the beginning rather than retrofitted later.

### Recommended localization approach

- Use route-based localization, for example:
  - `/en`
  - `/bn`
- Keep content keys aligned across both languages.
- Store translatable content in structured locale files or CMS-ready content objects.
- Keep program, notice, branch, and FAQ entries localization-ready from day one.

### Typography requirement

Use **Google Fonts** for both English and Bangla typography. The exact pairing can be finalized during UI implementation, but the fonts should support strong readability and a professional institutional tone. The Bangla font must have good Unicode support and work comfortably for headings and paragraph text.[cite:76]

Recommended direction:
- English: a readable serif or sans-serif from Google Fonts depending on the final art direction.
- Bangla: a high-legibility Bangla typeface from Google Fonts with strong body readability.

## Navigation and information architecture

Education websites work best when key public information is easy to find. The navigation should favor clarity and trust rather than too many decorative menus or hidden content paths.[cite:43][cite:46]

Recommended primary navigation:
- Home
- About
- Programs
- Faculty
- Admissions
- Notices
- Events
- FAQ
- Contact

Recommended persistent utility actions:
- Download Prospectus
- Apply / Inquiry
- Language switcher (English / বাংলা)

Recommended footer sections:
- Institute summary
- Branch addresses
- Quick links
- Admission CTA
- Contact information
- Social links
- Copyright / legal

## Required Phase 1 pages and sections

### Home

The home page should act as the main landing page and present the institute’s identity, public credibility, and branch presence clearly. Visitors should immediately understand what the institute is, who it serves, and how to proceed.[cite:43][cite:46][cite:68]

Suggested sections:
- Hero with bilingual-ready headline
- Short mission/vision introduction
- Program overview
- Why study here
- Faculty highlights
- Two-branch presence block
- Prospectus download CTA
- Latest notices preview
- Upcoming events preview
- FAQ preview
- Apply / inquiry CTA
- Contact summary and maps[cite:43][cite:46]

### About

This page should explain institutional mission, educational vision, history, and public identity. If leadership messaging is available, include a founder/principal section for added credibility.[cite:43][cite:68]

### Programs

This page should explain the academic pathway or offered tracks in an organized manner. Since the institute appears to serve Islamic educational goals, the structure should help visitors understand duration, admission context, study format, and expected outcomes without presenting it like an online course catalog.[cite:68][cite:70]

### Faculty and leadership

This page should present scholars, teachers, and leadership profiles in a respectful institutional format using image, title, specialty, and short bio. The layout should be reusable later from a CMS or admin-managed source.[cite:43]

### Admissions

This page should remain informational in Phase 1 and explain eligibility, required documents, class days if confirmed, process overview, and how to inquire or apply. Facebook page content indicates public-facing admission-related information such as required photos and document copies, so those details can later inform the final public content once verified directly by the institute.[cite:69][cite:70]

### Notices

This page should list official announcements in a clean chronological layout. Initially these can be stored as static content entries and manually updated.[cite:43]

### Events

This page should list key academic events, orientations, special lectures, exam-related public announcements, or branch events in a structured timeline or card layout.[cite:43]

### FAQ

The FAQ page is required in Phase 1 and should answer recurring public questions such as:
- Who can apply?
- What documents are required?
- Where are the campuses?
- What is the study schedule?
- How can the prospectus be downloaded?
- How can someone contact the institute?

This content should be modeled as structured FAQ entries so it can later be edited dynamically.[cite:43][cite:46]

### Gallery

This page should show campus, classes, seminars, events, library, and institutional life. The photo-based presence on the institute’s Facebook page suggests visual storytelling will be an important trust-building element for the website as well.[cite:71][cite:72]

### Contact

This page should include both branch addresses, phone numbers, email addresses if available, inquiry paths, and branch maps. The branch distinction should be explicit so users can immediately identify the correct campus.[cite:68]

## Special Phase 1 features

### Prospectus download

This is a required feature in Phase 1. The site should provide a clearly visible download path in both the homepage and admissions-related areas. If the final PDF is not ready during development, the system should support a placeholder asset path that can be replaced later without changing layout or navigation.

Implementation notes:
- Use a clearly labeled download button.
- Track the file as a public asset.
- Include file name, language if relevant, and version/date if available.
- Keep the component reusable for future branch-specific or language-specific prospectus files.

### Campus location map

This is a required feature in Phase 1. Each branch should have its own location block with map embed or linked map view. The Chattogram head office and Dhaka branch should be shown separately, not combined into a generic contact section.[cite:68][cite:70]

Implementation notes:
- Branch cards with address and contact information
- Embedded map or “Open in Google Maps” link per branch
- Reusable branch data model
- Branch-specific CTA for inquiry

### Apply / inquiry CTA

This is a required Phase 1 feature, but it should remain light and secure. The CTA should appear in the hero, admissions page, and footer. Until a secure internal admissions module exists, the CTA should lead to one of the following:
- a minimal inquiry form,
- WhatsApp/contact action,
- email action,
- or a simple external form solution with validation and rate limiting.[cite:60][cite:61]

## Design direction

The website should look formal, warm, grounded, and trustworthy. It should avoid trendy startup aesthetics and instead communicate seriousness, clarity, and educational purpose.[cite:43][cite:46]

Recommended design characteristics:
- Strong editorial hierarchy
- Warm neutral backgrounds using `#DCD7C9`[cite:74]
- Deep readable text using `#2C3639`[cite:74]
- Muted dark structural accents using `#3F4E4F`[cite:74]
- Call-to-action emphasis using `#A27B5C`[cite:74]
- Bilingual-ready spacing and typography
- No dark/light theme switch
- No flashy gradients or excessive motion
- Clean cards, clear spacing, and restrained decorative patterns

## Recommended tech stack for Phase 1

Because this phase is largely static and content-driven, the stack should stay simple while supporting future extension.

### Suggested stack

- **Next.js** for route-based pages and bilingual public site support.[cite:33]
- **TypeScript** for maintainability.
- **Google Fonts** for English and Bangla typography.[cite:76]
- **Tailwind CSS** or a clean custom CSS system.
- **Local structured content files** for notices, FAQ, faculty, branch data, and programs.
- **Static-friendly deployment** such as Vercel or Cloudflare Pages.

This keeps launch complexity low while making Phase 2 migration easier.[cite:32][cite:33]

## Suggested project structure

```text
institute-platform/
├── apps/
│   └── website/
│       ├── src/
│       │   ├── app/
│       │   │   ├── [locale]/
│       │   │   ├── layout.tsx
│       │   │   └── page.tsx
│       │   ├── components/
│       │   ├── content/
│       │   ├── data/
│       │   ├── i18n/
│       │   ├── lib/
│       │   └── styles/
│       ├── public/
│       │   ├── prospectus/
│       │   ├── images/
│       │   └── icons/
│       └── package.json
├── packages/
│   ├── ui/
│   ├── config/
│   └── types/
└── docs/
```

Notes:
- `[locale]/` supports English and Bangla routes.
- `content/` stores page copy by language.
- `data/` stores localized records for branches, FAQ, notices, faculty, and programs.
- `public/prospectus/` stores downloadable public files.
- `packages/ui/` can later support Phase 2 dashboard reuse.[cite:32][cite:33]

## Static content model

Suggested public content entities:
- `siteSettings`
- `navigation`
- `homePage`
- `aboutPage`
- `programs`
- `facultyMembers`
- `notices`
- `events`
- `faqItems`
- `galleryItems`
- `branches`
- `contactInfo`
- `prospectusFiles`
- `seoDefaults`

Example bilingual shape:

```ts
LocalizedText {
  en: string
  bn: string
}
```

```ts
Branch {
  id: string
  name: LocalizedText
  city: LocalizedText
  isHeadOffice: boolean
  address: LocalizedText
  phone?: string
  email?: string
  mapEmbedUrl?: string
  mapLink?: string
}
```

```ts
FaqItem {
  id: string
  question: LocalizedText
  answer: LocalizedText
  order: number
}
```

```ts
ProspectusFile {
  id: string
  language: 'en' | 'bn' | 'both'
  label: LocalizedText
  filePath: string
  version?: string
}
```

This modeling approach allows all Phase 1 public content to be migrated later into a secure CMS or admin-backed system without reworking the front end.[cite:43][cite:61]

## Security approach in Phase 1

Security remains critical even for a public static site. Best-practice guidance for student-facing systems stresses minimizing exposure, protecting any personally identifiable information, enforcing secure configuration, and avoiding premature exposure of administrative surfaces.[cite:57][cite:58][cite:59][cite:63]

### Security principles for Phase 1

- Do not build or expose admin login routes in this phase.[cite:61][cite:63]
- Do not store sensitive student or guardian data on the public website.[cite:57][cite:59]
- Use HTTPS everywhere and apply secure headers at the hosting layer.[cite:58][cite:60]
- Do not embed credentials, private tokens, or service secrets in the client bundle.[cite:58][cite:63]
- Validate and rate-limit any inquiry endpoint if one is used.[cite:60][cite:66]
- Keep form collection minimal and non-sensitive.[cite:60][cite:61]
- Store public files such as prospectus PDFs as public assets only when they are intended for open download.
- Restrict deployment access and repository secrets to a very small trusted team.[cite:58][cite:63]

### Security checklist

- Content Security Policy configured
- HSTS enabled
- Referrer policy configured
- Permissions policy configured conservatively
- Strict origin handling for third-party embeds and maps
- No direct database connection from the public site
- No hidden internal route names leaked through navigation or frontend config
- Public forms protected against spam and abuse[cite:58][cite:60][cite:63][cite:66]

### Security implementation ownership

To prevent security tasks from becoming "checklist-only", the implementation boundary should be explicit:
- **Hosting/platform layer**: HTTPS enforcement, HSTS, CDN-level protections, domain redirects.
- **Application layer**: CSP, Referrer-Policy, Permissions-Policy, safe embed constraints, and route behavior.
- **Release QA gate**: verify headers and policy behavior in production preview before launch.

Minimum expected production-ready checks:
- HTTPS redirect works for all public routes.
- HSTS is enabled on the canonical domain.
- CSP blocks unexpected script/frame origins and only allows required trusted origins.
- Map/embed origins are explicitly allowlisted.
- No secrets are exposed in client bundles or public runtime config.

## Accessibility and performance

This website should serve a broad public audience and must remain readable on mobile devices and low-bandwidth connections. Education websites benefit directly from accessible navigation, readable content, and fast load times.[cite:43][cite:46]

Launch standards:
- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation support
- Sufficient color contrast with the chosen palette
- Alt text on meaningful images
- Optimized image loading
- Mobile-first responsive layout
- Clear language switcher behavior
- Good Bangla and English rendering on common devices[cite:43][cite:46][cite:76]

## Phase 1 definition of done (measurable)

Phase 1 should be considered launch-ready only when all items below are satisfied:

### Functional completeness
- All required public pages are available in both `/en` and `/bn`.
- Prospectus download is available and functional from all defined CTA locations.
- Branch information is clearly separated for Chattogram (head office) and Dhaka.
- Inquiry CTA routes to WhatsApp and provides the fallback email path.

### Accessibility baseline
- Target baseline: **WCAG 2.1 AA** for public page templates.
- Keyboard navigation works for header, menus, language switcher, CTA buttons, and footer links.
- Page heading order is logical and semantic.
- Color contrast meets AA thresholds for normal text and interactive controls.

### Performance baseline (Core Web Vitals)
- On representative mobile conditions, key public pages target:
  - LCP <= 2.5s
  - INP <= 200ms
  - CLS <= 0.1
- Heavy media assets are optimized and lazy-loaded where appropriate.
- Bangla and English typography loads without layout-breaking shifts.

### SEO and discoverability baseline
- Unique localized title and description metadata for all primary pages.
- Open Graph metadata is present for high-priority public pages.
- Sitemap and robots configuration are valid for production domain indexing.
- Canonical behavior is defined for localized routes.

### Security and deployment baseline
- Required security headers are present on production responses.
- No admin/auth routes are exposed in the public app.
- No sensitive user data collection is implemented in Phase 1.
- Build and deploy pipeline produce a reproducible production artifact.

## Page-by-page acceptance checklist (Phase 1 QA)

Use this section as a practical pass/fail checklist during UAT and launch sign-off. Every required page must pass in both `/en` and `/bn` unless explicitly noted.

### Global checks (apply to every page)
- Localization parity: route exists in both languages and switcher lands on equivalent page.
- Metadata: localized title and description are present.
- Accessibility smoke: keyboard access, visible focus, semantic headings, and alt text where relevant.
- Responsive behavior: no critical layout break on common mobile and desktop widths.
- Performance sanity: no unusually heavy media or blocking assets on initial load.

### Home page (`/en`, `/bn`)
- Hero communicates institute identity clearly and includes a visible primary CTA.
- Program overview, branch presence, and trust-building summary blocks are visible.
- Latest notices/events preview blocks render correctly with working links.
- Prospectus CTA works and inquiry CTA routes to WhatsApp (with email fallback path available).

### About page
- Mission/vision/history content is present and readable in both languages.
- Leadership/founder messaging (if provided) is placed in a dedicated section.
- No placeholder or untranslated copy remains.

### Programs page
- Program pathway information is structured and easy to scan.
- Admission context and expected outcomes are presented without course-catalog confusion.
- Any program cards/sections maintain language consistency and formatting parity.

### Faculty and leadership page
- Profiles include image, name, title/role, and short bio where available.
- Missing images degrade gracefully without breaking layout.
- Content order and card formatting are consistent across locales.

### Admissions page
- Eligibility, required documents, and process overview are present.
- Inquiry/apply actions are clearly visible and use approved Phase 1 boundary.
- No sensitive data request, upload flow, or internal admissions workflow is exposed.

### Notices page
- Items are listed in clear chronological order.
- Notice title/date formatting is consistent and readable.
- Empty-state behavior is defined and user-friendly if no notices are available.

### Events page
- Events are presented in timeline/card format with clear date and title.
- Past/upcoming distinction is clear if both are shown.
- Event links and details (if any) are valid and non-broken.

### FAQ page
- Core public questions are covered (eligibility, documents, campuses, schedule, prospectus, contact).
- FAQ structure is readable and usable on mobile.
- Entries are fully localized and maintain consistent order.

### Gallery page
- Images load efficiently and retain acceptable visual quality.
- Alt text or descriptive labeling is present for meaningful images.
- Grid/card behavior remains stable across mobile and desktop.

### Contact page
- Chattogram and Dhaka branch details are clearly separated.
- Address and contact details are accurate and readable.
- Map links/embeds for each branch function correctly.
- Inquiry paths (WhatsApp primary, email fallback) are accessible from this page.

### Prospectus download checks
- Download is reachable from homepage and admissions-related location(s).
- File name, language label, and version/date metadata are visible when configured.
- Download link is valid in both locales and does not return broken assets.

## Development stages for Phase 1

### Step 1: content and brand collection
- Confirm official English and Bangla naming
- Confirm branch-specific addresses and contact details
- Confirm official social links (including Facebook) and ownership/access
- Collect logo, photos, leadership message, program info, FAQ, notices, and prospectus file
- Confirm the exact text for admission CTA and inquiry behavior

### Step 2: bilingual structure and design system
- Implement localization setup
- Choose Google Fonts for English and Bangla
- Apply the provided palette across UI tokens
- Build reusable public components
- Finalize branch card, FAQ item, notice card, and prospectus CTA patterns

### Step 3: page implementation
- Build all public pages in both languages
- Add branch map sections
- Add prospectus download blocks
- Add FAQ and inquiry CTA
- Add localized metadata and SEO content

### Step 4: QA and launch hardening
- Test all localized routes
- Test mobile responsiveness
- Validate public asset downloads
- Validate branch map behavior
- Test accessibility and contrast
- Test security headers and form handling
- Deploy to production[cite:43][cite:46][cite:58]

## Content operations and governance (Phase 1)

Because Phase 1 is content-led and static-friendly, operating rules are required to keep information current:
- Content owner model: **single institute coordinator** for notices, events, FAQ updates, and prospectus replacement.
- Review cadence: **monthly** content review for all public pages and quick links.
- Urgent update path: coordinator can publish time-sensitive notice/event updates outside the monthly cycle.
- Prospectus governance: every file update should include version label and date in display metadata.
- Archive behavior: old notices/events remain visible in archive sections rather than being deleted.

Minimum content workflow:
1. Coordinator drafts or updates content in source files.
2. Reviewer checks bilingual consistency (`en`/`bn`) and branch correctness.
3. Update is published and smoke-tested (links, maps, download, metadata).

## Launch test matrix (Phase 1)

### Browsers
- Primary support target: latest Chrome and Edge.
- Compatibility checks: basic pass on recent Firefox and Safari.

### Devices
- Mobile baseline includes both recent Android and iOS devices.
- Desktop checks should include common laptop viewport widths used by guardians and students.

### Required QA checks
- Localized route parity between English and Bangla pages.
- Language switcher state and URL behavior.
- Prospectus download link integrity and file metadata correctness.
- Branch map link behavior for both campuses.
- Inquiry CTA behavior (WhatsApp primary, email fallback).
- Official Facebook link is present where intended (footer/contact) and opens the correct page.
- Basic accessibility smoke checks (keyboard, focus visibility, alt text, heading hierarchy).

## Phase 2 roadmap preview

Phase 2 should introduce secure dynamic features after the public website is stable. The recommended order remains: authentication and RBAC first, then admin-managed content, then admissions, student records, attendance, fees, and results.[cite:39][cite:41][cite:47][cite:57][cite:63]

Recommended Phase 2 sequence:
1. Authentication, RBAC, MFA, audit logs.[cite:57][cite:58][cite:63]
2. Admin content management for pages, notices, events, faculty, FAQ, and prospectus files.[cite:43][cite:61]
3. Admissions workflow.[cite:39][cite:61]
4. Student and guardian records.[cite:39][cite:41]
5. Attendance.[cite:47][cite:53][cite:56]
6. Fees and accounts.[cite:45]
7. Results and reports.[cite:41][cite:45]

## Handoff instructions for an AI coding agent

The AI coding agent should implement **only the public website** in this phase.

### Agent constraints

- Do not build authentication.
- Do not build admin dashboard pages.
- Do not create student, guardian, attendance, fee, or result modules.
- Do not connect the public website to a production database.
- Do not add dark mode or theme toggles.
- Do build English and Bangla support from the beginning.
- Do use Google Fonts for both English and Bangla typography.[cite:76]
- Do implement the provided color palette.[cite:74]
- Do include prospectus download, branch maps, FAQ, and inquiry/apply CTAs.
- Do keep the website static-friendly, accessible, responsive, and secure.

### Agent deliverables

- A complete bilingual public institute website
- Reusable component library for the public site
- Structured localized content/data files
- Prospectus download support
- Branch information and map sections
- FAQ page and CTA components
- SEO-ready public pages
- Responsive and accessible UI
- Deployment-ready codebase

## Final recommendation

The correct Phase 1 strategy for Shariah Graduation Institute is to launch a polished bilingual public website that highlights institutional trust, branch presence, admissions visibility, and public information access, while delaying all sensitive and operational functionality to a later secure phase. This approach matches the institute’s stated needs, lowers implementation risk, and creates a strong foundation for future administrative features without overbuilding too early.[cite:39][cite:43][cite:57][cite:61][cite:68]
