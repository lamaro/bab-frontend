import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CerveceriaComponent } from './components/cerveceria/cerveceria.component';
import { CerveceriasComponent } from './components/cervecerias/cervecerias.component';
import { NuevaCerveceriaComponent } from './components/nueva-cerveceria/nueva-cerveceria.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cerveceria/:slug', component: CerveceriaComponent },
  { path: 'cervecerias', component: CerveceriasComponent },
  { path: 'nueva', component: NuevaCerveceriaComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES );
