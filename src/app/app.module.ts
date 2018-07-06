import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Google Maps
import { AgmCoreModule } from '@agm/core';

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

//admin
import { AddComponent } from './components/admin/add/add.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { DeleteComponent } from './components/admin/delete/delete.component';
import { UpdateComponent } from './components/admin/update/update.component';

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
    NuevaCerveceriaComponent,
    AddComponent,
    DeleteComponent,
    UpdateComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCdZJ4FE_E5uVGEa_EmdOhOEbS5wNJUe-4'
    }),
    APP_ROUTING
  ],
  providers: [
    CerveceriasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
