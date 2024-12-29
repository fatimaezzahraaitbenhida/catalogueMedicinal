// import { Component, OnInit } from '@angular/core';
// import { PlanteService } from '../../services/plante.service';
// import { Plante } from '../models/plante.model';
// import { FormsModule } from '@angular/forms'; 

// @Component({
//   selector: 'app-search-plantes',
//   templateUrl: './search-plantes.component.html',
//   styleUrls: ['./search-plantes.component.css']
// })
// export class SearchPlantesComponent implements OnInit {
//   plantes: Plante[] = [];
//   isLoading: boolean = false;
//   errorMessage: string = '';

//   constructor(private planteService: PlanteService) {}

//   ngOnInit(): void {
//     this.getAllPlantes();
//   }

//   getAllPlantes(): void {
//     this.isLoading = true;
//     this.planteService.getAllPlantes().subscribe(
//       (response: Plante[]) => { // Spécifiez que 'response' est un tableau de Plante
//         this.plantes = response;
//         this.isLoading = false;
//       },
//       (error) => {
//         this.errorMessage = 'Erreur lors de la récupération des plantes.';
//         console.error(error);
//         this.isLoading = false;
//       }
//     );
//   }
// }
// import { Component, OnInit } from '@angular/core';
// import { PlanteService } from '../../services/plante.service';
// import { Plante } from '../models/plante.model';
// import { FormsModule } from '@angular/forms'; 
// import { CommonModule } from '@angular/common'; // Importer CommonModule


// @Component({
//   selector: 'app-search-plantes',
//   standalone: true, // Composant standalone
//   imports: [FormsModule, CommonModule], // Importer FormsModule
//   templateUrl: './search-plantes.component.html',
//   styleUrls: ['./search-plantes.component.css']
// })
// export class SearchPlantesComponent implements OnInit {
//   plantes: Plante[] = [];
//   searchParams = {
//     nom: '',
//     famille: '',
//     proprietes: '',
//     regionGeographique: ''
//   };
//   isLoading: boolean = false;
//   errorMessage: string = '';

//   constructor(private planteService: PlanteService) {}

//   ngOnInit(): void {
//     // Optionnel: Charger toutes les plantes lors de l'initialisation du composant
//     this.getAllPlantes();
//   }

//   // Récupérer toutes les plantes
//   getAllPlantes(): void {
//     this.isLoading = true;
//     this.planteService.getAllPlantes().subscribe(
//       (response: Plante[]) => {
//         this.plantes = response;
//         this.isLoading = false;
//       },
//       (error) => {
//         this.errorMessage = 'Erreur lors de la récupération des plantes.';
//         console.error(error);
//         this.isLoading = false;
//       }
//     );
//   }

//   // Recherche des plantes basées sur les critères
//   onSearch(): void {
//     this.isLoading = true;
//     this.planteService.searchPlantes(this.searchParams).subscribe(
//       (response: Plante[]) => {
//         this.plantes = response;
//         this.isLoading = false;
//       },
//       (error) => {
//         this.errorMessage = 'Erreur lors de la recherche des plantes.';
//         console.error(error);
//         this.isLoading = false;
//       }
//     );
//   }
// }
import { Component, OnInit } from '@angular/core';
import { PlanteService } from '../../services/plante.service';
import { Plante } from '../models/plante.model';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common'; // Importer CommonModule

import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-search-plantes',
  standalone: true, // Composant standalone
  imports: [FormsModule, CommonModule, RouterModule], // Importer FormsModule
  templateUrl: './search-plantes.component.html',
  styleUrls: ['./search-plantes.component.css']
})
export class SearchPlantesComponent implements OnInit {
  plantes: Plante[] = [];
  searchParams = {
    nom: '',
    famille: '',
    proprietes: '',
    regionGeographique: ''
  };
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private planteService: PlanteService) {}

  ngOnInit(): void {
    // Ne pas charger toutes les plantes ici, car elles seront chargées lors de la recherche
  }

  // Recherche des plantes basées sur les critères
  onSearch(): void {
    this.isLoading = true;
    this.planteService.searchPlantes(this.searchParams).subscribe(
      (response: Plante[]) => {
        this.plantes = response;
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Erreur lors de la recherche des plantes.';
        console.error(error);
        this.isLoading = false;
      }
    );
  }
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
