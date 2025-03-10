import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-[100vh] justify-center items-center">
      <Link href="/client">Pagina com client component</Link>
    </main>
  )
}
