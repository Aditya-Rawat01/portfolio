/** Owner profile + hero copy (Reqs 3.1, 3.2, 3.3, 7.1) */
export interface ProfileInfo {
  name: string;
  role: string;
  intro: string;
  email: string;
  status: {
    label: string;
    tone: "available" | "busy" | "building";
  };
}

/** Experience timeline entry (Req 4) */
export interface ExperienceRole {
  title: string;
  organization: string;
  startDate: string;
  endDate: string | null;
  current: boolean;
  description?: string;
}

/** Technology marquee entry (Req 5) */
export interface TechEntry {
  name: string;
  image: string;
  row?: 1 | 2 | 3;
}

/** Featured project (Req 6) */
export interface ProjectRecord {
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  repoUrl: string;
  date?: string;
  metric?: string;
  tag?: string;
}

/** Blog / writing post (Req 14) */
export interface BlogPostRecord {
  title: string;
  postUrl: string;
  date?: string;
  tag?: string;
  readTime?: string;
  excerpt?: string;
}

/** Social profile (Req 7) */
export interface SocialProfile {
  network: "github" | "linkedin" | "twitter";
  url: string;
  label: string;
}

/** Curated "currently listening" status (Req 15) */
export interface MusicStatusRecord {
  title: string;
  artist: string;
  youtubeMusicUrl: string;
  placement: "hero" | "contact";
}
