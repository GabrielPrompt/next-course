'use client'

import { useSearchParams } from 'next/navigation'

const ExemploPage = () => {
  const searchParams = useSearchParams()

  const valorParam = searchParams.get('gabriel')
  const hasParam = searchParams.has('gabriel')

  return (
    <div className="flex flex-col min-h-screen items-center justify-center gap-5">
      <h1>Exibindo resultados para: {valorParam}</h1>
      {hasParam ? 'Tem parametro' : 'não tem parametro'}
    </div>
  )
}

export default ExemploPage
