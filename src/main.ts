import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

// Vidéo you tube : lien https://www.youtube.com/watch?v=U71TQN68QGU
// Chaîne SimpleTech
// Lecture vidéo   2:03:43 Chapitre 8 : Les services