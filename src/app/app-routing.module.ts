import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { PacksComponent } from './espace-entreprise/packs/packs.component';
import{SidebarComponent} from './components/sidebar/sidebar.component';
import {DashboardComponent} from '../app/components/dashboard/dashboard.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:"home",component :HomePageComponent},
  {path:"espaceEntreprise",component :PacksComponent},
  {path:"sidebar",component :SidebarComponent},
  {path:"dashboard",component :DashboardComponent,children :[
    {path:"espaceEntreprise",component :PacksComponent}
  ]},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
