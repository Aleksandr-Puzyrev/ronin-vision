"use client";

import React, { useState } from 'react';
import styles from '../CatalogTabs.module.css';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Checkbox, CheckboxGroup, Slider } from '@nextui-org/react';
import FilterHeader from '../FilterHeader/FilterHeader';
import { CardsProps } from '@/components/Card/Card';

function AccessoriesTabFilter({setCardsRes, TabsCards}: {setCardsRes: React.Dispatch<React.SetStateAction<CardsProps[]>>, TabsCards: CardsProps[]}) {
    const [typeDeviceSelected, setTypeDeviceSelected] = React.useState<string[]>([]);

    let accessoriesSliderValue: number[];
    let setAccessoriesSliderValue: any;
    [accessoriesSliderValue, setAccessoriesSliderValue] = useState<number[]>([5000, 35000])

    function accessoriesFilterButton() {
        const accessoriesCardsPriceFilterArray = TabsCards.filter(item => accessoriesSliderValue[0] < item.price && item.price < accessoriesSliderValue[1])
        if (typeDeviceSelected.length > 0) {
            setCardsRes(accessoriesCardsPriceFilterArray.filter(item => typeDeviceSelected.includes(item.typeDevice)))
        } else setCardsRes(accessoriesCardsPriceFilterArray)
    }
  
    function accessoriesResetButton() {
      setCardsRes(TabsCards);
      setAccessoriesSliderValue([5000, 35000]);
      setTypeDeviceSelected([]);
    }

    return (
        <div className={styles.filter}>

            {/* ... для мобильной версии аксессуаров*/}
            <div className={styles.accordionSection}>
              <Accordion className={styles.accordionContainer}>
               <AccordionItem key={1} aria-label="Accordion 1" className={styles.accordionItem} title={<div className={styles.filterTitle}>Фильтр</div>}>
                  <CheckboxGroup value={typeDeviceSelected} onValueChange={setTypeDeviceSelected}>
                    <Checkbox value="Блок питания" className={styles.permissionItem}>Блоки питания</Checkbox>
                    <Checkbox value="Коммутаторы" className={styles.permissionItem}>Коммутаторы</Checkbox>
                    <Checkbox value="Мониторы" className={styles.permissionItem}>Мониторы</Checkbox>
                  </CheckboxGroup>
                  <div className={styles.priceSlider}>
                    <Slider label="Цена" size="sm" step={100}  minValue={5000}  maxValue={35000} value={accessoriesSliderValue} onChange={setAccessoriesSliderValue} formatOptions={{style: "currency", currency: "RUB"}} className={styles.sliderPrice}/>
                    <div className={styles.filterButtonContainer}>
                      <button onClick={accessoriesResetButton} className={styles.resetButton}>Сбросить</button>
                     <button onClick={accessoriesFilterButton} className={styles.filterButton}>Применить</button>
                    </div>
                </div>
               </AccordionItem>
             </Accordion>
            </div>

            {/* ... Фильтр для Desktop аксессуаров*/}
            <div className={styles.DesktopFilterSection}>
              <FilterHeader />
              <CheckboxGroup value={typeDeviceSelected} onValueChange={setTypeDeviceSelected}>
                <Checkbox value="Блок питания" className={styles.permissionItem}>Блоки питания</Checkbox>
                <Checkbox value="Коммутаторы" className={styles.permissionItem}>Коммутаторы</Checkbox>
                <Checkbox value="Мониторы" className={styles.permissionItem}>Мониторы</Checkbox>
              </CheckboxGroup>
              <div className={styles.priceSlider}>
                <Slider label="Цена" size="sm" step={100}  minValue={5000}  maxValue={35000} value={accessoriesSliderValue} onChange={setAccessoriesSliderValue} formatOptions={{style: "currency", currency: "RUB"}} className={styles.sliderPrice}/>
                <div className={styles.filterButtonContainer}>
                  <button onClick={accessoriesResetButton} className={styles.resetButton}>Сбросить</button>
                  <button onClick={accessoriesFilterButton} className={styles.filterButton}>Применить</button>
                </div>
             </div>
            </div>

          </div>
    );
};

export default AccessoriesTabFilter;