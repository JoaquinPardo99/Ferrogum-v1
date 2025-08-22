import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Benefits from './components/Benefits'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { LanguageProvider } from './contexts/LanguageContext'
import { MenuProvider, useMenu } from './contexts/MenuContext'
import './App.css'

function AppContent() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { isMenuOpen } = useMenu()

  useEffect(() => {
    // Solo controlar el overflow si el menú NO está abierto
    if (!isMenuOpen) {
      if (!isLoaded) {
        // Prevenir scroll interno durante la carga
        document.body.style.overflow = 'hidden'
      } else {
        // Permitir scroll normal una vez cargado
        document.body.style.overflow = 'unset'
      }
    }
  }, [isLoaded, isMenuOpen])

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <div className={`App ${isLoaded ? 'loaded' : 'loading'}`}>
      <Header />
      <main>
        <Hero isLoaded={isLoaded} />
        <About isLoaded={isLoaded} />
        <Benefits isLoaded={isLoaded} />
        <Products isLoaded={isLoaded} />
        <Contact isLoaded={isLoaded} />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

function App() {
  return (
    <LanguageProvider>
      <MenuProvider>
        <AppContent />
      </MenuProvider>
    </LanguageProvider>
  )
}

export default App
