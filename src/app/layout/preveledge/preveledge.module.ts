import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreveledgeComponent } from './preveledge.component';
import { PreveledgeRoutingModule } from './preveledge-routing.module';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        CommonModule,
        PreveledgeRoutingModule,
        NgbModule.forRoot(),
        PageHeaderModule
    ],
    declarations: [PreveledgeComponent]
})
export class PreveledgeModule { }
