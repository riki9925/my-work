import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnggotaRoutingModule } from './anggota-routing.module';
import { AnggotaComponent } from './anggota.component';

@NgModule({
    imports: [
        CommonModule,
        AnggotaRoutingModule
    ],
    declarations: [AnggotaComponent]
})
export class AnggotaModule {
}
