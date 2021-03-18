import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminAddClientPageRoutingModule } from './admin-add-client-routing.module';

import { AdminAddClientPage } from './admin-add-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminAddClientPageRoutingModule
  ],
  declarations: [AdminAddClientPage]
})
export class AdminAddClientPageModule {}
