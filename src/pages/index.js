import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import PerfectScrollbar from "react-perfect-scrollbar";
import { useEffect } from "react";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="manifest" href="/manifest.json"></link>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>

      <main className={styles.main}>
        <h1>Hello World!</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
