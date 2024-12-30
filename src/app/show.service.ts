import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Show } from './models/show.model';

@Injectable({
  providedIn: 'root',
})
export class ShowsService {
  private apiUrl = 'http://localhost:3000/shows'; // URL du serveur JSON

  constructor(private http: HttpClient) {}

  getShows(): Observable<Show[]> {
    return this.http.get<Show[]>(this.apiUrl);
  }

  addShow(show: Show): Observable<Show> {
    // Ajout d'un nouveau show à la liste
    return this.http.post<Show>(this.apiUrl, show);
  }
}
