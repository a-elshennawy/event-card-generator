import type { Metadata } from "next";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeadBar from "@/public/Components/HeadBar/HeadBar";

export const metadata: Metadata = {
  title: "Events Cards Generator",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <HeadBar />
        {children}
      </body>
    </html>
  );
}
