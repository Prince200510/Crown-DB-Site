import { NavLink, Navigate, useParams } from 'react-router-dom'
import Markdown from '../components/Markdown.jsx'
import { DOCS, getDocBySlug } from '../docs/docsIndex.js'

const navClass = ({ isActive }) =>
  [
    'block rounded-md px-3 py-2 text-sm',
    isActive ? 'bg-primary text-background' : 'text-text hover:bg-border',
  ].join(' ')

export default function Docs() {
  const { slug } = useParams()
  const doc = getDocBySlug(slug)

  if (!doc) return <Navigate to="/docs/overview" replace />

  return (
    <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
      <aside className="h-fit rounded-lg border border-border bg-background p-3 lg:sticky lg:top-6">
        <div className="px-3 pb-2 pt-1 font-mono text-xs font-semibold text-muted">Docs</div>
        <nav className="space-y-1">
          {DOCS.map((item) => (
            <NavLink key={item.slug} to={`/docs/${item.slug}`} className={navClass}>
              {item.title}
            </NavLink>
          ))}
        </nav>
      </aside>

      <section className="min-w-0 rounded-lg border border-border bg-background p-6">
        <h1 className="mb-4 text-2xl font-semibold">{doc.title}</h1>
        <Markdown content={doc.content} />

        <div className="mt-8 border-t border-border pt-4 text-xs text-muted">
          Development by Database: <span className="font-medium text-text">Prince Maurya</span>
        </div>
      </section>
    </div>
  )
}
