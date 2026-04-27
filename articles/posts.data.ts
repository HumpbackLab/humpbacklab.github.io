import { createContentLoader } from 'vitepress'

type Post = {
  title: string
  url: string
  date: string
  description: string
}

function normalizeDate(value: unknown) {
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10)
  }
  if (typeof value === 'string') {
    return value
  }
  return ''
}

function dateWeight(date: string) {
  const time = Date.parse(date)
  return Number.isNaN(time) ? 0 : time
}

function normalizeTitle(url: string) {
  const slug = url.split('/').filter(Boolean).pop() || 'untitled'
  return slug
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

export declare const data: Post[]

export default createContentLoader('articles/*.md', {
  excerpt: true,
  transform(raw) {
    return raw
      .filter((post) => post.url !== '/articles/')
      .map((post) => ({
        title: post.frontmatter.title || normalizeTitle(post.url),
        url: post.url,
        date: normalizeDate(post.frontmatter.date),
        description: post.frontmatter.description || ''
      }))
      .sort((a, b) => dateWeight(b.date) - dateWeight(a.date))
  }
})
