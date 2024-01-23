import { Inter, Nunito } from "next/font/google";
import "./globals.css";
import * as Layout from "../layout/page";
import { FloatButton } from "@/components/page";
const inter = Inter({ subsets: ["latin"] });
const nunito = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Socialense - monitoring website",
  description: "Get everything from social medias",
};

export default function RootLayout({ children }) {
  // const auth = localStorage.getItem("auth")
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Layout.Navbar />
        <div className="flex overflow-hidden bg-white pt-16">

          <div
            id="main-content"
            className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
          >
            {children}
            {/* <div>
              <Layout.Footer />
            </div> */}
          </div>
          <div>
            <FloatButton />
          </div>
        </div>

      </body>
    </html>
  );
}
