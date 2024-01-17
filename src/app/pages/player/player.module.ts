import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRoutes } from './player.routes';

@NgModule({
  declarations: [
    PlayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PlayerRoutes)
  ],
})
export class PlayerModule { }
