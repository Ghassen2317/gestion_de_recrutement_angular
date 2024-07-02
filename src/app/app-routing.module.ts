import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { PacksComponent } from './espace-entreprise/packs/packs.component';
import { SigninComponent } from './authentication/sign-in/sign-in.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {DashboardComponent} from '../app/components/dashboard/dashboard.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { OfferFormComponent } from './espace-entreprise/offer-form/offer-form.component';
import {AddRhComponent} from './espace-entreprise/add-rh/add-rh.component';
import {FormComponent} from './espace-candidat/espace-candidate/form/form.component';
import { OfferFilterComponent } from './espace-candidat/espace-candidate/offer-filter/offer-filter.component';
import { OfferListComponent } from './espace-candidat/espace-candidate/offers-list/offers-list.component';
import { OfferCardComponent } from './offer-card/offer-card.component';
import { EspaceCandidateComponent } from './espace-candidat/espace-candidate/espace-candidate.component';
const routes: Routes = [
  { path: 'sign-in', component: SigninComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path:"home",component :HomePageComponent},
  {path:"add-rh",component :AddRhComponent},
  {path:"form",component :FormComponent},
  {path:"offer-filter",component :OfferFilterComponent},
  {path:"offers-list",component :OfferListComponent},
  {path:"espaceEntreprise",component :PacksComponent},
  {path:"sidebar",component :SidebarComponent},
  {path:"espaceCandidat",component :EspaceCandidateComponent},
  // {path:"dashboard",component :DashboardComponent,children :[
  //   {path:"espaceEntreprise",component :PacksComponent}
  // ]},
  {path:"offerForm" ,component :OfferFormComponent},
  {path:"offerCard" ,component :OfferCardComponent},
  {path:"dashboard" ,component:DashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }










