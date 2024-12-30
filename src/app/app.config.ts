import { ApplicationConfig } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { ShowsComponent } from './shows/shows.component';
import {ShowCreateComponent} from './show-create/show-create.component'
import { FormsModule } from '@angular/forms'; 
import { AboutComponent } from './about/about.component';
export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', component: ShowsComponent }, // Déclare ici le composant
      { path: 'about', component: AboutComponent },
    ]),
    FormsModule, 
  ],
};
