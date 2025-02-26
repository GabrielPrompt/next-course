'use client'

import { useRouter } from 'next/navigation'

const BotaoRedirect = () => {
  const router = useRouter()

  return <button onClick={() => router.push('/dashboard')}>Dashboard</button>
}

export default BotaoRedirect
