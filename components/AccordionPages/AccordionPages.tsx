"use client";

import React, { ReactNode } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import styles from './AccordionPages.module.css';
import { StaticImageData } from "next/image";

interface AccordionPagesProps {
  id: number;
  label: string;
  content: string | ReactNode;
}

interface AccordionProps {
  accordions: AccordionPagesProps[];
}

export default function AccordionPages({ accordions }: AccordionProps) {
  return (
    <Accordion className={styles.container} defaultExpandedKeys={['1']}>
      {accordions.map((item) => (
        <AccordionItem key={item.id} aria-label="Accordion 1" title={item.label} className={styles.accordionItem}>
          {item.content}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
