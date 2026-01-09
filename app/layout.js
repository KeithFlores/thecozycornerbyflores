import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Cozy Corner",
  description: "A cozy online bookstore with hand-pick recommendations for every reader",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <header className="sticky top-0 z-50 border-b border-stone-200/50 bg-white/70 backdrop-blur-md">
          <div className="mx-auto max-w-6xl flex justify-between items-center p-5">
            <h1 className="text-xl font-bold tracking-tight italic">The Cozy Corner</h1>
            <nav className="flex gap-6 text-sm font-medium">
              <Link href="/" className="hover:text-orange-700 transition-colors">Home</Link>
              <Link href="/about" className="hover:text-orange-700 transition-colors">About</Link>
              <Link href="/books" className="hover:text-orange-700 transition-colors">Books</Link>
              <Link href="/contact" className="hover:text-orange-700 transition-colors">Contact</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-6xl p-8 min-h-[80vh]">{children}</main>
        <footer className="border-t border-stone-200 mt-20 py-10 text-center text-sm text-stone-500">
          <p>© 2026 The Cozy Corner</p>
        </footer>
      </body>
    </html>
  );
}
