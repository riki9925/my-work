import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgamaComponent } from './agama.component';
import { AgamaRoutingModule } from './agama-routing.module';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {JasperoAlertsModule} from '@jaspero/ng2-alerts';

@NgModule({
    imports: [
        CommonModule,
        AgamaRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        JasperoAlertsModule
    ],
    declarations: [AgamaComponent]
})
export class AgamaModule { }
