import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashBoardPageRoutingModule } from './dash-board-routing.module';

import { DashBoardPage } from './dash-board.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashBoardPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DashBoardPage]
})
export class DashBoardPageModule { }
