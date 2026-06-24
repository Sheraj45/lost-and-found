import { useState, useEffect } from 'react'
import AuthScreen from './components/AuthScreen'
import HomeScreen from './components/HomeScreen'
import PostItemScreen from './components/PostItemScreen'
import ViewItemsScreen from './components/ViewItemsScreen'

function App() {
  const [users, setUsers] = useState(() => {
    const saved = localStorage.getItem('laf_users')
    return saved ? JSON.parse(saved) : []
  })

  const [currentUser, setCurrentUser] = useState(() => {
    return localStorage.getItem('laf_current_user') || null
  })

  // If a user is already logged in (from a previous visit), skip straight to the dashboard
  const [screen, setScreen] = useState(() => (currentUser ? 'home' : 'auth'))

  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('laf_items')
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem('laf_users', JSON.stringify(users))
  }, [users])

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('laf_current_user', currentUser)
    } else {
      localStorage.removeItem('laf_current_user')
    }
  }, [currentUser])

  useEffect(() => {
    localStorage.setItem('laf_items', JSON.stringify(items))
  }, [items])

  return (
    <div className="min-h-screen bg-gradient-to-br from-fog to-mist">
      {screen === 'auth' && (
        <AuthScreen
          users={users}
          setUsers={setUsers}
          setCurrentUser={setCurrentUser}
          setScreen={setScreen}
        />
      )}
      {screen === 'home' && (
        <HomeScreen
          users={users}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          setScreen={setScreen}
        />
      )}
      {screen === 'postItem' && (
        <PostItemScreen
          currentUser={currentUser}
          items={items}
          setItems={setItems}
          setScreen={setScreen}
        />
      )}
      {screen === 'viewItems' && (
        <ViewItemsScreen
          currentUser={currentUser}
          items={items}
          setItems={setItems}
          setScreen={setScreen}
        />
      )}
    </div>
  )
}

export default App
