export default function HomeScreen({ users, currentUser, setCurrentUser, setScreen }) {
  const user = users.find((u) => u.email === currentUser)

  const handleLogout = () => {
    setCurrentUser(null)
    setScreen('auth')
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-semibold text-primary mb-8">
        Hi, {user?.firstName} {user?.lastName} 😎
      </h1>

      <div className="bg-gradient-to-r from-primary via-deep to-found text-white text-2xl font-bold py-10 px-6 rounded-2xl shadow-lg mb-10 max-w-xl">
        WELCOME TO LOST &amp; FOUND PORTAL
      </div>

      <div className="flex flex-col gap-4 w-64">
        <button
          onClick={() => setScreen('postItem')}
          className="bg-primary text-white font-semibold py-3 rounded-xl shadow-md hover:bg-deep hover:-translate-y-0.5 transition"
        >
          Post Lost/Found Item
        </button>
        <button
          onClick={() => setScreen('viewItems')}
          className="bg-primary text-white font-semibold py-3 rounded-xl shadow-md hover:bg-deep hover:-translate-y-0.5 transition"
        >
          View All Items
        </button>
        <button
          onClick={handleLogout}
          className="bg-danger text-white font-semibold py-3 rounded-xl shadow-md hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
