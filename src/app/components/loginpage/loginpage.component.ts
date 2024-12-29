
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent {
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    // Validation des champs
    if (!this.email || !this.password) {
      alert('Veuillez remplir tous les champs.');
      return;
    }
  
    const userCredentials = { email: this.email, password: this.password };
  
    this.http.post('http://localhost:8091/api/utilisateurs/login', userCredentials, { responseType: 'text' })
      .subscribe(
        (response: string) => {
          // Vérifier si la réponse contient un message de succès
          if (response.includes('Connexion réussie')) {
            alert(`Bienvenue ${this.email}!`);
            setTimeout(() => {
              this.router.navigate(['/home']); // Redirection après succès
            }, 500);
          } else {
            alert('Erreur de connexion. Veuillez vérifier vos informations.');
          }
        },
        (error) => {
          console.error('Erreur lors de la connexion:', error);
          alert(error.error || 'Une erreur s\'est produite pendant la connexion.');
        }
      );
  }
  
}
