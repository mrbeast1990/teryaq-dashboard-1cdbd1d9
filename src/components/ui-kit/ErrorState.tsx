import { AlertTriangle } from "lucide-react";

export function ErrorState({
  title = "تعذر تحميل البيانات",
  description = "تحقق من الاتصال بقاعدة البيانات ثم أعد المحاولة.",
  onRetry,
}: {
  title?: string;
  description?: string;
  onRetry?: () => void;
}) {
  return (
    <div className="card-surface flex flex-col items-center gap-2 px-4 py-7 text-center">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-destructive-soft text-destructive">
        <AlertTriangle size={18} />
      </span>
      <p className="text-[14px] font-bold text-foreground">{title}</p>
      <p className="max-w-xs text-[12px] font-medium text-muted-foreground">{description}</p>
      {onRetry ? (
        <button
          type="button"
          onClick={onRetry}
          className="tap mt-1 rounded-lg bg-primary px-3 py-1.5 text-[12.5px] font-bold text-primary-foreground"
        >
          إعادة المحاولة
        </button>
      ) : null}
    </div>
  );
}
