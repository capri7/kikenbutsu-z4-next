// src/app/robots.ts
import type { MetadataRoute } from 'next'

const BASE_URL = 'https://kikenbutsu-z4.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/contents/free'],
        disallow: [
          '/mypage',
          '/mistakes',
          '/review',
          '/checkout',
          '/success',
          '/reset-password',
          '/account-deleted',
          '/login',
          '/signup',
          '/contents/',
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}