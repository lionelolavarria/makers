import { useState } from 'react'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { useNavigate } from 'react-router-dom'

export default function Auth() {
  const [mode, setMode] = useState('login')
  const navigate = useNavigate()

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl mb-4">{mode === 'login' ? 'Login' : 'Register'}</h2>
      {mode === 'login'
        ? <LoginForm onSuccess={() => navigate('/home')} />
        : <RegisterForm onSuccess={() => navigate('/home')} />}
      <button onClick={() => setMode(mode === 'login' ? 'register' : 'login')} className="mt-4 text-blue-500 underline">
        {mode === 'login' ? 'No account? Register' : 'Already have an account? Login'}
      </button>
    </div>
  )
}

