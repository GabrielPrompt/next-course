import Link from 'next/link'

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <Link href="/">To-do List</Link>
        <Link href="/todos/create">Create To-do</Link>
      </nav>
    </header>
  )
}

export default Header
