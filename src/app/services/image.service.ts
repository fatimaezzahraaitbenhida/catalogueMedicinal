import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private apiUrl = 'http://localhost:8091/api/images';

  constructor(private http: HttpClient) {}

  getImagesByPlanteId(planteId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/by-plante/${planteId}`);
  }
}
