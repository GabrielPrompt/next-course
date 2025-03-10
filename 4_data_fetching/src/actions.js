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

export const addTodo = async (formState, formData) => {
  const titulo = formData.get('title')
  const descricao = formData.get('description')
  const status = 'pendente'

  try {
    if (titulo.length < 5) {
      return {
        errors: 'the title needs at least 5 characters',
      }
    }
    if (descricao.length < 10) {
      return {
        errors: 'the description needs at least 10 characters',
      }
    }
    if (descricao.length > 244) {
      return {
        errors: 'the description should not exceed 244 characters',
      }
    }
    if (titulo.length > 44) {
      return {
        errors: 'the title should not exceed 44 characters',
      }
    }
    if (!titulo || titulo.trim().length === 0) {
      return { errors: 'The title cannot be empty or only spaces' }
    }
    if (!descricao || descricao.trim().length === 0) {
      return { errors: 'The description cannot be empty or only spaces' }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const todo = await db.todo.create({
      data: {
        titulo,
        descricao,
        status,
      },
    })

    revalidatePath('/')

    return { success: true }
  } catch (error) {
    return { errors: error.message }
  }
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
        errors: 'the description needs at least 10 characters',
      }
    }
    if (descricao.length > 244) {
      return {
        errors: 'the description should not exceed 244 characters',
      }
    }
    if (titulo.length > 44) {
      return {
        errors: 'the title should not exceed 44 characters',
      }
    }
    if (!titulo || titulo.trim().length === 0) {
      return { errors: 'The title cannot be empty or only spaces' }
    }
    if (!descricao || descricao.trim().length === 0) {
      return { errors: 'The description cannot be empty or only spaces' }
    }

    await db.todo.update({
      where: { id },
      data: { titulo, descricao },
    })

    revalidatePath('/')

    return { success: true }
  } catch (error) {
    return { errors: error.message }
  }
}

export async function toggleTodoStatus(formData) {
  const todoId = Number(formData.get('id'))

  const todo = await db.todo.findFirst({
    where: { id: todoId },
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
