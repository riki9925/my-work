import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagihanComponent } from './tagihan.component';
import { TagihanRoutingModule } from './tagihan-routing.module';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {JasperoAlertsModule} from '@jaspero/ng2-alerts';
@NgModule({
    imports: [
        CommonModule,
        TagihanRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        JasperoAlertsModule
    ],
    declarations: [TagihanComponent]
})
export class TagihanModule { }
