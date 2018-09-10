import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingComponent } from './setting.component';
import { SettingRoutingModule } from './setting-routing.module';
import { PageHeaderModule } from './../../../shared';

@NgModule({
    imports: [
        CommonModule,
        SettingRoutingModule,
        PageHeaderModule
    ],
    declarations: [SettingComponent]
})
export class SettingModule { }
