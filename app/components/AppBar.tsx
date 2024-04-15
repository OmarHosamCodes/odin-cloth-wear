"use client";
import { FiAlignLeft, FiShoppingCart } from "react-icons/fi";
import styles from "./AppBar.module.css";
import Link from "next/link";

export default function Appbar({ onClick }: { onClick: () => void }) {
  // eva.replace();

  return (
    <div className={styles.appbarContainer}>
      <header className={styles.appbarHeader}>
        <FiAlignLeft
          size={20}
          onClick={onClick}
          cursor={"pointer"}
        ></FiAlignLeft>
        <h1>Appbar</h1>
        <Link href={"/cart"}>
          <FiShoppingCart size={20} />
        </Link>
      </header>
      <div className={styles.appbarSearchContainer}>
        <input
          type="text"
          placeholder="Search"
          className={styles.appbarSearch}
        />
      </div>
    </div>
  );
}
