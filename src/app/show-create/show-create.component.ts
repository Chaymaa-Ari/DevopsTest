import { Component, Input } from '@angular/core';
import { ShowsService } from '../show.service';
import { Show } from '../models/show.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-show-create',
  templateUrl: './show-create.component.html',
  styleUrls: ['./show-create.component.css'],
  standalone: true,
  imports: [CommonModule,FormsModule]
})
export class ShowCreateComponent {
  @Input()show: Show = { id: 0, title: '', description: '', episodes: 0 };

  constructor(private showService: ShowsService, private router: Router) { }
  ngOnInit(): void {
    this.createShow();
  }
  createShow(): void {
    // Ensure that the form has the necessary data before submitting
    if (this.show.title && this.show.description && this.show.episodes > 0) {
      this.showService.addShow(this.show).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      alert('Please fill all fields!');
    }
  }
}
