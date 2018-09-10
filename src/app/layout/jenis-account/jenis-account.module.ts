import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JenisAccountComponent } from './jenis-account.component';
import { JenisAccountRoutingModule } from './jenis-account-routing.module';
import { PageHeaderModule } from './../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
    imports: [
        CommonModule,
        JenisAccountRoutingModule,
        Ng2SmartTableModule,
        PageHeaderModule
    ],
    declarations: [JenisAccountComponent]
})
export class JenisAccountModule { }
