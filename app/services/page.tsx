import AccordionPages from "@/components/AccordionPages/AccordionPages";
import PageTitle from "@/components/PageTitle/PageTitle";
import TabsCont from "@/components/Tabs/Tabs";
import styles from "../styles.module.css";
import HorizonTabs from "@/components/HorizonTabs/HorizonTabs";
import Image from "next/image";
import catalogs from "../../static/catalogs";


export default function ServicesPage() {
  let tabs = [
    {
      id: 1,
      label: "Установка электронного замка на входную дверь",
      content: "Повысьте безопасность вашего дома с помощью нашей профессиональной услуги по установке электронных замков! Обеспечьте душевное спокойствие благодаря входу по биометрии, настраиваемым кодам доступа и возможностям дистанционного управления. Попрощайтесь с традиционными ключами и здравствуйте с более безопасным и умным домом.",
    },
    {
      id: 2,
      label: "Установка камер видеонаблюдения",
      content:
        "Защитите свою собственность с помощью наших профессиональных услуг по установке камер видеонаблюдения. Защитите свой дом или бизнес с помощью круглосуточного наблюдения, отпугивая потенциальных злоумышленников и обеспечивая душевное спокойствие.",
    },
    {
      id: 3,
      label: "Установка дополнительных аксессуаров",
      content: "Улучшите свою систему безопасности с помощью нашей услуги по установке дополнительных аксессуаров! Защитите свою собственность, как никогда раньше, с помощью новейших мониторов, коммутаторов и блоков питания, умело интегрированных нашими опытными специалистами.",
    },
  ];

  return (
    <div>
      <PageTitle>Услуги</PageTitle>
      <div className={styles.tabsContPages}>
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
          <div key={item.id}  className={styles.categoriLabelAndImg}>
            <div className={styles.horizonTabsMobileItem}>{item.label}</div>
            <Image priority={true} src={item.content} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
