import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgFor, CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  standalone: true,
  imports: [CommonModule, NgFor, ProductItemComponent]
})
export class ProductListComponent {
  @Input() products!: { name: string; likes: number }[];
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();

  removeProduct(index: number) {
    this.remove.emit(index);
  }

  likeProduct(index: number) {
    this.like.emit(index);
  }
}