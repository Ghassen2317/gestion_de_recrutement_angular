import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { PacksComponent } from './espace-entreprise/packs/packs.component';

const routes: Routes = [
  {path:"home",component :HomePageComponent},
  {path:"espaceEntreprise",component :PacksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
