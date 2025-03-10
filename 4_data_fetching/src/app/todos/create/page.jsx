'use client'

import { addTodo } from '@/actions'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useFormState } from 'react-dom'

const TodoPage = () => {
  const [formState, action] = useFormState(addTodo, { errors: '' })

  const router = useRouter()

  useEffect(() => {
    if (formState.success) {
      router.push('/') // Redireciona para a Home
    }
  }, [formState.success, router])

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Create new Todo</h1>
      <form
        action={action}
        className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg "
      >
        {formState.errors ? (
          <div className="my-4 p-2 bg-red-400 border border-red-700">
            {formState.errors}
          </div>
        ) : (
          ''
        )}
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Insert a title here..."
            required
            className="mt-1 px-4 border border-gray-300 rounded-md w-full"
          />
        </label>

        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description
          <textarea
            id="description"
            type="text"
            name="description"
            placeholder="Insert a description here..."
            required
            className="mt-1 px-4 py-2 border border-gray-300 rounded-md w-full h-32"
          />
        </label>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-blue-500 focus:ring-opacity-50 "
        >
          Create Todo
        </button>
      </form>
    </div>
  )
}

export default TodoPage
