import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BukuBesarComponent } from './bukubesar.component';
import { BukuBesarRoutingModule } from './bukubesar-routing.module';
import { PageHeaderModule } from './../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
    imports: [
        CommonModule,
        BukuBesarRoutingModule,
        Ng2SmartTableModule,
        PageHeaderModule
    ],
    declarations: [BukuBesarComponent]
})
export class BukuBesarModule { }
