// All environment-sourced URLs centralised here.
// Add values to .env (see .env.example). Cards render in a muted
// "not configured" state when the corresponding env var is empty.

export const links = {
  figmaLibrary:     import.meta.env.VITE_FIGMA_LIBRARY_URL     || '',
  brandGuidelines:  import.meta.env.VITE_BRAND_GUIDELINES_URL  || '',
  logoDownloads:    import.meta.env.VITE_LOGO_DOWNLOADS_URL    || '',
  licences:         import.meta.env.VITE_LICENCES_URL          || '',
  onboarding:       import.meta.env.VITE_ONBOARDING_URL        || '',
  designSystem:     import.meta.env.VITE_DESIGN_SYSTEM_URL     || '',
  assets:           import.meta.env.VITE_ASSETS_URL            || '',
  slack:            import.meta.env.VITE_SLACK_URL             || '',
}
