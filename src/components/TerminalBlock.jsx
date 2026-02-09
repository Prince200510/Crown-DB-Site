export default function TerminalBlock({ title, lines }) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      {title ? (
        <div className="border-b border-border bg-background px-4 py-2">
          <div className="font-mono text-xs font-semibold text-muted">{title}</div>
        </div>
      ) : null}

      <pre className="m-0 overflow-x-auto bg-terminalBg p-4 font-mono text-sm text-terminalFg">
        {lines.map((line, index) => (
          <div key={index} className="whitespace-pre">
            <span className="text-accent">crownDB&gt; </span>
            <span>{line}</span>
          </div>
        ))}
      </pre>
    </div>
  )
}
