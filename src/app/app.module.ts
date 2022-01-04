import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgmodelComponent } from './NG-MODEL/ngmodel/ngmodel.component';
import { HeaderComponent } from './Project/header/header.component';
import { RecipesComponent } from './Project/recipes/recipes.component';
import { RecipeListComponent } from './Project/recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './Project/recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './Project/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './Project/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './Project/shopping-list/shopping-edit/shopping-edit.component';
import { ComponentComponent } from './component/component.component';
import { DirDirective } from './basic-hightlight/dir.directive';

@NgModule({
  declarations: [
    AppComponent,
    NgmodelComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    ComponentComponent,
    DirDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
