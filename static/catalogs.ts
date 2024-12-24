import { HorizonTabsHomeProps } from "@/components/HorizonTabsHome/HorizonTabsHome";
import CameraVideoImg from "../public/CameraVideoImg.png";
import ElectroZamImg from "../public/electroZamImg.png";
import VideoRegImg from "../public/videoRegImg.png";
import AccessoriesImg from "../public/accessoriesImg.png";

const data: HorizonTabsHomeProps[] = [
  {
    id: 1,
    label: "Электронные замки для входных дверей",
    description: "Подарят вам новый уровень безопасности",
    content: ElectroZamImg,
    tabLink: '/catalog/electro',
  },
  {
    id: 2,
    label: "Камеры видеонаблюдения",
    description: "Эффективная система видеонаблюдения даже за территориально удаленными объектами через мобильное приложение или приложение для ПК",
    content: CameraVideoImg,
    tabLink: '/catalog/camera',
  },
  {
    id: 3,
    label: "Видеорегистраторы",
    description: "Видеорегистраторы объединят вашу систему видеонаблюдения, чтобы контроль безопасности стал ещё более комфортным",
    content: VideoRegImg,
    tabLink: '/catalog/videoreg',
  },
  {
    id: 4,
    label: "Аксессуары",
    description: "Помогут организовать согласованную систему безопасности, не уходя с нашего сайта",
    content: AccessoriesImg,
    tabLink: '/catalog/accessories',
  },
];

export default data;
