import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './maps-page/maps.component';
import { HomeLayoutComponent } from './home-layout.component';
import { AboutComponent } from './about-page/about.component';
import { ReferencesComponent } from './references/references.component';
import { WorldPageComponent } from './world-page/world-page.component';
import { AfricaComponent } from './africa-page/africa.countries.component';

const routes:Routes = 
[
  {path: '', component: HomeLayoutComponent},
  {path: 'maps', component: MapsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'references', component: ReferencesComponent},
  {path: 'world', component: WorldPageComponent},
  {path: 'africa', component: AfricaComponent},
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
