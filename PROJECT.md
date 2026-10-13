# Personal Portfolio — Project Specification

## 1. Project Overview
Build a premium, responsive personal portfolio for **K. A. Yashas**, a B.Tech student specializing in Computer Science and Engineering (AI & ML) and a software developer.

The portfolio is driven by a bespoke **burgundy-red and warm-ivory editorial design system** inspired by high-end print design and editorial typography. It showcases technical projects, skills, and academic background through a distinctive, typography-led, asymmetrical layout that stands apart from standard SaaS templates.

- **Portfolio Repository:** [https://github.com/Yashas-08/Yashas_Portfolio](https://github.com/Yashas-08/Yashas_Portfolio)
- **Developer GitHub:** [https://github.com/Yashas-08](https://github.com/Yashas-08)

---

## 2. Project Goals
- **Clear Professional Identity:** Present K. A. Yashas's background, education, core technical skills, and software engineering capabilities accurately and compellingly.
- **Authentic Project Showcase:** Feature genuine projects with verified architecture, real technical descriptions, and functioning repository/demo links.
- **Visual Distinction & Consistency:** Maintain strict adherence to the burgundy-and-ivory editorial design system across all pages and viewports.
- **Comprehensive Responsiveness:** Ensure flawless visual hierarchy and usability across mobile (320px–430px), tablet (768px–1024px), laptop (1024px–1440px), and large desktop displays.
- **High Standards of Code Quality:** Maintain accessible (WCAG compliant), semantic, performant, and clean code with zero unnecessary dependencies.

---

## 3. Technology Stack & Technical Guardrails

### Confirmed Core Stack
- **Framework & Runtime:** React (with TypeScript) and Vite for fast, modern, and type-safe front-end development.
- **Styling Architecture:** Vanilla CSS / CSS Modules utilizing CSS Custom Properties (Design Tokens) to deliver the precise editorial aesthetic, bespoke typography, and subtle micro-interactions without relying on heavy external CSS utilities.
- **Icons & Visuals:** Scalable Vector Graphics (SVG) with consistent stroke and fill styling; non-human technical diagrams and abstract editorial vectors.
- **Routing:** Client-side routing with clean URL structure and accessible navigation.

### Technical Guardrails
- **Preserve Existing Configuration:** Do not rewrite or modify unrelated project files or introduce breaking changes to existing setups.
- **No Heavy / Unnecessary Dependencies:** Keep the application lean; avoid bloated UI libraries that conflict with the bespoke editorial aesthetic.
- **Type Safety:** Maintain rigorous TypeScript interfaces and types for project metadata, navigation items, and data structures.
- **Zero Secret Exposure:** Never commit API keys, personal secrets, tokens, or environment variables to the client bundle or repository.
- **Functional Interactivity:** Every visible button, navigation link, tab, filter, and external link must perform its expected action; non-functioning links or dead buttons must never be displayed as active.

---

## 4. Featured Projects

The portfolio features exactly three confirmed projects. **CodeBuddy AI is strictly excluded** from cards, navigation, copy, and project lists.

### 1. EliteRoutes
- **Type:** AI-Powered Travel Planning Application.
- **Focus:** Intelligent route planning, itinerary optimization, and travel assistance powered by AI.
- **Documentation Rule:** Describe purpose, architecture, and features strictly as verified from the actual codebase. Include confirmed technologies and verified repository/demo links only. Do not invent unverified capabilities or production metrics.

### 2. RepPulse
- **Type:** Fitness and Gym Website / Application.
- **Focus:** Workout tracking, fitness routines, and training management.
- **Documentation Rule:** Document functionality that is genuinely implemented. Do not invent user metrics, commercial business claims, or unverified production usage.

### 3. Hostel Flow
- **Repository:** [https://github.com/Yashas-08/Hostel-Flow](https://github.com/Yashas-08/Hostel-Flow)
- **Type:** Mobile-First Hostel Management Application.
- **Confirmed Documented Stack:** React, TypeScript, Vite, Tailwind CSS v4, React Router, Node.js, Express, JWT authentication, and Supabase PostgreSQL.
- **Confirmed Core Features:** Student/Admin role separation, student dashboard, official notice distribution, leave request workflows, QR-code based attendance tracking, complaint registration and status tracking, user profile management, and comprehensive admin room/resident management.
- **Live Links Rule:** Display the verified GitHub repository link. Only include a live demo link once a public deployment is actively verified and confirmed operational.

---

## 5. Personal Information Rules

- **Name Representation:** Consistently displayed as **K.A. YASHAS** (display/headings) or **K. A. Yashas** (body copy).
- **Education:** B.Tech in Computer Science and Engineering (AI & ML), Yenepoya University, Bengaluru.
- **Academic Timeline:** Confirm academic start and expected graduation dates before rendering a chronological timeline.
- **Strict Anti-Fabrication Rule:** 
  - Never fabricate employment history, internships, company affiliations, awards, certifications, client testimonials, user statistics, or external ratings.
  - Never fabricate personal contact information or social media profiles (e.g., no placeholder Instagram or unverified personal numbers).
  - Use transparent structural placeholders only when strictly required during staging, and never present them as real accomplishments or credentials.

---

## 6. Mandatory People-Free Design Rule

- **Zero Human Imagery:** Strictly no human portraits, headshots, photographs of people, stock model photos, AI-generated human faces, avatars, or person-shaped silhouettes anywhere on the portfolio.
- **Reference Image Treatment:** Do not replicate or display the human subject shown in the reference image.
- **Hero Image Region:** The hero portrait space is designed as an **intentionally empty warm-ivory panel**, utilizing negative space, delicate geometric borders, circular editorial stamps, or abstract non-human line art.
- **Project Visuals:** Only genuine software screenshots, product wireframes, responsive device frames displaying actual UI, and non-human architectural or technical illustrations are permitted. Any screenshot containing a visible human face must be cropped or sanitized.
- **No Background Image Stamping:** The reference layout must be constructed with real, accessible HTML/CSS components—never as a flattened image or screenshot background.

---

## 7. Phased Page-by-Page Development Workflow

The portfolio will be implemented strictly one page at a time. Work proceeds sequentially, with each phase requiring explicit review and approval before starting the next:

```
┌─────────────────────────────────────────────────────────────┐
│ Phase 1: Home Page (Current Phase — Awaiting Approval)     │
└──────────────────────────────┬──────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ Phase 2: About Page                                         │
└──────────────────────────────┬──────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ Phase 3: Experience & Education                             │
└──────────────────────────────┬──────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ Phase 4: Projects Showcase                                  │
└──────────────────────────────┬──────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ Phase 5: Skills Matrix                                      │
└──────────────────────────────┬──────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ Phase 6: Contact & Professional Links                       │
└──────────────────────────────┬──────────────────────────────┘
                               ▼
┌─────────────────────────────────────────────────────────────┐
│ Phase 7: Final End-to-End Integration, QA & Polish         │
└─────────────────────────────────────────────────────────────┘
```

### Page Scope Definitions
1. **Home:** Oversized identity heading, concise software dev & AI/ML bio, primary `View My Work` CTA, verified GitHub & LinkedIn links, intentionally empty ivory portrait panel with editorial accents, and a bottom ivory feature strip (AI & ML, Web Development, Problem Solving, Education).
2. **About:** Factual narrative covering technical background, development methodology, and core focus areas. Composed with negative space and abstract geometry—no human photos.
3. **Experience & Education:** Verified academic records at Yenepoya University and verified practical engineering work. Truthful projects-and-learning structure if corporate tenure is not applicable.
4. **Projects:** Dedicated project cards for EliteRoutes, RepPulse, and Hostel Flow with technology tags, verified links, and screenshots.
5. **Skills:** Categorized technology grid (Frontend, Backend, Languages, AI/ML) reflecting genuine proficiency without arbitrary percentage progress bars.
6. **Contact:** Direct `mailto:` link, verified professional social links, and an optional verified functional contact form.
7. **Final Integration:** Cross-page routing, global state, responsive auditing across 320px–1440px+, keyboard navigation verification, and production build checks.

---

## 8. Definition of Done (DoD)

A development phase is considered complete only when:
1. **Design System Fidelity:** All typography, color tokens, borders, and layouts strictly adhere to `DESIGN_SYSTEM.md`.
2. **People-Free Compliance:** Zero human faces, portraits, avatars, or silhouettes exist anywhere in the implementation.
3. **Responsive Verification:** Tested and free from horizontal overflow or clipping at 320px, 360px, 390px, 412px, 430px, tablet, 1024px, and 1440px+.
4. **Interaction Integrity:** Every link, CTA, button, and navigation menu is fully interactive and operates as expected.
5. **Content Accuracy:** Every claim, project detail, and link has been verified with no fabricated data.
6. **Code & Build Verification:** Production build (`npm run build`) compiles cleanly without TypeScript or lint warnings.
7. **Explicit Approval Gate:** The developer reports changed files, verified tests, and known issues, then stops and waits for user approval before moving to the next page.
