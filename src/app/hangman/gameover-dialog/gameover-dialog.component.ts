import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-gameover-dialog',
  templateUrl: './gameover-dialog.component.html',
  styleUrls: ['./gameover-dialog.component.scss'],
})
export class GameoverDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
