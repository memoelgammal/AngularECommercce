import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Name = "";
  Power = 0;
  Img ="";
  Id = 0;

  Heros: {hId : number; hName: string; hPower: number; hImage: string}[] = [];
  
  AddHero() {
    this.Heros.push({hId : this.Id, hName: this.Name, hPower: this.Power, hImage:this.Img});
    this.Id ++;
  }
  DelHero(i:number){
    this.Heros.splice(i,1);
  }
}
