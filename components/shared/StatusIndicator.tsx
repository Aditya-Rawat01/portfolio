import type { ProfileInfo } from "@/types/content";

const dotColor: Record<ProfileInfo["status"]["tone"], string> = {
  available: "bg-green-500",
  busy: "bg-orange-500",
  building: "bg-blue-500",
};

interface StatusIndicatorProps {
  status: ProfileInfo["status"];
}

export function StatusIndicator({ status }: StatusIndicatorProps) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-foreground/10 bg-foreground/5 px-3 py-1 text-sm">
      <span
        className={`h-2 w-2 rounded-full ${dotColor[status.tone]}`}
        aria-hidden="true"
      />
      {status.label}
    </span>
  );
}
