import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminAddClientPage } from './admin-add-client.page';

const routes: Routes = [
  {
    path: '',
    component: AdminAddClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminAddClientPageRoutingModule {}
