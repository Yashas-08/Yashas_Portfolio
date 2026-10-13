# UI / UX Guidelines & Implementation Standards

## 1. Core Principles

1. **Distinctive Editorial Identity:** The portfolio must reflect a sophisticated, print-editorial visual language using deep burgundy, textured red, and warm ivory tones. It must avoid looking like a standard Bootstrap/Tailwind SaaS template.
2. **Authentic Content Only:** Every statement, project description, skill listing, and academic record must be factual. Zero tolerance for fabricated employment, inflated metrics, fake testimonials, or speculative credentials.
3. **Mandatory People-Free Interface:** Do not display human photographs, portraits, headshots, avatars, or person silhouettes anywhere. Empty image zones are intentional architectural negative space.
4. **Functional Integrity:** Every visible link, button, menu item, and form control must perform its advertised action. Do not display dead buttons or pretend that non-functional elements are operational.
5. **Universal Accessibility:** Built to WCAG 2.1 AA standards with strict keyboard navigability, high color contrast, visible focus rings, and screen reader labels.

---

## 2. Navigation Architecture

### Global Header Structure
The navigation bar is mounted globally with a dark burgundy background (`#520505`) and contains:
- **Brand / Name Link:** `K.A. YASHAS` linking to the Home page.
- **Primary Nav Links:**
  - `Home`
  - `About`
  - `Projects`
  - `Skills`
  - `Contact`
- **Call-to-Action (CTA):** High-contrast button labeled `Let's Connect` navigating directly to the Contact section/page.

### Navigation Rules
- **Active State Indication:** The currently active page/section must be clearly indicated through a high-contrast warm-ivory indicator or subtle underline.
- **Mobile Menu Experience:**
  - On screens `< 768px`, navigation collapses into a responsive hamburger toggle.
  - The mobile menu overlay must slide or fade smoothly, capture focus correctly, and close upon link selection or pressing the `Escape` key.
  - Body scrolling must be locked while the mobile drawer is open to prevent disjointed background scrolling.
- **Phased Navigation Guardrail:** During phased development, navigation links to pages not yet approved or implemented must not behave as broken links. They should smoothly scroll to the current section or indicate upcoming availability gracefully.

---

## 3. Page-by-Page UX Specifications

### 3.1 Home Page (Phase 1)
- **Hero Title:** Bold uppercase display typography: `K.A. YASHAS`.
- **Introduction:** A concise, factual summary highlighting his identity as a software developer and B.Tech student specializing in Computer Science and Engineering (AI & ML).
- **Primary Action:** Direct CTA button labeled `View My Work` routing users to featured technical projects.
- **Social Proof / Links:** Verified GitHub and LinkedIn icon buttons only. Do not invent links for Instagram, personal cell numbers, or unverified socials.
- **Hero Canvas (Image Area):** An intentionally empty warm-ivory panel. Do not fill this space with a human face or avatar. Subtle geometric frames, hairline division rules, or a small editorial stamp (e.g., *"EST. 2024 / SWE"*) are permitted.
- **Bottom Feature Strip:** High-contrast horizontal strip highlighting 4 foundational pillars:
  1. `AI & ML`
  2. `Web Development`
  3. `Problem Solving`
  4. `Education`

### 3.2 About Page (Phase 2)
- **Narrative Focus:** Factual background, technical interests, software architecture philosophy, and current academic path.
- **Visual Composition:** Formatted with asymmetric typography, negative space, and architectural line art. Never insert a portrait or headshot to fill space.
- **Authenticity Rule:** Do not fabricate hobbies, exaggerated years of experience, or unsubstantiated claims.

### 3.3 Experience and Education (Phase 3)
- **Academic Foundation:**
  - Degree: B.Tech in Computer Science and Engineering (AI & ML)
  - Institution: Yenepoya University, Bengaluru
  - Timeline: Display confirmed academic dates only.
- **Experience Presentation:**
  - Include genuine internships, campus leadership roles, or verified open-source contributions.
  - If formal corporate employment is not applicable, present a truthful "Projects & Practical Engineering" structure.
  - Strictly prohibit fabricated company logos, fake job titles, or inflated commercial metrics.

### 3.4 Projects Showcase (Phase 4)
Features exactly three verified projects. **CodeBuddy AI must not appear anywhere.**

| Project | Type | Verified Stack / Details | Required Links |
|---|---|---|---|
| **EliteRoutes** | AI-Powered Travel Planner | Intelligent itinerary generation & route planning (features verified against code). | Verified GitHub & Working Demo (if deployed) |
| **RepPulse** | Fitness & Gym Application | Workout planning, exercise tracking, and training logging. | Verified GitHub & Working Demo (if deployed) |
| **Hostel Flow** | Mobile-First Hostel Management | React, TypeScript, Vite, Tailwind CSS v4, Express, JWT, Supabase PostgreSQL. Student/Admin separation, QR attendance, notices, leaves, complaints. | GitHub: [Yashas-08/Hostel-Flow](https://github.com/Yashas-08/Hostel-Flow) |

**Card Anatomy:**
1. Project title & concise purpose statement.
2. Verified technology tags (e.g., React, TypeScript, Express, Supabase).
3. Genuine software screenshot or technical diagram (free of human faces).
4. Direct GitHub link and live demo link (only if live deployment is tested and operational).
5. Current development status (e.g., Active Development / Production).

### 3.5 Skills Matrix (Phase 5)
- **Categorization:** Grouped cleanly into:
  - *Frontend Engineering*
  - *Backend & Databases*
  - *Programming Languages*
  - *AI & Machine Learning*
- **Proficiency Standards:** Only include technologies actively used or learned.
- **No Arbitrary Progress Bars:** Avoid pseudo-metrics like "React: 92%" or "Python: 85%" which convey no objective engineering meaning. Use clean tags or categoric groupings.

### 3.6 Contact Section (Phase 6)
- **Direct Communication:** A verified `mailto:` email link with proper formatting.
- **Professional Profiles:** Verified LinkedIn and GitHub profiles.
- **Contact Form (if implemented):**
  - Must connect to a verified, working backend handler or form service.
  - Must provide real-time field validation, error feedback, and explicit success confirmation.
  - Never display a dummy form that pretends to submit while dropping messages silently.
  - Never expose API tokens, email secrets, or private keys in client code.

---

## 4. Interaction, Animation & Accessibility Rules

### Interactive States
- **Hover & Focus:** All interactive elements must offer visible hover states (`transform: translateY(-2px)`, border illumination, or background tint) and distinct focus outlines.
- **Focus Indicators:** Use `outline: 2px solid var(--color-ivory-highlight); outline-offset: 2px` for high visibility on dark backgrounds.
- **Touch Ergonomics:** Ensure minimum target size of `44px × 44px` with adequate padding on all mobile viewports.
- **Hover Dependency Prohibition:** Critical content or actions must never be concealed behind a hover-only trigger; touch users must be able to view and activate all content effortlessly.

### Motion Principles
- Transitions must be brief and snappy (150ms–250ms).
- Avoid long, blocking animations, elaborate parallax, or decorative script transitions that impede content consumption.
- **Reduced Motion:** Strictly respect `prefers-reduced-motion` media queries across all animations and transitions.

---

## 5. Responsive QA Matrix

Every implemented view must undergo structured manual and responsive checks across the following breakpoints:

| Viewport Category | Widths to Test | Mandatory QA Criteria |
|---|---|---|
| **Compact Mobile** | `320px`, `360px` | No horizontal scrolling; headings scale down gracefully without clipping; buttons span full width or wrap cleanly. |
| **Standard Mobile** | `390px`, `412px`, `430px` | Navigation hamburger functions smoothly; hero layout stacks cleanly; feature strip elements wrap into readable cards. |
| **Tablet Portrait / Landscape** | `768px`, `834px`, `1024px` | Two-column grid adapts naturally; cards do not collapse into awkward aspect ratios; margins remain balanced. |
| **Laptop / Desktop** | `1280px`, `1440px` | Full asymmetric editorial layout; empty ivory panel balances the red hero card; container max-width prevents overextension. |
| **Ultra-Wide Screens** | `1920px+` | Content container remains centered with luxurious margins; typography scales predictably. |

---

## 6. Privacy, Security & Content Integrity

1. **No Human Faces:** Review every image, SVG, or screenshot to ensure no personal faces, selfies, or human portraits appear.
2. **Zero Credentials in Code:** Never commit environment variables, Supabase keys, JWT secrets, or private passwords.
3. **No Synthetic / Dummy Data:** Never populate the UI with lorem ipsum, fake testimonials, fabricated reviews, or dummy customer ratings.
4. **Data Privacy:** Do not display personal phone numbers, physical residential addresses, or confidential academic IDs.

---

## 7. Phased Implementation & Stop Protocol

Development must strictly follow the one-page-at-a-time phased cadence:

```
Step 1: Complete Documentation & Project Foundation Setup
Step 2: Phase 1 — Home Page
Step 3: Phase 2 — About Page
Step 4: Phase 3 — Experience & Education
Step 5: Phase 4 — Projects Showcase
Step 6: Phase 5 — Skills Matrix
Step 7: Phase 6 — Contact & Socials
Step 8: Phase 7 — Final End-to-End Polish & Build Validation
```

### Phase Completion Reporting Checklist
At the conclusion of each phase, provide a structured report detailing:
1. **Changed / Created Files:** Exact relative paths of all modified files.
2. **Features Implemented:** Specific visual sections and user flows built.
3. **Responsive Verification Results:** Summary of tested widths (`320px`, `390px`, `768px`, `1024px`, `1440px`).
4. **Automated Verification:** Build results (`npm run build`), linting status, and type checking.
5. **Open Items / Missing Content:** Any unresolved assets or questions requiring user input.

### Mandatory Stop Condition
**Under no circumstances should the agent proceed to the next phase without explicit, written instruction and approval from the user.**
