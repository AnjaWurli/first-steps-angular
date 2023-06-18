import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-fruit-card',
  templateUrl: './fruit-card.component.html',
  styleUrls: ['./fruit-card.component.scss'],
})
export class FruitCardComponent {
  @Input() fruits: {
    title: string;
    subtitle: string;
    info: string;
    img: string;
  }[] = [
    {
      title: 'Lets make Fruit Salat',
      subtitle: 'calories',
      info: '0 kcal/100g',
      img: '../assets/pics/fruits.jpg',
    },
  ];
}
