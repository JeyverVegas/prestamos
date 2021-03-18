import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAddLoanPageRoutingModule } from './admin-add-loan-routing.module';

import { AdminAddLoanPage } from './admin-add-loan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAddLoanPageRoutingModule
  ],
  declarations: [AdminAddLoanPage]
})
export class AdminAddLoanPageModule {}
