import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "./card.module.scss"; // Import the custom CSS module

export default function Card({ product }) {
    const { name, description, images, price } = product;

    return (
        <div className={`${styles.card} hover:${styles.shadow} duration-100`}>
            <Carousel className={styles.carousel} autoPlay showThumbs={false}>
                {images.map((image, index) => (
                    <div key={index} className={styles.carouselItem}>
                        <Image
                            src={image}
                            alt={`Image ${index + 1}`}
                            width={100}
                            height={100}
                        />
                    </div>
                ))}
            </Carousel>
            <div className={styles.cardBody}>
                <h2 className={styles.cardTitle}>{name}</h2>
                <p>{description}</p>
                <div className={styles.cardFooter}>
                    <span className={styles.price}>${price}</span>
                    <Link href={`/products/${product._id}`}>
                        <button className={styles.viewDetailsButton}>View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
