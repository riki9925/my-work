import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { masterdatatabComponent } from './masterdatatab.component';
import { masterdatatabRoutingModule } from './masterdatatab-routing.module';
import { PageHeaderModule } from './../../shared';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {JasperoAlertsModule} from '@jaspero/ng2-alerts'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BsModalModule } from 'ng2-bs3-modal';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { Ng2OrderModule } from 'ng2-order-pipe';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from "ng2-currency-mask/src/currency-mask.config";

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
    align: "left",
    allowNegative: false,
    allowZero: true,
    decimal: ",",
    precision: 0,
    prefix: "",
    suffix: "",
    thousands: "."
};

@NgModule({
    imports: [
        CommonModule,
        masterdatatabRoutingModule,
        Ng2SmartTableModule,
        PageHeaderModule,
        NgbModule.forRoot(), 
        JasperoAlertsModule,
        BsModalModule,
        Ng2SearchPipeModule,
        FormsModule,
        CurrencyMaskModule,
        Ng2OrderModule
    ],
    declarations: [masterdatatabComponent],
    providers: [
        { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
    ]
})
export class masterdatatabModule { }
