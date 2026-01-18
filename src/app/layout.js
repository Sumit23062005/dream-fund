import "./globals.css";

//Internal imports
import { Footer, NavBar } from "../Components";
import {DreamFundProvider} from "../Context/DreamFund" ;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DreamFundProvider>
        <NavBar />
        {children} 
        <Footer />
        </DreamFundProvider>
      </body>
    </html>
  );
}
