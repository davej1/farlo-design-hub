# Farlo Design Hub

Internal single-page dashboard for Farlo's UX and UI design team. Built with React + Vite + Tailwind CSS v4.

---

## Setup

```bash
# 1. Install dependencies
npm install

# 2. Configure environment variables
cp .env.example .env
# Edit .env and fill in your values (see table below)

# 3. Start dev server
npm run dev

# 4. Production build
npm run build
```

---

## Environment Variables

Copy `.env.example` to `.env` and populate the values you have available. Cards without a configured URL render in a muted "not configured" state — the app works without any env vars set.

| Variable                  | Description                                          | Where to get it                        |
|---------------------------|------------------------------------------------------|----------------------------------------|
| `VITE_NEWS_API_KEY`       | NewsAPI.org API key (Phase 2 — not used yet)         | https://newsapi.org/register           |
| `VITE_JIRA_BASE_URL`      | Your Atlassian instance URL, e.g. `https://farlo.atlassian.net` | Jira settings              |
| `VITE_JIRA_EMAIL`         | Atlassian account email for API auth                 | Your Atlassian account                 |
| `VITE_JIRA_TOKEN`         | Jira personal access token (Phase 2)                 | https://id.atlassian.com/manage-profile/security/api-tokens |
| `VITE_GOOGLE_CLIENT_ID`   | Google Cloud Console OAuth 2.0 client ID (Phase 2)   | Google Cloud Console                   |
| `VITE_FIGMA_LIBRARY_URL`  | URL to your Figma component library file             | Figma → Share → Copy link             |
| `VITE_BRAND_GUIDELINES_URL` | URL to brand guidelines document                   | Google Drive / Notion / Confluence     |
| `VITE_LOGO_DOWNLOADS_URL` | URL to logo asset pack                               | Google Drive / Dropbox                 |
| `VITE_LICENCES_URL`       | URL to software licences document                    | Internal docs                          |
| `VITE_ONBOARDING_URL`     | URL to new joiner onboarding guide                   | Notion / Confluence / Google Drive     |
| `VITE_DESIGN_SYSTEM_URL`  | URL to design system documentation                   | Storybook / Zeroheight / Notion        |
| `VITE_ASSETS_URL`         | URL to shared asset library (photography, icons)     | Google Drive / Dropbox / DAM           |
| `VITE_SLACK_URL`          | Deep link to #design Slack channel                   | Slack → Right-click channel → Copy link |

---

## Phase Roadmap

### Phase 1 — Mock Data (current)
- All data served from local mock files in `/src/data/`
- 1.2s simulated load delay with skeleton loaders visible throughout
- All integration swap points documented with `// TODO [Phase 2]` comments
- Quick Links render in a "not configured" state until env vars are populated

### Phase 2 — Live Integrations
- **News Feed** → Live fetch from [NewsAPI.org](https://newsapi.org) using `VITE_NEWS_API_KEY`
- **Jira Tickets** → Live fetch from Jira REST API v3 using `VITE_JIRA_BASE_URL` / `VITE_JIRA_EMAIL` / `VITE_JIRA_TOKEN`
- **Recent Documents** → Live fetch from Google Drive API v3 using `VITE_GOOGLE_CLIENT_ID` + OAuth 2.0 flow
- Swap `setTimeout` mocks in `useNews.js`, `useJira.js`, `useDocs.js` for real `fetch()` calls

### Phase 3 — Auth & Personalisation
- Replace hardcoded `"Jesal"` greeting with authenticated user's first name
- Role-based content filtering (e.g. show only tickets assigned to current user)
- Persist filter tab state across sessions
- Notification badges for new tickets / unread news

---

## Tech Stack

| Layer       | Technology              |
|-------------|-------------------------|
| Framework   | React 19 + Vite 7       |
| Styling     | Tailwind CSS v4 (`@theme` tokens in `src/index.css`) |
| Icons       | lucide-react            |
| Font        | Urbanist (Google Fonts) |
| Data        | Mock — Phase 1          |

---

## Project Structure

```
/src
  /components     # 11 UI components
  /data           # Mock data (remove in Phase 2)
  /hooks          # useNews, useJira, useDocs — swap mocks here
  /config
    links.js      # All env-sourced URLs centralised
  App.jsx
  index.css       # @theme brand tokens + Tailwind import
.env.example      # Template — copy to .env
```
