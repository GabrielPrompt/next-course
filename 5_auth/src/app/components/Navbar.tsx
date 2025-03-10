import { auth, signIn, signOut } from 'auth'
import Link from 'next/link'

const Navbar = async () => {
  const sessions = await auth()

  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <Link href="/" className="text-white text-lg font-bold">
        Home
      </Link>
      <div>
        {sessions && sessions.user ? (
          <div className="flex gap-4 items-center">
            <p>{sessions.user.name}</p>
            <form
              action={async () => {
                'use server'
                await signOut()
              }}
            >
              <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded font-semibold cursor-pointer">
                Sair
              </button>
            </form>
          </div>
        ) : (
          <form
            action={async () => {
              'use server'
              await signIn()
            }}
          >
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded font-semibold cursor-pointer">
              Entrar
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default Navbar
