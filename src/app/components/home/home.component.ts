import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // Import RouterModule
import { PlanteService } from '../../services/plante.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule], // Add RouterModule here
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  plantes: any[] = [];
  isLoading: boolean = true;

  constructor(private planteService: PlanteService) {}

  ngOnInit(): void {
    this.fetchPlantes();
  }

  fetchPlantes(): void {
    this.planteService.getAllPlantes().subscribe({
      next: (data) => {
        this.plantes = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Erreur lors de la récupération des plantes :', err);
        this.isLoading = false;
      }
    });
  }
  // scrollToContact() {
  //   const contactSection = document.getElementById('contact');
  //   if (contactSection) {
  //     contactSection.scrollIntoView({ behavior: 'smooth' });
  //   }
  // }
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
