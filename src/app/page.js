// import Image from "next/image";
import s from "./page.module.scss";
import Header from "@/components/Header/Header.jsx";

export default function Home() {
  return (
    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div>
      <main className={s.main}>
        <Header />
        <div className={s.test}></div>
      </main>
  );
}
