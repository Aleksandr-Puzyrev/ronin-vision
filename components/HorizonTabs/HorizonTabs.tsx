"use client";

import React from "react";
import { Tabs, Tab } from "@nextui-org/tabs";
import styles from "./HorizonTabs.module.css";
import Image, { StaticImageData } from "next/image";

interface HorizonTabsProps {
  id: number;
  label: string;
  content: StaticImageData;
}

interface HorizonArrayProps {
  elements: HorizonTabsProps[];
}

const HorizonTabs = ({elements}: HorizonArrayProps) => {

  return (
      <div className={styles.container}>
        <Tabs aria-label="Dynamic tabs" radius="none" items={elements}>
          {elements.map((item) => (
            <Tab key={item.id} title={item.label} className={styles.nav}>
              <Image priority={true} src={item.content} alt="" />
            </Tab>
          ))}
        </Tabs>
      </div>
  );
};

export default HorizonTabs;
