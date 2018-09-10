import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KelompokAccountComponent } from './kelompokaccount.component';
import { KelompokAccountRoutingModule } from './kelompokaccount-routing.module';
import { PageHeaderModule } from './../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
    imports: [
        CommonModule,
        KelompokAccountRoutingModule,
        Ng2SmartTableModule,
        PageHeaderModule
    ],
    declarations: [KelompokAccountComponent]
})
export class KelompokAccountModule { }
