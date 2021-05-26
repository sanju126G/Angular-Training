import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodRecipesComponent } from './food-recipes/food-recipes.component';
import { FoodComponent } from './food/food.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { LoginComponent } from './login/login.component';
import { MockComponent } from './mock/mock.component';
import { RecipeAppComponent } from './recipe-app/recipe-app.component';
import { SearchDropComponent } from './search-drop/search-drop.component';
import { TableScrollComponent } from './table-scroll/table-scroll.component';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [
  {path:'drop-search',component:SearchDropComponent},
  {path:'form-array',component:FormArrayComponent},
  {path:'table',component:TableScrollComponent},
  {path:'mock-output',component:MockComponent},
  {path:'to-do',component:TodoComponent},
  {path:'login',component:LoginComponent},
  {path:'recipe',component:RecipeAppComponent},
  {path:'food-recipe',component:FoodRecipesComponent},
  {path:'food',component:FoodComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
