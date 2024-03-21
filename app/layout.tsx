import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap", // Improve font loading performance
});

export const metadata: Metadata = {
  title: "Harsh | Portfolio",
  description: "Harsh's Portfolio",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${poppins.className} bg-neutral-950 text-white min-h-screen flex flex-col`}
      >
        <main className="flex-grow">{children}</main>
        <footer className="bg-neutral-900 py-4 text-center">
          <p>&copy; {new Date().getFullYear()} Harsh. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
