export default function ThemeToggle({ theme, onToggle }) {
  const label = theme === 'dark' ? 'Dark' : 'Light'

  return (
    <button
      type="button"
      onClick={onToggle}
      className="rounded-md border border-border bg-background px-3 py-2 text-sm text-text hover:border-primary"
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      Theme: <span className="font-medium">{label}</span>
    </button>
  )
}
