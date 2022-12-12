import React from "react";
import Link from "next/link";
import styles from "../../styles/Header.module.css";
const Header = () => {
  return (
    <header className={styles.header}>
      <h1><Link href="/">HEALTH CARE</Link></h1>
      <div className={styles.headerRight}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Services</Link>
        </li>
        <li>
          <Link href="/">Department</Link>
        </li>
        <li>
          <Link href="/">Doctors</Link>
        </li>
        <li>
          <Link href="/">Blogs</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </div>
    </header>
  );
};

export default Header;
