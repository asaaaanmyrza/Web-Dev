import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Online Store';

  categories = ['Smartphones', 'Laptops', 'Tablets', 'Accessories'];
  
  products: { [key: string]: { name: string; likes: number }[] } = {
    Smartphones: [
      { name: 'iPhone 13', likes: 0 },
      { name: 'Samsung Galaxy S22', likes: 0 },
      { name: 'Google Pixel 7', likes: 0 },
      { name: 'OnePlus 10', likes: 0 },
      { name: 'Xiaomi 12', likes: 0 },
    ],
    Laptops: [
      { name: 'MacBook Pro', likes: 0 },
      { name: 'Dell XPS 15', likes: 0 },
      { name: 'HP Spectre x360', likes: 0 },
      { name: 'Lenovo ThinkPad', likes: 0 },
      { name: 'Asus ROG Zephyrus', likes: 0 },
    ],
    Tablets: [
      { name: 'iPad Pro', likes: 0 },
      { name: 'Samsung Galaxy Tab S8', likes: 0 },
      { name: 'Microsoft Surface Pro', likes: 0 },
      { name: 'Lenovo Tab P11', likes: 0 },
      { name: 'Huawei MatePad', likes: 0 },
    ],
    Accessories: [
      { name: 'Apple AirPods', likes: 0 },
      { name: 'Samsung Galaxy Buds', likes: 0 },
      { name: 'Logitech MX Master 3', likes: 0 },
      { name: 'Razer BlackWidow', likes: 0 },
      { name: 'Anker Power Bank', likes: 0 },
    ],
  };

  
  selectedCategory: string | null = null;

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  removeProduct(index: number) {
    if (this.selectedCategory) {
      this.products[this.selectedCategory].splice(index, 1);
    }
  }
  
  likeProduct(index: number) {
    if (this.selectedCategory) {
      this.products[this.selectedCategory][index].likes++;
    }
  }
}

