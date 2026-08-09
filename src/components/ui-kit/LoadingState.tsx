export function LoadingState({ rows = 4 }: { rows?: number }) {
  return (
    <div className="flex flex-col gap-2" aria-busy="true" aria-live="polite">
      {Array.from({ length: rows }).map((_, index) => (
        <div key={index} className="card-surface flex items-center gap-3 px-3 py-3">
          <span className="h-9 w-9 shrink-0 animate-pulse rounded-lg bg-secondary" />
          <span className="flex min-w-0 flex-1 flex-col gap-1.5">
            <span className="h-3 w-1/3 animate-pulse rounded bg-secondary" />
            <span className="h-2.5 w-1/2 animate-pulse rounded bg-secondary" />
          </span>
        </div>
      ))}
    </div>
  );
}
