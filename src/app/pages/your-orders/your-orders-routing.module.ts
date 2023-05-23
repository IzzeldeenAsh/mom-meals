import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { YourOrdersComponent } from './your-orders/your-orders.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'your-orders',
    pathMatch:'full'
  },
  {
    path: 'your-orders',
    component:YourOrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YourOrdersRoutingModule { }
