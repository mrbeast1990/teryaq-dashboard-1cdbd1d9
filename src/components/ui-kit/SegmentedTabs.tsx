export function SegmentedTabs({
  tabs,
  value,
  onChange,
}: {
  tabs: { id: string; label: string }[];
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <div className="flex gap-1 rounded-lg border border-border bg-surface-muted p-1">
      {tabs.map((tab) => {
        const active = tab.id === value;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={[
              "tap flex-1 rounded-md px-2 py-1.5 text-[12.5px] font-bold",
              active
                ? "bg-surface text-foreground shadow-[var(--shadow-card)]"
                : "text-muted-foreground",
            ].join(" ")}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
