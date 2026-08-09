import { Search } from "lucide-react";

export function SearchInput({
  placeholder = "بحث…",
  value,
  onChange,
}: {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}) {
  return (
    <div className="relative">
      <Search
        size={16}
        className="pointer-events-none absolute end-3 top-1/2 -translate-y-1/2 text-muted-foreground"
      />
      <input
        type="search"
        placeholder={placeholder}
        value={value ?? ""}
        onChange={(event) => onChange?.(event.target.value)}
        className="h-10 w-full rounded-lg border border-input bg-surface pe-9 ps-3 text-[13.5px] font-medium text-foreground outline-none placeholder:text-muted-foreground focus:border-ring focus:ring-2 focus:ring-ring/20"
      />
    </div>
  );
}
