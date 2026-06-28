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
        "Full Stack Developer focused on scalable backend systems, distributed architectures, and AI-powered applications.",

    openGraph: {
        title: "Aditya Rawat - Builder",
        description:
            "Full Stack Developer focused on scalable backend systems, distributed architectures, and AI-powered applications.",
        url: "https://ardev.in",
        siteName: "Aditya Rawat",
        images: [
            {
                url: "/og.png",
                width: 1200,
                height: 630,
                alt: "Aditya Rawat Portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },

    twitter: {
        card: "summary_large_image",
        title: "Aditya Rawat - Builder",
        description:
            "Full Stack Developer focused on scalable backend systems, distributed architectures, and AI-powered applications.",
        images: ["/og.png"],
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
            <body
                className={`${quicksand.variable} antialiased bg-background text-on-background`}
            >
                <ThemeProvider>{children}</ThemeProvider>
                <Analytics />
            </body>
        </html>
    );
}
