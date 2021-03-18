import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanPageRoutingModule } from './loan-routing.module';

import { LoanPage } from './loan.page';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [LoanPage]
})
export class LoanPageModule { }
