// src/app/app.config.ts
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

const routes: any[] = [
  // Define your routes here if needed
];

export const appConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};
