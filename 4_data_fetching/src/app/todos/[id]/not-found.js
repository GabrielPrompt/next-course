import Link from 'next/link'

const TodoNotFound = () => {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center gap-10">
      <h1 className="font-bold text-[45px]">To-do not found</h1>
      <Link
        href="/"
        className="bg-blue-500 p-3 border rounded-lg text-white font-bold hover:bg-blue-700 "
      >
        Back to Home
      </Link>
    </div>
  )
}

export default TodoNotFound
