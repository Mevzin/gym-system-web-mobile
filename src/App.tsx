/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css'
import { useEffect, useState } from 'react'
import SessionsPage from './pages/sessions'
function App() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [showInstallBtn, setShowInstallBtn] = useState(false)

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallBtn(true)
    })
  }, [])

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
      <SessionsPage />
      {showInstallBtn && (
        <button onClick={handleInstallClick}>
          Instalar app
        </button>
      )}
    </>
  )
}

export default App
