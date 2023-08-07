import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './ab/contenido/about.component';
import { CalltoactionComponent } from './call/Tablas/calltoaction.component';
import { HttpClientModule } from  '@angular/common/http';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { NavigationComponent } from './nav/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    CalltoactionComponent,
    NavigationComponent,
    AboutComponent,

    
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
