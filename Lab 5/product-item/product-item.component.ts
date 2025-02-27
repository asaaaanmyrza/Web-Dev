import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  standalone: true
})
export class ProductItemComponent {
  @Input() product!: { name: string; likes: number };
  @Input() index!: number;
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();

  removeItem() {
    this.remove.emit(this.index);
  }

  likeItem() {
    this.like.emit(this.index);
  }
}