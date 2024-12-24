'use client'

import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import styles from './YMapProvider.module.css';

export default function YMapProvider() {
  return (
    <div className={styles.yMapContainer}>
      <YMaps query={{ apikey: process.env.NEXT_PUBLIC_YMAP_APIKEY }}>
        <Map
          defaultState={{
            center: [55.814462,37.385412],
            zoom: 16
          }}
          width="85%"
          height="408px"
        >
          <Placemark defaultGeometry={[55.814462,37.385412]} />
        </Map>
      </YMaps>
    </div>
  );
}
