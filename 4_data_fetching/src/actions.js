'use server'

import { db } from './db'
import { redirect } from 'next/navigation'

export async function deleteTodo(formdata) {
  const id = Number(formdata.get('id'))

  await db.todo.delete({
    where: { id },
  })

  redirect('/')
}

export const addTodo = async (formData) => {
  const titulo = formData.get('title')
  const descricao = formData.get('description')
  const status = 'pendente'

  const todo = await db.todo.create({
    data: {
      titulo,
      descricao,
      status,
    },
  })

  console.log(todo)

  redirect('/')
}

export const FindTodoById = async (id) => {
  const todo = db.todo.findFirst({
    where: { id },
  })

  return todo
}

export const updateTodo = async (formState, formData) => {
  const id = Number(formData.get('id'))
  const titulo = formData.get('title')
  const descricao = formData.get('description')

  if (titulo.length < 5) {
    return {
      errors: 'the title needs at least 5 characters',
    }
  }
  if (descricao.length < 10) {
    return {
      errors: 'the description needs at least 5 characters',
    }
  }

  await db.todo.update({
    where: { id },
    data: { titulo, descricao },
  })

  redirect('/')
}
