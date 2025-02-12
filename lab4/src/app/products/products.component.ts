import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      name: 'Смартфон Apple iPhone 15 Pro 128Gb серый',
      image: 'https://hozyaingorbushki.ru/upload/iblock/41d/8n129anvfelv012barqnk0w1eddjkzpd.png',
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-128gb-seryi-113138184/?c=750000000',
      description: 'Флагманский смартфон с мощным процессором.',
      rating: 4.9,
    },
    {
      name: 'Чехол Для Apple iPhone 13 прозрачный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h62/h38/67432964784158.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-108272841/?c=750000000',
      description: 'Прозрачный чехол для iPhone 13.',
      rating: 4.8,
    },
    {
      name: 'Apple 20W USB-C Power Adapter белый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/apple-18w-usb-c-power-adapter-usb-type-c-belyi-102743952/?c=750000000',
      description: 'Оригинальный адаптер питания Apple.',
      rating: 4.7,
    },
    {
      name: 'Сумка Portcase 9011 черный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/h2b/69003730550814.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/sumka-portcase-9011-chernyi-108895248/?c=750000000',
      description: 'Стильная сумка для ноутбука.',
      rating: 4.6,
    },
    {
      name: 'Wireless Mouse черный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h35/h81/79480589418526.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/wireless-mouse-chernyi-109619826/?c=750000000',
      description: 'Беспроводная мышь с хорошей эргономикой.',
      rating: 4.5,
    },
    {
      name: 'AULA F75 белый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pdc/p8a/24789850.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/aula-f75-belyi-117731409/?c=750000000',
      description: 'Механическая клавиатура с RGB-подсветкой.',
      rating: 4.7,
    },
    {
      name: 'Электрочайник Yingzheng ZY-305 черный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h9b/82803977289758.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/elektrochainik-zy-303-chernyi-serebristyi-107912987/?c=750000000',
      description: 'Электрочайник с быстрым нагревом.',
      rating: 4.6,
    },
    {
      name: 'Samsung VCC4520S36/XEV синий',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h92/h53/63761733746718.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/samsung-vcc4520s36-xev-sinii-3701056/?c=750000000',
      description: 'Мощный пылесос для дома.',
      rating: 4.8,
    },
    {
      name: 'Вафельница Proliss Pro-808 черный',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h27/h58/85819468316702.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/vafel-nitsa-proliss-pro-808-chernyi-105935489/?c=750000000',
      description: 'Удобная вафельница для приготовления завтраков.',
      rating: 4.7,
    },
    {
      name: 'Kitchen Digital Scale 3KG серый',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2c/h9a/80584469872670.jpg?format=preview-large',
      link: 'https://kaspi.kz/shop/p/kitchen-digital-scale-3kg-seryi-110166616/?c=750000000',
      description: 'Кухонные весы с точностью до 1 грамма.',
      rating: 4.8,
    }
  ];

  share(product: any, platform: 'whatsapp' | 'telegram') {
    const encodedUrl = encodeURIComponent(product.link);
    let shareUrl = '';

    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodedUrl}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodedUrl}`;
    }

    window.open(shareUrl, '_blank');
  }
}
