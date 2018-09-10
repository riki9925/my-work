import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropinsiComponent } from './propinsi.component';
import { PropinsiRoutingModule } from './propinsi-routing.module';
import { PageHeaderModule } from './../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
    imports: [
        CommonModule,
        PropinsiRoutingModule,
        Ng2SmartTableModule,
        PageHeaderModule
    ],
    declarations: [PropinsiComponent]
})
export class PropinsiModule { }
