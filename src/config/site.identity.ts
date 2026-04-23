export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || '9r9164krtx',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'UpdatePRNews',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Press release distribution and newsroom coverage',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'UpdatePRNews helps brands publish trusted press releases, reach media outlets, and track announcement performance.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'updateprnews.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://updateprnews.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
