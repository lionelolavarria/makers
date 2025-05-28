import { Routes, Route, Navigate } from 'react-router-dom'
import Auth from './pages/Auth'
import Home from './pages/Home'

const isAuthenticated = () => !!localStorage.getItem('token')

export default function App() {
  return (
    <Routes>
      <Route path="/" element={isAuthenticated() ? <Navigate to="/home" /> : <Auth />} />
      <Route path="/home" element={isAuthenticated() ? <Home /> : <Navigate to="/" />} />
    </Routes>
  )
}
