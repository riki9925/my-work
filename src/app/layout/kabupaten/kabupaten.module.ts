import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KabupatenComponent } from './kabupaten.component';
import { KabupatenRoutingModule } from './kabupaten-routing.module';
import { PageHeaderModule } from './../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        CommonModule,
        KabupatenRoutingModule,
        Ng2SmartTableModule,
        NgbModule.forRoot(),
        PageHeaderModule
    ],
    declarations: [KabupatenComponent]
})
export class KabupatenModule { }
