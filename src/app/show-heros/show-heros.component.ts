import { Component } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-show-heros',
  templateUrl: './show-heros.component.html',
  styleUrls: ['./show-heros.component.css']
})
export class ShowHerosComponent {
constructor(public Shared:SharedService) {
   
}
}
