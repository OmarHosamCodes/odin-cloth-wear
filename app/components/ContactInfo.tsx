import React, { useEffect, useState } from "react";

import styles from "./ContactInfo.module.css"; // Import your CSS file for styling
import Link from "next/link";
import { Assets, Social } from "../assets/model";
import AssetsRepository from "../assets/repository";
import Image from "next/image";
import Divider from "./Divider";

function ContactInfo() {
  return (
    <div className={styles.ContactInfoContainer}>
      <div className={styles.ContactInfoContent}>
        <h2 className={styles.ContactInfoTitle}>Contact</h2>
        <div className={styles.ContactLinks}>
          <Link href="/contact/about-us">We are ODIN</Link>
          <Link href="/contact/delivery-policy">
            Delivery and returns policy
          </Link>
          <Link href="/contact/privacy-policy">Privacy policy</Link>
          <Link href="/contact/terms-and-conditions">Terms and conditions</Link>
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
                {/* Replace with your social media icon component */}
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={50}
                  height={50}
                  color="#f0f0f0"
                  className={styles.SocialMediaicon}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
