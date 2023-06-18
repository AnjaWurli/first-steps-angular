import { Component, Input } from '@angular/core';
import { FruitService } from '../fruit.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent {
  constructor(public fs: FruitService) {}
}
