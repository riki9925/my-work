import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogComponent } from './log.component';
import { LogRoutingModule } from './log-routing.module';
import { PageHeaderModule } from './../../shared';

@NgModule({
    imports: [
        CommonModule,
        LogRoutingModule,
        PageHeaderModule
    ],
    declarations: [LogComponent]
})
export class LogModule { }
