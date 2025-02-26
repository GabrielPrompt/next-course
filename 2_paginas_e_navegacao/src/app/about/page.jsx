import Link from 'next/link'

const AboutPage = () => {
  return (
    <div className="flex flex-col h-[100vh] gap-10 max-w-[100%] items-center justify-center  ">
      <h1>About Page</h1>
      <Link href="./">Back Home</Link>
    </div>
  )
}

export default AboutPage
