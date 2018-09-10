import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IdentitasComponent } from './identitas.component';
import { IdentitasRoutingModule } from './identitas-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        IdentitasRoutingModule,
        PageHeaderModule
    ],
    declarations: [IdentitasComponent]
})
export class IdentitasModule { }
