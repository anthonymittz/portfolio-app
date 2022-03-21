import Link from 'next/link'

export default function Navigation() {
  return <nav>
    <Link href="/">Home</Link>
    <Link href="/resume">Resume</Link>
    <Link href="/articles">Articles</Link>
    <Link href="/articles/box">Category</Link>
    <Link href="/articles/box/item">Article</Link>
  </nav>
}