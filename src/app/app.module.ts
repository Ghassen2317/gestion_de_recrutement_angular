import { NgModule  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarComponent } from '../app/components/navbar/navbar.component';
import{HeroComponent} from '../app/home/hero/hero.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomePageComponent} from '../app/home/home-page/home-page.component';
import {CarouselComponent} from '../app/home/carousel/carousel.component';
import {FooterComponent} from '../app/components/footer/footer.component';
import {PacksComponent} from '../app/espace-entreprise/packs/packs.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent ,
    NavbarComponent,
    HeroComponent,
    HomePageComponent,
    CarouselComponent,
    FooterComponent,
    PacksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
