import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GolonganComponent } from './golongan.component';
import { GolonganRoutingModule } from './golongan-routing.module';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {JasperoAlertsModule} from '@jaspero/ng2-alerts';

@NgModule({
    imports: [
        CommonModule,
        GolonganRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        JasperoAlertsModule
    ],
    declarations: [GolonganComponent]
})
export class GolonganModule { }
