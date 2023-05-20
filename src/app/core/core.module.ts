import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderOneComponent } from './header-one/header-one.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [HeaderOneComponent, FooterComponent, BannerComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderOneComponent, FooterComponent, BannerComponent],
})
export class CoreModule {}
