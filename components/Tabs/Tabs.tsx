"use client";


import React, { ReactNode } from "react";
import {Tabs, Tab} from "@nextui-org/react";
import styles from './Tabs.module.css';

interface TabsContProps {
  id: number;
  label: string;
  content: string | ReactNode;
}

interface TabsProps {
  tabsArray: TabsContProps[];
}



export default function TabsCont({tabsArray}: TabsProps) {
  

  return (
    <div className="flex w-full flex-col">
      <Tabs aria-label="Dynamic tabs" items={tabsArray} radius="none" variant="light" className={styles.tabsCont}>
        {(item) => (
          <Tab key={item.id} title={item.label} className={styles.tabsItem}>
                {item.content}
          </Tab>
        )}
      </Tabs>
    </div>  
  );
}