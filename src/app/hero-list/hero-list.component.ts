import { Component, Input } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent {
/**
 *
 */
constructor(public Shared:SharedService) {
  
}
@Input() ShowHeroList:boolean = false;
}
