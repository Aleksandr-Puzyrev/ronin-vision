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
        `Компания "RONIN" - ведущий производитель интерактивных досок и мониторов. Мы специализируемся на исследовании, производстве и экспорте интерактивных мониторов, обеспечивая наиболее надежные цифровые решения. 
        На сегодняшний день наша компания заслуженно занимает одну из лидирующих позиций на рынке. Мы разрабатывали ассортиментную политику таким образом, чтобы в результате вы могли получить идеальное решение поставленных задач. Но реализация оборудования не является нашим единственным направлением деятельности, мы также занимаемся установкой интерактивных мониторов на объектах.
        Мы используем ERP-системы для управления нашим производством, стандартизации каждого процесса. У нас действуют высшие стандарты качества, а наши сотрудники - высококвалифицированные профессионалы своего дела.`,
    },
    {
      id: 2,
      label: "В чем мы можем Вам помочь",
      content:
        "Наша деятельность направлена на решение основных задач в сфере образования и конференций, повышая эффективность преподавания и работы, а также, поддержки партнеров дополнительными услугами, гарантийным и техническим сопровождением на любых этапах работы.",
    },
    {
      id: 3,
      label: "О продукции",
      content: <p className={styles.productsAboutText}>Наша продуктовая линейка включает в себя более 6 моделей<li>RN-65HD-i5-256G8</li><li>RN-65HD-i7-512G16</li><li>RN-75HD-i5-256G</li><li>RN-75HD-i7-512G</li><li>RN-86HD-i5-256G</li><li>RN-86HD-i7-512G</li></p>
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
