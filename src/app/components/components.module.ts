import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DisplayBalanceComponent } from './display-balance/display-balance.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';

@NgModule({
  declarations: [TopBarComponent, DisplayBalanceComponent, TransactionListComponent],
  exports: [TopBarComponent, DisplayBalanceComponent, TransactionListComponent, CommonModule, FormsModule, IonicModule]
})

export class ComponentsModule { }
