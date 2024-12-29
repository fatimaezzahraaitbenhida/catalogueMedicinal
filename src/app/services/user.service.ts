import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8091/api/utilisateurs'; // Assurez-vous que cette URL est correcte

  constructor(private http: HttpClient) {}

  registerUser(user: any) {
    return this.http.post('http://localhost:8091/api/utilisateurs/register', user, { responseType: 'text' });
  }
  
}
