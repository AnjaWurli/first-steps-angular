import { Component } from '@angular/core';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss'],
})
export class HangmanComponent {
  words: { word: string; done: boolean }[] = [
    { word: 'random', done: false },
    { word: 'example', done: false },
    { word: 'banana', done: false },
    { word: 'hangman', done: false },
  ];

  letters: { letter: string; clicked: boolean }[] = [
    { letter: 'a', clicked: false },
    { letter: 'b', clicked: false },
    { letter: 'c', clicked: false },
    { letter: 'd', clicked: false },
    { letter: 'e', clicked: false },
    { letter: 'f', clicked: false },
    { letter: 'g', clicked: false },
    { letter: 'h', clicked: false },
    { letter: 'i', clicked: false },
    { letter: 'j', clicked: false },
    { letter: 'k', clicked: false },
    { letter: 'l', clicked: false },
    { letter: 'm', clicked: false },
    { letter: 'n', clicked: false },
    { letter: 'o', clicked: false },
    { letter: 'p', clicked: false },
    { letter: 'q', clicked: false },
    { letter: 'r', clicked: false },
    { letter: 's', clicked: false },
    { letter: 't', clicked: false },
    { letter: 'u', clicked: false },
    { letter: 'v', clicked: false },
    { letter: 'w', clicked: false },
    { letter: 'x', clicked: false },
    { letter: 'y', clicked: false },
    { letter: 'z', clicked: false },
  ];

  counter: number = 10;
  guessingWord: { letter: string; guessed: boolean }[] = this.randomWord();

  randomWord() {
    let randomIndex = Math.floor(Math.random() * this.words.length);
    let actualWord = this.words[randomIndex];

    let wordObj: { letter: string; guessed: boolean }[] = [];
    actualWord.word.split('').forEach((letter) => {
      wordObj.push({ letter: letter, guessed: false });
    });
    return wordObj;
  }

  guessed: boolean = false;
  checkLetter(guessedLetter: string) {
    if (this.guessingWord.some((letter) => letter.letter === guessedLetter)) {
      this.guessingWord.forEach((letter) => {
        if (guessedLetter === letter.letter) {
          letter.guessed = true;
        }
      });
    } else {
      this.counter--;
    }
  }
}