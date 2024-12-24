import { NavbarItem } from "@nextui-org/navbar";
import Image from "next/image";
import React, { FC } from "react";
import Phone from "../../../public/Phone.svg";
import Email from "../../../public/email.svg";
import styles from "./Communication.module.css";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const Communication: FC = (): JSX.Element => {
  return (
    <>
      <NavbarItem>
        <Link href={"mailto:" + siteConfig.email} className={styles.email}>
          <Image src={Email} alt="email" className={styles.icons} />
          <div>{siteConfig.email}</div>
        </Link>
      </NavbarItem>
      <NavbarItem className={styles.telContainer}>
        <Link href={"tel:" + siteConfig.telephone} className={styles.telefon}>
          <Image src={Phone} alt="Телефон" />
          <div>{siteConfig.telephone}</div>
        </Link>
      </NavbarItem>
    </>
  );
};

export default Communication;
