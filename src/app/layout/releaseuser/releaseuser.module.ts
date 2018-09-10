import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReleaseUserComponent } from './releaseuser.component';
import { ReleaseUserRoutingModule } from './releaseuser-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        ReleaseUserRoutingModule,
        PageHeaderModule
    ],
    declarations: [ReleaseUserComponent]
})
export class ReleaseUserModule { }
