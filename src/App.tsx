/* eslint-disable @typescript-eslint/no-explicit-any */
import './App.css'
import { useEffect, useState } from 'react'
import Navbar from './components/navbar'
import RoutesApp from './routes'
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
      <RoutesApp />
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
