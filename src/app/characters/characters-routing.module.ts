import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CharacterDetailComponent } from '../character/character-detail/character-detail.component';
import { AllCharactersComponent } from './all-characters/all-characters.component';


const routes: Routes = [
  {
    path: '',
    component: AllCharactersComponent,
  },
  {
    path: 'character/:id',
    component: CharacterDetailComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharactersRoutingModule { }