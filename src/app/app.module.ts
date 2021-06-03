import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import {AgmCoreModule} from '@agm/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieSearchComponent } from './movie-search/movie-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressSearchComponent } from './address-search/address-search.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieSearchComponent,
    AddressSearchComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyDhqn21OskbwPFzwKEid2Tfo0flkWTOMWg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
