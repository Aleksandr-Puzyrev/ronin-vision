"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import styles from "./HorizonTabsHome.module.css";
import Image, { StaticImageData } from "next/image";
import CatalogHomeItem from "../CatalogHomeItem/CatalogHomeItem";

export interface HorizonTabsHomeProps {
  id: number;
  label: string;
  description: string;
  content: StaticImageData;
  tabLink: string;
}

interface HorizonTabsHomeArrayProps {
  catalogs: HorizonTabsHomeProps[];
}

const HorizonTabsHome = ({catalogs}: HorizonTabsHomeArrayProps) => {
  return (
      <div className={styles.container}>
        <Tabs aria-label="Dynamic tabs" radius="none" variant="underlined" items={catalogs}>
          {catalogs.map((item) => (
            <Tab key={item.id} title={<div className={styles.linkContainer}><div className={styles.title}>{item.label}</div><div className={styles.linkCatalog}><CatalogHomeItem catalogTab={item.tabLink} description={item.description}/></div></div>} className={styles.nav}>
              <Image priority={true} src={item.content} alt=""/>
            </Tab>
          ))}
        </Tabs>
      </div>
  );
};

export default HorizonTabsHome;
