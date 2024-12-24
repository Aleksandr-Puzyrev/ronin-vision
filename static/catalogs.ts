import { HorizonTabsHomeProps } from "@/components/HorizonTabsHome/HorizonTabsHome";
import CameraVideoImg from "../public/CameraVideoImg.png";
import ElectroZamImg from "../public/electroZamImg.png";
import VideoRegImg from "../public/videoRegImg.png";
import AccessoriesImg from "../public/accessoriesImg.png";

const data: HorizonTabsHomeProps[] = [
  {
    id: 1,
    label: `RN-65HD-i5-256G8`,
    description: "Диагональ 65 дюймов с инфокрасным сенсорным экраном",
    content: ElectroZamImg,
    tabLink: '/catalog/RN-65HD-i5-256G8',
  },
  {
    id: 2,
    label: "RN-65HD-i7-512G16",
    description: "Эффективная система видеонаблюдения даже за территориально удаленными объектами через мобильное приложение или приложение для ПК",
    content: CameraVideoImg,
    tabLink: '/catalog/RN-65HD-i7-512G16',
  },
  {
    id: 3,
    label: "RN-75HD-i5-256G",
    description: "Видеорегистраторы объединят вашу систему видеонаблюдения, чтобы контроль безопасности стал ещё более комфортным",
    content: VideoRegImg,
    tabLink: '/catalog/RN-75HD-i5-256G',
  },
  {
    id: 4,
    label: "RN-75HD-i7-512G",
    description: "Помогут организовать согласованную систему безопасности, не уходя с нашего сайта",
    content: AccessoriesImg,
    tabLink: '/catalog/RN-75HD-i7-512G',
  },
  {
    id: 5,
    label: "RN-86HD-i5-256G",
    description: "Помогут организовать согласованную систему безопасности, не уходя с нашего сайта",
    content: AccessoriesImg,
    tabLink: '/catalog/RN-75HD-i7-512G',
  },
  {
    id: 6,
    label: "RN-86HD-i7-512G",
    description: "Помогут организовать согласованную систему безопасности, не уходя с нашего сайта",
    content: AccessoriesImg,
    tabLink: '/catalog/RN-86HD-i7-512G',
  },
];

export default data;
