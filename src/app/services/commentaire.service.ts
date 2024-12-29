import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentaireService {
  private apiUrl = 'http://localhost:8091/api/commentaires';

  constructor(private http: HttpClient) {}

  getCommentairesByPlanteId(planteId: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/plante/${planteId}`);
  }

  ajouterCommentaire(planteId: string, commentaire: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/add`, {
      commentaire: commentaire,
      planteId: +planteId,
      utilisateurId: 1 // Remplacez par l'utilisateur authentifié si nécessaire
    });
  }
  
}
