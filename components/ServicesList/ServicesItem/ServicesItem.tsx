import Image from "next/image";
import React from "react";
import styles from "./ServicesItem.module.css";
import Elipse from "../../../public/Elipse.svg";

interface ServicesItemProps {
    icon: any;
    body: string;
}

const ServicesItem = ({icon, body}: ServicesItemProps) => {
  return (
    <li className={styles.servicesCont}>
      <Image src={icon} alt="" className={styles.servicesImg} />
      <div className={styles.servicesDescription}>
        <div>{body}</div>
        <Image
          src={Elipse}
          alt=""
          className={styles.elipse}
          width={10}
          height={10}
        />
      </div>
    </li>
  );
};

export default ServicesItem;
