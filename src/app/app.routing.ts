import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhotographersComponent } from './photographers/photographers.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
  {
     path: '',
     component: PhotographersComponent
   },
  {
     path: 'about',
     component: AboutComponent
   },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
