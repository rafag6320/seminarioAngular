import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-integer',
  standalone: false,
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})
export class InputInteger {

  @Input() quantity!: number;

  @Input() maxLimit!: number;

  @Output() quantityChange = new EventEmitter<number>();

  upQuantity(): void {
    if (this.quantity < this.maxLimit) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  lowQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }
}
