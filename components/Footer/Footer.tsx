import React, { FC } from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Logo1 from "../../public/Logo1.svg";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const Footer: FC = (): JSX.Element => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src={Logo1} alt="Logo" priority={true} />
          </Link>
          <div className={styles.logoText}>© Ronin</div>
        </div>

        <div className={styles.footerItem}>
          {siteConfig.navFooterProductsItems.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={index !== 0 ? styles.productsItem : ""}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles.footerItem}>
          {siteConfig.navFooterMenuItems.map((item) => (
            <Link key={item.label} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>

        <div className={styles.contacts}>
          <div>Контакты</div>
          <div className={styles.pin}>
            <Image src='/Pin.svg' alt="Пин" className={styles.icon} width={20} height={20}/>
            <Link href={"/contacts"}><div>Адрес магазина</div></Link>
          </div>
          <div className={styles.telefon}>
            <Image src='/Phone.svg' alt="Телефон" className={styles.icon} width={18} height={18}/>
            <Link href={"tel:" + siteConfig.telephone}><div>{siteConfig.telephone}</div></Link>
          </div>
          <div className={styles.email}>
            <Image src='/Email.svg' alt="email" className={styles.icon} width={20} height={20}/>
            <Link href={"mailto:" + siteConfig.email}><div>{siteConfig.email}</div></Link>
          </div>
          
        </div>
        <div className={styles.hr}>
          <hr />
          <div>© Ronin</div>
        </div>

      </div>

    </div>
  );
};

export default Footer;
