import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'characters',
      },
      {
        path: 'characters',
        loadChildren: './characters/characters.module#CharactersModule'
      },
      {
          path: 'leader-board-main',
          loadChildren: './leader-board/leader-board.module#LeaderBoardModule'
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
