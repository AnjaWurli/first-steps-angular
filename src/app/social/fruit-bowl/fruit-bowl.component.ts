import { Component } from '@angular/core';
import { FruitService } from 'src/app/fruit.service';

@Component({
  selector: 'app-fruit-bowl',
  templateUrl: './fruit-bowl.component.html',
  styleUrls: ['./fruit-bowl.component.scss'],
})
export class FruitBowlComponent {
  constructor(public fs: FruitService) {}
}
