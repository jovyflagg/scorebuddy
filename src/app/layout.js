import NavBar from "@/components/navbar/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import CartContext from "../context/CartContext"
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";
import constants from "@/utils/constants";

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
         

              <div className="container">
                <div className="wrapper">
                  <NavBar />
                  {children}
                  {/* <Footer /> */}
                </div>
              </div>

           
            </ThemeProvider>
          </ThemeContextProvider>

      </body>
    </html>
  );
}
