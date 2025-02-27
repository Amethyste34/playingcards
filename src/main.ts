import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// Vidéo you tube : lien https://www.youtube.com/watch?v=U71TQN68QGU
// Chaîne SimpleTech

// 0:00 Introduction
// 1:40 Installation de l'environnement de dév
//8:50 Premier projet
// 17:52 Les components
// 37:40 Inputs et signal inputs
// 56:53 Outputs, signal outputs et models
// 1:17:13 Détection de changements
// 1:44:45 Les boucles et les conditions
// 2:02:52 Les services
// 2:24:40 Les routes
// 2:41:40 Les formulaires réactifs
// 3:18:36 Angular Material
// 3:29:25 Gestion d'authentification
// 4:11:57 Intégration d'une API REST
// 4:37:30 Outro