import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { PhotoComponent }  from './photo/photo.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'photos', component: PhotoComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
