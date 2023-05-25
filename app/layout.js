import "./globals.css";
import Nav from "@components/Nav";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Manasa Academy",
  description: "Life Coaching by Maazza Al Magthob",
};

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}
