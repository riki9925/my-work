import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        CommonModule,
        RegisterRoutingModule,
        NgbModule.forRoot(),
        PageHeaderModule
    ],
    declarations: [RegisterComponent]
})
export class RegisterModule { }
