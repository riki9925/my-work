import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterCollectibilitasComponent } from './mastercollectibilitas.component';
import { MasterCollectibilitasRoutingModule } from './mastercollectibilitas-routing.module';
import { PageHeaderModule } from './../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
    imports: [
        CommonModule,
        MasterCollectibilitasRoutingModule,
        Ng2SmartTableModule,
        PageHeaderModule
    ],
    declarations: [MasterCollectibilitasComponent]
})
export class MasterCollectibilitasModule { }
