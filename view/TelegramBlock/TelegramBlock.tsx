import React from 'react';
import styles from './TelegramBlock.module.css';
import ButtonLink from '@/components/ButtonLink/ButtonLink';
import TelegramIcon from '../../public/telegramIcon.svg'
import Image from 'next/image';

const TelegramBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div>Остались вопросы и нужна консультация?</div>
                <div className={styles.textBot}>Напишите нашему Telegram-боту</div>
                <Image src={TelegramIcon} alt='' className={styles.telegramIcon}/>
            </div>
            <ButtonLink href="https://t.me/shopronin_bot" target_bl='_blank'>Перейти</ButtonLink>
            <div className={styles.circleBig}></div>
            <div className={styles.circleSmall}></div>

            <div className={styles.circleMs}></div>
            <div className={styles.circleSm}></div>
        </div>
    );
};

export default TelegramBlock;