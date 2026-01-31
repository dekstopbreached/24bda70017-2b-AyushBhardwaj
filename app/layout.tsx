import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "2b Project - Product Filtering",
  description: "Filterable and sortable product list",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
