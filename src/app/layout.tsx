import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const firaCode = Fira_Code({
  variable: "--font-fira-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mindivotech.com"),
  title: {
    default: "Mindivo — Custom Software Development Company",
    template: "%s | Mindivo",
  },
  description:
    "Mindivo builds custom web apps, mobile apps, and AI-powered software for businesses. From CRM and inventory systems to healthcare and HR tech — we ship production-ready products fast.",
  keywords: [
    "custom software development",
    "web app development",
    "mobile app development",
    "AI software company",
    "CRM development",
    "inventory management software",
    "healthcare software",
    "HR tech software",
    "SaaS development",
    "business software solutions",
    "Next.js development agency",
    "React development company",
    "Mindivo",
  ],
  authors: [{ name: "Mindivo", url: "https://mindivotech.com" }],
  creator: "Mindivo",
  publisher: "Mindivo",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mindivotech.com",
    siteName: "Mindivo",
    title: "Mindivo — Custom Software Development Company",
    description:
      "We build custom web apps, mobile apps, and AI-powered software that ships fast and scales. From idea to production — Mindivo delivers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mindivo — Custom Software Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mindivo — Custom Software Development Company",
    description:
      "We build custom web apps, mobile apps, and AI-powered software that ships fast and scales.",
    images: ["/og-image.png"],
    creator: "@mindivo",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "32x32" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: "https://mindivotech.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${firaCode.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
