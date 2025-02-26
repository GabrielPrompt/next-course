import Link from 'next/link'

const PostsPage = () => {
  const postsIds = [1, 2, 3]

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10">
      <h1>Blog</h1>
      <ul>
        {postsIds.map((posts, index) => {
          return (
            <li key={index}>
              <Link href={`/posts/${posts}`}>Look the post {posts}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default PostsPage
