import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products = [
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h81/79480589418526.jpg?format=gallery-medium',
      name: 'Мышь Wireless Mouse черный',
      description: 'это компьютерная мышь беспроводная',
      rating:5,
      link: 'https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h15/h6a/84136720007198.jpg?format=gallery-medium',
      name: 'Наушники GELEC Custom Pro 5 белый',
      description: 'это беспроводные наушники',
      rating:2,
      link: 'https://kaspi.kz/shop/p/gelec-custom-pro-5-belyi-113696422/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p4f/p2f/18223236.jpg?format=gallery-medium',
      name: 'DETVFO Аида тональный крем DETVFO 40 мл',
      description: 'это тональник',
      rating:5,
      link: 'https://kaspi.kz/shop/p/detvfo-aida-tonal-nyi-krem-detvfo-40-ml-131792710/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h18/63760532275230.jpg?format=gallery-medium',
      name: 'Wi-Fi роутер TP-LINK TD-W8961N',
      description: 'это вай-фай роутер тп линк',
      rating:5,
      link: 'https://kaspi.kz/shop/p/wi-fi-router-tp-link-td-w8961n-7600132/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h9b/82803977289758.jpg?format=gallery-medium',
      name: 'Электрочайник Yingzheng ZY-305 черный',
      description: 'это электрочайник ИньДжень чёрный',
      rating:3,
      link: 'https://kaspi.kz/shop/p/elektrochainik-yingzheng-zy-305-chernyi-112526442/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h34/80721531830302.jpg?format=gallery-medium',
      name: 'Обучающий набор Tilashar пластик, картон',
      description: 'это обучалка Тылашар',
      rating:4,
      link: 'https://kaspi.kz/shop/p/obuchajuschii-nabor-tilashar-plastik-karton-110318230/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'это айфон',
      rating:5,
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-large',
      name: 'Пылесос Deerma DX700 белый',
      description: 'это пылесос?',
      rating:1,
      link: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf0/he8/64043528060958.jpg?format=gallery-medium',
      name: 'Батарейка AA Duracell 12 шт',
      description: 'это дюрасель батарейки АА',
      rating:3,
      link: 'https://kaspi.kz/shop/p/batareika-aa-duracell-12-sht-101767707/?c=750000000',
    },
    {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hff/hc3/82331889434654.jpg?format=gallery-medium',
      name: 'Термопаста Arctic MX-4 4 г',
      description: 'это термопаста',
      rating:5,
      link: 'https://kaspi.kz/shop/p/termopasta-arctic-mx-4-4-g-109576930/?c=750000000',
    },
  ];

  share(link: string) {
    const message = encodeURIComponent(`Check this good: ${link}`);
    window.open(`https://t.me/share/url?url=${link}&text${message}`, '_blank');
  }
}
