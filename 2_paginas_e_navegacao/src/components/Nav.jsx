'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

const NavPage = () => {
  const pathname = usePathname()

  return (
    <nav>
      <ul className="flex flex-row min-w-full justify-around h-[10vh] items-center bg-gray-900">
        <li>
          <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/about' ? 'active' : ''}`}
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/posts' ? 'active' : ''}`}
            href="/posts"
          >
            Posts
          </Link>
        </li>
        <li>
          <Link
            className={`link ${pathname === '/dashboard' ? 'active' : ''}`}
            href="/dashboard"
          >
            Admin
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavPage
