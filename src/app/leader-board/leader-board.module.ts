import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderBoardBarComponent } from './leader-board-bar/leader-board-bar.component';
import { BoardRoutingModule } from './board-routing.module';

@NgModule({
  declarations: [LeaderBoardBarComponent],
  imports: [
    CommonModule,
    BoardRoutingModule
  ]
})
export class LeaderBoardModule { }
