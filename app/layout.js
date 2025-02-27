import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Little Lemon App",
  description: "Little Lemon App is a restourant app",
  openGraph: {
    type: "Little Lemon",
    locale: "en_US",
    url: "https://example.com",
    site_name: "Little Lemon App",
    images: [
      {
        url: "/bruchetta.svg",
        width: 850,
        height: 650,
        alt: "Little Lemon App",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
