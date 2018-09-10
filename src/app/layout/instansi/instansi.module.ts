import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InstansiComponent } from './instansi.component';
import { InstansiRoutingModule } from './instansi-routing.module';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {JasperoAlertsModule} from '@jaspero/ng2-alerts'

@NgModule({
    imports: [
        CommonModule,
        InstansiRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        JasperoAlertsModule
    ],
    declarations: [InstansiComponent]
})
export class InstansiModule { }
