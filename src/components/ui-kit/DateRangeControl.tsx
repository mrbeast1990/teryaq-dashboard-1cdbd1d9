import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";

export function DateRangeControl({
  label = "اليوم",
  onPrev,
  onNext,
}: {
  label?: string;
  onPrev?: () => void;
  onNext?: () => void;
}) {
  return (
    <div className="flex items-center gap-1 rounded-lg border border-border bg-surface p-1">
      <button
        type="button"
        aria-label="السابق"
        onClick={onPrev}
        className="tap grid h-7 w-7 place-items-center rounded-md text-muted-foreground hover:bg-secondary"
      >
        <ChevronRight size={15} />
      </button>
      <span className="flex items-center gap-1.5 px-1.5 text-[12.5px] font-bold text-foreground">
        <CalendarDays size={14} className="text-muted-foreground" />
        {label}
      </span>
      <button
        type="button"
        aria-label="التالي"
        onClick={onNext}
        className="tap grid h-7 w-7 place-items-center rounded-md text-muted-foreground hover:bg-secondary"
      >
        <ChevronLeft size={15} />
      </button>
    </div>
  );
}
