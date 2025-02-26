import Link from 'next/link'

const PostPage = ({ params }) => {
  const id = params.id
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10">
      <h1>Post {id}</h1>
      <p>Text the Post...</p>
      <Link href="/posts">Back to Inicial Page</Link>
    </div>
  )
}

export default PostPage
