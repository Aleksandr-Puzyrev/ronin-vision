"use client";

import React, { useState } from "react";
import cards from "../../static/cards";
import styles from "./CatalogTabs.module.css";
import Card, { CardsProps } from "@/components/Card/Card";
import Link from "next/link";
// import CameraTabFilter from "./Filters/CameraTabFilter";
// import VideoRegTabFilter from "./Filters/VideoRegTabFilter";
// import AccessoriesTabFilter from "./Filters/AccessoriesTabFilter";

interface CatalogTabsProps {
  slug: 'RN-65HD-i5-256G8' | 'RN-65HD-i7-512G16'| 'RN-75HD-i5-256G' | 'RN-75HD-i7-512G' | 'RN-86HD-i5-256G' | 'RN-86HD-i7-512G';
}

const CatalogTabs = ({slug}: CatalogTabsProps) => {
  const TabsCards = cards.filter((item) => item.type === slug);
  const tab65HDi5 = slug === 'RN-65HD-i5-256G8';
  const tab65HDi7 = slug === 'RN-65HD-i7-512G16';
  const tab75HDi5 = slug === 'RN-75HD-i5-256G';
  const tab75HDi7 = slug === 'RN-75HD-i7-512G';
  const tab86HDi5 = slug === 'RN-86HD-i5-256G';
  const tab86HDi7 = slug === 'RN-86HD-i7-512G';
  const [cardsRes, setCardsRes] = useState<CardsProps[]>(TabsCards);
  const cardsNewFilter = cardsRes.filter((item) => item.newCard == true);
  const cardsNotNewFilter = cardsRes.filter((item) => item.newCard == false);

  return (
    <div>
      <div className={styles.buttonContainer}>
        <Link href="/catalog/RN-65HD-i5-256G8"><button className={tab65HDi5 ? `${styles.button} ${styles.buttonActive}` : styles.button}>RN-65HD-i5-256G8</button></Link>
        <Link href="/catalog/RN-65HD-i7-512G16"><button className={tab65HDi7 ? `${styles.button} ${styles.buttonActive}` : styles.button}>RN-65HD-i7-512G16</button></Link>
        <Link href="/catalog/RN-75HD-i5-256G"><button className={tab75HDi5 ? `${styles.button} ${styles.buttonActive}` : styles.button}>RN-75HD-i5-256G</button></Link>
        <Link href="/catalog/RN-75HD-i7-512G"><button className={tab75HDi7 ? `${styles.button} ${styles.buttonActive}` : styles.button}>RN-75HD-i7-512G</button></Link>
        <Link href="/catalog/RN-86HD-i5-256G"><button className={tab86HDi5 ? `${styles.button} ${styles.buttonActive}` : styles.button}>RN-86HD-i5-256G</button></Link>
        <Link href="/catalog/RN-86HD-i7-512G"><button className={tab86HDi7 ? `${styles.button} ${styles.buttonActive}` : styles.button}>RN-86HD-i7-512G</button></Link>
      </div>

    <div className={styles.filterAndDevicesContainer}>
      {/* <div className={styles.filterContainer}>{cameraTab && (<CameraTabFilter setCardsRes={setCardsRes} TabsCards={TabsCards}/>)}
        {videoRegTab && (<VideoRegTabFilter setCardsRes={setCardsRes} TabsCards={TabsCards}/>)}
        {accessoriesTab && (<AccessoriesTabFilter setCardsRes={setCardsRes} TabsCards={TabsCards}/>)}
      </div> */}
      <div>
        {cardsNewFilter.length == 0 && cardsNotNewFilter.length == 0 ? <div className={styles.notDevicesToFilter}>К сожалению по вашему фильтру нет товаров</div> : <></>}
        {cardsNewFilter.length != 0 ? <div className={styles.titleCardsType}>Новинки</div> : <></>}
        <div className={styles.CardsContainer}>
          {cardsNewFilter && (cardsNewFilter.map((item) => <Card key={item.id} {...item} />))}
        </div>
        {cardsNotNewFilter.length != 0 ? <div className={styles.titleCardsType}>Весь каталог</div> : <></>}
        <div className={styles.CardsContainer}>
          {cardsNotNewFilter && (cardsNotNewFilter.map((item) => <Card key={item.id} {...item} />))}
        </div>
      </div>
    </div>

    </div>
  );
};

export default CatalogTabs;
