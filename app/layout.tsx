import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Web Content Optimizer",
  description: "Make your images & text ready to share on the web!",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-zinc-200">
        <div className="mx-auto flex min-h-dvh w-full max-w-3xl flex-col bg-white">
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
