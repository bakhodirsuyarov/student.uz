let taomlar = [
  {
    id: "1",
    name: "Lavash",
    category: "Fast food",
    description: "Achhiq",
    cost: "25 000 so'm",
    chegirma: "25% DISCOUNT",
    imgSrc: "https://pasta.uz/upload/products/%D0%9B%D0%B0%D0%B2%D0%B0%D1%88.jpg",
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95887.60177565906!2d69.19643226095339!3d41.32001032473386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7ef5384327%3A0xf2570d2fe34dface!2sEVOS!5e0!3m2!1sru!2s!4v1671269469796!5m2!1sru!2s"
},
{
    id: "2",
    name: "Evos Combo",
    category: "Fast food",
    description: "",
    cost: "30 000",
    chegirma: "25% DISCOUNT",
    imgSrc: "https://pasta.uz/upload/products/Evos%20Combo.jpg",
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95887.60177565906!2d69.19643226095339!3d41.32001032473386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7ef5384327%3A0xf2570d2fe34dface!2sEVOS!5e0!3m2!1sru!2s!4v1671269469796!5m2!1sru!2s"
},
{
    id: "3",
    name: "Evos Max",
    category: "Fast food",
    description: "",
    cost: "27 000",
    chegirma: "25%  DISCOUNT",
    imgSrc: "https://pasta.uz/upload/products/Evos%20Max.jpg",
    link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95887.60177565906!2d69.19643226095339!3d41.32001032473386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7ef5384327%3A0xf2570d2fe34dface!2sEVOS!5e0!3m2!1sru!2s!4v1671269469796!5m2!1sru!2s"
},
// {
//     id: "4",
//     name: "Gamburger",
//     category: "Fast food",
//     description: "",
//     cost: "13 000",
//     chegirma: "25% DISCOUNT",
//     imgSrc: "https://pasta.uz/upload/products/%D0%93%D0%B0%D0%BC%D0%B1%D1%83%D1%80%D0%B3%D0%B5%D1%80.jpg",
//     link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95887.60177565906!2d69.19643226095339!3d41.32001032473386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7ef5384327%3A0xf2570d2fe34dface!2sEVOS!5e0!3m2!1sru!2s!4v1671269469796!5m2!1sru!2s"
// },
// {
//     id: "5",
//     name: "Kartoshka fri",
//     category: "Fast food",
//     description: "",
//     cost: "10 000",
//     chegirma: "25% DISCOUNT",
//     imgSrc: "https://pasta.uz/upload/products/%D0%9A%D0%B0%D1%80%D1%82%D0%BE%D1%88%D0%BA%D0%B0%20%D0%A4%D1%80%D0%B8.jpg",
//     link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95887.60177565906!2d69.19643226095339!3d41.32001032473386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b7ef5384327%3A0xf2570d2fe34dface!2sEVOS!5e0!3m2!1sru!2s!4v1671269469796!5m2!1sru!2s"
// },
{
  id: "0",
  name: "Tushyonka",
  category: "Milliy taomlar",
  description: "",
  cost: "60 000",
  chegirma: "25%  45 000",
  imgSrc: "https://api.bringo.uz/assets/productThumbs/250x250/31665_2910813049.jpg",
  link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47962.50144178077!2d69.1378855705261!3d41.29458327204629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a352380ed83%3A0x926bc643cae030a9!2sMilliy%20Taomlar%20Saroy!5e0!3m2!1sru!2s!4v1671275350702!5m2!1sru!2s"
},
{
  id: "1",
  name: "qozon kabob",
  category: "Milliy taomlar",
  description: "",
  cost: "63 000",
  chegirma: "25%  47 250",
  imgSrc: "https://api.bringo.uz/assets/productThumbs/250x250/31689_1474145417.jpg",
  link:   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47962.50144178077!2d69.1378855705261!3d41.29458327204629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a352380ed83%3A0x926bc643cae030a9!2sMilliy%20Taomlar%20Saroy!5e0!3m2!1sru!2s!4v1671275350702!5m2!1sru!2s"
},
{
  id: "2",
  name: "Lag'mon",
  category: "Milliy taomlar",
  description: "",
  cost: "23 000",
  chegirma: "25%  17 250",
  imgSrc: "https://api.bringo.uz/assets/productThumbs/250x250/31680_3877107033.jpg",
  link:   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47962.50144178077!2d69.1378855705261!3d41.29458327204629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a352380ed83%3A0x926bc643cae030a9!2sMilliy%20Taomlar%20Saroy!5e0!3m2!1sru!2s!4v1671275350702!5m2!1sru!2s"
},
// {
//   id: "3",
//   name: "Mastava",
//   category: "Milliy taomlar",
//   description: "",
//   cost: "21 000",
//   chegirma: "25%  15 750",
//   imgSrc: "https://api.bringo.uz/assets/productThumbs/250x250/31647_4243464391.jpg",
//   link:   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47962.50144178077!2d69.1378855705261!3d41.29458327204629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a352380ed83%3A0x926bc643cae030a9!2sMilliy%20Taomlar%20Saroy!5e0!3m2!1sru!2s!4v1671275350702!5m2!1sru!2s"
// },
// {
//   id: "4",
//   name: "Beshbarmoq",
//   category: "Milliy taomlar",
//   description: "",
//   cost: "50 000",
//   chegirma: "25%  37 750",
//   imgSrc: "https://api.bringo.uz/assets/productThumbs/250x250/31665_2910813049.jpg",
//   link:   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47962.50144178077!2d69.1378855705261!3d41.29458327204629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a352380ed83%3A0x926bc643cae030a9!2sMilliy%20Taomlar%20Saroy!5e0!3m2!1sru!2s!4v1671275350702!5m2!1sru!2s"
// },
// {
//   id: "5",
//   name: "Coca Cola",
//   category: "Milliy taomlar",
//   description: "",
//   cost: "14 000",
//   chegirma: "25%  10 500",
//   imgSrc: "https://api.bringo.uz/assets/productThumbs/250x250/38871_3267047760.jpg",
//   link:   "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47962.50144178077!2d69.1378855705261!3d41.29458327204629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a352380ed83%3A0x926bc643cae030a9!2sMilliy%20Taomlar%20Saroy!5e0!3m2!1sru!2s!4v1671275350702!5m2!1sru!2s"
// }
]