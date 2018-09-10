import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentitasComponent } from './identitas.component';
import { IdentitasRoutingModule } from './identitas-routing.module';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {JasperoAlertsModule} from '@jaspero/ng2-alerts';

@NgModule({
    imports: [
        CommonModule,
        IdentitasRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        JasperoAlertsModule
    ],
    declarations: [IdentitasComponent]
})
export class IdentitasModule { }
