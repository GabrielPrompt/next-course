'use client'

const Button = ({ children, color }) => {
  const colors = {
    blue: 'bg-blue-500 hover:bg-blue-700',
    yellow: 'bg-yellow-500 hover:bg-yellow-700',
    red: 'bg-red-500 hover:bg-red-700',
  }

  return (
    <button
      className={`${colors[color]} text-white font-bold py-2 px-4 rounded`}
    >
      {children}
    </button>
  )
}

export default Button
