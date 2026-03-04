# Farlo Design Hub — Claude Code Specification

## PROJECT OVERVIEW
Build a single-page internal dashboard for Farlo's UX and UI design team.
This is a central hub for current and new employees. It should feel like a
premium internal tool — not a generic admin panel.

Farlo is a London-based digital transformation agency based in Fitzrovia.
Specialisms: web design, development, technical SEO, data analytics,
conversion tracking, and live events tech.

---

## TECH STACK
- React + Vite
- Tailwind CSS v4
- No backend — Phase 1 uses smart mock data throughout
- All real integration points are stubbed with TODO comments

---

## STYLING & TOKENS
Brand colour tokens and typography are defined in `src/index.css` using
the Tailwind v4 `@theme` directive. Do not create a tailwind.config.js.
```css

Rules:
- Zero hardcoded hex values in any JSX or CSS file
- Always use Tailwind token classes: `bg-brand-primary`, `text-brand-accent`,
  `border-brand-border` etc.
- Typography: use `font-sans` as base, vary with `font-light`, `font-medium`,
  `font-semibold`, `font-bold`
- Urbanist is imported via Google Fonts at the top of `index.css`

---

## DESIGN DIRECTION
- Aesthetic: modern, editorial, high information density without clutter
- Responsive grid layout — optimised for 1280px+ desktop
- Section cards with subtle elevation/shadow and clear visual hierarchy
- Skeleton loaders on all async-simulated sections — fake a 1.2s load delay
  using setTimeout so skeletons are visible and testable
- Micro-interactions: hover lift on cards, 150ms ease colour transitions,
  visible focus rings using brand accent on all interactive elements
- Sticky header on scroll
- Proper semantic HTML throughout: `<main>`, `<section>`, `<nav>`,
  `<article>`, `<header>`
- Every section must have an `id` attribute matching the header nav anchors

---

## PAGE SECTIONS

### 1. HEADER
- Farlo wordmark in brand primary (text-based until logo asset provided)
- Dashboard title: "Design Hub"
- Current date in full: e.g. "Wednesday, 4 March 2026"
- User greeting: "Good morning, Jesal" (hardcoded — mark as TODO for auth)
- Anchor icon-nav: News · Tickets · Toolkit · Docs · About
- Sticky on scroll

---

### 2. NEWS FEED
Section id: `news`
Title: "What's Happening in Design & Tech"

- Fake 1.2s skeleton load then render 6 mock news cards
- Mock data: varied sources (Smashing Magazine, Nielsen Norman, The Verge,
  Wired, CSS-Tricks, NN/g), realistic headlines, relative timestamps
- Layout: 3-column card grid, collapses to 1 on mobile
- Each card: gradient thumbnail placeholder using brand palette, source tag,
  headline, time ago, "Read →" link
- Refresh button in section header re-triggers skeleton + reload
```js
// TODO [Phase 2]: Replace mock data with live NewsAPI.org fetch
// Endpoint: https://newsapi.org/v2/everything?q=UX+design+OR+UI+design+OR+Figma&sortBy=publishedAt
// Auth: Bearer token from import.meta.env.VITE_NEWS_API_KEY
// Swap the setTimeout mock in useNews.js for a real fetch() call
```

---

### 3. JIRA TICKETS
Section id: `tickets`
Title: "Active Tickets"

- Fake 1.2s skeleton load then render 8 mock tickets
- Mock tickets: realistic design/dev scenarios, mix of statuses
  (In Progress, To Do, In Review, Blocked), mix of priorities
  (High, Medium, Low — colour-coded badges)
- Assignees: "Jesal T.", "Alex M.", "Sam K."
- Example summaries: "Redesign onboarding flow", "Audit component library
  for accessibility", "Update brand tokens in Figma"
- Table columns: ID · Summary · Assignee · Status · Priority · Updated
- Filter tabs: All | In Progress | To Do | In Review | Blocked
- Tab switching filters mock data client-side
```js
// TODO [Phase 2]: Replace mock data with Jira REST API v3
// Endpoint: GET {VITE_JIRA_BASE_URL}/rest/api/3/search?jql=project=DESIGN&maxResults=20
// Auth: Basic base64(email:token) from VITE_JIRA_EMAIL + VITE_JIRA_TOKEN
// Swap the setTimeout mock in useJira.js for a real fetch() call
```

---

### 4. QUICK LINKS — TOOLKIT
Section id: `toolkit`
Title: "Your Toolkit"

2-row × 4-column icon grid. Each card: icon + title + one-line description.
All URLs sourced from environment variables.

| Label             | Icon (Lucide)  | Description                    | Env var                         |
|-------------------|----------------|--------------------------------|---------------------------------|
| Figma Library     | Figma SVG      | Browse our component library   | VITE_FIGMA_LIBRARY_URL          |
| Brand Guidelines  | FileText       | Colours, type, usage rules     | VITE_BRAND_GUIDELINES_URL       |
| Logo Downloads    | Download       | All formats and variants       | VITE_LOGO_DOWNLOADS_URL         |
| Software Licences | Key            | Tools we're licensed for       | VITE_LICENCES_URL               |
| Onboarding Guide  | BookOpen       | Start here if you're new       | VITE_ONBOARDING_URL             |
| Design System     | Layers         | Tokens, patterns, principles   | VITE_DESIGN_SYSTEM_URL          |
| Asset Library     | Image          | Photography, icons, graphics   | VITE_ASSETS_URL                 |
| Slack — Design    | MessageSquare  | Jump into #design              | VITE_SLACK_URL                  |

- If env var is empty/undefined: show card in muted "not configured" state
  with tooltip "URL not configured — add to .env"
- Hover: lift shadow + brand accent left border

---

### 5. RECENT DOCUMENTS
Section id: `docs`
Title: "Recent Documents"

- Fake 1.2s skeleton load then render 8 mock documents
- Mix of Docs and Sheets, realistic filenames, relative modified times
- Examples: "Q1 Design Sprint Notes", "Farlo Brand Audit 2025",
  "Component Library Tracker", "New Joiner Checklist"
- Each row: file type icon (Doc = blue, Sheet = green) · file name ·
  modified by · last modified · "Open →" link
- Clean list layout with subtle dividers
```js
// TODO [Phase 2]: Replace mock data with Google Drive API v3
// Endpoint: GET https://www.googleapis.com/drive/v3/files
//   ?orderBy=modifiedTime+desc&pageSize=8
//   &fields=files(id,name,modifiedTime,lastModifyingUser,mimeType,webViewLink)
// Auth: OAuth2 — client ID from VITE_GOOGLE_CLIENT_ID
// Swap the setTimeout mock in useDocs.js for a real fetch() call
```

---

### 6. ABOUT FARLO
Section id: `about`
Title: "About Farlo"

Two-column layout:

Left — Company overview:
- 2–3 sentence description of Farlo's mission in digital transformation
- Location: Fitzrovia, London
- Specialisms as small tags: Web Design · Development · Technical SEO ·
  Data Analytics · Conversion Tracking · Live Events Tech
- "Growing team across design, development and strategy"

Right — Core values (2×2 card grid):

| Value                   | Icon      | Description                                    |
|-------------------------|-----------|------------------------------------------------|
| Data-Driven             | BarChart2 | Evidence guides every decision we make         |
| Transparent             | Eye       | Open by default — in process and in results    |
| Technologically Literate| Cpu       | We deeply understand the tools we recommend    |
| Human-Centred           | Heart     | Technology that works for people, not systems  |

Icons: brand accent colour. Cards: brand surface bg + brand border.

---

## FILE STRUCTURE
```
/src
  /components
    Header.jsx
    NewsSection.jsx
    NewsCard.jsx
    SkeletonCard.jsx
    JiraSection.jsx
    JiraTable.jsx
    QuickLinks.jsx
    QuickLinkCard.jsx
    DocsSection.jsx
    DocRow.jsx
    AboutSection.jsx
  /data
    mockNews.js
    mockJira.js
    mockDocs.js
  /hooks
    useNews.js
    useJira.js
    useDocs.js
  /config
    links.js        ← all env-sourced URLs centralised here
  App.jsx
  main.jsx
  index.css         ← @theme tokens live here
.env.example
README.md
```

---

## ENV VARIABLES (.env.example)
```
# News
VITE_NEWS_API_KEY=           # NewsAPI.org — https://newsapi.org/register

# Jira
VITE_JIRA_BASE_URL=          # e.g. https://farlo.atlassian.net
VITE_JIRA_EMAIL=             # Atlassian account email
VITE_JIRA_TOKEN=             # Jira personal access token

# Google
VITE_GOOGLE_CLIENT_ID=       # Google Cloud Console OAuth client ID

# Quick Links
VITE_FIGMA_LIBRARY_URL=
VITE_BRAND_GUIDELINES_URL=
VITE_LOGO_DOWNLOADS_URL=
VITE_LICENCES_URL=
VITE_ONBOARDING_URL=
VITE_DESIGN_SYSTEM_URL=
VITE_ASSETS_URL=
VITE_SLACK_URL=
```

---

## QUALITY REQUIREMENTS
- Reusable SkeletonCard component used across News, Jira and Docs sections
- All mock data clearly labelled `// MOCK DATA — remove in Phase 2`
- All components keyboard-navigable with visible focus rings
- README.md must include: setup steps, env variable reference table,
  phase roadmap (Phase 1 → Phase 2 → Phase 3)
- Console.log all mock data fetches so integration swap points are easy to find

## DO NOT
- Do not create tailwind.config.js — tokens live in index.css @theme
- Do not use localStorage or sessionStorage
- Do not add authentication
- Do not use paid component libraries
- Do not create a backend or API routes
- Do not hardcode hex values anywhere — only Tailwind brand token classes
