"use client";


import React from 'react';
import Dropdown from '../Dropdown/Dropdown';
import styles from './OffersContainer.module.css'

interface OffersContainerProps {
    title: string;
    children: React.ReactNode;

}

const OffersContainer = ({title, children}: OffersContainerProps) => {
    return (
        <div className={styles.container}>
            <Dropdown>{title}</Dropdown>
            <div className={styles.children}>{children}</div>
        </div>
    );
};

export default OffersContainer;