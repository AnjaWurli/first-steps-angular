import { Component, Input } from '@angular/core';
import { FruitService } from 'src/app/fruit.service';

@Component({
  selector: 'app-fruit-card',
  templateUrl: './fruit-card.component.html',
  styleUrls: ['./fruit-card.component.scss'],
})
export class FruitCardComponent {
  @Input() fruits: {
    title: string;
    subtitle: string;
    calories: number;
    img: string;
  }[] = [
    {
      title: 'Lets make Fruit Salat',
      subtitle: 'calories',
      calories: 0,
      img: '../assets/pics/fruits.jpg',
    },
  ];

  constructor(public fs: FruitService) {}
}
