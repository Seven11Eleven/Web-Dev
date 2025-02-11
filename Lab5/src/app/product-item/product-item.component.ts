import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent {
  @Input() product: any;
  @Input() index!: number;
  @Input() isLiked: boolean = false;
  @Output() remove = new EventEmitter<void>();
  // @Output() like = new EventEmitter<number>();
  @Output() like = new EventEmitter<void>();
  @Output() share = new EventEmitter<string>();

  onRemove() {
    this.remove.emit();
  }

  // onLike() {
  //   this.like.emit(this.index);
  // }
  toggleLike() {
    this.like.emit();
  }

  onShare() {
    this.share.emit(this.product.link);
  }
}
