import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ReCaptchaModule } from 'angular2-recaptcha';


@NgModule({
    imports: [
        CommonModule,
        LoginRoutingModule,
        ReCaptchaModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule {
}
