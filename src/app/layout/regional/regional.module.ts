import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegionalComponent } from './regional.component';
import { RegionalRoutingModule } from './regional-routing.module';
import { PageHeaderModule } from './../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
    imports: [
        CommonModule,
        RegionalRoutingModule,
        Ng2SmartTableModule,
        PageHeaderModule
    ],
    declarations: [RegionalComponent]
})
export class RegionalModule { }
