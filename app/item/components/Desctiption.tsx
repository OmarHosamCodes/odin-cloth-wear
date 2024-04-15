"use client";
import Divider from "@/app/components/Divider";
import Item from "../model";
import styles from "./Description.module.css";

export default function Description({ item }: { item: Item }) {
  const descriptionSections = item.description.split("/");
  return (
    <div>
      {descriptionSections.map((section, index) => (
        <div key={index}>
          <h2 className={styles.description}>{section}</h2>
        </div>
      ))}
    </div>
  );
}
