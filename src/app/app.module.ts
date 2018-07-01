import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

//Rutas
import { APP_ROUTING } from './app.routes';

//Servicios
import { CerveceriasService } from './services/cervecerias.service';

import { AppComponent } from './app.component';
import { MapaHomeComponent } from './components/mapa-home/mapa-home.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CerveceriaComponent } from './components/cerveceria/cerveceria.component';
import { CerveceriasComponent } from './components/cervecerias/cervecerias.component';
import { DestacadasHomeComponent } from './components/destacadas-home/destacadas-home.component';
import { NuevaCerveceriaComponent } from './components/nueva-cerveceria/nueva-cerveceria.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaHomeComponent,
    HomeComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    CerveceriaComponent,
    CerveceriasComponent,
    DestacadasHomeComponent,
    NuevaCerveceriaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [
    CerveceriasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
