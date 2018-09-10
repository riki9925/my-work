import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterMitraComponent } from './mastermitra.component';
import { MasterMitraRoutingModule } from './mastermitra-routing.module';
import { PageHeaderModule } from './../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {JasperoAlertsModule} from '@jaspero/ng2-alerts'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
    imports: [
        CommonModule,
        MasterMitraRoutingModule,
        Ng2SmartTableModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        JasperoAlertsModule
    ],
    declarations: [MasterMitraComponent]
})
export class MasterMitraModule { }
