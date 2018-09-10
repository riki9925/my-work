import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterLosComponent } from './masterlos.component';
import { MasterLosRoutingModule } from './masterlos-routing.module';
import { PageHeaderModule } from './../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
    imports: [
        CommonModule,
        MasterLosRoutingModule,
        Ng2SmartTableModule,
        PageHeaderModule
    ],
    declarations: [MasterLosComponent]
})
export class MasterLosModule { }
