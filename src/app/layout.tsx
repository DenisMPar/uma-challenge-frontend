import { Header } from "@/components/header";
import type { Metadata } from "next";
import { Garamond } from "../ui/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Uma Challenge",
  description: "Nasa Apod calendar",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Garamond.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
