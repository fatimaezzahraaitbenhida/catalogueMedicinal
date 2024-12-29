import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common'; // Importation pour *ngIf et *ngFor
import { RecommandationsService } from '../../services/recommandations.service';

import { RouterModule } from '@angular/router'; // Import RouterModule
@Component({
  selector: 'app-recommandation-form',
    standalone: true,
    imports: [ReactiveFormsModule, NgIf, NgFor,
      RouterModule
    ], 
  templateUrl: './recommandations.component.html',
  styleUrls: ['./recommandations.component.css'],
})
export class RecommandationsComponent {
  form: FormGroup;
  recommandations: any[] = [];
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private recommandationsService: RecommandationsService
  ) {
    this.form = this.fb.group({
      antecedents: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      const antecedents = this.form.value.antecedents;
      this.isLoading = true;

      this.recommandationsService.getRecommandationsByAntecedents(antecedents).subscribe({
        next: (data) => {
          this.recommandations = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Erreur lors de la récupération des recommandations :', err);
          this.isLoading = false;
        },
      });
    }
  }
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
