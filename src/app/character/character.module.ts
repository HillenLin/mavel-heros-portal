import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CharacterDetailComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class CharacterModule { }
