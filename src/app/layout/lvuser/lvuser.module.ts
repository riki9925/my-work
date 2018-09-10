import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LvuserComponent } from './lvuser.component';
import { LvuserRoutingModule } from './lvuser-routing.module';
import { PageHeaderModule } from './../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
    imports: [
        CommonModule,
        LvuserRoutingModule,
        Ng2SmartTableModule,
        PageHeaderModule,
       ],
    declarations: [LvuserComponent]
})
export class LvuserModule { }
