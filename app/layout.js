import 'bootstrap/dist/css/bootstrap.min.css';
import { Inter } from "next/font/google";
import "./globals.css";
import BootstrapClient from "@/components/BootstrapClient";
(
  <div>BootstrapClient</div>
)
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RadiusTMS",
  description: "new generation transport management solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
  integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
  crossorigin="anonymous"
/> */}
      <body className={inter.className}>
        {children}
        <BootstrapClient />
        </body>
    </html>
  );
}
