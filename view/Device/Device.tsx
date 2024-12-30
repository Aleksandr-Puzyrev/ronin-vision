"use client";

import React, { ReactNode } from "react";
import styles from "./Device.module.css";
import Image from "next/image";
import { CardsProps } from "@/components/Card/Card";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import { Tab, Tabs } from "@nextui-org/tabs";
import DownloadIcon from "../../public/downloadIcon.svg";
import { siteConfig } from "@/config/site";

interface TabsContProps {
  id: number;
  label: string;
  content: string | ReactNode;
}

function Device(device: CardsProps) {
  const tabs: TabsContProps[] = [
    {
      id: 1,
      label: "Характеристики",
      content: device.specifications?.map((specification) => (
        <div key={specification.title} className={styles.specificationTitle}>
          <div className={styles.specificationTitle} style={{ fontWeight: 700 }}>
            {specification.title}
          </div>
          {specification.items.map((item) => (
            <div key={item.label} className={styles.specificationLabekAndValueCont}>
              <div className={styles.specificationLabel}>{item.label}</div>
              <div className={styles.specificationValueCont}>
                <div className={styles.specificationValue}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      )),
    },
    // {
    //   id: 2,
    //   label: "Видеообзор",
    //   content: <div className={styles.videoContainerText}><div className={styles.videoNotText}>К сожалению на данный момент нет видеообзора по этому товару</div></div>,
    //   // content: <div className={styles.videoContainer}><video width="100%" controls src="/video/5321056414901211687.mp4"/></div>,
    // },
    {
      id: 3,
      label: "Материалы для скачивания",
      content: (
        <a
          href={device.passportUrl}
          download={device.passportUrl?.slice(10)}
          className={styles.url}
        >
          <Image src={DownloadIcon} alt="" className={styles.downloadIcon} />
          <div className={styles.downloadText}>Паспорт продукта</div>
        </a>
      ),
    },
  ];

  return (
    <>
      <div className={styles.ImgAndDescriptionContainer}>
        <div>
          <Image width={600} height={600} src={device.imgUrl} alt="" />
        </div>
        <div className={styles.descriptioinContainer}>
          <div>
            <div className={styles.title}>{device.title}</div>
            <hr />
          </div>
          {/* <ButtonLink href="https://t.me/shopronin_bot" target_bl='_blank'>Перейти в Telegram-бот</ButtonLink> */}
          <ButtonLink href={"tel:" + siteConfig.telephone}>
            <div>{siteConfig.telephone}</div>
          </ButtonLink>
          <div className={styles.description}>{device.info}</div>
        </div>
      </div>
      <div className={styles.DesktopTabs}>
        <Tabs
          aria-label="Dynamic tabs"
          items={tabs}
          radius="none"
          variant="light"
          className={styles.tabsCont}
        >
          {(item) => (
            <Tab key={item.id} title={item.label} className={styles.tabsItem}>
              {item.content}
            </Tab>
          )}
        </Tabs>
      </div>
      <div className={styles.mobileTabs}>
        {tabs.map((item) => (
          <div key={item.id} className={styles.mobileTabContainer}>
            <div className={styles.label}>{item.label}</div>
            <div className={styles.content}>{item.content}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Device;
