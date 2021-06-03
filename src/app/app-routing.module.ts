import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressSearchComponent } from './address-search/address-search.component';
import { MovieSearchComponent } from './movie-search/movie-search.component';

const routes: Routes = [
  {path:'movie-search',component:MovieSearchComponent},
  {path:'address-search',component:AddressSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
