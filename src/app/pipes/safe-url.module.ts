import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from './safe-url.pipe'; // Assurez-vous que le chemin est correct

@NgModule({
  declarations: [SafeUrlPipe],
  imports: [CommonModule], // Importer CommonModule si ce n'est pas déjà fait
  exports: [SafeUrlPipe],  // Exporter le pipe pour pouvoir l'utiliser ailleurs
})
export class SafeUrlModule {}
