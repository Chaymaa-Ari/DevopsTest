import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ShowsComponent} from './shows/shows.component'
import { FormsModule } from '@angular/forms'; 
import { AboutComponent } from './about/about.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports:[RouterOutlet,RouterModule,ShowsComponent,AboutComponent,FormsModule]
})
export class AppComponent {
  title = 'CRUD Angular Shows';
}
