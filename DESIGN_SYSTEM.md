# Portfolio Design System

## 1. Art Direction & Philosophy

The visual language of this portfolio is guided by an **editorial, typography-led print aesthetic** that pairs deep burgundy backgrounds, textured red panels, and warm-ivory cards with oversized condensed display typography and restrained handwritten script accents.

The resulting experience evokes a high-end physical editorial piece or design monograph rather than a generic SaaS product dashboard or tech template.

### Mandatory People-Free Rule
- **Strict Prohibition:** Never display a human being, human face, personal headshot, stock model photo, AI-generated human face, avatar, or person-shaped silhouette anywhere in the design.
- **Hero Image Area:** The primary portrait area is designed intentionally as an **empty warm-ivory architectural canvas**. It leverages negative space, fine editorial dividers, geometric stamps, and subtle paper textures.
- **Negative Space as Design:** Blank areas are intentional compositional choices that emphasize typography, structure, and technical depth.

---

## 2. Color System & Design Tokens

CSS Custom Properties represent the single source of truth for all color applications.

### Color Tokens

| Token Name | Hex Code | Role & Usage |
|---|---|---|
| `--color-burgundy-deep` | `#710808` | Primary global page canvas background |
| `--color-burgundy-dark` | `#520505` | Global navigation bar, footer, and deep contrast accents |
| `--color-red-editorial` | `#B51F25` | Primary red accents, brand highlights, and key titles |
| `--color-red-textured` | `#B91F26` | Hero panel background, decorative card backplates, banners |
| `--color-ivory-warm` | `#F8F0E6` | Primary content panels, readable cards, and intentional empty panels |
| `--color-ivory-highlight` | `#FFF9F1` | High-contrast callout chips, active states, and crisp borders |
| `--color-text-red` | `#A3181D` | Primary headings, section eyebrows, and titles placed on ivory |
| `--color-text-body` | `#5E4B46` | Editorial body copy, paragraphs, and meta descriptions on ivory |
| `--color-divider-fine` | `#D5BEB2` | Subtle card borders, internal dividers, and structural rules |
| `--color-white` | `#FFFFFF` | High-contrast display typography on burgundy and icons |

### CSS Variables Definition

```css
:root {
  /* Canvas & Panel Colors */
  --color-burgundy-deep: #710808;
  --color-burgundy-dark: #520505;
  --color-red-editorial: #B51F25;
  --color-red-textured: #B91F26;
  --color-ivory-warm: #F8F0E6;
  --color-ivory-highlight: #FFF9F1;

  /* Typography Colors */
  --color-text-red: #A3181D;
  --color-text-body: #5E4B46;
  --color-text-white: #FFFFFF;
  --color-text-ivory: #F8F0E6;

  /* Borders & Dividers */
  --color-divider-fine: #D5BEB2;
  --color-border-card: rgba(213, 190, 178, 0.45);
  --color-border-red: rgba(181, 31, 37, 0.25);

  /* Shadows */
  --shadow-subtle: 0 4px 20px rgba(82, 5, 5, 0.12);
  --shadow-card: 0 10px 30px rgba(0, 0, 0, 0.18);
  --shadow-elevated: 0 18px 45px rgba(0, 0, 0, 0.25);

  /* Radii */
  --radius-sm: 6px;
  --radius-md: 12px;
  --radius-lg: 20px;
  --radius-pill: 9999px;
}
```

### Color Usage Rules
1. **Canvas Consistency:** Deep burgundy (`#710808`) serves as the root backdrop across all views.
2. **Readability First:** Long-form text and technical descriptions must be set on Warm Ivory (`#F8F0E6`) panels using Body Text (`#5E4B46`) or on burgundy canvas using Ivory/White text to guarantee WCAG AA contrast.
3. **No Unsanctioned Palettes:** Strictly avoid generic saturated blues, bright greens, neon highlights, gold accents, heavy multi-color gradients, and frosted glassmorphism.
4. **Restrained Textures:** Hero and red panels feature subtle CSS noise/halftone tonal variation, never distracting commercial stock textures.

---

## 3. Typography Hierarchy

The typography system combines three distinct font roles to establish an editorial hierarchy:

1. **Display Font:** Condensed, bold sans-serif (e.g., *Oswald* or *Bebas Neue*) for commanding, oversized titles and hero typography.
2. **Body Font:** Neutral, highly legible humanist/grotesque sans-serif (e.g., *Inter*) for all UI elements, body copy, and navigation labels.
3. **Script Accent:** Restrained, handwritten script (e.g., *Caveat*) applied exclusively to brief, decorative editorial accents (e.g., *"selected works"*, *"est. 2024"*).

### Font Stack Declaration

```css
:root {
  --font-display: 'Oswald', 'Bebas Neue', 'Impact', sans-serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-script: 'Caveat', 'Dancing Script', cursive;
}
```

### Typographic Scale & Hierarchy

| Element | Font Role | Weight | Case | Style & Spacing |
|---|---|---|---|---|
| **Hero Name** | Display | 700 | Uppercase | Oversized (clamp(3.5rem, 8vw, 7.5rem)), tight tracking (`-0.02em`) |
| **Page Title** | Display | 700 | Uppercase | Large (clamp(2.5rem, 5vw, 4.5rem)), line-height 1.05 |
| **Section Eyebrow** | Body | 600 | Uppercase | Small (0.75rem–0.875rem), wide letter spacing (`0.15em`) |
| **Card Heading** | Display | 600 | Uppercase | Compact (1.5rem–2.25rem), red or ivory tone |
| **Editorial Script**| Script | 400 | Natural | Fluid (1.25rem–1.75rem), tilted `-3deg` to `3deg` |
| **Body Paragraph** | Body | 400 | Sentence | Comfortable (0.95rem–1.05rem), line-height 1.65 |
| **Meta / Tech Tag** | Body | 500 | Uppercase | Micro (0.75rem), tracking `0.08em` |

### Typography Constraints
- **Script Restriction:** Script lettering is strictly restricted to short decorative phrases. It must **never** be used for paragraphs, button CTAs, navigation links, or critical accessibility instructions.
- **Font Fallbacks:** Always include standard system font fallbacks to eliminate layout shift (CLS).

---

## 4. Grid, Layout & Composition

### Layout Principles
- **Centered Content Container:** Max-width of `1280px` with responsive horizontal padding (`clamp(1.25rem, 4vw, 3rem)`).
- **Asymmetric Editorial Layout:** Desktop compositions pair wide red panels with offset ivory cards, creating dynamic editorial pacing.
- **Generous Negative Space:** Ample padding between sections prevents visual clutter and highlights key content blocks.
- **Zero Horizontal Overflow:** All viewports must strictly maintain `overflow-x: hidden` at the document root.

### Breakpoints Matrix

| Breakpoint | Target Devices | Layout Behavior |
|---|---|---|
| `< 640px` | Mobile (320px – 430px) | Single-column stack, collapsed mobile navigation, condensed hero heights |
| `640px – 1023px`| Tablets / Compact Laptops | Balanced 2-column or stacked grid, adapted padding |
| `1024px – 1439px`| Standard Laptops & Desktops | Full asymmetric 2-column editorial grid, expanded panels |
| `≥ 1440px` | Large Monitors & 4K | Centered container, maximum typographic scale, deep margins |

---

## 5. Panels, Cards & Shape Language

- **Card Formats:** Rounded rectangular panels with subtle borders (`1px solid var(--color-divider-fine)`) and smooth corner radii (`16px–24px`).
- **Surface Elevation:** Warm ivory cards sit atop deep red or burgundy backplates, utilizing soft, natural ambient drop shadows rather than heavy neon glows.
- **Editorial Motifs:**
  - Fine geometric division lines (`1px`).
  - Circular editorial stamps or seals (e.g., *"SWE & AI/ML"* badge).
  - Editorial section numbers (`01`, `02`, `03`) set in condensed display type.
  - Subtle CSS noise textures on decorative red panels.

---

## 6. Image & Asset Policy

### Strictly Permitted
- Blank warm-ivory canvas panels featuring deliberate negative space.
- Subtle CSS geometric shapes, hairline borders, and vector editorial badges.
- Genuine software product screenshots and interactive application mockups.
- Responsive device wireframes displaying actual application interfaces.
- Abstract technology diagrams, system architecture flowcharts, and vector icons.

### Strictly Prohibited
- Any photograph, depiction, or rendering of a human person.
- Stock photography models, business portraits, headshots, or student portraits.
- AI-generated human faces, facial features, or photorealistic human figures.
- Human silhouettes, gendered icons, or person-shaped placeholder avatars.
- Software screenshots that reveal personal selfies or identifiable human faces (crop or obscure before inclusion).

---

## 7. Home Page Hero Composition

The Hero section on the Home page translates the reference composition into an accessible, responsive layout:

```
┌────────────────────────────────────────────────────────────────────────┐
│ Global Navigation: K.A. YASHAS  •  Home  About  Projects  Skills  [CTA]│
├────────────────────────────────────────────────────────────────────────┤
│ ┌──────────────────────────────────────┐ ┌───────────────────────────┐ │
│ │ Textured Red Panel                   │ │ Empty Ivory Canvas        │ │
│ │                                      │ │                           │ │
│ │  K.A. YASHAS                         │ │   (Intentionally Empty    │ │
│ │  [SOFTWARE DEVELOPER & AI/ML]        │ │    Negative Space         │ │
│ │                                      │ │    with Editorial Stamp   │ │
│ │  Brief introduction paragraph...     │ │    and Fine Borders)      │ │
│ │                                      │ │                           │ │
│ │  [View My Work CTA]  [GitHub] [In]   │ │                           │ │
│ └──────────────────────────────────────┘ └───────────────────────────┘ │
├────────────────────────────────────────────────────────────────────────┤
│ Bottom Feature Strip:                                                  │
│ [ AI & ML ]    [ Web Development ]    [ Problem Solving ]   [ Education]│
└────────────────────────────────────────────────────────────────────────┘
```

1. **Global Navigation:** Dark burgundy background (`#520505`) with ivory links and a high-contrast pill CTA.
2. **Hero Red Panel:** Deep textured red surface (`#B91F26`), oversized condensed white/ivory name heading, editorial subheading, and verified links.
3. **Empty Ivory Canvas:** Large warm-ivory block (`#F8F0E6`) providing deliberate negative space where a portrait would conventionally sit, decorated purely with abstract editorial lines and stamps.
4. **Bottom Feature Strip:** High-contrast ivory panel anchoring the hero with 4 core focus pillars: *AI & ML*, *Web Development*, *Problem Solving*, and *Education*.

---

## 8. Component Styles

- **Primary Buttons:** Pill-shaped (`border-radius: 9999px`), warm ivory background with red text on burgundy panels, or deep red on ivory panels. Must provide visible hover shift and distinct focus ring (`outline: 2px solid var(--color-ivory-highlight); outline-offset: 2px`).
- **Social Icon Links:** Circular pill buttons housing verified SVGs (GitHub, LinkedIn). Smooth background fill transition on hover.
- **Project Cards:** Ivory base (`#F8F0E6`), editorial red headers (`#A3181D`), muted brown body text (`#5E4B46`), and refined tag chips.
- **Tags & Pills:** Micro badges with ivory background, fine red borders, and bold uppercase text (`0.75rem`).
- **Dividers:** Thin rules (`1px solid var(--color-divider-fine)`) separating content blocks without harsh contrast breaks.

---

## 9. Motion & Micro-Interactions

- **Restrained Animations:** Fast, crisp transitions (150ms–250ms `cubic-bezier(0.16, 1, 0.3, 1)`).
- **Interaction Feedback:** Subtle translateY (`-2px` to `-4px`) and refined shadow deepening on card/button hovers.
- **Accessibility Guarantee (`prefers-reduced-motion`):** When user prefers reduced motion, disable all transforms, fades, and translations:
  ```css
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
  ```

---

## 10. Accessibility (A11y) & Usability Standards

- **Color Contrast:** All body text meets or exceeds WCAG 2.1 AA ratio of `4.5:1` against its background; large headings meet `3:1`.
- **Keyboard Navigation:** Every interactive element has an active, highly visible `:focus-visible` state.
- **Touch Target Sizing:** All mobile buttons and links have a minimum interactive tap dimension of `44px × 44px`.
- **Screen Reader Support:** Decorative elements (stamps, geometry, borders) marked with `aria-hidden="true"`; all icon-only buttons carry descriptive `aria-label` tags.
