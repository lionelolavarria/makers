import { useState } from 'react'
import { register } from '../api/auth'

export default function RegisterForm({ onSuccess }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await register(form)
      localStorage.setItem('token', data.token)
      onSuccess()
    } catch (err) {
      alert('Registration failed')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input placeholder="Name" onChange={e => setForm({ ...form, name: e.target.value })} />
      <input type="email" placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" onChange={e => setForm({ ...form, password: e.target.value })} />
      <button type="submit">Register</button>
    </form>
  )
}
