import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ConvexClerkProvider from "@/components/providers/ConvexClerkProvider";
import Navbar from "@/components/Navbar";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
        antialiased`}>
        <SignedIn>
          <div className="min-h-screen">
            <Navbar />
            <main className="px-4 sm:px-6 lg:px-8">{children}</main>
          </div>
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn/>
        </SignedOut>
      </body>
    </html>
    </ConvexClerkProvider>
  );
}
