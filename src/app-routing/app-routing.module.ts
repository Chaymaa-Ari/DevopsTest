import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowsComponent } from '../app/shows/shows.component';  // Import ShowsComponent

const routes: Routes = [
  { path: '', component: ShowsComponent }, // Default route
  // Add more routes as necessary
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
