"use client";

import PageTitle from "@/components/PageTitle/PageTitle";
import TabsCont from "../../components/Tabs/Tabs";
import AccordionPages from "@/components/AccordionPages/AccordionPages";
import styles from "../styles.module.css";
import HorizonTabs from "@/components/HorizonTabs/HorizonTabs";
import Image from "next/image";
import catalogs from "../../static/catalogs";

export default function AboutPage() {
  let tabs = [
    {
      id: 1,
      label: "Кто мы",
      content:
        `Компания "RONIN" - ведущий производитель профессиональных систем видеонаблюдения. Мы специализируемся на исследовании, производстве и экспорте систем видеонаблюдения и видеорегистраторов, обеспечивая наиболее надежные цифровые решения в области безопасности. 
        На сегодняшний день наша компания заслуженно занимает одну из лидирующих позиций на рынке систем безопасности. Мы разрабатывали ассортиментную политику таким образом, чтобы в результате вы могли получить идеальное решение поставленных задач. Но реализация оборудования не является нашим единственным направлением деятельности, мы также занимаемся установкой систем безопасности на объектах.
        Мы используем ERP-системы для управления нашим производством, стандартизации каждого процесса. У нас действуют высшие стандарты качества, а наши сотрудники - высококвалифицированные профессионалы своего дела.`,
    },
    {
      id: 2,
      label: "В чем мы можем Вам помочь",
      content:
        "Наша деятельность направлена на обеспечение безопасности бизнеса, объектов недвижимости и личности, а также, поддержки партнеров дополнительными услугами, гарантийным и техническим сопровождением на любых этапах работы.",
    },
    {
      id: 3,
      label: "О продукции",
      content: <p className={styles.productsAboutText}>Наша продуктовая линейка включает в себя более 650 моделей<li>IP-камеры</li><li>AHD камеры</li><li>IP-видеорегистраторы</li><li>Гибридные видеорегистраторы</li><li>Домофоны</li><li>Системы контроля и управления доступом</li></p>
    },
  ];

  return (
    <div>
      <PageTitle>О компании</PageTitle>
      <div className={styles.tabsContPages + " " + styles.tabsAboutCont}>
        <TabsCont tabsArray={tabs} />
      </div>
      <div className={styles.accordionPages}>
        <AccordionPages accordions={tabs} />
      </div>
      <PageTitle>Наши решения</PageTitle>
      <div className={styles.horizontTabs}>
        <HorizonTabs elements={catalogs} />
      </div>
      <div className={styles.horizonTabsMobile}>
        {catalogs.map((item) => (
          <div key={item.id}>
            <div className={styles.horizonTabsMobileItem}>{item.label}</div>
            <Image priority={true} src={item.content} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
