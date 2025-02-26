import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      {/* Aula 1 - navegação */}
      <h1>Home Page</h1>
      <Link href="./about">Go About Page</Link>
      {/* Aula 2 - dados dinamicos */}
      <h1>Access posts</h1>
      <Link href="/posts">Posts</Link>
      {/* Aula 3 - Parametros na URL */}
      <Link href="/exemplo?parametro=valor&gabriel=bueno">Page with Param</Link>
      {/* Aula 4 - Nested routes */}
      <Link href="/dashboard">Go to Admin Page</Link>
      {/* Aula 9 - Redirect */}
      <Link href="/profile">Go to profile Page</Link>
    </main>
  )
}
