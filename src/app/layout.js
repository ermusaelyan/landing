import { Montserrat } from "next/font/google";
import "./main.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Sound Wave Generator",
  description: "Renderforest AI Video Generator eliminates the technical complexities, empowering anyone to create professional-looking videos that resonate with their audience. So, skip the studio, unleash your creativity, and let AI transform your ideas into stunning video reality!",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <body className={montserrat.className}>{children}</body>
      </html>
  );
}