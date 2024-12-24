import React from 'react';
import styles from './DescriptionHome.module.css';
import Image from "next/image";
import MainPageImg from "../../public/MainPageImg.png";
import MainPageMobileImg from "../../public/MainPageMobileImg.png";
import LogoSVG from "../../public/LogoSVG.svg";
import ButtonLink from '../ButtonLink/ButtonLink';

const DescriptionHome = () => {
    return (
        <div className={styles.sectionItem}>
        <Image src={MainPageMobileImg} alt="" className={styles.imageMobile}/>
        <div className={styles.sectionItemH1}>
          <div className={styles.h1}>
            <Image src={LogoSVG} alt="" className={styles.imageLogoSVG} />
            <span className={styles.spanH1}> - Эффективные решения</span>
          </div>
          <div className={styles.descriptionH1}>
            Компания Ronin - современная организация с многолетним опытом
            работы в сфере безопасности: охрана зданий, помещений, квартир и
            домов.
          </div>
          <ButtonLink href="/about">Подробнее</ButtonLink>
        </div>
        <Image src={MainPageImg} alt="" className={styles.image} />
      </div>
    );
};

export default DescriptionHome;