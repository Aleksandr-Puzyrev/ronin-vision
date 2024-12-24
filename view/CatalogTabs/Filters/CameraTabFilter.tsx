"use client";

import React, { useState } from 'react';
import styles from '../CatalogTabs.module.css';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Checkbox, CheckboxGroup, Slider } from '@nextui-org/react';
import FilterHeader from '../FilterHeader/FilterHeader';
import { CardsProps } from '@/components/Card/Card';

function CameraTabFilter({setCardsRes, TabsCards}: {setCardsRes: React.Dispatch<React.SetStateAction<CardsProps[]>>, TabsCards: CardsProps[]}) {
  const [permissionSelected, setPermissionSelected] = React.useState<string[]>([]);
  const [selected, setSelected] = React.useState<string[]>([]);
  
  let sliderValue: number[];
  let setSliderValue: any;
  [sliderValue, setSliderValue] = useState<number[]>([2500, 35000])

  function resetButton() {
    setCardsRes(TabsCards);
    setSliderValue([2500, 35000]);
    setSelected([]);
    setPermissionSelected([])
  }

    function filterButton() {
    const cameraCardsPriceFilterArray = TabsCards.filter(item => sliderValue[0] < item.price && item.price < sliderValue[1])

    if (permissionSelected.length > 0 && selected.includes('microphone') && selected.includes('poe')) {
      setCardsRes(cameraCardsPriceFilterArray.filter(item => permissionSelected.includes('' + item.permission) && item.microphone === true && item.poe === true))
    } else if (permissionSelected.length > 0 && selected.includes('microphone')) {
      setCardsRes(cameraCardsPriceFilterArray.filter(item => permissionSelected.includes('' + item.permission) && item.microphone === true))
    } else if (permissionSelected.length > 0 && selected.includes('poe')) {
      setCardsRes(cameraCardsPriceFilterArray.filter(item => permissionSelected.includes('' + item.permission) && item.poe === true))
    } else if (selected.includes('microphone') && selected.includes('poe')) {
      setCardsRes(cameraCardsPriceFilterArray.filter(item => item.microphone === true && item.poe === true))
    } else if (selected.includes('microphone')) {
      setCardsRes(cameraCardsPriceFilterArray.filter(item => item.microphone === true))
    } else if (selected.includes('poe')) {
      setCardsRes(cameraCardsPriceFilterArray.filter(item => item.poe === true))
     } else if (permissionSelected.length > 0) {
      setCardsRes(cameraCardsPriceFilterArray.filter(item => permissionSelected.includes('' + item.permission)))
    } else {
      setCardsRes(cameraCardsPriceFilterArray)
    }
  }
    return (
        <div className={styles.filter}>
            <div className={styles.accordionSection}>
              <Accordion className={styles.accordionContainer}>
               <AccordionItem key={1} aria-label="Accordion 1" className={styles.accordionItem} title={<div className={styles.filterTitle}>Фильтр</div>}>
                  <div className={styles.permissionTitle}>Разрешение (в Мп)</div>
                  <CheckboxGroup value={permissionSelected} onValueChange={setPermissionSelected}>
                   <Checkbox value="2" className={styles.permissionItem}>2</Checkbox>
                    <Checkbox value="3" className={styles.permissionItem}>3</Checkbox>
                    <Checkbox value="4" className={styles.permissionItem}>4</Checkbox>
                   <Checkbox value="5" className={styles.permissionItem}>5</Checkbox>
                    <Checkbox value="8" className={styles.permissionItem}>8</Checkbox>
                 </CheckboxGroup>
                 <CheckboxGroup color="default" value={selected} onValueChange={setSelected} className={styles.microPoeContainer} >
                   <Checkbox value="microphone" className={styles.microPoeItem}>Микрофон</Checkbox>
                   <Checkbox value="poe" className={styles.microPoeItem}>POE</Checkbox>
                 </CheckboxGroup>
                 <Slider label="Цена" size="sm" step={100} minValue={2500} maxValue={35000} value={sliderValue} onChange={setSliderValue} formatOptions={{style: "currency", currency: "RUB"}} className={styles.sliderPrice}/>
                  <div className={styles.filterButtonContainer}>
                   <button onClick={resetButton} className={styles.resetButton}>Сбросить</button>
                   <button onClick={filterButton} className={styles.filterButton}>Применить</button>
                 </div>
               </AccordionItem>
             </Accordion>
            </div>

            {/* ... Фильтр для Desktop */}
            <div className={styles.DesktopFilterSection}>
              <FilterHeader />
              <div>
                <div className={styles.permissionTitle}>Разрешение (в Мп)</div>
                <CheckboxGroup value={permissionSelected} onValueChange={setPermissionSelected}>
                  <Checkbox value="2" className={styles.permissionItem}>2</Checkbox>
                  <Checkbox value="3" className={styles.permissionItem}>3</Checkbox>
                  <Checkbox value="4" className={styles.permissionItem}>4</Checkbox>
                  <Checkbox value="5" className={styles.permissionItem}>5</Checkbox>
                  <Checkbox value="8" className={styles.permissionItem}>8</Checkbox>
                </CheckboxGroup>
                <CheckboxGroup color="default" value={selected} onValueChange={setSelected} className={styles.microPoeContainer} >
                    <Checkbox value="microphone" className={styles.microPoeItem}>Микрофон</Checkbox>
                    <Checkbox value="poe" className={styles.microPoeItem}>POE</Checkbox>
                </CheckboxGroup>
                <Slider label="Цена" size="sm" step={100} minValue={2500} maxValue={35000} value={sliderValue} onChange={setSliderValue} formatOptions={{style: "currency", currency: "RUB"}} className={styles.sliderPrice}/>
                <div className={styles.filterButtonContainer}>
                  <button onClick={resetButton} className={styles.resetButton}>Сбросить</button>
                  <button onClick={filterButton} className={styles.filterButton}>Применить</button>
                </div>
              </div>
            </div>
        </div>
    );
};

export default CameraTabFilter;