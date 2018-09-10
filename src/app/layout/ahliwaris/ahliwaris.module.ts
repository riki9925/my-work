import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AhliwarisComponent } from './ahliwaris.component';
import { AhliwarisRoutingModule } from './ahliwaris-routing.module';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {JasperoAlertsModule} from '@jaspero/ng2-alerts';

@NgModule({
    imports: [
        CommonModule,
        AhliwarisRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        JasperoAlertsModule
    ],
    declarations: [AhliwarisComponent]
})
export class AhliwarisModule { }
