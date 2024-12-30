import { Routes } from '@angular/router';
import { ShowsComponent } from './shows/shows.component';
import { AboutComponent } from '../app/about/about.component'; // 
export const routes: Routes = [
  { path: '', component: ShowsComponent },
  { path: 'about', component: AboutComponent },
   // Page d'accueil avec la liste des shows
];
