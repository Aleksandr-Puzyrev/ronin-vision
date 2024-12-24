"use client";


import Image from 'next/image';
import React from 'react';
import DropdownIcon from '../../public/dropdown.svg';
import styles from './Dropdown.module.css'

interface DropdownProps {
    children: React.ReactNode;
}

const Dropdown = ({children}: DropdownProps) => {
    return (
        <div className={styles.container}>
            <Image src={DropdownIcon} alt='' width={58} height={25} className={styles.dropIcon}/>
            <div className={styles.title}>{children}</div>
        </div>
    );
};

export default Dropdown;