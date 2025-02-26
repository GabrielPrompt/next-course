import { db } from '@/db'

import Link from 'next/link'

export default async function Home() {
  const todo = await db.todo.findMany()

  return (
    <main className="flex flex-col justify-center items-center mx-auto p-8 ">
      <h1>Home Page</h1>

      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      <div className="space-y-4">
        {todo.map((todo) => (
          <div
            key={todo.id}
            className="w-[50vh] h-[55x] bg-gray-700 rounded-lg shadow"
          >
            <div className="flex justify-between items-start p-2">
              <div>
                <h2 className="text-white font-bold text-base">
                  {todo.titulo}
                </h2>
                <p className="text-white/60 text-sm font-light">
                  {todo.descricao}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center">
        <Link
          className="mt-24 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50"
          href="./todos/create"
        >
          Add Todo
        </Link>
      </div>
    </main>
  )
}
