import { SlidersHorizontal } from "lucide-react";
import type { ReactNode } from "react";

export function FilterBar({
  chips,
  active,
  onSelect,
  trailing,
}: {
  chips: string[];
  active?: string;
  onSelect?: (chip: string) => void;
  trailing?: ReactNode;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="-mx-0.5 flex flex-1 gap-1.5 overflow-x-auto px-0.5 pb-0.5 [scrollbar-width:none]">
        {chips.map((chip) => (
          <button
            key={chip}
            type="button"
            onClick={() => onSelect?.(chip)}
            className={[
              "tap shrink-0 rounded-full border px-2.5 py-1 text-[12px] font-semibold",
              chip === active
                ? "border-primary/30 bg-primary-soft text-primary"
                : "border-border bg-surface text-muted-foreground",
            ].join(" ")}
          >
            {chip}
          </button>
        ))}
      </div>
      {trailing ?? (
        <button
          type="button"
          aria-label="خيارات التصفية"
          className="tap grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-border bg-surface text-muted-foreground"
        >
          <SlidersHorizontal size={15} />
        </button>
      )}
    </div>
  );
}
