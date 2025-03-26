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
        {specifications?.map((specification, index) => (
          <>
            <div className={styles.gridContainerItemTitle} style={{backgroundColor: index%2 !== 0 ? "rgb(241, 241, 241)" : ""}}>{specification.label}</div>
            <div className={styles.gridContainerItemDescription} style={{backgroundColor: index%2 !== 0 ? "rgb(241, 241, 241)" : ""}}>{specification.value}</div>
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
