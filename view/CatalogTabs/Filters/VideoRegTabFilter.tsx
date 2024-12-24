import React, { useState } from 'react';
import styles from '../CatalogTabs.module.css';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import { Checkbox, CheckboxGroup, Slider } from '@nextui-org/react';
import FilterHeader from '../FilterHeader/FilterHeader';
import { CardsProps } from '@/components/Card/Card';

const VideoRegTabFilter = ({setCardsRes, TabsCards}: {setCardsRes: React.Dispatch<React.SetStateAction<CardsProps[]>>, TabsCards: CardsProps[]}) => {
  const [channelsSelected, setChannelsSelected] = React.useState<string[]>([]);

  let videoRegsliderValue: number[];
  let setVideoRegSliderValue: any;
  [videoRegsliderValue, setVideoRegSliderValue] = useState<number[]>([5000, 35000])

  function videoRegFilterButton() {
    const videoRegCardsPriceFilterArray = TabsCards.filter(item => videoRegsliderValue[0] < item.price && item.price < videoRegsliderValue[1])
    if (channelsSelected.length > 0) {
      setCardsRes(videoRegCardsPriceFilterArray.filter(item => channelsSelected.includes('' + item.channels)))
    } else setCardsRes(videoRegCardsPriceFilterArray)
  }
      
        // Функция сбрасывания фильтра видеорегистратора
    function videoRegResetButton() {
        setCardsRes(TabsCards);
        setVideoRegSliderValue([5000, 35000]);
        setChannelsSelected([]);
    }

    return (
        <div className={styles.filter}>

            {/* ... для мобильной версии видеорегистраторов*/}
            <div className={styles.accordionSection}>
              <Accordion className={styles.accordionContainer}>
               <AccordionItem key={1} aria-label="Accordion 1" className={styles.accordionItem} title={<div className={styles.filterTitle}>Фильтр</div>}>
                <div className={styles.permissionTitle}>Количество каналов</div>
                <CheckboxGroup value={channelsSelected} onValueChange={setChannelsSelected}>
                  <Checkbox value="4" className={styles.permissionItem}>4 канала</Checkbox>
                  <Checkbox value="8" className={styles.permissionItem}>8 каналов</Checkbox>
                  <Checkbox value="16" className={styles.permissionItem}>16 каналов</Checkbox>
                  <Checkbox value="36" className={styles.permissionItem}>36 каналов</Checkbox>
                  <Checkbox value="64" className={styles.permissionItem}>64 каналов</Checkbox>
                </CheckboxGroup>
                <div className={styles.priceSlider}>
                  <Slider label="Цена" size="sm" step={100} minValue={5000} maxValue={35000} value={videoRegsliderValue} onChange={setVideoRegSliderValue} formatOptions={{style: "currency", currency: "RUB"}} className={styles.sliderPrice}/>
                  <div className={styles.filterButtonContainer}>
                    <button onClick={videoRegResetButton} className={styles.resetButton}>Сбросить</button>
                    <button onClick={videoRegFilterButton} className={styles.filterButton}>Применить</button>
                 </div>
                </div>
               </AccordionItem>
             </Accordion>
            </div>

            {/* ... Фильтр для Desktop видеорегистроров*/}
            <div className={styles.DesktopFilterSection}>
              <FilterHeader />
              <div className={styles.permissionTitle}>Количество каналов</div>
              <CheckboxGroup value={channelsSelected} onValueChange={setChannelsSelected}>
                <Checkbox value="4" className={styles.permissionItem}>4 канала</Checkbox>
                <Checkbox value="8" className={styles.permissionItem}>8 каналов</Checkbox>
                <Checkbox value="16" className={styles.permissionItem}>16 каналов</Checkbox>
                <Checkbox value="36" className={styles.permissionItem}>36 каналов</Checkbox>
                <Checkbox value="64" className={styles.permissionItem}>64 каналов</Checkbox>
              </CheckboxGroup>
              <div className={styles.priceSlider}>
                <Slider label="Цена" size="sm" step={100} minValue={5000} maxValue={35000} value={videoRegsliderValue} onChange={setVideoRegSliderValue} formatOptions={{style: "currency", currency: "RUB"}} className={styles.sliderPrice}/>
                <div className={styles.filterButtonContainer}>
                  <button onClick={videoRegResetButton} className={styles.resetButton}>Сбросить</button>
                  <button onClick={videoRegFilterButton} className={styles.filterButton}>Применить</button>
                </div>
              </div>
            </div>
          </div>
    );
};

export default VideoRegTabFilter;