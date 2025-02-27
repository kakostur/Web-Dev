import { bootstrapApplication } from '@angular/platform-browser';

import { provideRouter } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { AlbumsService } from './app/albums.service';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),   
    provideRouter(routes),
    importProvidersFrom(FormsModule),
    AlbumsService, 
  ],
}).catch(err => console.error(err));
