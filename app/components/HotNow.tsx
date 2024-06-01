"use client";
import Image from "next/image";
import Item from "../item/model";
import Link from "next/link";
import styles from "./HotNow.module.css";
import { useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
export function HotNow({ item }: { item: Item }) {
  return (
    <a href={`/item/${item.id}`}>
      <Image
        src={item.images[0]}
        alt={item.name}
        width={200}
        height={200}
        className={styles.hotNow}
      />
    </a>
  );
}

export function HotNowShowcase({ items }: { items: Item[] }) {
  const containerRef = useRef<HTMLDivElement>(null);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (isRight: boolean) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollAmount = isRight ? 50 : -50;
      container.scrollTo({
        left: scrollPosition + scrollAmount,
        behavior: "smooth",
      });
      setScrollPosition(scrollPosition + scrollAmount);
    }
  };

  return (
    <div className={styles.container}>
      <div ref={containerRef} className={styles.contentBox}>
        {items.map((item, index) => (
          <HotNow key={index} item={item} />
        ))}
      </div>
      <div className={styles.actionButtons}>
        <button
          className={styles.actionButton}
          onClick={() => handleScroll(false)}
        >
          <FiArrowLeft />
        </button>
        <button
          className={styles.actionButton}
          onClick={() => handleScroll(true)}
        >
          <FiArrowRight />
        </button>
      </div>
    </div>
  );
}
