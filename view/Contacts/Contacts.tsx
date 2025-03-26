import React from 'react';
import styles from './Contacts.module.css';
import Image from 'next/image';
import DropDownMiniIcon from '../../public/dropdown.svg';

const Contacts = () => {
    return (
        <div className={styles.contactsSection}>
            <div className={styles.contactsItem}>
                <div className={styles.imgAndTitleContainer}>
                    <Image src={DropDownMiniIcon} alt='' width={35} height={9}/>
                    <div className={styles.contactsTitle}>Телефон:</div>
                </div>
                <div className={styles.contactsDescription}>+7 (909) 305-09-23 (отдел продаж)</div>
            </div>
            <div className={styles.contactsItem}>
                <div className={styles.imgAndTitleContainer}>
                    <Image src={DropDownMiniIcon} alt='' width={35} height={9}/>
                    <div className={styles.contactsTitle}>E-mail:</div>
                </div>
                <div className={styles.contactsDescription}>info@ronin.com.ru</div>
            </div>
            <div className={styles.contactsItem}>
                <div className={styles.imgAndTitleContainer}>
                    <Image src={DropDownMiniIcon} alt='' width={35} height={9}/>
                    <div className={styles.contactsTitle}>Адрес:</div>
                </div>
                <div className={styles.contactsDescription}>428034, Россия, Чувашская Республика, г.Чебоксары, Московский пр., 29.</div>
            </div>
            <div className={styles.contactsItem}>
                <div className={styles.imgAndTitleContainer}>
                    <Image src={DropDownMiniIcon} alt='' width={35} height={9}/>
                    <div className={styles.contactsTitle}>Производство</div>
                </div>
                <div className={styles.contactsDescription}>Китай, г. Шэньчжэнь, Buji Town, Heshakeng Industrial park, Building 11, 3F.</div>
            </div>
        </div>
    );
};

export default Contacts;