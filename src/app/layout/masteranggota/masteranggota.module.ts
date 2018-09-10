import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterAnggotaComponent } from './masteranggota.component';
import { MasterAnggotaRoutingModule } from './masteranggota-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        MasterAnggotaRoutingModule,
        PageHeaderModule
    ],
    declarations: [MasterAnggotaComponent]
})
export class MasterAnggotaModule { }
