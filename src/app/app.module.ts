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
 
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
    
   // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
