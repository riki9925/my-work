import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KecamatanComponent } from './kecamatan.component';
import { KecamatanRoutingModule } from './kecamatan-routing.module';
import { PageHeaderModule } from './../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
    imports: [
        CommonModule,
        KecamatanRoutingModule,
        Ng2SmartTableModule,
        NgbModule.forRoot(),
        PageHeaderModule
    ],
    declarations: [KecamatanComponent]
})
export class KecamatanModule { }
