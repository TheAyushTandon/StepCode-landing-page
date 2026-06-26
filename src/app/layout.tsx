import type { Metadata } from "next";
import { Geist, Geist_Mono, Dela_Gothic_One } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const delaGothicOne = Dela_Gothic_One({
  weight: "400",
  variable: "--font-dela",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "StepCode | Learn. Build. Get Hired.",
  description: "Stop binging tutorials. Build industry-ready projects, follow structured roadmaps, and get mentorship to launch your tech career.",
  openGraph: {
    title: "StepCode | Learn. Build. Get Hired.",
    description: "Stop binging tutorials. Build industry-ready projects, follow structured roadmaps, and get mentorship to launch your tech career.",
    url: "https://stepcode.dev",
    siteName: "StepCode",
    locale: "en_US",
    type: "website",
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
      className={`${geistSans.variable} ${geistMono.variable} ${delaGothicOne.variable} dark`}
    >
      <body className="bg-background-primary text-text-primary antialiased min-h-screen selection:bg-primary-red selection:text-white overflow-x-hidden">
        <SmoothScroll>
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
