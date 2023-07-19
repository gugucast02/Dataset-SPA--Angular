import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './nav/navigation/navigation.component';
import { MastheadComponent } from './mast/masthead/masthead.component';
import { AboutComponent } from './ab/about/about.component';
import { ServicesComponent } from './ser/services/services.component';
import { PortfolioComponent } from './port/portfolio/portfolio.component';
import { CalltoactionComponent } from './call/calltoaction/calltoaction.component';
import { ContactComponent } from './cont/contact/contact.component';
import { FooterComponent } from './foot/footer/footer.component';
import { HttpClientModule } from  '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MastheadComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    CalltoactionComponent,
    ContactComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
