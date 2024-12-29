import { Injectable, Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plante } from '../components/models/plante.model';




@Injectable({
  providedIn: 'root',
})
export class RecommandationsService {
  private baseUrl = 'http://localhost:8091/api/recommandations';

  constructor(private http: HttpClient) {}

  getRecommandations(utilisateurId: number): Observable<Plante[]> {
    return this.http.get<Plante[]>(`${this.baseUrl}/${utilisateurId}/obtenir`);
  }
  getRecommandationsByAntecedents(antecedents: string): Observable<Plante[]> {
    return this.http.get<Plante[]>(`${this.baseUrl}/recommandations/antecedents?antecedents=${encodeURIComponent(antecedents)}`);
  }
  
}
