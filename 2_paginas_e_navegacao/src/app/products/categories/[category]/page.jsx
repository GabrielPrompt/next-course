import Link from 'next/link'

const categoryPage = () => {
  return (
    <div className="flex flex-col min-h-[90vh] justify-center items-center">
      <h1>Discover our Clothes</h1>
      <Link href="/products/categories/jeans/t-shirt">Camisa Gola V</Link>
    </div>
  )
}

export default categoryPage
