"use client";

import { useEffect, useRef } from "react";
import { Plus } from "#/svgs";
import styles from "./index.module.css";
import Image from "next/image";

interface Props {
  images: string[];
  setImages: (v: string[]) => void;
}
const Photo = ({ images, setImages }: Props) => {
  const previewRef = useRef<HTMLDivElement>(null);

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const fileArray = Array.from(files);
      const newImageUrls = fileArray.map((file) => URL.createObjectURL(file));
      setImages([...images, ...newImageUrls]);
    }
  };

  useEffect(() => {
    if (previewRef.current) {
      previewRef.current.scrollLeft = previewRef.current.scrollWidth;
    }
  }, [images]);

  const handleDelete = (indexToRemove: number) => {
    setImages(images.filter((_, idx) => idx !== indexToRemove));
  };

  return (
    <div id={styles.photo}>
      <div className={styles.imageWrapper}>
        <div className={styles.previewContainer} ref={previewRef}>
          {images.map((src, index) => (
            <div
              key={index}
              className={styles.imageContainer}
              onClick={() => handleDelete(index)}
            >
              <Image
                fill
                style={{ objectFit: "cover" }}
                src={src}
                alt={`preview-${index}`}
                className={styles.previewImage}
              />
            </div>
          ))}
        </div>
        <label htmlFor="fileUpload" className={styles.fileInputContainer}>
          <Plus />
          <input
            type="file"
            id="fileUpload"
            accept="image/*"
            className={styles.fileInput}
            onChange={handleFile}
            multiple
          />
        </label>
      </div>
      <div className={styles.alertText}>* 사진 클릭시 삭제됩니다.</div>
    </div>
  );
};

export default Photo;
