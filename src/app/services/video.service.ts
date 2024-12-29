import { Video } from '../components/models/video.model';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'http://localhost:8091/api/videos/plante'; // Remplace par ton URL correcte

  constructor(private http: HttpClient) {}

  getVideosByPlanteId(planteId: number): Observable<Video[]> {
    return this.http.get<Video[]>(`${this.apiUrl}/${planteId}`);
  }
  
}
