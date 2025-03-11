import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex flex-col min-h-[100vh] justify-center items-center">
      <Link href="/client">Page with client component</Link>
      <Link href="/server">Page with server component</Link>
      <Link href="/middleware">Page with Middleware</Link>
    </main>
  )
}
