import Head from "next/head";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Topbar from "../components/Header/Topbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Health Care</title>
        <meta name="description" content="a Health care site" />
        <link rel="canonical" href={process.env.HOSTURL} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />
      <Header />

      <Footer />
    </div>
  );
}
