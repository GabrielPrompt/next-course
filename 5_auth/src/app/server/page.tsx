import { auth } from 'auth'

const ServerPage = async () => {
  const session = await auth()

  if (!session || !session.user) return <p>You need to be authenticated</p>

  return <div>Welcome to the Page Server</div>
}

export default ServerPage
