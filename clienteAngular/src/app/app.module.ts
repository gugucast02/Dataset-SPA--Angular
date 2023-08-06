import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './nav/navigation/navigation.component';
import { AboutComponent } from './ab/contenido/about.component';
import { ServicesComponent } from './ser/services/services.component';
import { CalltoactionComponent } from './call/Tablas/calltoaction.component';
import { HttpClientModule } from  '@angular/common/http';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ServicesComponent,
    CalltoactionComponent,
    AboutComponent,
    SidebarComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CanvasJSAngularChartsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
