import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthHeaderComponent } from './auth-header/auth-header.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthComponent,
    AuthHeaderComponent,
  ],
  imports: [CommonModule, RouterModule, AuthRoutingModule],
})
export class AuthModule {}
