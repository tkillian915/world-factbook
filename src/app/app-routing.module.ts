import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './maps-page/maps.component';
import { HomeLayoutComponent } from './home-layout.component';

const routes:Routes = 
[
  {path: '', component: HomeLayoutComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'home', component: HomeLayoutComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
