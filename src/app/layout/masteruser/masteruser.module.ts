import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterUserComponent } from './masteruser.component';
import { MasterUserRoutingModule } from './masteruser-routing.module';
import { PageHeaderModule } from './../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
    imports: [
        CommonModule,
        MasterUserRoutingModule,
        Ng2SmartTableModule,
        PageHeaderModule
    ],
    declarations: [MasterUserComponent]
})
export class MasterUserModule { }
