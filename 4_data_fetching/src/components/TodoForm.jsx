'use client'

import { useFormState } from 'react-dom'
import { updateTodo } from '@/actions'
import Button from './Button'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const TodoForm = ({ todo, readonly }) => {
  const [formState, action] = useFormState(updateTodo, { errors: '' })

  const router = useRouter()

  useEffect(() => {
    if (formState.success) {
      router.push('/')
    }
  }, [formState.success, router])

  return (
    <form
      action={action}
      className="flex flex-col gap-4 p-5 bg-white shadow-lg rounded-lg "
    >
      {formState.errors ? (
        <div className="my-4 p-2 bg-red-400 border border-red-700">
          {formState.errors}
        </div>
      ) : (
        ''
      )}

      <input type="hidden" name="id" value={todo.id} />

      <label
        htmlFor="title"
        className="block text-sm font-medium text-gray-700"
      >
        Title
        <input
          defaultValue={todo.titulo}
          id="title"
          type="text"
          name="title"
          placeholder="Insert a title here..."
          required
          className="h-14 mt-1 px-4 border border-gray-300 rounded-md w-full"
          readOnly={readonly}
        />
      </label>

      <label
        htmlFor="description"
        className="block text-sm font-medium text-gray-700"
      >
        Description
        <textarea
          defaultValue={todo.descricao}
          id="description"
          type="text"
          name="description"
          placeholder="Insert a description here..."
          required
          className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full h-32"
          readOnly={readonly}
        />
      </label>

      {readonly ? (
        <div className="flex justify-end gap-5 pt-7">
          <Link href="/">
            <Button color="blue">Back</Button>
          </Link>
          <Link href={`/todos/${todo.id}/edit`}>
            <Button color="yellow">Edit</Button>
          </Link>
        </div>
      ) : (
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 "
        >
          Edit
        </button>
      )}
    </form>
  )
}

export default TodoForm
