import { FindTodoById } from '@/actions'
import TodoForm from '@/components/TodoForm'

const TodoEdit = async ({ params }) => {
  const id = Number(params.id)

  const todo = await FindTodoById(id)

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">
        Edit Todo: {todo.titulo}
      </h1>
      <TodoForm todo={todo} readonly={false} />
    </div>
  )
}

export default TodoEdit
