import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Category {
  name: string;
  products: Product[];
}

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  likes: number;
  link: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  categories: Category[] = [
    { name: 'Electronics', products: [] },
    { name: 'Clothing', products: [] },
    { name: 'Books', products: [] }
  ];
  
  selectedCategory: Category | null = null;

  selectCategory(category: Category) {
    this.selectedCategory = category;
  }
}
