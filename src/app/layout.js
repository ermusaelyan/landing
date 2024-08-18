import { Montserrat } from "next/font/google";
import "./main.scss";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Sound Wave Generator",
  description: "Add sound waves to your music videos with Renderforest's free Sound Wave Generator. Create stunning animated sound waves instantly.",
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