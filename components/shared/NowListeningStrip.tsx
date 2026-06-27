import { Music } from "lucide-react";
import { music } from "@/content";
import { EXTERNAL_LINK_PROPS } from "@/lib/links";

export function NowListeningStrip() {
  return (
    <a
      href={music.youtubeMusicUrl}
      {...EXTERNAL_LINK_PROPS}
      aria-label={`Now listening to ${music.title} by ${music.artist} on YouTube Music`}
      className="inline-flex items-center gap-2 rounded-full bg-muted/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
    >
      <Music className="h-3.5 w-3.5 shrink-0" />
      <span className="truncate">
        {music.title} &middot; {music.artist}
      </span>
    </a>
  );
}
