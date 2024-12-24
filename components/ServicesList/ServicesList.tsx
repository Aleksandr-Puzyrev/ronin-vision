import React from "react";
import ServicesIcon1 from "../../public/servicesIcon1.svg";
import ServicesIcon2 from "../../public/servicesIcon2.svg";
import ServicesIcon3 from "../../public/servicesIcon3.svg";
import ServicesItem from "./ServicesItem/ServicesItem";

const ServicesList = () => {
  const servicesListItem = [
    {id: "1", iconsPathName: ServicesIcon1, body: "Установка электронного замка на входную дверь"}, 
    {id: "2", iconsPathName: ServicesIcon2, body: "Установка камер видеонаблюдения"}, 
    {id: "3", iconsPathName: ServicesIcon3, body: "Установка дополнительных аксессуаров"}, 
  ]
  return (
    <ul>
      {servicesListItem.map(item => <ServicesItem key={item.id} icon={item.iconsPathName} body={item.body}/>)}
    </ul>
  );
};

export default ServicesList;
