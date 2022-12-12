import React from "react";
import Image from "next/image";
import styles from "../../styles/Footer.module.css";
import facebookicon from "../../public/icons/facebook.png";
import instagramicon from "../../public/icons/instagram.png";
import twittericon from "../../public/icons/twitter.png";
import emailicon from "../../public/icons/email.png";
import callicon from "../../public/icons/call.png";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h1>HEALTH CARE</h1>
        <p>
          Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad
          eos obcaecati tenetur veritatis eveniet distinctio possimus.
        </p>
        <div>
          <Image src={facebookicon} />
          <Image src={instagramicon} />
          <Image src={twittericon} />
        </div>
      </div>
      <div>
        <h2>Department</h2>
        <li>Surgery</li>
        <li>Women's Heath</li>
        <li>Radiology</li>
        <li>Cardiology</li>
        <li>Medicine</li>
      </div>
      <div>
        <h2>Support</h2>
        <li>Terms & Conditions</li>
        <li>Privacy Policy</li>
        <li>Company Support</li>
        <li>FAQ</li>
        <li>Company Licence</li>
      </div>
      <div>
        <h2>Get In Touch</h2>
        <div>
          <li>Support Available for 24/7</li>
          <li><Image src={emailicon}/>support@healthcare.com</li>
        </div>
        <li>Mon to Fri : 08:30-18:00</li>
        <li><Image src={callicon}/>+1 234-5678-901</li>
        <li>Company Licence</li>
      </div>
    </footer>
  );
};

export default Footer;
