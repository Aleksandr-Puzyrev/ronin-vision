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
      label: "Установка и настройка монитора",
      content: "Повысьте удобство проведения встреч и обучения с помощью нашей профессиональной услуги по установке интерактивных мониторов! Интеллектуальная интерактивная доска объединяет функции электронной доски, проектора, компьютера, мониторов, рекламных проигрывателей и аудиооборудования.",
    },
    {
      id: 2,
      label: "Доставка в любую точку города",
      content:
        "Наша компания является поставщиком решений для интеллектуальных дисплеев с расширенными возможностями по совместной работе и обучению.",
    },
    {
      id: 3,
      label: "Установка дополнительных аксессуаров",
      content: "Улучшите функционал монитора с помощью нашей услуги по установке дополнительных аксессуаров! С помощью беспроводного отображения подключитесь к интерактивной доске и быстро переключайтесь с помощью простых кнопок. SMART ручка помогает дистанционно перелистывать страницы презентаций, может писать, переворачивать страницы, регулировать громкость и т.д.",
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
