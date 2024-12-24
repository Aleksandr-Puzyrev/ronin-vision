"use client";

import React from "react";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/react";
import styles from './Breadcrumbers.module.css';

interface BreadcrumbersProps {
    title: string[];
    href: string[];
}

export default function Breadcrumbers({title, href}: BreadcrumbersProps) {
  return (
    <Breadcrumbs className={styles.container}>
        {title.map((item, index) => <BreadcrumbItem key={href[index]} href={href[index]}>{item}</BreadcrumbItem>)}
    </Breadcrumbs>
  );
}