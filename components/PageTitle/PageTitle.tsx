"use client";

import React from "react";
import styles from './PageTitle.module.css'

interface PageTitleProps {
    children: React.ReactNode;
}

export default function PageTitle({children}: PageTitleProps) {
  return (
    <div className={styles.h1}>{children}</div>
  );
}