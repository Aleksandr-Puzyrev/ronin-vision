"use client";

import React from 'react';
import styles from './Card.module.css'
import Image, { StaticImageData } from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@nextui-org/button';

interface SpecificationsItemsTypes {
    label: string;
    value: string;
}

interface Specification {
    title: string;
    items: SpecificationsItemsTypes[];
}


export interface CardsProps {
    id: number;
    type: 'electro' | 'camera'| 'videoreg' | 'accessories';
    typeDevice: string;
    imgUrl: StaticImageData;
    title: string;
    info: string;
    description: string[];
    price: number;
    permission?: number;
    microphone?: boolean;
    poe?: boolean;
    newCard: boolean;
    power?: number;
    led?: number;
    scatteringAngle?: number;
    channels?: number;
    specifications?: Specification[];
    passportUrl?: string;
    pathForNewCards?: string;
}

const Card = (props: CardsProps) => {

    const router = useRouter()

    function onClickButtin() {
        props.pathForNewCards ? router.push(`${props.pathForNewCards}device/${props.id}`) : router.push('device' + '/' + `${props.id}`)
    }

    return (
        <div className={styles.containerCard} onClick={onClickButtin}>
            {props.newCard ? <div className={styles.newCard}>New</div> : ''}
            <div className={styles.imgContainer}>
                <Image width={200} height={200} src={props.imgUrl} alt='' className={styles.imgCard}/>
            </div>
            <div className={styles.textCard}>
                <div>{props.title}</div>
                <div className={styles.description}>{props.description.map(elem => <li key={elem} className={styles.descriptionItem}>{elem}</li>)}</div>
                <div className={styles.priceCard}>{props.price} ₽</div>
            </div>
            <Button className={styles.buttonCard} onClick={onClickButtin}>Подробнее</Button>
        </div>
    );
};

export default Card;