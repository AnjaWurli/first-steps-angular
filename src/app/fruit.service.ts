import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  fruits: { title: string; subtitle: string; info: string; img: string }[] = [
    {
      title: 'Blue Berry',
      subtitle: 'dark and healthy',
      info: '45 kcal/100g',
      img: '../assets/pics/heidelbeere.jpg',
    },
    {
      title: 'Pine Apple',
      subtitle: 'sweet and sour',
      info: '50 kcal/100g',
      img: '../assets/pics/ananas.jpg',
    },
    {
      title: 'Fig',
      subtitle: 'sweet and soft',
      info: '67',
      img: '../assets/pics/feige.jpg',
    },
    {
      title: 'Grapes',
      subtitle: 'sweet and juicy',
      info: '67',
      img: '../assets/pics/grape.jpg',
    },
    {
      title: 'Rasberry',
      subtitle: 'pink and sweet',
      info: '53',
      img: '../assets/pics/himbeere.jpg',
    },
    {
      title: 'Kiwi',
      subtitle: 'sweet and sour',
      info: '61',
      img: '../assets/pics/kiwi.jpg',
    },
    {
      title: 'Papaya',
      subtitle: 'sweet and healthy',
      info: '35',
      img: '../assets/pics/papaya.jpg',
    },
  ];

  selection = [
    {
      title: 'Lets make Fruit Salat',
      subtitle: 'calories',
      info: '0 kcal/100g',
      img: '../assets/pics/fruits.jpg',
    },
  ];

  addSelection(fruit: {
    title: string;
    subtitle: string;
    info: string;
    img: string;
  }) {
    this.selection.push(fruit);
  }

  constructor() {}
}
