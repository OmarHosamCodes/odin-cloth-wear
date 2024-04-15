"use client";
import React, { use, useState } from "react";
import styles from "./ImageViewer.module.css";
import Image from "next/image";
import Swipeable, { useSwipeable } from "react-swipeable";

interface ImageViewerProps {
  item: {
    images: string[];
  };
  showDetails?: boolean;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  item,
  showDetails = true,
}) => {
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
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        {item.images.map((image: string, index: number) => (
          <Image
            key={index}
            src={image}
            alt={`Image ${index}`}
            className={styles.image}
            style={{ display: currentPage === index ? "block" : "none" }}
            width={432}
            height={649}
            priority
          />
        ))}
      </div>
      {showDetails && (
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
};

export default ImageViewer;
