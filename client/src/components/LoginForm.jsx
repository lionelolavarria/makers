import { useState } from 'react'
import { login } from '../api/auth'

export default function LoginForm({ onSuccess }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const { data } = await login({ email, password })
      localStorage.setItem('token', data.token)
      onSuccess()
    } catch (err) {
      alert('Login failed')
    }
  }

  return (
    <form onSubmit={handleLogin} className="space-y-3">
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Login</button>
    </form>
  )
}
