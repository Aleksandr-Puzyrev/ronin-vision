"use client";

import React, { useEffect, useState } from "react";
import cards from "../../static/cards";
import styles from "./CatalogTabs.module.css";
import Card, { CardsProps } from "@/components/Card/Card";
import Link from "next/link";
import CameraTabFilter from "./Filters/CameraTabFilter";
import VideoRegTabFilter from "./Filters/VideoRegTabFilter";
import AccessoriesTabFilter from "./Filters/AccessoriesTabFilter";

interface CatalogTabsProps {
  slug: 'electro' | 'camera'| 'videoreg' | 'accessories';
}

const CatalogTabs = ({slug}: CatalogTabsProps) => {
  const TabsCards = cards.filter((item) => item.type === slug);
  const electroZamkiTab = slug === 'electro';
  const cameraTab = slug === 'camera';
  const videoRegTab = slug === 'videoreg';
  const accessoriesTab = slug === 'accessories';
  const [cardsRes, setCardsRes] = useState<CardsProps[]>(TabsCards);
  const cardsNewFilter = cardsRes.filter((item) => item.newCard == true);
  const cardsNotNewFilter = cardsRes.filter((item) => item.newCard == false);

  return (
    <div>
      <div className={styles.buttonContainer}>
        <Link href="/catalog/electro"><button className={electroZamkiTab ? `${styles.button} ${styles.buttonActive}` : styles.button}>Электронные замки</button></Link>
        <Link href="/catalog/camera"><button className={cameraTab ? `${styles.button} ${styles.buttonActive}` : styles.button}>Камеры видеонаблюдения</button></Link>
        <Link href="/catalog/videoreg"><button className={videoRegTab ? `${styles.button} ${styles.buttonActive}` : styles.button}>Видеорегистраторы</button></Link>
        <Link href="/catalog/accessories"><button className={accessoriesTab ? `${styles.button} ${styles.buttonActive}` : styles.button}>Аксессуары</button></Link>
      </div>

    <div className={styles.filterAndDevicesContainer}>
      <div className={styles.filterContainer}>{cameraTab && (<CameraTabFilter setCardsRes={setCardsRes} TabsCards={TabsCards}/>)}
        {videoRegTab && (<VideoRegTabFilter setCardsRes={setCardsRes} TabsCards={TabsCards}/>)}
        {accessoriesTab && (<AccessoriesTabFilter setCardsRes={setCardsRes} TabsCards={TabsCards}/>)}
      </div>
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
