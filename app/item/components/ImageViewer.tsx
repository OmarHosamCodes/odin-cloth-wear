"use client";
import React, { use, useState } from "react";
import styles from "./ImageViewer.module.css";
import Image from "next/image";
import { useSwipeable } from "react-swipeable";
import { useRouter } from "next/navigation";

interface ImageViewerProps {
  item: {
    images: string[];
  };
  isSwipable?: boolean;
  id: string;
  disableNavigation?: boolean;
  width?: string;
}

export default function ImageViewer({
  item,
  isSwipable,
  id,
  disableNavigation = false,
  width = "100%",
}: ImageViewerProps) {
  const router = useRouter();

  const [currentPage, setCurrentPage] = useState<number>(0);

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipeLeft(),
    onSwipedRight: () => handleSwipeRight(),
  });

  const handlePageChange = (index: number) => {
    setCurrentPage(index);
  };

  const handleSwipeLeft = () => {
    setCurrentPage((prevPage) =>
      prevPage === item.images.length - 1 ? 0 : prevPage + 1
    );
  };

  const handleSwipeRight = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? item.images.length - 1 : prevPage - 1
    );
  };

  return (
    <div {...handlers} className={styles.container} style={{ width: width }}>
      {item.images.map((image: string, index: number) => (
        <Image
          key={index}
          src={image}
          alt={`Image ${index}`}
          className={styles.image}
          style={{
            display: currentPage === index ? "block" : "none",
          }}
          width={432}
          height={649}
          objectFit="cover"
          quality={90}
          // fill
          priority
          onClick={() => {
            if (disableNavigation) return;
            router.push(`/item/${id}`);
          }}
        />
      ))}
      {isSwipable && (
        <div className={styles.detailsContainer}>
          {item.images.map((_, index: number) => (
            <span
              key={index}
              onClick={() => handlePageChange(index)}
              className={`${styles.dot} ${
                currentPage === index ? styles.activeDot : ""
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
