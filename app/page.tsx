"use client";

import styles from "./styles.module.css";
import ButtonLink from "@/components/ButtonLink/ButtonLink";
import OffersContainer from "@/components/OffersContainer/OffersContainer";
import HorizonTabsHome from "@/components/HorizonTabsHome/HorizonTabsHome";
import CatalogHomeItem from "@/components/CatalogHomeItem/CatalogHomeItem";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import Card from "@/components/Card/Card";
import cards from "../static/cards";
import catalogs from "../static/catalogs";
import ServicesList from "@/components/ServicesList/ServicesList";
import DescriptionHome from "@/components/DescriptionHome/DescriptionHome";

export default function Home() {

  const cardsObj = cards.filter(item => item.newCard == true);

  return (
    <section>
      <DescriptionHome />

      <OffersContainer title="Каталог">
        <div className={styles.catalogsDesktop}>
          <HorizonTabsHome catalogs={catalogs} />
        </div>
        <div className={styles.catalogsMobile}>
          <Accordion defaultExpandedKeys={["1"]}>
            {catalogs.map((item) => (
              <AccordionItem key={item.id} aria-label="Accordion 1" title={item.label} className={styles.accordionlink} >
                <div className={styles.linkCatalog}>
                  <CatalogHomeItem catalogTab={item.tabLink} description={item.description} />
                </div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </OffersContainer>

      <OffersContainer title="Услуги">
        <ServicesList />
      </OffersContainer>

      {/* {cardsObj ? <><OffersContainer title="Новинки">
        <div className={styles.cardContainer}>
          {cardsObj.map((item) => (<Card key={item.id} {...item} {...{pathForNewCards: '/catalog/'}}/>))}
        </div>
      </OffersContainer>
      <div className={styles.catalogButton}>
        <ButtonLink href="/catalog/electro">Перейти в каталог</ButtonLink>
      </div></> : <></>} */}
    </section>
  );
}
