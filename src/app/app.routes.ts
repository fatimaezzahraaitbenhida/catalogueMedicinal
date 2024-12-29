
import { Routes } from '@angular/router';
import { PlantesListComponent } from './components/plantes-list/plantes-list.component';
import { SearchPlantesComponent } from './components/search-plantes/search-plantes.component';  // Importez le composant de recherche
import { RecommandationsComponent } from './components/recommandations/recommandations.component';
import { PlantesDetailComponent } from './components/plante-details/plante-details.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';

import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    //{ path: '', component: PlantesListComponent },
//   { path: '', component: HomeComponent },
//   { path: 'login', component: LoginpageComponent }, 
//     { path: 'search', component: SearchPlantesComponent }, 
    
//   //{ path: 'login', component: LoginpageComponent },
//   { path: 'register', component: RegisterpageComponent },
//     { path: 'reco', component: RecommandationsComponent }, 
//     { path: 'plantes/:id', component: PlantesDetailComponent },
//     { path: '**', redirectTo: '' },
// ];
{ path: '', component: LoginpageComponent },  // Page de connexion par défaut
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchPlantesComponent },

  { path: 'list', component: PlantesListComponent },
  { path: 'register', component: RegisterpageComponent }, // Page d'inscription
  { path: 'reco', component: RecommandationsComponent },
  { path: 'plantes/:id', component: PlantesDetailComponent },
  { path: '**', redirectTo: '' }, ];