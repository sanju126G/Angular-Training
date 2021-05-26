import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatSelectModule} from '@angular/material/select';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { SearchDropComponent } from './search-drop/search-drop.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { TableScrollComponent } from './table-scroll/table-scroll.component';
import { MockComponent } from './mock/mock.component';
import { TodoComponent } from './todo/todo.component';
import { LoginComponent } from './login/login.component';
import { RecipeAppComponent } from './recipe-app/recipe-app.component';
import { FoodComponent } from './food/food.component';
import { FoodRecipesComponent } from './food-recipes/food-recipes.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchDropComponent,
    NavbarComponent,
    FormArrayComponent,
    TableScrollComponent,
    MockComponent,
    TodoComponent,
    LoginComponent,
    RecipeAppComponent,
    FoodComponent,
    FoodRecipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatAutocompleteModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
