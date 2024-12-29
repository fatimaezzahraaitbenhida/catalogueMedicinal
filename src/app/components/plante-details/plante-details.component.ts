// // import { Component, OnInit } from '@angular/core';
// // import { ActivatedRoute } from '@angular/router';
// // import { PlanteService } from '../../services/plante.service';
// // import { CommentaireService } from '../../services/commentaire.service';
// // import { Plante } from '../models/plante.model';
// // import { Commentaire } from '../models/commentaire.model';
// // import { NgIf, NgFor } from '@angular/common';
// // import { FormsModule } from '@angular/forms';
// // import { VideoService } from '../../services/video.service'; // Import du service vidéo
// // import { Video } from '../models/video.model'; // Import du modèle vidéo

// // import { SafeUrlModule } from '../../pipes/safe-url.module'; 

// // @Component({
// //   standalone: true,
// //   imports: [NgIf, NgFor, FormsModule, SafeUrlModule],
// //   selector: 'app-plantes-detail',
// //   templateUrl: './plante-details.component.html',
// //   styleUrls: ['./plante-details.component.css'],
// // })
// // export class PlantesDetailComponent implements OnInit {
// //   plante: Plante | null = null;
// //   commentaires: Commentaire[] = [];
// //   isLoading: boolean = true;
// //   newCommentaire: string = '';
// //   videos: string[] = [];
// //   constructor(
// //     private route: ActivatedRoute,
// //     private planteService: PlanteService,
// //     private commentaireService: CommentaireService,
// //     private videoService: VideoService 
// //   ) {}

// //   ngOnInit(): void {
// //     this.loadPlanteDetail();
// //   }

//   // loadPlanteDetail(): void {
//   //   const planteId = this.route.snapshot.paramMap.get('id');
//   //   if (planteId) {
//   //     this.planteService.getPlanteById(+planteId).subscribe({
//   //       next: (data) => {
//   //         this.plante = data;
//   //         this.isLoading = false;

//   //         // Exemple pour charger des vidéos
//   //         this.videos = [
//   //           'https://www.youtube.com/embed/dQw4w9WgXcQ', // Remplacez par vos URLs
//   //         ];
//   //       },
//   //       error: (err) => {
//   //         console.error('Erreur lors de la récupération des détails de la plante:', err);
//   //         this.isLoading = false;
//   //       },
//   //     });
//   //   }
//   // }

// //   loadPlanteDetail(): void {
// //     const planteId = this.route.snapshot.paramMap.get('id');
// //     if (planteId) {
// //       this.planteService.getPlanteById(+planteId).subscribe({
// //         next: (data) => {
// //           this.plante = data;
// //           this.loadVideosByPlanteId(+planteId);
// //           this.isLoading = false;
// //         },
// //         error: (err) => {
// //           console.error('Erreur lors de la récupération des détails de la plante:', err);
// //           this.isLoading = false;
// //         },
// //       });
// //     }
// //   }

// //   loadVideosByPlanteId(planteId: number): void {
// //     this.videoService.getVideosByPlanteId(planteId).subscribe({
// //       next: (videoResponses) => {
// //         console.log('Réponse API pour les vidéos:', videoResponses);
  
// //         // Gérer les objets et les chaînes
// //         this.videos = videoResponses
// //           .map(video => typeof video === 'string' ? video : video.url)
// //           .filter(url => url.includes('youtube.com')); // Vérification des URLs
// //       },
// //       error: (err) => {
// //         console.error('Erreur lors de la récupération des vidéos:', err);
// //       },
// //     });
// //   }
  
  
  
  
  
  
// //   addCommentaire(): void {
// //     const planteId = this.plante?.id;
// //     if (planteId && this.newCommentaire.trim()) {
// //       this.commentaireService.ajouterCommentaire(planteId.toString(), this.newCommentaire.trim()).subscribe({
// //         next: (newComment) => {
// //           this.commentaires.push(newComment);
// //           this.newCommentaire = '';
// //         },
// //         error: (err) => {
// //           console.error('Erreur lors de l\'ajout du commentaire:', err);
// //         },
// //       });
// //     }
// //   }
// // }
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// import { PlanteService } from '../../services/plante.service';
// import { CommentaireService } from '../../services/commentaire.service';
// import { Plante } from '../models/plante.model';
// import { Commentaire } from '../models/commentaire.model';
// import { NgIf, NgFor } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { VideoService } from '../../services/video.service'; // Import du service vidéo
// import { Video } from '../models/video.model'; // Import du modèle vidéo
// import { SafeUrlModule } from '../../pipes/safe-url.module'; // Import de SafeUrlModule pour gérer les URLs sécurisées

// @Component({
//   standalone: true,
//   imports: [NgIf, NgFor, FormsModule, SafeUrlModule],
//   selector: 'app-plantes-detail',
//   templateUrl: './plante-details.component.html',
//   styleUrls: ['./plante-details.component.css'],
// })
// export class PlantesDetailComponent implements OnInit {
//   plante: Plante | null = null;
//   commentaires: Commentaire[] = [];
//   isLoading: boolean = true;
//   newCommentaire: string = '';
//   videos: string[] = []; // Liste des URLs des vidéos

//   constructor(
//     private route: ActivatedRoute,
//     private planteService: PlanteService,
//     private commentaireService: CommentaireService,
//     private videoService: VideoService
//   ) {}

//   ngOnInit(): void {
//     this.loadPlanteDetail();
//   }
//   loadCommentaires(): void {
//     const planteId = this.route.snapshot.paramMap.get('id');
//     if (planteId) {
//       this.commentaireService.getCommentairesByPlanteId(planteId.toString()).subscribe({
//         next: (commentaires) => {
//           this.commentaires = commentaires;
//         },
//         error: (err) => {
//           console.error('Erreur lors de la récupération des commentaires:', err);
//         },
//       });
//     }
//   }
//   // Méthode pour charger les détails de la plante
//   loadPlanteDetail(): void {
//     const planteId = this.route.snapshot.paramMap.get('id');
//     if (planteId) {
//       this.planteService.getPlanteById(+planteId).subscribe({
//         next: (data) => {
//           this.plante = data;
//           this.loadVideosByPlanteId(+planteId);
//           this.isLoading = false;
//         },
//         error: (err) => {
//           console.error('Erreur lors de la récupération des détails de la plante:', err);
//           this.isLoading = false;
//         },
//       });
//     }
//   }

//   // Méthode pour charger les vidéos liées à la plante
//   loadVideosByPlanteId(planteId: number): void {
//     this.videoService.getVideosByPlanteId(planteId).subscribe({
//       next: (videoResponses) => {
//         console.log('Réponse API pour les vidéos:', videoResponses);
  
//         // Conversion des URLs pour YouTube embed
//         this.videos = videoResponses
//           .map(video => {
//             const url = typeof video === 'string' ? video : video.url;
//             const match = url.match(/v=([^&]+)/);
//             return match ? `https://www.youtube.com/embed/${match[1]}` : null;
//           })
//           .filter((url): url is string => !!url); // Filtrer les URLs valides
//       },
//       error: (err) => {
//         console.error('Erreur lors de la récupération des vidéos:', err);
//       },
//     });
//   }
  

//   // Méthode pour générer l'URL d'intégration YouTube (embed)
//   getEmbedUrl(videoId: string): string {
//     return `https://www.youtube.com/embed/${videoId}`;
//   }

//   // Méthode pour ajouter un commentaire
//   addCommentaire(): void {
//     const planteId = this.plante?.id;
//     if (planteId && this.newCommentaire.trim()) {
//       this.commentaireService.ajouterCommentaire(planteId.toString(), this.newCommentaire.trim()).subscribe({
//         next: (newComment) => {
//           this.commentaires.push(newComment);
//           this.newCommentaire = '';
//         },
//         error: (err) => {
//           console.error('Erreur lors de l\'ajout du commentaire:', err);
//         },
//       });
//     }
//   }
  
// }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanteService } from '../../services/plante.service';
import { CommentaireService } from '../../services/commentaire.service';
import { Plante } from '../models/plante.model';
import { Commentaire } from '../models/commentaire.model';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VideoService } from '../../services/video.service';
import { SafeUrlModule } from '../../pipes/safe-url.module';

import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, SafeUrlModule,RouterModule],
  selector: 'app-plantes-detail',
  templateUrl: './plante-details.component.html',
  styleUrls: ['./plante-details.component.css'],
})
export class PlantesDetailComponent implements OnInit {
  plante: Plante | null = null;
  commentaires: Commentaire[] = [];
  isLoading: boolean = true;
  newCommentaire: string = '';
  videos: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private planteService: PlanteService,
    private commentaireService: CommentaireService,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    this.loadPlanteDetail();
  }

  // Method to load the plant details
  loadPlanteDetail(): void {
    const planteId = this.route.snapshot.paramMap.get('id');
    if (planteId) {
      this.planteService.getPlanteById(+planteId).subscribe({
        next: (data) => {
          this.plante = data;
          this.loadVideosByPlanteId(+planteId);
          this.loadCommentaires();
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Error fetching plant details:', err);
          this.isLoading = false;
        },
      });
    }
  }

  // Method to load comments for the plant
  loadCommentaires(): void {
    const planteId = this.route.snapshot.paramMap.get('id');
    if (planteId) {
      this.commentaireService.getCommentairesByPlanteId(planteId.toString()).subscribe({
        next: (commentaires) => {
          this.commentaires = commentaires;
        },
        error: (err) => {
          console.error('Error fetching comments:', err);
        },
      });
    }
  }

  // Method to load videos for the plant
  loadVideosByPlanteId(planteId: number): void {
    this.videoService.getVideosByPlanteId(planteId).subscribe({
      next: (videoResponses) => {
        console.log('Video API response:', videoResponses);
        this.videos = videoResponses
          .map((video) => {
            const url = typeof video === 'string' ? video : video.url;
            const match = url.match(/v=([^&]+)/);
            return match ? `https://www.youtube.com/embed/${match[1]}` : null;
          })
          .filter((url): url is string => !!url);
      },
      error: (err) => {
        console.error('Error fetching videos:', err);
      },
    });
  }

  // Method to add a comment
  addCommentaire(): void {
    const planteId = this.plante?.id;
    if (planteId && this.newCommentaire.trim()) {
      this.commentaireService.ajouterCommentaire(planteId.toString(), this.newCommentaire.trim()).subscribe({
        next: (newComment) => {
          this.commentaires.push(newComment);
          this.newCommentaire = '';
        },
        error: (err) => {
          console.error('Error adding comment:', err);
        },
      });
    }
  }

  // Method to get the YouTube embed URL from video ID
  getEmbedUrl(videoId: string): string {
    return `https://www.youtube.com/embed/${videoId}`;
  }
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
