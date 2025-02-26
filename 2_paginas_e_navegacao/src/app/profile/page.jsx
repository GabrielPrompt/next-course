import { redirect } from 'next/navigation'
const ProfilePage = () => {
  const user = false

  if (!user) {
    redirect('/')
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-10 p-24">
      <h1>Welcome to your profile</h1>
    </div>
  )
}

export default ProfilePage
