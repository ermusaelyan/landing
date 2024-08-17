import s from "./page.module.scss";
import Header from "@/components/Header/Header.jsx";
import Poster from "@/components/Poster/Poster.jsx";
import Trusted from "@/components/Trusted/Trusted.jsx";
import Features from "@/components/Features/Features.jsx";
import Footer from "@/components/Footer/Footer.jsx";

export default function Home() {
  return (
      <main className={s.main}>
        <Header />
        <div className={s.wrapper}>
            <Poster />
            <Trusted />
            <Features />
        </div>
          <Footer />
      </main>
  );
}
