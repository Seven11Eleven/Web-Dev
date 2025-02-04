export interface Product {
  id: number;
  img: string;
  rating: string;
  name: string;
  price: string;
  description: string;
}

export const products = [
  {
    id: 1,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium",
    name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
    rating: "./assets/img/stars.png",
    price: "294 452",
    link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
    description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения.'
  },
  {
    id: 2,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=gallery-medium",
    name: 'Смартфон Apple iPhone 14 128Gb черный',
    rating: "./assets/img/stars.png",
    price: "327 584",
    link: "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000",
    description: 'Представляем вам элегантные и функциональные плавки, которые станут незаменимым аксессуаром для вашего пляжного отдыха или тренировок в бассейне. Изготовленные из высококачественного материала, они обеспечивают непревзойденный комфорт и надежную поддержку во время плавания.'
  },
  {
    id: 3,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium",
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    rating: "./assets/img/stars.png",
    price: "623 120",
    link: "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000",
    description: 'Apple iPhone 15 Pro Max - сверхпрочный флагман, изготовленный из титана. За бескомпромиссную производительность смартфона отвечает новейший чип Apple A17 Pro. Устройство получило передовую систему камер, продуманную эргономику, обновленный дизайн и новую программируемую кнопку.'
  },
  {
    id: 4,
    img: "https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium",
    name: 'Смартфон Apple iPhone 15 128Gb черный',
    rating: "./assets/img/stars.png",
    price: "374 385",
    link: "https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000",
    description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.'
  },
  {
    id: 5,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium",
    rating: "./assets/img/stars.png",
    name: 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
    price: "3 775",
    link: "https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000",
    description: 'Адаптер питания Apple USB‑C мощностью 20 Вт дает возможность быстро и эффективно заряжать гаджеты. Проверяется на основном сайте через QR на оригинальность. Этот адаптер совместим с любыми устройствами Apple, оснащенными портом USB-C: смартфон, планшет или смарт-часы.'
  },
  {
    id: 6,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium",
    name: 'Мышь Logitech G102 Lightsync черный',
    rating: "./assets/img/stars.png",
    price: "8 849 ",
    link: "https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000",
    description: 'Мышь проводная Logitech G102 LightSync позволяет играть с максимальной эффективностью. В мышке применяется датчик игрового уровня с чувствительностью 8000 dpi, регулируемой в широком диапазоне отдельной кнопкой. Logitech G102 LightSync оснащена 6 программируемыми кнопками. В левой и правой кнопках используется металлический пружинный механизм для исключительно точного срабатывания.'
  },
  {
    id: 7,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h7b/h7d/85093492031518.jpg?format=gallery-medium",
    name: 'Маска Маска Осёл силиконовая Endeva',
    rating: "./assets/img/stars.png",
    price: "7 998",
    link: "https://kaspi.kz/shop/p/maska-maska-osjol-silikonovaja-endeva-116430717/?c=750000000",
    description: 'Маска Осла'
  },
  {
    id: 8,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hd3/h79/84649212510238.jpg?format=gallery-medium",
    name: 'Седло Киргизское',
    rating: "./assets/img/stars.png",
    price: "45 000",
    link: "https://kaspi.kz/shop/p/kirgizskoe-yr-yz-er-115137674/?c=750000000",
    description: 'Представляем вам аутентичное киргизское седло, которое сочетает в себе уникальное традиционное ремесло и высокую функциональность для комфортной и безопасной верховой езды. Изготовленное опытными мастерами из качественных материалов, оно станет надежным компаньоном в ваших лошадиных поездках.'
  },
  {
    id: 9,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h70/h77/84163863314462.png?format=gallery-medium",
    name: 'Кружка Свежего пиво светлое 4% 475 мл',
    rating: "./assets/img/stars.png",
    price: "395",
    link: "https://kaspi.kz/shop/p/kruzhka-svezhego-pivo-svetloe-4-475-ml-101557149/?c=750000000",
    description: 'Вкус пива сбалансированный, в нем характерная хмелевая горчинка продолжается в классическом послевкусии. Пиво хорошо сочетается с блюдами немецкой кухни, жареным мясом и колбасками на гриле, а также с сытными закусками.'
  },
  {
    id: 10,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h34/h8e/84592976789534.jpg?format=gallery-medium",
    name: 'Маска Шрек',
    rating: "./assets/img/stars.png",
    price: "6 998 ",
    link: "https://kaspi.kz/shop/p/maska-shrek-114911247/?c=750000000",
    description: 'Маска'
  },
];
