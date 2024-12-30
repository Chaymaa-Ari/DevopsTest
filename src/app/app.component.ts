import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShowsComponent} from './shows/shows.component'
import {ShowCreateComponent} from './show-create/show-create.component'
import { FormsModule } from '@angular/forms'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports:[RouterOutlet,ShowsComponent,ShowCreateComponent, FormsModule]
})
export class AppComponent {
  title = 'CRUD Angular Shows';
}
