import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LeaderBoardBarComponent } from './leader-board-bar/leader-board-bar.component';


const routes: Routes = [
  {
    path: '',
    component: LeaderBoardBarComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }