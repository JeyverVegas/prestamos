import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowLoanPageRoutingModule } from './show-loan-routing.module';

import { ShowLoanPage } from './show-loan.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowLoanPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ShowLoanPage]
})
export class ShowLoanPageModule { }
