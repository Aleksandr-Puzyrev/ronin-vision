"use client";

import React from "react";
import styles from "./CatalogHomeItem.module.css";
import ButtonLink from "../ButtonLink/ButtonLink";
import Link from "next/link";
import { SpecificationsItemsTypes } from "../Card/Card";

interface CatalogHomeItemProps {
  description: string;
  catalogTab: string;
  specifications?: SpecificationsItemsTypes[];
}

const CatalogHomeItem = ({
  description,
  catalogTab,
  specifications,
}: CatalogHomeItemProps): JSX.Element => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.description}>{description}</div> */}
      <div className={styles.gridContainer}>
        {specifications?.map((specification) => (
          <>
            <div className={styles.gridContainerItemTitle}>{specification.label}</div>
            <div className={styles.gridContainerItemDescription}>{specification.value}</div>
          </>
        ))}
      </div>
      <span>
        <Link href={catalogTab} className={styles.linkButton}>
          Подробнее
        </Link>
      </span>
    </div>
  );
};

export default CatalogHomeItem;
