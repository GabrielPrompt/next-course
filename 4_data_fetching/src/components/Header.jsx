import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link className="font-bold" href="/">
          Home
        </Link>
        <Link className="font-bold" href="/todos/create">
          Create
        </Link>
      </nav>
    </header>
  )
}

export default Header
