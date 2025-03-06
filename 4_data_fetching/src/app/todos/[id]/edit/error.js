'use client'

import Button from '@/components/Button'
import Link from 'next/link'

const TodoEditErrorPage = () => {
  return (
    <div className="flex flex-col h-[100vh] justify-center items-center gap-10">
      <h1 className="font-bold text-[45px]">
        a problem occurred, please try again later
      </h1>
      <Link href="/">
        <Button color="blue">Back Home</Button>
      </Link>
    </div>
  )
}

export default TodoEditErrorPage
