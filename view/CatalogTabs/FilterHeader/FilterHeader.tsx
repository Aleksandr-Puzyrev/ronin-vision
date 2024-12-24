import Image from 'next/image';
import React from 'react';
import FilterIcon from '../../../public/filterIcon.svg';
import styles from './FilterHeader.module.css';


const FilterHeader = () => {
    return (
        <div className={styles.filterTitleCont}>
              <div className={styles.filterTitle}>Фильтр</div>
              <Image src={FilterIcon} alt=""/>
        </div>
    );
};

export default FilterHeader;