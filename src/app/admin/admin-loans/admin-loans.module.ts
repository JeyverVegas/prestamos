import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminLoansPageRoutingModule } from './admin-loans-routing.module';

import { AdminLoansPage } from './admin-loans.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminLoansPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AdminLoansPage]
})
export class AdminLoansPageModule { }
