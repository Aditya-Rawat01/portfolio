import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const themeScript = `(function(){try{var t=localStorage.getItem('theme');document.documentElement.classList.toggle('dark',t==='dark');}catch(e){}})();`;

export const metadata: Metadata = {
  metadataBase: new URL("https://ardev.in"),
  title: "Aditya Rawat - Builder",
  description:
    "Full Stack Developer focused on scalable backend systems, distributed architectures, and AI-powered applications. Experienced with Next.js, FastAPI, Node.js, Docker, and cloud services.",
  openGraph: {
    title: "Aditya Rawat - Builder",
    description:
      "Full Stack Developer focused on scalable backend systems, distributed architectures, and AI-powered applications. Experienced with Next.js, FastAPI, Node.js, Docker, and cloud services.",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${quicksand.variable} antialiased bg-background text-on-background`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
