import React from "react";
import Image from "next/image";
import styles from "../../styles/Footer.module.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerLeft}>
        <div>
          <h1>HEALTH CARE</h1>
          <p>
            Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad
            eos obcaecati tenetur veritatis eveniet distinctio possimus.
          </p>
          <div>
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <TwitterIcon />
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
            <div className={styles.footerLeft__support}>
              <EmailIcon />
              <span>support@healthcare.com</span>
            </div>
          </div>
          <li>Mon to Fri : 08:30-18:00</li>
          <div className={styles.footerLeft__support}>
            <PhoneIcon />
            <span>+1 234-5678-901</span>
          </div>
          <li>Company Licence</li>
        </div>
      </div>
      <p>Copyright© 2022,Designed & Developed by Top IT Ltd</p>
    </footer>
  );
};

export default Footer;
