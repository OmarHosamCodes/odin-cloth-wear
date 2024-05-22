import React, { useEffect, useState } from "react";

import styles from "./ContactInfo.module.css"; // Import your CSS file for styling
import Link from "next/link";
import { Social } from "../assets/model";
import Image from "next/image";
import OHLogo from "@/public/oh-logo.ico";

function ContactInfo() {
  return (
    <div className={styles.ContactInfoContainer}>
      <div className={styles.ContactInfoContent}>
        <h2 className={styles.ContactInfoTitle}>Contact</h2>
        <div className={styles.ContactLinks}>
          <Link href="/info/about">We are ODIN</Link>
          <Link href="/info/delivery">Delivery and returns policy</Link>
          <Link href="/info/privacy">Privacy policy</Link>
          <Link href="/info/terms">Terms and conditions</Link>
        </div>
        <div className={styles.SocialMediaSection}>
          <div className={styles.SocialMediaTitle}>Social Media</div>

          <div className={styles.SocialMediaicons}>
            {Social.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={50}
                  height={50}
                  className={styles.SocialMediaicon}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <a
        className={styles.madeBy}
        href="https://omarhosamcodes.com"
        target="_blank"
        rel="noreferrer"
      >
        <h6>Made By</h6>
        <Image src={OHLogo} alt={"Omar Hosam Codes"} width={20} height={20} />
      </a>
    </div>
  );
}

export default ContactInfo;
