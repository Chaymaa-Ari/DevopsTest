import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowsComponent } from '../app/shows/shows.component';  // Import ShowsComponent
import { AboutComponent } from '../app/about/about.component'; // 

const routes: Routes = [
  { path: '', component: ShowsComponent },
  { path: 'about', component: AboutComponent }, // Default route
  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
