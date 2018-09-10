import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CabangComponent } from './cabang.component';
import { CabangRoutingModule } from './cabang-routing.module';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {JasperoAlertsModule} from '@jaspero/ng2-alerts'
@NgModule({
    imports: [
        CommonModule,
        CabangRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        JasperoAlertsModule
    ],
    declarations: [CabangComponent]
})
export class CabangModule { }
