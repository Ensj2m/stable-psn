import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdullah's Services",
  description: "PSN Avatar Tool",
  openGraph: {
    title: "Abdullah's Services",
    description: "Purchase PSN avatars without needing to use the console",
    images: "/logo.svg",
  },
  other: {
    "color-theme": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} debug-screen(s) bg-black`}>
        {children}
      </body>
    </html>
  );
}
