import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component'; 

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  likes: number;
  link: string;
}

interface Category {
  name: string;
  products: Product[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  selectedcategory: string = ''; 
  categories: Category[] = [
    {
      name: 'ТЕЛЕФОНЫ И ГАДЖЕТЫ',
      products: [
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h1b/hd6/64377056231454.jpg?format=preview-large',
          name: 'Apple 18W USB-C Power Adapter USB Type-C белый',
          description: 'Адаптер питания для Apple',
          rating: 4.5,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=preview-large',
          name: 'Для Apple iPhone 13 прозрачный',
          description: 'Чехол для iPhone 13',
          rating: 4.3,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=preview-large',
          name: 'Apple iPhone 13 128Gb черный',
          description: 'Смартфон Apple iPhone 13',
          rating: 4.8,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-chernyi-102298404/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hcf/h69/87295489343518.png?format=preview-large',
          name: 'Apple iPhone 16 Pro Max 256Gb черный',
          description: 'Смартфон Apple iPhone 16 Pro Max',
          rating: 4.9,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-chernyi-123787551/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h41/h98/87295491702814.png?format=preview-large',
          name: 'Apple iPhone 16 Pro Max 256Gb золотистый',
          description: 'Смартфон Apple iPhone 16 Pro Max',
          rating: 4.9,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/apple-iphone-16-pro-max-256gb-zolotistyi-123890547/?c=750000000'
        }
      ]
    },
    {
      name: 'БЫТОВАЯ ТЕХНИКА',
      products: [
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/h2f/63803859566622.jpg?format=preview-large',
          name: 'Deerma DX700 белый',
          description: 'Пылесос Deerma DX700',
          rating: 4.7,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/deerma-dx700-belyi-3701383/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h47/ha1/64094073815070.jpg?format=preview-large',
          name: 'Generic SF-400',
          description: 'Весы Generic SF-400',
          rating: 4.2,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/generic-sf-400-102531445/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h65/hd5/63935744770078.jpg?format=preview-large',
          name: 'Electronic SF-400',
          description: 'Весы Electronic SF-400',
          rating: 4.3,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/electronic-sf-400-100806263/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h08/hde/80282292781086.jpg?format=preview-large',
          name: 'Электрочайник BEREKE BR-810 серый',
          description: 'Электрочайник BEREKE BR-810',
          rating: 4.6,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/deerma-dx700s-seryi-100680527/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hd7/h74/63950404878366.jpg?format=preview-large',
          name: 'Deerma DX700S серый',
          description: 'Пылесос Deerma DX700S',
          rating: 4.8,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/elektrochainik-bereke-br-810-seryi-109981423/?c=750000000'
        }
      ]
    },
    {
      name: 'ТВ, АУДИО, ВИДЕО',
      products: [
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=preview-large',
          name: 'Apple AirPods 3 with Lightning Charging Case белый',
          description: 'Наушники Apple AirPods 3',
          rating: 4.8,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=preview-large',
          name: 'Apple AirPods Pro 2 with Type-C/Wireless Charging белый',
          description: 'Наушники Apple AirPods Pro 2',
          rating: 4.9,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/hydra-minor-bezhevyi-120724130/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/ha5/86475584110622.jpg?format=preview-large',
          name: 'HYDRA Minor бежевый',
          description: 'Колонка HYDRA Minor',
          rating: 4.5,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2-with-type-c-wireless-charging-belyi-113677582/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h02/h5a/87073025589278.jpg?format=preview-large',
          name: 'Remax PD-BT101 белый',
          description: 'Колонка Remax PD-BT101',
          rating: 4.4,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/remax-pd-bt101-belyi-123363420/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hfa/h5d/87309386514462.png?format=preview-large',
          name: 'Apple AirPods 4 Active Noise Cancellation белый',
          description: 'Наушники Apple AirPods 4',
          rating: 5.0,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/apple-airpods-4-active-noise-cancellation-belyi-124333921/?c=750000000'
        }
      ]
    },
    {
      name: 'КОМПЬЮТЕРЫ',
      products: [
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h81/79480589418526.jpg?format=preview-large',
          name: 'Wireless Mouse черный',
          description: 'Беспроводная мышь',
          rating: 4.5,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/h37/hf5/81272594268190.png?format=preview-large',
          name: 'NB F80 черный',
          description: 'Кронштейн для монитора',
          rating: 4.7,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/nb-f80-chernyi-110855908/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=preview-large',
          name: 'Logitech G102 Lightsync черный',
          description: 'Игровая мышь Logitech G102',
          rating: 4.8,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/he5/h4a/84701020356638.jpg?format=preview-large',
          name: 'Inova Death Life',
          description: 'Клавиатура Inova Death Life',
          rating: 4.6,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/inova-death-life-115283473/?c=750000000'
        },
        {
          image: 'https://resources.cdn-kaspi.kz/img/m/p/pa3/pdc/17497973.jpg?format=preview-large',
          name: 'Notestand',
          description: 'Подставка для ноутбука',
          rating: 4.5,
          likes: 0,
          link: 'https://kaspi.kz/shop/p/notestand-102983515/?c=750000000'
        }
      ]
    }
  ];

  selectedCategory: Category | null = null;

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }
  removeProduct(index: number) {
    if (this.selectedCategory) {
      this.selectedCategory.products.splice(index, 1);
    }
  }

  likeProduct(product: Product) {
    product.likes = product.likes === 0 ? 1 : 0;
  }

  shareProduct(product: Product, platform: string) {
    let url = '';
    switch (platform) {
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(product.link)}`;
        break;
      case 'telegram':
        url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${encodeURIComponent(product.name)}`;
        break;
    }
    window.open(url, '_blank');
  }

  openLink(url: string) {
    window.open(url, '_blank');
  }
}
