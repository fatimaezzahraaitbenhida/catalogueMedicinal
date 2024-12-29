// import { Component,OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { PlanteService } from '../../services/plante.service';


// @Component({
//   selector: 'app-plantes-list',
//   standalone: true,
//   imports: [CommonModule], 
//   templateUrl: './plantes-list.component.html',
//   styleUrl: './plantes-list.component.css',
  
// })
// export class PlantesListComponent implements OnInit {
//   plantes: any[] = [];
//   isLoading: boolean = true;

//   constructor(private planteService: PlanteService) {}

//   ngOnInit(): void {
//     this.fetchPlantes();
//   }

//   fetchPlantes(): void {
//     this.planteService.getAllPlantes().subscribe({
//       next: (data) => {
//         this.plantes = data;
//         this.isLoading = false;
//       },
//       error: (err) => {
//         console.error('Erreur lors de la récupération des plantes :', err);
//         this.isLoading = false;
//       }
//     });
//   }
// }
import { Component, OnInit, AfterViewInit } from '@angular/core';
import SwiperCore, { Navigation, Pagination } from 'swiper';  // Correct import for Swiper 11.x.x
import { CommonModule } from '@angular/common';
import { PlanteService } from '../../services/plante.service';

// Initialize Swiper with required modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-plantes-list',
  standalone: true,
  imports: [CommonModule], // Add RouterModule here if you need routing
  templateUrl: './plantes-list.component.html',
  styleUrls: ['./plantes-list.component.css'],
})
export class PlantesListComponent implements OnInit, AfterViewInit {
  plantes: any[] = [];
  isLoading: boolean = true;

  constructor(private planteService: PlanteService) {}

  ngOnInit(): void {
    this.fetchPlantes();
  }

  ngAfterViewInit(): void {
    new SwiperCore('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: true,
      pagination: { clickable: true },
      breakpoints: {
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
      },
    });
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
}
