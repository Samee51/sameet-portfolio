// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SpaceBackground from "@/components/UI/SpaceBackground";
import CircularNav from "@/components/Layout/CircularNav";
import AnimatedLayout from "@/components/Layout/AnimatedLayout";

export const metadata: Metadata = {
  title: "Sameet Sikandar Multani | Frontend Developer",
  description: "Modern portfolio showcasing projects and experience",
  // Add more SEO metadata
  keywords: "frontend developer, react, nextjs, portfolio",
  authors: [{ name: "Sameet Sikandar Multani" }],
  openGraph: {
    title: "Sameet Sikandar Multani | Frontend Developer",
    description: "Modern portfolio showcasing projects and experience",
    type: "website",
  },
   icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased relative">
        <SpaceBackground />
        <AnimatedLayout nav={<CircularNav />}>
          {children}
        </AnimatedLayout>
      </body>
    </html>
  );
}