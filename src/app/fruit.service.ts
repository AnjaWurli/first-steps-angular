import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FruitService {
  fruits: { title: string; subtitle: string; calories: number; img: string }[] =
    [
      {
        title: 'Blue Berry',
        subtitle: 'dark and healthy',
        calories: 45,
        img: '../assets/pics/heidelbeere.jpg',
      },
      {
        title: 'Pine Apple',
        subtitle: 'sweet and sour',
        calories: 50,
        img: '../assets/pics/ananas.jpg',
      },
      {
        title: 'Fig',
        subtitle: 'sweet and soft',
        calories: 67,
        img: '../assets/pics/feige.jpg',
      },
      {
        title: 'Grapes',
        subtitle: 'sweet and juicy',
        calories: 67,
        img: '../assets/pics/grape.jpg',
      },
      {
        title: 'Rasberry',
        subtitle: 'pink and sweet',
        calories: 53,
        img: '../assets/pics/himbeere.jpg',
      },
      {
        title: 'Kiwi',
        subtitle: 'sweet and sour',
        calories: 61,
        img: '../assets/pics/kiwi.jpg',
      },
      {
        title: 'Papaya',
        subtitle: 'sweet and healthy',
        calories: 35,
        img: '../assets/pics/papaya.jpg',
      },
    ];

  selection = [
    {
      title: '',
      subtitle: '',
      calories: 0,
      img: '',
    },
  ];

  addSelection(fruit: {
    title: string;
    subtitle: string;
    calories: number;
    img: string;
  }) {
    if (!this.fruitPicked(fruit)) {
      this.selection.push(fruit);
    } else {
      let a: number = this.selection.findIndex((selectedFruit) => {
        return selectedFruit.title === fruit.title;
      });
      this.selection.splice(a, 1);
    }
  }

  fruitPicked(fruit: {
    title: string;
    subtitle: string;
    calories: number;
    img: string;
  }): boolean {
    return this.selection.some((selectedFruit) => {
      return selectedFruit.title === fruit.title;
    });
  }

  calories: number = 0;

  sumCalories() {
    this.selection.forEach((fruit) => {
      this.calories += fruit.calories;
    });
    return this.calories;
  }
  constructor() {}
}
