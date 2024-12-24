"use client";

import React from "react";
import styles from "./CatalogHomeItem.module.css";
import ButtonLink from "../ButtonLink/ButtonLink";
import Link from "next/link";

interface CatalogHomeItemProps {
  description: string;
  catalogTab: string;
}

const CatalogHomeItem = ({
  description, catalogTab
}: CatalogHomeItemProps): JSX.Element => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>{description}</div>
      <span>
        <Link href={catalogTab} className={styles.linkButton}>
          Перейти в каталог
        </Link>
      </span>
    </div>
  );
};

export default CatalogHomeItem;
