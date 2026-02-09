import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

const navLinkClass = ({ isActive }) =>
  [
    'rounded-md px-3 py-2 text-sm font-medium',
    isActive ? 'bg-primary text-background' : 'text-text hover:bg-border',
  ].join(' ')

export default function Header({ theme, onToggleTheme }) {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="font-mono text-lg font-semibold text-text">
            CrownDB
          </Link>
          <span className="hidden rounded border border-border px-2 py-1 font-mono text-xs text-muted sm:inline">
            C++17 file-based DB
          </span>
        </div>

        <nav className="flex items-center gap-2">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/docs/overview" className={navLinkClass}>
            Docs
          </NavLink>
          <a href="/#download" className="rounded-md px-3 py-2 text-sm font-medium text-text hover:bg-border">
            Download
          </a>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </nav>
      </div>
    </header>
  )
}
