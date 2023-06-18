import { Component } from '@angular/core';
import { FruitService } from 'src/app/fruit.service';

@Component({
  selector: 'app-fruit-basket',
  templateUrl: './fruit-basket.component.html',
  styleUrls: ['./fruit-basket.component.scss'],
})
export class FruitBasketComponent {
  constructor(public fs: FruitService) {}
}
