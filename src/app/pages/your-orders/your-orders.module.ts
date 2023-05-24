import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YourOrdersRoutingModule } from './your-orders-routing.module';
import { YourOrdersComponent } from './your-orders/your-orders.component';
import { CoreModule } from 'src/app/core/core.module';
import { JoyrideModule } from 'ngx-joyride';

@NgModule({
  declarations: [YourOrdersComponent],
  imports: [
    CommonModule,
    CoreModule,
    JoyrideModule.forRoot(),
    YourOrdersRoutingModule,
  ],
})
export class YourOrdersModule {}
