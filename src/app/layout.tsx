import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/assets/css/blk-design-system-react.min.css";
import "@/assets/css/nucleo-icons.css";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fathur Rizky Assani | IT Professional & Developer",
  description: "Portfolio of Fathur Rizky Assani. Junior Web Developer skilled in Frontend, Backend, Java, Python, PHP, and Game Development.",
  openGraph: {
    title: "Fathur Rizky Assani | Portfolio",
    description: "Explore the technical experience and projects of Fathur Rizky Assani, IT Professional & Software Engineer.",
    type: "website",
    siteName: "Fathur Rizky Assani Portfolio"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className={`${geistSans.variable} ${geistMono.variable} index-page`} style={{ overflowX: 'hidden' }}>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
