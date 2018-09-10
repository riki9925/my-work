import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KodeposComponent } from './kodepos.component';
import { KodeposRoutingModule } from './kodepos-routing.module';
import { PageHeaderModule } from './../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
    imports: [
        CommonModule,
        KodeposRoutingModule,
        Ng2SmartTableModule,
        PageHeaderModule
    ],
    declarations: [KodeposComponent]
})
export class KodeposModule { }
