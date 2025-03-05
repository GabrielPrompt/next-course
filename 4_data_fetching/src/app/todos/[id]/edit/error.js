'use client'

import Link from 'next/link'

const TodoEditErrorPage = () => {
  return (
    <div>
      <h1>a problem occurred, please try again later</h1>
      <Link href="/"> Back to Home </Link>
    </div>
  )
}

export default TodoEditErrorPage
