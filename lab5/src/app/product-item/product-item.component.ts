import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  likes: number;
  link: string;
}

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product = {
    image: '',
    name: '',
    description: '',
    rating: 0,
    likes: 0,
    link: ''
  };

  likeProduct(): void {
    if (this.product.likes === 0) {
      this.product.likes++;
    }
  }


  shareProduct(platform: string): void {
    const url = `https://kaspi.kz/shop/p/${this.product.link}`;
    const message = `Check out this product: ${url}`;
    if (platform === 'whatsapp') {
      window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`, '_blank');
    } else if (platform === 'telegram') {
      window.open(`https://telegram.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(message)}`, '_blank');
    }
  }

  buyProduct(): void {
    window.open(this.product.link, '_blank');
  }
}
