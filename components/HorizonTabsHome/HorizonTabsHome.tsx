"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import styles from "./HorizonTabsHome.module.css";
import Image, { StaticImageData } from "next/image";
import CatalogHomeItem from "../CatalogHomeItem/CatalogHomeItem";
import { SpecificationsItemsTypes } from "../Card/Card";

export interface HorizonTabsHomeProps {
  id: number;
  label: string;
  description: string;
  content: StaticImageData;
  tabLink: string;
  specifications: SpecificationsItemsTypes[];
  price?: number;
}

interface HorizonTabsHomeArrayProps {
  catalogs: HorizonTabsHomeProps[];
}

const HorizonTabsHome = ({ catalogs }: HorizonTabsHomeArrayProps) => {
  return (
    <div className={styles.container}>
      <Tabs aria-label="Dynamic tabs" radius="none" variant="underlined" items={catalogs}>
        {catalogs.map((item) => (
          <Tab
            key={item.id}
            title={
              <div className={styles.linkContainer}>
                <div className={styles.title}>{item.label}</div>
                <div>{item.price} рублей</div>
                <div className={styles.linkCatalog}>
                  <CatalogHomeItem catalogTab={item.tabLink} description={item.description}/>
                </div>
              </div>
            }
            className={styles.nav}
          >
            {/* <Image priority={true} src={item.content} alt=""/> */}
            <span>{item.description}</span> 
            <div className={styles.gridContainer}>
              {item.specifications.map((specification, index) => (
                <>
                  <div className={styles.gridContainerItemTitle} style={{backgroundColor: index%2 !== 0 ? "rgb(241, 241, 241)" : ""}}>{specification.label}</div>
                  <div className={styles.gridContainerItemDescription} style={{backgroundColor: index%2 !== 0 ? "rgb(241, 241, 241)" : ""}}>{specification.value}</div>
                </>
              ))}
            </div>
          </Tab>
        ))}
      </Tabs>
    </div>
  );
};

export default HorizonTabsHome;
