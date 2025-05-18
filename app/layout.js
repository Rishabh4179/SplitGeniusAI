import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";   
import { ClerkProvider } from "@clerk/nextjs";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SplitGenius AI",
  description: "AI-powered expense-sharing platform that simplifies group payments and ensures fair, automated, and hassle-free settlements",
  icons: {
    icon: [
      { url: "/logos/logo-s.png", sizes: "32x32", type: "image/png" },
      { url: "/logos/logo-s.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: "/logos/logo-s.png",
    apple: "/logos/logo-s.png"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
      <ClerkProvider>
        <ConvexClientProvider>
          <Header />

          <main className="min-h-screen">
            <Toaster richcolors/>
            {children}
            
            </main>
        </ConvexClientProvider>
      </ClerkProvider>
      </body>
    </html>
  );
}
