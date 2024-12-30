import { Component, Input } from '@angular/core';
import { Show } from '../models/show.model';
import { ShowsService } from '../show.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class ShowsComponent {
  @Input() shows: Show[] = []; // Initialisation de la liste des shows
  isLoading = true;   // Indicateur de chargement

  constructor(private showsService: ShowsService) {}

  ngOnInit(): void {
    this.fetchShows();
  }

  fetchShows(): void {
    this.showsService.getShows().subscribe({
      next: (data) => {
        this.shows = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des shows:', err);
        this.isLoading = false;
      },
    });
  }
}
