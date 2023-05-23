import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'choose-meals',
    loadChildren: () =>
      import('./pages/choosing-meals/choosing-meals.module').then(
        (m) => m.ChoosingMealsModule
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'account',
    loadChildren: () =>
      import('./pages/account-overview/account-overview.module').then(
        (m) => m.AccountOverviewModule
      ),
  },
  {
    path: 'orders',
    loadChildren: () =>
      import('./pages/your-orders/your-orders.module').then(
        (m) => m.YourOrdersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
