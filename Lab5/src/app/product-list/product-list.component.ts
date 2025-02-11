import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  @Input() products: any[] = [];
  @Input() likedProducts!: Set<string>;
  @Output() like = new EventEmitter<string>();
  @Output() remove = new EventEmitter<number>();
  @Output() share = new EventEmitter<string>();
  // @Output() like = new EventEmitter<number>();

  onLike(productName: string) {
    this.like.emit(productName);
  }

  onRemove(index: number) {
    this.remove.emit(index);
  }

  onShare(link: string) {
    this.share.emit(link);
  }
}
