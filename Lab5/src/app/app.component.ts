import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';

interface Product {
  name: string;
  description: string;
  rating: number;
  likes: number;
  image: string;
  link: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  categories = ['Красота и здоровье','Электроника','Аксессуары', 'Бытовая техника'];
  selectedCategory = 'Products';

  likedProducts = new Set<string>();

  products: Record<string, Product[]> = {
    'Бытовая техника':[
      {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=gallery-large',
      name: 'Пылесос Deerma DX700 белый',
      description: 'это пылесос?',
      rating: 1,
      link: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000',
      likes: 0
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf0/he8/64043528060958.jpg?format=gallery-medium',
        name: 'Батарейка AA Duracell 12 шт',
        description: 'это дюрасель батарейки АА',
        rating: 3,
        link: 'https://kaspi.kz/shop/p/batareika-aa-duracell-12-sht-101767707/?c=750000000',
        likes: 0
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h9b/82803977289758.jpg?format=gallery-medium',
        name: 'Электрочайник Yingzheng ZY-305 черный',
        description: 'это электрочайник ИньДжень чёрный',
        rating: 3,
        link: 'https://kaspi.kz/shop/p/elektrochainik-yingzheng-zy-305-chernyi-112526442/?c=750000000',
        likes: 0
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=gallery-medium',
        name: 'Кухонные весы Generic SF-400',
        description: 'это правда весы',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000',
        likes: 5
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h78/he6/81315957440542.png?format=gallery-medium',
        name: 'Блендер SM-7700 серебристый',
        description: 'серебристый',
        rating: 3,
        link: 'https://kaspi.kz/shop/p/sm-7700-serebristyi-110902818/?c=750000000',
        likes: 3
      },

    ],
    'Аксессуары':[
      {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h15/h6a/84136720007198.jpg?format=gallery-medium',
      name: 'Наушники GELEC Custom Pro 5 белый',
      description: 'это беспроводные наушники',
      rating: 2,
      link: 'https://kaspi.kz/shop/p/gelec-custom-pro-5-belyi-113696422/?c=750000000',
      likes: 0
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h34/80721531830302.jpg?format=gallery-medium',
        name: 'Обучающий набор Tilashar пластик, картон',
        description: 'это обучалка Тылашар',
        rating: 4,
        link: 'https://kaspi.kz/shop/p/obuchajuschii-nabor-tilashar-plastik-karton-110318230/?c=750000000',
        likes: 0
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/h90/64458727850014.jpg?format=gallery-medium',
        name: 'Колье DiDi Shop длина 40 см титан, фианит',
        description: 'красивое колье',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/didi-shop-dlina-40-sm-titan-fianit-104190140/?c=750000000',
        likes: 888
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h74/86282818879518.jpg?format=gallery-medium',
        name: 'Солнцезащитные очки 17459169_800800 прямоугольные однотонные',
        description: 'от солнца защитные очки',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/17459169-800800-prjamougol-nye-odnotonnye-109614520/?c=750000000',
        likes: 12
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p21/p25/11205856.jpg?format=gallery-medium',
        name: 'Сумка шоппер 301226 экокожа черный',
        description: 'сумка шоппер что еще сказать',
        rating: 3,
        link: 'https://kaspi.kz/shop/p/sumka-shopper-301226-ekokozha-chernyi-115434522/?c=750000000',
        likes: 12
      },

    ],
    'Электроника':[
      {
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h81/79480589418526.jpg?format=gallery-medium',
      name: 'Мышь Wireless Mouse черный',
      description: 'это компьютерная мышь беспроводная',
      rating: 5,
      link: 'https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000',
      likes: 0
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hff/hc3/82331889434654.jpg?format=gallery-medium',
        name: 'Термопаста Arctic MX-4 4 г',
        description: 'это термопаста',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/termopasta-arctic-mx-4-4-g-109576930/?c=750000000',
        likes: 0
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        name: 'Смартфон Apple iPhone 13 128Gb черный',
        description: 'это айфон',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000',
        likes: 0
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hc9/h18/63760532275230.jpg?format=gallery-medium',
        name: 'Wi-Fi роутер TP-LINK TD-W8961N',
        description: 'это вай-фай роутер тп линк',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/wi-fi-router-tp-link-td-w8961n-7600132/?c=750000000',
        likes: 0
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h16/hd5/63767860412446.jpg?format=gallery-medium',
        name: 'Графический планшет HUION H640P черный',
        description: 'отличный граф планшет для художников',
        rating: 13,
        link: 'https://kaspi.kz/shop/p/huion-h640p-chernyi-18500031/?c=750000000',
        likes: 132
      },
],
    'Красота и здоровье': [
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p4f/p2f/18223236.jpg?format=gallery-medium',
        name: 'DETVFO Аида тональный крем DETVFO 40 мл',
        description: 'это тональник',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/detvfo-aida-tonal-nyi-krem-detvfo-40-ml-131792710/?c=750000000',
        likes: 0
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/hf7/h67/64437574336542.jpg?format=gallery-medium',
        name: 'DMND спонж скошенный, спонж капля полиуретан 2 шт',
        description: 'это хороший спонж, он чутка скошенный, но работает зуб даю',
        rating: 5,
        link: 'https://kaspi.kz/shop/p/dmnd-sponzh-skoshennyi-sponzh-kaplja-poliuretan-2-sht-104557208/?c=750000000',
        likes: 500
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/pea/p7c/12475967.jpeg?format=gallery-medium',
        name: 'MISS TAIS Mauve карандаш коричневый №780',
        description: 'карандаш ими губы красить',
        rating: 1,
        link: 'https://kaspi.kz/shop/p/miss-tais-mauve-karandash-korichnevyi-780-24800237/?c=750000000',
        likes: 12
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/h17/hb9/86704543596574.jpg?format=gallery-medium',
        name: 'Gulf Girl 3 steps набор для контуринга 01',
        description: 'отличный набор купите',
        rating: 3,
        link: 'https://kaspi.kz/shop/p/gulf-girl-3-steps-nabor-dlja-konturinga-01-122092710/?c=750000000',
        likes: 1
      },
      {
        image: 'https://resources.cdn-kaspi.kz/img/m/p/p96/p88/17759613.jpg?format=gallery-medium',
        name: 'Маска для лица Farmstay тканевая Collagen 1 шт',
        description: 'маска для лица хорошая',
        rating: 3,
        link: 'https://kaspi.kz/shop/p/farmstay-tkanevaja-collagen-1-sht-101076161/?c=750000000',
        likes: 2
      },

    ]
  };

  get currentProducts(): Product[] {
    return this.products[this.selectedCategory] || [];
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }


  likeProduct(productName: string) {
    const product = this.products[this.selectedCategory].find(p => p.name === productName);
    if (!product) return;

    if (this.likedProducts.has(productName)) {
      product.likes--;
      this.likedProducts.delete(productName);
    } else {
      product.likes++;
      this.likedProducts.add(productName);
    }
  }

  removeProduct(index: number) {
    this.products[this.selectedCategory].splice(index, 1);
  }

  share(link: string) {
    const message = encodeURIComponent(`Check this product: ${link}`);
    window.open(`https://t.me/share/url?url=${link}&text=${message}`, '_blank');
  }

}
