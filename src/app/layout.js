import NavBar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";

import constants from "@/utils/constants";
import GameContextProvider from "@/providers/GameContextProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: constants.application.title,
  description: constants.application.meta.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <ThemeContextProvider>
          <ThemeProvider>

            <GameContextProvider>

              <div className="container">
                <div className="wrapper">
                  <NavBar />
                  {children}
                  {/* <Footer /> */}
                </div>
              </div>

            </GameContextProvider>

          </ThemeProvider>
        </ThemeContextProvider>

      </body>
    </html>
  );
}
