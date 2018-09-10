import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JabatanComponent } from './jabatan.component';
import { JabatanRoutingModule } from './jabatan-routing.module';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {JasperoAlertsModule} from '@jaspero/ng2-alerts';

@NgModule({
    imports: [
        CommonModule,
        JabatanRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        JasperoAlertsModule
    ],
    declarations: [JabatanComponent]
})
export class JabatanModule { }
