// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';


// @Injectable({
//   providedIn: 'root'
// })
// export class PlanteService {
//   private apiUrl = 'http://localhost:8091/api/plantes'; // Adaptez le port si nécessaire

//   constructor(private http: HttpClient) {}

//   // Obtenir toutes les plantes
//   getAllPlantes(): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}`);
//   }

//   // Rechercher des plantes par critères
//   searchPlantes(params: any): Observable<any[]> {
//     return this.http.get<any[]>(`${this.apiUrl}/search`, { params });
//   }

//   // Obtenir une plante par ID
//   getPlanteById(id: number): Observable<any> {
//     return this.http.get<any>(`${this.apiUrl}/${id}`);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plante } from '../components/models/plante.model'; // Chemin mis à jour

@Injectable({
  providedIn: 'root'
})
export class PlanteService {
  private apiUrl = 'http://localhost:8091/api/plantes'; // Adaptez le port si nécessaire

  constructor(private http: HttpClient) {}

  // Obtenir toutes les plantes
  getAllPlantes(): Observable<Plante[]> {
    return this.http.get<Plante[]>(`${this.apiUrl}`);
  }

  // Rechercher des plantes par critères
  searchPlantes(params: any): Observable<Plante[]> {
    return this.http.get<Plante[]>(`${this.apiUrl}/search`, { params });
  }

  // Obtenir une plante par ID
  getPlanteById(id: number): Observable<Plante> {
    return this.http.get<Plante>(`${this.apiUrl}/${id}`);
  }
}
