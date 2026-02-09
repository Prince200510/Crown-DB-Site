import { useEffect, useMemo, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Landing from './pages/Landing.jsx'
import Docs from './pages/Docs.jsx'
import { applyTheme, getInitialTheme } from './lib/theme.js'

export default function App() {
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const initial = getInitialTheme()
    setTheme(initial)
    applyTheme(initial)
  }, [])

  const onToggleTheme = useMemo(
    () => () => {
      const next = theme === 'dark' ? 'light' : 'dark'
      setTheme(next)
      applyTheme(next)
    },
    [theme],
  )

  return (
    <BrowserRouter>
      <div className="min-h-full bg-background text-text">
        <Header theme={theme} onToggleTheme={onToggleTheme} />

        <main className="mx-auto max-w-6xl px-4 py-10">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/docs" element={<Navigate to="/docs/overview" replace />} />
            <Route path="/docs/:slug" element={<Docs />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <footer className="border-t border-border bg-background">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted">
            <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
              <div>
                Author: <span className="font-medium text-text">Prince Maurya</span>
              </div>
              <div>
                Email:{' '}
                <a className="font-medium text-primary hover:underline" href="mailto:princemaurya8879@gmail.com">
                  princemaurya8879@gmail.com
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}
