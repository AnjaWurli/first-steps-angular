import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameoverDialogComponent } from './gameover-dialog/gameover-dialog.component';

@Component({
  selector: 'app-hangman',
  templateUrl: './hangman.component.html',
  styleUrls: ['./hangman.component.scss'],
})
export class HangmanComponent {
  constructor(public dialog: MatDialog) {}

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
  gameOver: boolean = false;

  randomWord() {
    let randomIndex = Math.floor(Math.random() * this.words.length);
    let actualWord = this.words[randomIndex];

    let wordObj: { letter: string; guessed: boolean }[] = [];
    actualWord.word.split('').forEach((letter) => {
      wordObj.push({ letter: letter, guessed: false });
    });
    return wordObj;
  }

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

    if (
      this.guessingWord
        .map((word) => word.guessed)
        .every((guessed) => guessed) ||
      this.counter <= 0
    ) {
      this.letters.forEach((l) => (l.clicked = true));
      this.gameOver = true;
      this.counter = 10;
      this.openDialog();
    }
  }

  openDialog() {
    let won: boolean;
    if (
      this.guessingWord.map((word) => word.guessed).every((guessed) => guessed)
    ) {
      won = true;
    } else {
      won = false;
    }
    let dialogRef = this.dialog.open(GameoverDialogComponent, {
      data: { won: won },
    });
    dialogRef.afterClosed().subscribe((newGame) => {
      console.log(typeof newGame);
      if (newGame === 'true') {
        this.reset();
      }
    });
  }

  reset() {
    this.letters.forEach((l) => (l.clicked = false));
    this.guessingWord = this.randomWord();
    this.gameOver = false;
  }
}
