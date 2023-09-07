import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ShowHerosComponent } from './show-heros/show-heros.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'create',component:CreateComponent},
  {path:'showheros',component:ShowHerosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
