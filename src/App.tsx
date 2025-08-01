/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import RoutesApp from './routes'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import useAuth from './hooks/useAuth'
import { apiBase } from './services/api'
import { useNavigate } from 'react-router'


function App() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstallBtn, setShowInstallBtn] = useState(false)
  const { token, logout } = useAuth()
  const navigate = useNavigate()


  useEffect(() => {
    const root = document.documentElement; root.style.setProperty('--color-primary', import.meta.env.VITE_APP_PRIMARY_COLOR || '#1e40af'); // azul padrão
    root.style.setProperty('--color-secondary', import.meta.env.VITE_APP_SECONDARY_COLOR || '#64748b'); // cinza
    root.style.setProperty('--color-background', import.meta.env.VITE_APP_BACKGROUND_COLOR || '#ffffff');
    root.style.setProperty('--color-text', import.meta.env.VITE_APP_TEXT_COLOR || '#000000');

    document.title = import.meta.env.VITE_APP_TITLE || "Development";

    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallBtn(true)
    })
  }, [])

  useEffect(() => {
    async function checkAuth() {
      if (!token) return
      const status = await apiBase.get("/token/verifyToken", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      if (status.data.status === 401) {
        navigate("/signin")
        logout()
      }
    }

    checkAuth()
  }, [token])

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      deferredPrompt.userChoice.then(() => {
        setDeferredPrompt(null)
        setShowInstallBtn(false)
      })
    }
  }
  return (
    <>
      <RoutesApp />
      <ToastContainer />
      {showInstallBtn && (
        <button onClick={handleInstallClick}>
          Instalar app
        </button>
      )}
      <Navbar />
    </>
  )
}

export default App
