import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AppModule } from './app/app.module';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(AppModule),
    provideRouter(routes), // Configura as rotas aqui
  ],
}).catch(err => console.error(err));