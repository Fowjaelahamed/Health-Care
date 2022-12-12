import React from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.css";
import email from "../../public/icons/email.png"
import location from "../../public/icons/location.png"
const Topbar = () => {
  return (
    <div className={styles.topbar}>
      <div>
        <Image src={email}/>
        <p>support@healthcare.com</p>
      </div>
      <div>
        <Image src={location}/>
        <p>1/4, Shat Moshjid Road, Block-E, Mohammadpur, Dhaka, BD</p>
      </div>
      <div>
        <p>Call Now : (+88) 01718-925964</p>
      </div>
    </div>
  );
};

export default Topbar;
