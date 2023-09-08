import { Component, Input } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  @Input() EditDelete:boolean = false;
  @Input() HeroItem:number = 0;
  /**
   *
   */
  constructor(public Shared:SharedService) {
    
  }

  DeId = this.Shared.Heros[this.Shared.WichHero].hId;
  DeName = this.Shared.Heros[this.Shared.WichHero].hName;
  DePower = this.Shared.Heros[this.Shared.WichHero].hPower;
  DeImg = this.Shared.Heros[this.Shared.WichHero].hImage;

  DeUpdate(i:number){
    this.Shared.Heros[i].hName = this.DeName;
    this.Shared.Heros[i].hPower = this.DePower;
    this.Shared.Heros[i].hImage = this.DeImg;
  }
}
