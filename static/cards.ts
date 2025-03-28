import { CardsProps } from "@/components/Card/Card";
import DS4 from "../public/src/4.jpg";
import DS17 from "../public/src/17.jpg";
import DS18 from "../public/src/18.jpg";
import DS32 from "../public/src/32.jpg";
import DS36 from "../public/src/36.jpg";
import DS37 from "../public/src/37.jpg";

const data: CardsProps[] = [
  {
    id: 1,
    type: "RN-65HD-i5-256G8",
    typeDevice: "Монитор",
    imgUrl: DS4,
    title: "RN-65HD-i5-256G8",
    info: `Новая интерактивная доска решает основные задачи в сфере образования и конференций, повышая эффективность преподавания и работы!
      Интеллектуальная интерактивная доска объединяет функции электронной доски, проектора, компьютера, мониторов, рекламных проигрывателей и аудиооборудования.
      Высокоточное инфракрасное касание толщиной примерно 1мм создает ощущение, что вы пишете на бумаге.
      Тыльную сторону ладони можно использовать в качестве ластика, просто аккуратно протирая.
      Легко стирает, все что нужно, прост в использовании. Панель поддерживает запись одновременно двумя ручками в разных цветах, может вставлять файлы, графики, таблицы и т.д.
      Поддерживает 2 операционные системы: Android и Windows, а также быстрое переключается между ними.
      Восемь встроенных микрофонов используют технологию интеллектуальной фильтрации окружающей среды, имеют дальность приема звуков в 10 метров. Это помогает распознавать голос человека и устранять лишний шум даже в больших помещениях. В левой и правой частях экрана есть скрытые меню. Нажмите на стрелку, чтобы его открыть. Нажмите на другую страницу, чтобы скрыть меню - легкое управление. Вы можете переключать каналы, комментировать, устанавливать настройки и использовать разные другие функции.`,
    description: [
      "Новая интерактивная доска",
    ],
    price: 250000,
    newCard: false,
    specifications: [
      {
        title: "Параметры экрана",
        items: [
          { label: "Диагональ", value: "65 дюймов" },
          { label: "Тип подсветки", value: "D-LED" },
          { label: "Соотношение сторон", value: "16:09" },
          { label: "Разрешение", value: "3840х2160 (4K Ultra HD)" },
          { label: "Яркость", value: "350 кд/м2" },
          { label: "Контрастность", value: "3000:1" },
          { label: "Угол обзора", value: "178°(H)/178°(V)" },
          { label: "Цветопередача", value: "10 bit 1.07B (1.07 млрд)" },
          { label: "Чипсет", value: "CVTE T982.61 (4+32G)" },
          { label: "Жизненный цикл", value: "≥50,000 ч" },
        ],
      },
      {
        title: "Параметры панели",
        items: [
          { label: "Тип сенсора", value: "Инфракрасный сенсорный экран" },
          { label: "Время отклика касания", value: "≤8сек" },
          { label: "Толщина защитного стекла", value: "4 мм" },
        ],
      },
      {
        title: "Операционная система",
        items: [
          { label: "ОС (опционально)", value: "Android 11/13/14" },
          { label: "Объем оперативной памяти (опционально)", value: "4G/8G/16G" },
          { label: "Объем внутренней памяти", value: "32G/128G/256G" },
        ],
      },
      {
        title: "Интерфейсы",
        items: [
          {
            label: "На передней части панели",
            value: "USB-C INх1 (LAN support), HDMI х1 (4K@60HZ, 2.3), USB 3.0х2, Touch USBх1",
          },
          {
            label: "На задней части панели",
            value:
              "HDMIх2; (4K@30HZ, 2.3), AUDIO IN х1, AUDIO OUT х1, MIC IN x1; SPDIF OUT х1, USB 2.0х1, USB 3.0х1, Touch USBх1, RS232 х1; LAN RJ45 х2 (10/100/1000M); VGA",
          },
          { label: "Wi-Fi (6.0)", value: "Wifi/AP 2.4G/5G；802.11ax/ac/a/b/g/n" },
          { label: "Поддерживаемые стандарты защиты", value: "802.11а/b/g/n/ac/ax" },
          { label: "Тип сенсора", value: "Инфракрасный, интерактивный" },
          { label: "Количество касаний", value: "Одновременно 20" },
          { label: "Размер панели", value: "1488x906x87 мм" },
        ],
      },
      {
        title: "Встраиваемый интегрируемый компьютер (OPS)",
        items: [
          { label: "Операционная система", value: "Windows 11" },
          { label: "Процессор", value: "Intel Core i5-12450H (4.4 Ггц, 8 ядер 12 потоков)" },
          { label: "Оперативная память", value: "8Gb/16Gb/32Gb" },
          { label: "Количество касаний", value: "Одновременно 40" },
          { label: "Точность касания", value: "1 мм" },
          { label: "Жесткий диск SSD (опционально)", value: "128Gb/256Gb/512Gb" },
          { label: "Видеокарта", value: "Intel HD" },
          { label: "Сеть", value: "Wi-Fi, WLAN, Bluetooth" },
          { label: "OPS слот", value: "JAE 80 pin" },
        ],
      },
      {
        title: "Питание",
        items: [
          { label: "Напряжение", value: "AC90-260V" },
          { label: "Частота обновления", value: "50/60 Hz" },
        ],
      },
      {
        title: "Условия использования",
        items: [
          { label: "Температура эксплуатации", value: "от -5 до +50" },
          { label: "Температура хранения", value: "от -20 до +60" },
          { label: "Рабочая влажность", value: "Не более 90°" },
          {
            label: "Способы подключения",
            value:
              "Проводное, беспроводное, при помощи устройства Dongle без установки дополнительных приложений",
          },
        ],
      },
      {
        title: "Дополнительно",
        items: [
          { label: "Встроенная WEB-камера с микрофоном", value: "48MP, 8 микрофонов" },
          { label: "Динамик", value: "2*16W/+сабвуфер 2*16W" },
          { label: "Дальность действия", value: "8 м" },
          {
            label: "Тип крепления (опционально)",
            value: "Мобильная стойка, ножка манипулятор, настенное крепление",
          },
          { label: "Цвет корпуса", value: "Черный, серебро" },
          { label: "Материал корпуса", value: "Алюминиевый профиль, сталь 2 мм" },
          { label: "Размеры упаковки", value: "1628x208x1014 мм" },
          { label: "Вес", value: "37 кг" },
          { label: "Вес с упаковкой", value: "45 кг" },
        ],
      },
    ],
    passportUrl: "/passport/Pass-RN-DS13B-TY.pdf",
  },
  {
    id: 2,
    type: "RN-65HD-i7-512G16",
    typeDevice: "Электронный замок",
    imgUrl: DS17,
    title: "RN-65HD-i7-512G16",
    info: `Новая интерактивная доска решает основные задачи в сфере образования и конференций, повышая эффективность преподавания и работы!
      Интеллектуальная интерактивная доска объединяет функции электронной доски, проектора, компьютера, мониторов, рекламных проигрывателей и аудиооборудования.
      Высокоточное инфракрасное касание толщиной примерно 1мм создает ощущение, что вы пишете на бумаге.
      Тыльную сторону ладони можно использовать в качестве ластика, просто аккуратно протирая.
      Легко стирает, все что нужно, прост в использовании. Панель поддерживает запись одновременно двумя ручками в разных цветах, может вставлять файлы, графики, таблицы и т.д.
      Поддерживает 2 операционные системы: Android и Windows, а также быстрое переключается между ними.
      Восемь встроенных микрофонов используют технологию интеллектуальной фильтрации окружающей среды, имеют дальность приема звуков в 10 метров. Это помогает распознавать голос человека и устранять лишний шум даже в больших помещениях. В левой и правой частях экрана есть скрытые меню. Нажмите на стрелку, чтобы его открыть. Нажмите на другую страницу, чтобы скрыть меню - легкое управление. Вы можете переключать каналы, комментировать, устанавливать настройки и использовать разные другие функции.`,
    description: [
      "Новая интерактивная доска",
    ],
    price: 300000,
    newCard: false,
    specifications: [
      {
        title: "Параметры экрана",
        items: [
          { label: "Диагональ", value: "65 дюймов" },
          { label: "Тип подсветки", value: "D-LED" },
          { label: "Соотношение сторон", value: "16:09" },
          { label: "Разрешение", value: "3840х2160 (4K Ultra HD)" },
          { label: "Яркость", value: "350 кд/м2" },
          { label: "Контрастность", value: "3000:1" },
          { label: "Угол обзора", value: "178°(H)/178°(V)" },
          { label: "Цветопередача", value: "10 bit 1.07B (1.07 млрд)" },
          { label: "Чипсет", value: "CVTE T982.61 (4+32G)" },
          { label: "Жизненный цикл", value: "≥50,000 ч" },
        ],
      },
      {
        title: "Параметры панели",
        items: [
          { label: "Тип сенсора", value: "Инфракрасный сенсорный экран" },
          { label: "Время отклика касания", value: "≤8сек" },
          { label: "Толщина защитного стекла", value: "4 мм" },
        ],
      },
      {
        title: "Операционная система",
        items: [
          { label: "ОС (опционально)", value: "Android 11/13/14" },
          { label: "Объем оперативной памяти (опционально)", value: "4G/8G/16G" },
          { label: "Объем внутренней памяти", value: "32G/128G/256G" },
        ],
      },
      {
        title: "Интерфейсы",
        items: [
          {
            label: "На передней части панели",
            value: "USB-C INх1 (LAN support), HDMI х1 (4K@60HZ, 2.3), USB 3.0х2, Touch USBх1",
          },
          {
            label: "На задней части панели",
            value:
              "HDMIх2; (4K@30HZ, 2.3), AUDIO IN х1, AUDIO OUT х1, MIC IN x1; SPDIF OUT х1, USB 2.0х1, USB 3.0х1, Touch USBх1, RS232 х1; LAN RJ45 х2 (10/100/1000M); VGA",
          },
          { label: "Wi-Fi (6.0)", value: "Wifi/AP 2.4G/5G；802.11ax/ac/a/b/g/n" },
          { label: "Поддерживаемые стандарты защиты", value: "802.11а/b/g/n/ac/ax" },
          { label: "Тип сенсора", value: "Инфракрасный, интерактивный" },
          { label: "Количество касаний", value: "Одновременно 20" },
          { label: "Размер панели", value: "1488x906x87 мм" },
        ],
      },
      {
        title: "Встраиваемый интегрируемый компьютер (OPS)",
        items: [
          { label: "Операционная система", value: "Windows 11" },
          { label: "Процессор", value: "Intel Core i7-13620H (4.9 Ггц, 10 ядер 16 потоков)" },
          { label: "Оперативная память", value: "8Gb/16Gb/32Gb" },
          { label: "Количество касаний", value: "Одновременно 40" },
          { label: "Точность касания", value: "1 мм" },
          { label: "Жесткий диск SSD (опционально)", value: "128Gb/256Gb/512Gb" },
          { label: "Видеокарта", value: "Intel HD" },
          { label: "Сеть", value: "Wi-Fi, WLAN, Bluetooth" },
          { label: "OPS слот", value: "JAE 80 pin" },
        ],
      },
      {
        title: "Питание",
        items: [
          { label: "Напряжение", value: "AC90-260V" },
          { label: "Частота обновления", value: "50/60 Hz" },
        ],
      },
      {
        title: "Условия использования",
        items: [
          { label: "Температура эксплуатации", value: "от -5 до +50" },
          { label: "Температура хранения", value: "от -20 до +60" },
          { label: "Рабочая влажность", value: "Не более 90°" },
          {
            label: "Способы подключения",
            value:
              "Проводное, беспроводное, при помощи устройства Dongle без установки дополнительных приложений",
          },
        ],
      },
      {
        title: "Дополнительно",
        items: [
          { label: "Встроенная WEB-камера с микрофоном", value: "48MP, 8 микрофонов" },
          { label: "Динамик", value: "2*16W/+сабвуфер 2*16W" },
          { label: "Дальность действия", value: "8 м" },
          {
            label: "Тип крепления (опционально)",
            value: "Мобильная стойка, ножка манипулятор, настенное крепление",
          },
          { label: "Цвет корпуса", value: "Черный, серебро" },
          { label: "Материал корпуса", value: "Алюминиевый профиль, сталь 2 мм" },
          { label: "Размеры упаковки", value: "1628x208x1014 мм" },
          { label: "Вес", value: "37 кг" },
          { label: "Вес с упаковкой", value: "45 кг" },
        ],
      },
    ],
    passportUrl: "/passport/Pass-RN-DS15B-CTY.pdf",
  },
  {
    id: 3,
    type: "RN-75HD-i5-256G",
    typeDevice: "Электронный замок",
    imgUrl: DS18,
    title: "RN-75HD-i5-256G",
    info: `Новая интерактивная доска решает основные задачи в сфере образования и конференций, повышая эффективность преподавания и работы!
      Интеллектуальная интерактивная доска объединяет функции электронной доски, проектора, компьютера, мониторов, рекламных проигрывателей и аудиооборудования.
      Высокоточное инфракрасное касание толщиной примерно 1мм создает ощущение, что вы пишете на бумаге.
      Тыльную сторону ладони можно использовать в качестве ластика, просто аккуратно протирая.
      Легко стирает, все что нужно, прост в использовании. Панель поддерживает запись одновременно двумя ручками в разных цветах, может вставлять файлы, графики, таблицы и т.д.
      Поддерживает 2 операционные системы: Android и Windows, а также быстрое переключается между ними.
      Восемь встроенных микрофонов используют технологию интеллектуальной фильтрации окружающей среды, имеют дальность приема звуков в 10 метров. Это помогает распознавать голос человека и устранять лишний шум даже в больших помещениях. В левой и правой частях экрана есть скрытые меню. Нажмите на стрелку, чтобы его открыть. Нажмите на другую страницу, чтобы скрыть меню - легкое управление. Вы можете переключать каналы, комментировать, устанавливать настройки и использовать разные другие функции.`,
    description: [
      "Новая интерактивная доска",
    ],
    price: 300000,
    newCard: true,
    specifications: [
      {
        title: "Параметры экрана",
        items: [
          { label: "Диагональ", value: "75 дюймов" },
          { label: "Тип подсветки", value: "D-LED" },
          { label: "Соотношение сторон", value: "16:09" },
          { label: "Разрешение", value: "3840х2160 (4K Ultra HD)" },
          { label: "Яркость", value: "350 кд/м2" },
          { label: "Контрастность", value: "5000:1" },
          { label: "Угол обзора", value: "178°(H)/178°(V)" },
          { label: "Цветопередача", value: "10 bit 1.07B (1.07 млрд)" },
          { label: "Чипсет", value: "CVTE T982.61 (4+32G)" },
          { label: "Жизненный цикл", value: "≥50,000 ч" },
        ],
      },
      {
        title: "Параметры панели",
        items: [
          { label: "Тип сенсора", value: "Инфракрасный сенсорный экран" },
          { label: "Время отклика касания", value: "≤8сек" },
          { label: "Толщина защитного стекла", value: "4 мм" },
        ],
      },
      {
        title: "Операционная система",
        items: [
          { label: "ОС (опционально)", value: "Android 11/13/14" },
          { label: "Объем оперативной памяти (опционально)", value: "4G/8G/16G" },
          { label: "Объем внутренней памяти", value: "32G/128G/256G" },
        ],
      },
      {
        title: "Интерфейсы",
        items: [
          {
            label: "На передней части панели",
            value: "USB-C INх1 (LAN support), HDMI х1 (4K@60HZ, 2.3), USB 3.0х2, Touch USBх1",
          },
          {
            label: "На задней части панели",
            value:
              "HDMIх2; (4K@30HZ, 2.3), AUDIO IN х1, AUDIO OUT х1, MIC IN x1; SPDIF OUT х1, USB 2.0х1, USB 3.0х1, Touch USBх1, RS232 х1; LAN RJ45 х2 (10/100/1000M); VGA",
          },
          { label: "Wi-Fi (6.0)", value: "Wifi/AP 2.4G/5G；802.11ax/ac/a/b/g/n" },
          { label: "Поддерживаемые стандарты защиты", value: "802.11а/b/g/n/ac/ax" },
          { label: "Тип сенсора", value: "Инфракрасный, интерактивный" },
          { label: "Количество касаний", value: "Одновременно 20" },
          { label: "Размер панели", value: "1709x1038x90 мм" },
        ],
      },
      {
        title: "Встраиваемый интегрируемый компьютер (OPS)",
        items: [
          { label: "Операционная система", value: "Windows 11" },
          { label: "Процессор", value: "Intel Core i5-12450H (4.4 Ггц, 8 ядер 12 потоков)" },
          { label: "Оперативная память", value: "8Gb/16Gb/32Gb" },
          { label: "Количество касаний", value: "Одновременно 40" },
          { label: "Точность касания", value: "1 мм" },
          { label: "Жесткий диск SSD (опционально)", value: "128Gb/256Gb/512Gb" },
          { label: "Видеокарта", value: "Intel HD" },
          { label: "Сеть", value: "Wi-Fi, WLAN, Bluetooth" },
          { label: "OPS слот", value: "JAE 80 pin" },
        ],
      },
      {
        title: "Питание",
        items: [
          { label: "Напряжение", value: "AC90-260V" },
          { label: "Частота обновления", value: "50/60 Hz" },
        ],
      },
      {
        title: "Условия использования",
        items: [
          { label: "Температура эксплуатации", value: "от -5 до +50" },
          { label: "Температура хранения", value: "от -20 до +60" },
          { label: "Рабочая влажность", value: "Не более 90°" },
          {
            label: "Способы подключения",
            value:
              "Проводное, беспроводное, при помощи устройства Dongle без установки дополнительных приложений",
          },
        ],
      },
      {
        title: "Дополнительно",
        items: [
          { label: "Встроенная WEB-камера с микрофоном", value: "48MP, 8 микрофонов" },
          { label: "Динамик", value: "2*16W/+сабвуфер 2*16W" },
          { label: "Дальность действия", value: "8 м" },
          {
            label: "Тип крепления (опционально)",
            value: "Мобильная стойка, ножка манипулятор, настенное крепление",
          },
          { label: "Цвет корпуса", value: "Черный, серебро" },
          { label: "Материал корпуса", value: "Алюминиевый профиль, сталь 2 мм" },
          { label: "Размеры упаковки", value: "1709x1038x90 мм" },
          { label: "Вес", value: "48 кг" },
          { label: "Вес с упаковкой", value: "63 кг" },
        ],
      },
    ],
    passportUrl: "/passport/Pass-RN-DS15B-TY.pdf",
  },
  {
    id: 4,
    type: "RN-75HD-i7-512G",
    typeDevice: "Электронный замок",
    imgUrl: DS32,
    title: "RN-75HD-i7-512G",
    info: `Новая интерактивная доска решает основные задачи в сфере образования и конференций, повышая эффективность преподавания и работы!
      Интеллектуальная интерактивная доска объединяет функции электронной доски, проектора, компьютера, мониторов, рекламных проигрывателей и аудиооборудования.
      Высокоточное инфракрасное касание толщиной примерно 1мм создает ощущение, что вы пишете на бумаге.
      Тыльную сторону ладони можно использовать в качестве ластика, просто аккуратно протирая.
      Легко стирает, все что нужно, прост в использовании. Панель поддерживает запись одновременно двумя ручками в разных цветах, может вставлять файлы, графики, таблицы и т.д.
      Поддерживает 2 операционные системы: Android и Windows, а также быстрое переключается между ними.
      Восемь встроенных микрофонов используют технологию интеллектуальной фильтрации окружающей среды, имеют дальность приема звуков в 10 метров. Это помогает распознавать голос человека и устранять лишний шум даже в больших помещениях. В левой и правой частях экрана есть скрытые меню. Нажмите на стрелку, чтобы его открыть. Нажмите на другую страницу, чтобы скрыть меню - легкое управление. Вы можете переключать каналы, комментировать, устанавливать настройки и использовать разные другие функции.`,
    description: [
      "Новая интерактивная доска",
    ],
    price: 350000,
    newCard: true,
    specifications: [
      {
        title: "Параметры экрана",
        items: [
          { label: "Диагональ", value: "75 дюймов" },
          { label: "Тип подсветки", value: "D-LED" },
          { label: "Соотношение сторон", value: "16:09" },
          { label: "Разрешение", value: "3840х2160 (4K Ultra HD)" },
          { label: "Яркость", value: "350 кд/м2" },
          { label: "Контрастность", value: "5000:1" },
          { label: "Угол обзора", value: "178°(H)/178°(V)" },
          { label: "Цветопередача", value: "10 bit 1.07B (1.07 млрд)" },
          { label: "Чипсет", value: "CVTE T982.61 (4+32G)" },
          { label: "Жизненный цикл", value: "≥50,000 ч" },
        ],
      },
      {
        title: "Параметры панели",
        items: [
          { label: "Тип сенсора", value: "Инфракрасный сенсорный экран" },
          { label: "Время отклика касания", value: "≤8сек" },
          { label: "Толщина защитного стекла", value: "4 мм" },
        ],
      },
      {
        title: "Операционная система",
        items: [
          { label: "ОС (опционально)", value: "Android 11/13/14" },
          { label: "Объем оперативной памяти (опционально)", value: "4G/8G/16G" },
          { label: "Объем внутренней памяти", value: "32G/128G/256G" },
        ],
      },
      {
        title: "Интерфейсы",
        items: [
          {
            label: "На передней части панели",
            value: "USB-C INх1 (LAN support), HDMI х1 (4K@60HZ, 2.3), USB 3.0х2, Touch USBх1",
          },
          {
            label: "На задней части панели",
            value:
              "HDMIх2; (4K@30HZ, 2.3), AUDIO IN х1, AUDIO OUT х1, MIC IN x1; SPDIF OUT х1, USB 2.0х1, USB 3.0х1, Touch USBх1, RS232 х1; LAN RJ45 х2 (10/100/1000M); VGA",
          },
          { label: "Wi-Fi (6.0)", value: "Wifi/AP 2.4G/5G；802.11ax/ac/a/b/g/n" },
          { label: "Поддерживаемые стандарты защиты", value: "802.11а/b/g/n/ac/ax" },
          { label: "Тип сенсора", value: "Инфракрасный, интерактивный" },
          { label: "Количество касаний", value: "Одновременно 20" },
          { label: "Размер панели", value: "1709x1038x90 мм" },
        ],
      },
      {
        title: "Встраиваемый интегрируемый компьютер (OPS)",
        items: [
          { label: "Операционная система", value: "Windows 11" },
          { label: "Процессор", value: "Intel Core i7-13620H (4.9 Ггц, 10 ядер 16 потоков)" },
          { label: "Оперативная память", value: "8Gb/16Gb/32Gb" },
          { label: "Количество касаний", value: "Одновременно 40" },
          { label: "Точность касания", value: "1 мм" },
          { label: "Жесткий диск SSD (опционально)", value: "128Gb/256Gb/512Gb" },
          { label: "Видеокарта", value: "Intel HD" },
          { label: "Сеть", value: "Wi-Fi, WLAN, Bluetooth" },
          { label: "OPS слот", value: "JAE 80 pin" },
        ],
      },
      {
        title: "Питание",
        items: [
          { label: "Напряжение", value: "AC90-260V" },
          { label: "Частота обновления", value: "50/60 Hz" },
        ],
      },
      {
        title: "Условия использования",
        items: [
          { label: "Температура эксплуатации", value: "от -5 до +50" },
          { label: "Температура хранения", value: "от -20 до +60" },
          { label: "Рабочая влажность", value: "Не более 90°" },
          {
            label: "Способы подключения",
            value:
              "Проводное, беспроводное, при помощи устройства Dongle без установки дополнительных приложений",
          },
        ],
      },
      {
        title: "Дополнительно",
        items: [
          { label: "Встроенная WEB-камера с микрофоном", value: "48MP, 8 микрофонов" },
          { label: "Динамик", value: "2*16W/+сабвуфер 2*16W" },
          { label: "Дальность действия", value: "8 м" },
          {
            label: "Тип крепления (опционально)",
            value: "Мобильная стойка, ножка манипулятор, настенное крепление",
          },
          { label: "Цвет корпуса", value: "Черный, серебро" },
          { label: "Материал корпуса", value: "Алюминиевый профиль, сталь 2 мм" },
          { label: "Размеры упаковки", value: "1709x1038x90 мм" },
          { label: "Вес", value: "48 кг" },
          { label: "Вес с упаковкой", value: "63 кг" },
        ],
      },
    ],
    passportUrl: "/passport/Pass-RN-DS15B-FTY.pdf",
  },
  {
    id: 5,
    type: "RN-86HD-i5-256G",
    typeDevice: "Электронный замок",
    imgUrl: DS36,
    title: "RN-86HD-i5-256G",
    info: `Новая интерактивная доска решает основные задачи в сфере образования и конференций, повышая эффективность преподавания и работы!
      Интеллектуальная интерактивная доска объединяет функции электронной доски, проектора, компьютера, мониторов, рекламных проигрывателей и аудиооборудования.
      Высокоточное инфракрасное касание толщиной примерно 1мм создает ощущение, что вы пишете на бумаге.
      Тыльную сторону ладони можно использовать в качестве ластика, просто аккуратно протирая.
      Легко стирает, все что нужно, прост в использовании. Панель поддерживает запись одновременно двумя ручками в разных цветах, может вставлять файлы, графики, таблицы и т.д.
      Поддерживает 2 операционные системы: Android и Windows, а также быстрое переключается между ними.
      Восемь встроенных микрофонов используют технологию интеллектуальной фильтрации окружающей среды, имеют дальность приема звуков в 10 метров. Это помогает распознавать голос человека и устранять лишний шум даже в больших помещениях. В левой и правой частях экрана есть скрытые меню. Нажмите на стрелку, чтобы его открыть. Нажмите на другую страницу, чтобы скрыть меню - легкое управление. Вы можете переключать каналы, комментировать, устанавливать настройки и использовать разные другие функции.`,
    description: ["Новая интерактивная доска",],
    price: 350000,
    newCard: true,
    specifications: [
      {
        title: "Параметры экрана",
        items: [
          { label: "Диагональ", value: "86 дюймов" },
          { label: "Тип подсветки", value: "D-LED" },
          { label: "Соотношение сторон", value: "16:09" },
          { label: "Разрешение", value: "3840х2160 (4K Ultra HD)" },
          { label: "Яркость", value: "350 кд/м2" },
          { label: "Контрастность", value: "5000:1" },
          { label: "Угол обзора", value: "178°(H)/178°(V)" },
          { label: "Цветопередача", value: "10 bit 1.07B (1.07 млрд)" },
          { label: "Чипсет", value: "CVTE T982.61 (4+32G)" },
          { label: "Жизненный цикл", value: "≥50,000 ч" },
        ],
      },
      {
        title: "Параметры панели",
        items: [
          { label: "Тип сенсора", value: "Инфракрасный сенсорный экран" },
          { label: "Время отклика касания", value: "≤8сек" },
          { label: "Толщина защитного стекла", value: "4 мм" },
        ],
      },
      {
        title: "Операционная система",
        items: [
          { label: "ОС (опционально)", value: "Android 11/13/14" },
          { label: "Объем оперативной памяти (опционально)", value: "4G/8G/16G" },
          { label: "Объем внутренней памяти", value: "32G/128G/256G" },
        ],
      },
      {
        title: "Интерфейсы",
        items: [
          {
            label: "На передней части панели",
            value: "USB-C INх1 (LAN support), HDMI х1 (4K@60HZ, 2.3), USB 3.0х2, Touch USBх1",
          },
          {
            label: "На задней части панели",
            value:
              "HDMIх2; (4K@30HZ, 2.3), AUDIO IN х1, AUDIO OUT х1, MIC IN x1; SPDIF OUT х1, USB 2.0х1, USB 3.0х1, Touch USBх1, RS232 х1; LAN RJ45 х2 (10/100/1000M); VGA",
          },
          { label: "Wi-Fi (6.0)", value: "Wifi/AP 2.4G/5G；802.11ax/ac/a/b/g/n" },
          { label: "Поддерживаемые стандарты защиты", value: "802.11а/b/g/n/ac/ax" },
          { label: "Тип сенсора", value: "Инфракрасный, интерактивный" },
          { label: "Количество касаний", value: "Одновременно 20" },
          { label: "Размер панели", value: "1954x1138x88 мм" },
        ],
      },
      {
        title: "Встраиваемый интегрируемый компьютер (OPS)",
        items: [
          { label: "Операционная система", value: "Windows 11" },
          { label: "Процессор", value: "Intel Core i5-12450H (4.4 Ггц, 8 ядер 12 потоков)" },
          { label: "Оперативная память", value: "8Gb/16Gb/32Gb" },
          { label: "Количество касаний", value: "Одновременно 40" },
          { label: "Точность касания", value: "1 мм" },
          { label: "Жесткий диск SSD (опционально)", value: "128Gb/256Gb/512Gb" },
          { label: "Видеокарта", value: "Intel HD" },
          { label: "Сеть", value: "Wi-Fi, WLAN, Bluetooth" },
          { label: "OPS слот", value: "JAE 80 pin" },
        ],
      },
      {
        title: "Питание",
        items: [
          { label: "Напряжение", value: "AC90-260V" },
          { label: "Частота обновления", value: "50/60 Hz" },
        ],
      },
      {
        title: "Условия использования",
        items: [
          { label: "Температура эксплуатации", value: "от -5 до +50" },
          { label: "Температура хранения", value: "от -20 до +60" },
          { label: "Рабочая влажность", value: "Не более 90°" },
          {
            label: "Способы подключения",
            value:
              "Проводное, беспроводное, при помощи устройства Dongle без установки дополнительных приложений",
          },
        ],
      },
      {
        title: "Дополнительно",
        items: [
          { label: "Встроенная WEB-камера с микрофоном", value: "48MP, 8 микрофонов" },
          { label: "Динамик", value: "2*16W/+сабвуфер 2*16W" },
          { label: "Дальность действия", value: "8 м" },
          {
            label: "Тип крепления (опционально)",
            value: "Мобильная стойка, ножка манипулятор, настенное крепление",
          },
          { label: "Цвет корпуса", value: "Черный, серебро" },
          { label: "Материал корпуса", value: "Алюминиевый профиль, сталь 2 мм" },
          { label: "Размеры упаковки", value: "1954x1138x88 мм" },
          { label: "Вес", value: "64 кг" },
          { label: "Вес с упаковкой", value: "83 кг" },
        ],
      },
    ],
    passportUrl: "/passport/Pass-RN-DS90B-TYF.pdf",
  },
  {
    id: 6,
    type: "RN-86HD-i7-512G",
    typeDevice: "Камера видеонаблюдения",
    imgUrl: DS37,
    title: "RN-86HD-i7-512G",
    info: `Новая интерактивная доска решает основные задачи в сфере образования и конференций, повышая эффективность преподавания и работы!
      Интеллектуальная интерактивная доска объединяет функции электронной доски, проектора, компьютера, мониторов, рекламных проигрывателей и аудиооборудования.
      Высокоточное инфракрасное касание толщиной примерно 1мм создает ощущение, что вы пишете на бумаге.
      Тыльную сторону ладони можно использовать в качестве ластика, просто аккуратно протирая.
      Легко стирает, все что нужно, прост в использовании. Панель поддерживает запись одновременно двумя ручками в разных цветах, может вставлять файлы, графики, таблицы и т.д.
      Поддерживает 2 операционные системы: Android и Windows, а также быстрое переключается между ними.
      Восемь встроенных микрофонов используют технологию интеллектуальной фильтрации окружающей среды, имеют дальность приема звуков в 10 метров. Это помогает распознавать голос человека и устранять лишний шум даже в больших помещениях. В левой и правой частях экрана есть скрытые меню. Нажмите на стрелку, чтобы его открыть. Нажмите на другую страницу, чтобы скрыть меню - легкое управление. Вы можете переключать каналы, комментировать, устанавливать настройки и использовать разные другие функции.`,
    description: [
      "Новая интерактивная доска",
    ],
    price: 400000,
    permission: 3,
    microphone: true,
    poe: true,
    newCard: true,
    specifications: [
      {
        title: "Параметры экрана",
        items: [
          { label: "Диагональ", value: "86 дюймов" },
          { label: "Тип подсветки", value: "D-LED" },
          { label: "Соотношение сторон", value: "16:09" },
          { label: "Разрешение", value: "3840х2160 (4K Ultra HD)" },
          { label: "Яркость", value: "350 кд/м2" },
          { label: "Контрастность", value: "5000:1" },
          { label: "Угол обзора", value: "178°(H)/178°(V)" },
          { label: "Цветопередача", value: "10 bit 1.07B (1.07 млрд)" },
          { label: "Чипсет", value: "CVTE T982.61 (4+32G)" },
          { label: "Жизненный цикл", value: "≥50,000 ч" },
        ],
      },
      {
        title: "Параметры панели",
        items: [
          { label: "Тип сенсора", value: "Инфракрасный сенсорный экран" },
          { label: "Время отклика касания", value: "≤8сек" },
          { label: "Толщина защитного стекла", value: "4 мм" },
        ],
      },
      {
        title: "Операционная система",
        items: [
          { label: "ОС (опционально)", value: "Android 11/13/14" },
          { label: "Объем оперативной памяти (опционально)", value: "4G/8G/16G" },
          { label: "Объем внутренней памяти", value: "32G/128G/256G" },
        ],
      },
      {
        title: "Интерфейсы",
        items: [
          {
            label: "На передней части панели",
            value: "USB-C INх1 (LAN support), HDMI х1 (4K@60HZ, 2.3), USB 3.0х2, Touch USBх1",
          },
          {
            label: "На задней части панели",
            value:
              "HDMIх2; (4K@30HZ, 2.3), AUDIO IN х1, AUDIO OUT х1, MIC IN x1; SPDIF OUT х1, USB 2.0х1, USB 3.0х1, Touch USBх1, RS232 х1; LAN RJ45 х2 (10/100/1000M); VGA",
          },
          { label: "Wi-Fi (6.0)", value: "Wifi/AP 2.4G/5G；802.11ax/ac/a/b/g/n" },
          { label: "Поддерживаемые стандарты защиты", value: "802.11а/b/g/n/ac/ax" },
          { label: "Тип сенсора", value: "Инфракрасный, интерактивный" },
          { label: "Количество касаний", value: "Одновременно 20" },
          { label: "Размер панели", value: "1954x1138x88 мм" },
        ],
      },
      {
        title: "Встраиваемый интегрируемый компьютер (OPS)",
        items: [
          { label: "Операционная система", value: "Windows 11" },
          { label: "Процессор", value: " Intel Core i7-13620H (4.9 Ггц, 10 ядер 16 потоков)" },
          { label: "Оперативная память", value: "8Gb/16Gb/32Gb" },
          { label: "Количество касаний", value: "Одновременно 40" },
          { label: "Точность касания", value: "1 мм" },
          { label: "Жесткий диск SSD (опционально)", value: "128Gb/256Gb/512Gb" },
          { label: "Видеокарта", value: "Intel HD" },
          { label: "Сеть", value: "Wi-Fi, WLAN, Bluetooth" },
          { label: "OPS слот", value: "JAE 80 pin" },
        ],
      },
      {
        title: "Питание",
        items: [
          { label: "Напряжение", value: "AC90-260V" },
          { label: "Частота обновления", value: "50/60 Hz" },
        ],
      },
      {
        title: "Условия использования",
        items: [
          { label: "Температура эксплуатации", value: "от -5 до +50" },
          { label: "Температура хранения", value: "от -20 до +60" },
          { label: "Рабочая влажность", value: "Не более 90°" },
          {
            label: "Способы подключения",
            value:
              "Проводное, беспроводное, при помощи устройства Dongle без установки дополнительных приложений",
          },
        ],
      },
      {
        title: "Дополнительно",
        items: [
          { label: "Встроенная WEB-камера с микрофоном", value: "48MP, 8 микрофонов" },
          { label: "Динамик", value: "2*16W/+сабвуфер 2*16W" },
          { label: "Дальность действия", value: "8 м" },
          {
            label: "Тип крепления (опционально)",
            value: "Мобильная стойка, ножка манипулятор, настенное крепление",
          },
          { label: "Цвет корпуса", value: "Черный, серебро" },
          { label: "Материал корпуса", value: "Алюминиевый профиль, сталь 2 мм" },
          { label: "Размеры упаковки", value: "1954x1138x88 мм" },
          { label: "Вес", value: "64 кг" },
          { label: "Вес с упаковкой", value: "83 кг" },
        ],
      },
    ],
    passportUrl: "/passport/Pass-RN-HI-88AIP3B.pdf",
  },
];

export default data;
