import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PekerjaanComponent } from './pekerjaan.component';
import { PekerjaanRoutingModule } from './pekerjaan-routing.module';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {JasperoAlertsModule} from '@jaspero/ng2-alerts';

@NgModule({
    imports: [
        CommonModule,
        PekerjaanRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        JasperoAlertsModule
    ],
    declarations: [PekerjaanComponent]
})
export class PekerjaanModule { }
