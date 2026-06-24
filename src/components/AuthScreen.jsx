import { useState } from 'react'

export default function AuthScreen({ users, setUsers, setCurrentUser, setScreen }) {
  const [mode, setMode] = useState('signIn') // 'signIn' | 'signUp'
  const [error, setError] = useState('')

  const [fname, setFname] = useState('')
  const [lname, setLname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const switchMode = (next) => {
    setMode(next)
    setError('')
    setFname('')
    setLname('')
    setEmail('')
    setPassword('')
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    if (users.some((u) => u.email === email)) {
      setError('Email already exists')
      return
    }
    const newUser = { firstName: fname, lastName: lname, email, password }
    setUsers([...users, newUser])
    setCurrentUser(email)
    setScreen('home')
  }

  const handleSignIn = (e) => {
    e.preventDefault()
    const match = users.find((u) => u.email === email && u.password === password)
    if (match) {
      setCurrentUser(email)
      setScreen('home')
    } else {
      setError('Incorrect email or password')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-8">
        <h1 className="text-2xl font-bold text-center text-ink mb-6">
          {mode === 'signIn' ? 'Sign In' : 'Register'}
        </h1>

        {error && (
          <p className="text-danger text-center text-sm mb-4">{error}</p>
        )}

        {mode === 'signUp' ? (
          <form onSubmit={handleSignUp} className="space-y-4">
            <Field label="First Name" value={fname} onChange={setFname} />
            <Field label="Last Name" value={lname} onChange={setLname} />
            <Field label="Email" type="email" value={email} onChange={setEmail} required />
            <Field label="Password" type="password" value={password} onChange={setPassword} required />
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 rounded-xl shadow-md hover:bg-deep transition"
            >
              Sign Up
            </button>
          </form>
        ) : (
          <form onSubmit={handleSignIn} className="space-y-4">
            <Field label="Email" type="email" value={email} onChange={setEmail} required />
            <Field label="Password" type="password" value={password} onChange={setPassword} required />
            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-3 rounded-xl shadow-md hover:bg-deep transition"
            >
              Sign In
            </button>
          </form>
        )}

        <p className="text-center text-sm text-gray-500 mt-6">
          {mode === 'signIn' ? "Don't have an account?" : 'Already have an account?'}{' '}
          <button
            type="button"
            onClick={() => switchMode(mode === 'signIn' ? 'signUp' : 'signIn')}
            className="text-primary font-semibold underline"
          >
            {mode === 'signIn' ? 'Sign Up' : 'Sign In'}
          </button>
        </p>
      </div>
    </div>
  )
}

function Field({ label, type = 'text', value, onChange, required = false }) {
  return (
    <div>
      <label className="block text-sm font-medium text-ink mb-1">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-b border-gray-300 focus:border-primary outline-none py-2 bg-transparent"
      />
    </div>
  )
}
