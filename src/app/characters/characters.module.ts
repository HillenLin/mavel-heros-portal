import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharacterModule } from '../character/character.module';
import { SharedModule } from '../shared/shared.module';
import { AllCharactersComponent } from './all-characters/all-characters.component';


@NgModule({
  declarations: [AllCharactersComponent],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    CharacterModule,
    SharedModule
  ]
})
export class CharactersModule { }
