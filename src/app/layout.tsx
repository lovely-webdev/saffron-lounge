import type { Metadata } from "next";
import { Rubik, Oxygen, Playfair_Display } from "next/font/google";
import { etarBellotaFont } from "./etarBellotaFont";
import { etarFont } from "./etarFont";
import { etarMenuFont } from "./etarMenuFont";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";


const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const oxygen = Oxygen({
  variable: "--font-oxygen",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "The Saffron Lounge | Authentic Indian Cuisine",
    template: "%s | The Saffron Lounge",
  },
  description: "Experience the finest Indian cuisine at The Saffron Lounge. Explore our menu, order online, and discover our story.",
  keywords: [
    "Indian restaurant",
    "Saffron Lounge",
    "authentic cuisine",
    "order online",
    "best Indian food",
    "restaurant near me"
  ],
  openGraph: {
    title: "The Saffron Lounge | Authentic Indian Cuisine",
    description: "Experience the finest Indian cuisine at The Saffron Lounge. Explore our menu, order online, and discover our story.",
    url: "https://thesaffronlounge.com/",
    siteName: "The Saffron Lounge",
    type: "website",
    images: [
      {
        url: "/assets/img/logo-white.webp",
        width: 1200,
        height: 630,
        alt: "The Saffron Lounge Logo"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "The Saffron Lounge | Authentic Indian Cuisine",
    description: "Experience the finest Indian cuisine at The Saffron Lounge. Explore our menu, order online, and discover our story.",
    images: ["/assets/img/logo-white.webp"]
  },
  metadataBase: new URL("https://thesaffronlounge.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${rubik.variable} ${oxygen.variable} ${etarBellotaFont.variable} ${etarFont.variable} ${etarMenuFont.variable} ${playfair.variable} antialiased`}
        style={{ fontFamily: 'var(--font-rubik), var(--font-oxygen), var(--font-etar-bellota), sans-serif' }}
      >
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var isAdmin = location.pathname.startsWith('/admin');if(isAdmin){document.documentElement.classList.remove('dark');localStorage.setItem('theme','light');return;}var t=localStorage.getItem('theme');var d=t? t==='dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.classList.toggle('dark', d);}catch(e){}})();`
          }}
        />
        {/* Only show Header and Footer if not in /admin route */}
        {/* This check is done at runtime, so it must be client-side */}
        {/* Use a client-side check to conditionally render Header/Footer based on the route */}
        {/* Use a CSS-based approach to hide Header/Footer in /admin routes to avoid hydration mismatch */}
        <div suppressHydrationWarning id="__root_layout">
          <div id="__main_header"><Header /></div>
          {children}
          <div id="__main_footer"><Footer /></div>
        </div>
        {/* Hide header/footer in admin area using a client-side script (also hides via CSS for a flicker-free experience) */}
        <style>{`
          body.admin #__main_header, body.admin #__main_footer { display: none !important; }
        `}</style>
        <script
          dangerouslySetInnerHTML={{
            __html: `if (location.pathname.startsWith('/admin')) { document.body.classList.add('admin'); }`
          }}
        />
      </body>
    </html>
  );
}
