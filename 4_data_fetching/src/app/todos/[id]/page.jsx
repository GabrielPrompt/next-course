import TodoForm from '@/components/TodoForm'
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
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">
        View Todo: {todo.titulo}
      </h1>
      <TodoForm todo={todo} readonly={true} />
    </div>
  )
}

export default TodoView
