import Link from 'next/link'

const DashboardPage = () => {
  return (
    <div className="flex flex-col min-h-[90vh] justify-center items-center">
      <h1>This is a Admin Page</h1>
      <Link href="/dashboard/orders">Go to Orders Page</Link>
    </div>
  )
}

export default DashboardPage
