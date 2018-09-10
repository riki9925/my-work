import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PendidikanComponent } from './pendidikan.component';
import { PendidikanRoutingModule } from './pendidikan-routing.module';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {JasperoAlertsModule} from '@jaspero/ng2-alerts';

@NgModule({
    imports: [
        CommonModule,
        PendidikanRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        JasperoAlertsModule
    ],
    declarations: [PendidikanComponent]
})
export class PendidikanModule { }
