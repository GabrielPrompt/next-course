import Button from '@/components/Button'
import { db } from '@/db'
import { deleteTodo, toggleTodoStatus } from '@/actions'

import Link from 'next/link'
import Checkbox from '@/components/Checkbox'

export default async function Home() {
  const todo = await db.todo.findMany()

  return (
    <main className="flex flex-col justify-center items-center mx-auto p-8 ">
      <h1 className="text-2xl font-bold mb-4">Todos</h1>
      <div className="space-y-4">
        {todo.map((todo) => (
          <div
            key={todo.id}
            className={`w-[80vw] md:w-[70w] lg:w-[55vw] bg-gray-100 rounded-lg shadow p-4 ${todo.status === 'completa' ? 'bg-blue-100' : ''}`}
          >
            <div className="flex justify-between items-start p-2">
              <div>
                <div>
                  <h2 className="text-black font-bold text-xl">
                    {todo.titulo}
                  </h2>
                  <p className="text-black/60 text-sm font-light">
                    {todo.descricao}
                  </p>
                </div>

                <div className="flex space-x-2 mt-3">
                  <Link href={`/todos/${todo.id}`}>
                    <Button color="blue">View</Button>
                  </Link>
                  <Link href={`/todos/${todo.id}/edit`}>
                    <Button color="yellow">Edit</Button>
                  </Link>
                  <form action={deleteTodo}>
                    <input type="hidden" name="id" value={todo.id} />
                    <Button color="red">Delete</Button>
                  </form>
                </div>
              </div>
              <div className="flex items-center gap-2 h-[100px]">
                <p className="italic hidden smxl:block lg:block md:block ">
                  Completed
                </p>
                <form action={toggleTodoStatus}>
                  <input type="hidden" name="id" value={todo.id} />
                  <Checkbox checked={todo.status === 'completa'} />
                </form>
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
