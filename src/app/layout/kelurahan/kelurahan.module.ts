import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KelurahanComponent } from './kelurahan.component';
import { KelurahanRoutingModule } from './kelurahan-routing.module';
import { PageHeaderModule } from './../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
    imports: [
        CommonModule,
        KelurahanRoutingModule,
        Ng2SmartTableModule,
        PageHeaderModule
    ],
    declarations: [KelurahanComponent]
})
export class KelurahanModule { }
