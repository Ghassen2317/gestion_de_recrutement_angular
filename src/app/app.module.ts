import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NavbarComponent} from '../app/components/navbar/navbar.component';
import{HeroComponent} from '../app/home/hero/hero.component';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from '../app/home/home-page/home-page.component';
import {CarouselComponent} from '../app/home/carousel/carousel.component';
import {FooterComponent} from '../app/components/footer/footer.component';
import {PacksComponent} from '../app/espace-entreprise/packs/packs.component';
import {SidebarComponent} from '../app/components/sidebar/sidebar.component';
import {DashboardComponent} from '../app/components/dashboard/dashboard.component';
import { ChartModule } from 'angular-highcharts';
 
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { AddRhComponent } from './espace-entreprise/add-rh/add-rh.component';
import { FormComponent } from './espace-candidat/espace-candidate/form/form.component';
import { OfferFilterComponent } from './espace-candidat/espace-candidate/offer-filter/offer-filter.component';
import { OfferListComponent } from './espace-candidat/espace-candidate/offers-list/offers-list.component';
import { OfferFormComponent } from './espace-entreprise/offer-form/offer-form.component';
import { OfferCardComponent } from './offer-card/offer-card.component';

const routes: Routes = [
  // { path: '', redirectTo: '/offer-form', pathMatch: 'full' },
  { path: 'offer-form', component: OfferFormComponent },
  { path: 'offer-card', component: OfferCardComponent }
];

@NgModule({
  declarations: [
    AppComponent ,
    NavbarComponent,
    HeroComponent,
    HomePageComponent,
    CarouselComponent,
    FooterComponent,
    PacksComponent,
    SidebarComponent,
    DashboardComponent,
    SigninComponent,
    SignUpComponent,
    ResetPasswordComponent,
    OfferFormComponent,
    AddRhComponent,
    FormComponent,
    OfferFilterComponent,
    OfferListComponent,
    OfferCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
    
   BrowserModule,
   
   RouterModule.forRoot(routes),

   ReactiveFormsModule,
   RouterModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }


