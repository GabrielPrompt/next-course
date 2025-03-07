'use server'

import { revalidatePath } from 'next/cache'
import { db } from './db'
import { redirect } from 'next/navigation'

export async function deleteTodo(formdata) {
  const id = Number(formdata.get('id'))

  await db.todo.delete({
    where: { id },
  })

  revalidatePath('/')

  redirect('/')
}

export const addTodo = async (formData) => {
  const titulo = formData.get('title')
  const descricao = formData.get('description')
  const status = 'pendente'

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const todo = await db.todo.create({
    data: {
      titulo,
      descricao,
      status,
    },
  })

  revalidatePath('/')

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

  try {
    // throw new Error('There was a problem, please try again later ')

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

    revalidatePath('/')

    redirect('./todos')
  } catch (error) {
    return { errors: error.message }
  }
}

export async function toggleTodoStatus(formData) {
  const todoId = Number(formData.get('id'))

  const todo = db.todo.findFirst({
    where: { todoId },
  })

  if (!todo) {
    throw new Error('Todo does not exist ')
  }

  const novoStatus = todo.status === 'pendente' ? 'completa' : 'pendente'

  await db.todo.update({
    where: {
      id: todoId,
    },
    data: {
      status: novoStatus,
    },
  })

  revalidatePath('/')

  redirect('/')
}
