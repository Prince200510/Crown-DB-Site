import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function CodeBlock({ inline, className, children }) {
  if (inline) {
    return (
      <code className="rounded bg-border px-1 py-0.5 font-mono text-[0.95em] text-text">
        {children}
      </code>
    )
  }

  return (
    <pre className="my-4 overflow-x-auto rounded-lg border border-border bg-terminalBg p-4 font-mono text-sm text-terminalFg">
      <code className={className}>{children}</code>
    </pre>
  )
}


export default function Markdown({ content }) {
  return (
    <div className="prose max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-primary prose-code:before:content-none prose-code:after:content-none">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={{ code: CodeBlock }}>
        {content}
      </ReactMarkdown>
    </div>
  )
}
