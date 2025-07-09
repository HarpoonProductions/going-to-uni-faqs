import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Going To Uni FAQs",
  description: "Quick answers to your university and college questions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 font-sans">
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}