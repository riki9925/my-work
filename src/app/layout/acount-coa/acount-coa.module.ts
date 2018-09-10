import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AcountCoaComponent } from './acount-coa.component';
import { AcountCoaRoutingModule } from './acount-coa-routing.module';
import { PageHeaderModule } from './../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
    imports: [
        CommonModule,
        AcountCoaRoutingModule,
        Ng2SmartTableModule,
        PageHeaderModule
    ],
    declarations: [AcountCoaComponent]
})
export class AcountCoaModule { }
