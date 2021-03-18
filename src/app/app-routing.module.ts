import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dash-board',
    loadChildren: () => import('./dash-board/dash-board.module').then( m => m.DashBoardPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'loan',
    loadChildren: () => import('./loan/loan.module').then( m => m.LoanPageModule)
  },
  {
    path: 'show-loan',
    loadChildren: () => import('./show-loan/show-loan.module').then( m => m.ShowLoanPageModule)
  },
  {
    path: 'admin-login',
    loadChildren: () => import('./admin-login/admin-login.module').then( m => m.AdminLoginPageModule)
  },
  {
    path: 'client-login',
    loadChildren: () => import('./client-login/client-login.module').then( m => m.ClientLoginPageModule)
  },
  {
    path: 'admin-dash-board',
    loadChildren: () => import('./admin/admin-dash-board/admin-dash-board.module').then( m => m.AdminDashBoardPageModule)
  },
  {
    path: 'admin-loans',
    loadChildren: () => import('./admin/admin-loans/admin-loans.module').then( m => m.AdminLoansPageModule)
  },
  {
    path: 'admin-clients',
    loadChildren: () => import('./admin/admin-clients/admin-clients.module').then( m => m.AdminClientsPageModule)
  },
  {
    path: 'admin-add-client',
    loadChildren: () => import('./admin/admin-add-client/admin-add-client.module').then( m => m.AdminAddClientPageModule)
  },
  {
    path: 'admin-add-loan',
    loadChildren: () => import('./admin/admin-add-loan/admin-add-loan.module').then( m => m.AdminAddLoanPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
