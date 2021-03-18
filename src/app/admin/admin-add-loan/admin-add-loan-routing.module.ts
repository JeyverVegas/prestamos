import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAddLoanPage } from './admin-add-loan.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAddLoanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAddLoanPageRoutingModule {}
