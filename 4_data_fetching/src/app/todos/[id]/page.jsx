import { db } from '@/db'
import { notFound } from 'next/navigation'

const TodoView = async ({ params }) => {
  // eslint-disable-next-line promise/param-names
  await new Promise((a) => setTimeout(a, 2000))

  const id = Number(params.id)

  const todo = await db.todo.findFirst({
    where: { id },
  })

  if (!todo) return notFound()

  return (
    <div className="flex justify-center items-center">
      <h1 className="font-bold text-lg">{todo.titulo}</h1>
    </div>
  )
}

export default TodoView
