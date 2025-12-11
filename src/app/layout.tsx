import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Audina & Yusron - Wedding Invitation",
  description: "We are getting married! Join us to celebrate our special day.",
   icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
  openGraph: {
    title: "Audina & Yusron - Wedding Invitation",
    description: "We are getting married! Join us to celebrate our special day.",
    images: [
      {
        url: "https://wedding-audina-yusron.vercel.app/images/v2_IMG_4421.jpg",
        width: 1200,
        height: 630,
        alt: "Audina & Yusron Wedding",
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Audina & Yusron - Wedding Invitation",
    description: "We are getting married! Join us to celebrate our special day.",
    images: ["https://wedding-audina-yusron.vercel.app/images/v2_IMG_4421.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
