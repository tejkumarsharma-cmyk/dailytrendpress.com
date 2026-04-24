export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'fyvzw7y1ku',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Dailytrendpress',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Press release newswire',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Daily Trend Press is a press release newswire for teams that need structured announcements, scannable archives, and reader-ready story pages.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'dailytrendpress.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://dailytrendpress.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
