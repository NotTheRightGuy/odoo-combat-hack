import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JCstack to the Moon 🚀",
  description: "Nextjs Starter pack with batteries included",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider>
      <html lang="en">
        <body className={inter.className}>
          <main>{children}</main>
          <Toaster richColors />
        </body>
      </html>
    </Provider>
  );
}
