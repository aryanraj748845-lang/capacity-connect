import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";
const f = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font" });
export const metadata = { title: "CAPACITY CONNECT" };
export default function Root({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${f.variable} font-sans`}>{children}</body></html>;
}
