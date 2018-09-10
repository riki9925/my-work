import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnggotaComponent } from './anggota.component';
import { AnggotaRoutingModule } from './anggota-routing.module';
import { PageHeaderModule } from './../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JasperoAlertsModule} from '@jaspero/ng2-alerts';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
// import { FilterPipeModule } from 'ngx-filter-pipe';
import { Ng2TableModule } from 'ng2-table/ng2-table';


@NgModule({
    imports: [
        CommonModule,
        AnggotaRoutingModule,
        PageHeaderModule,
        NgbModule.forRoot(),
        JasperoAlertsModule,
        Ng2OrderModule,
        Ng2SearchPipeModule,
        FormsModule,
        // FilterPipeModule
    ],
    declarations: [AnggotaComponent]
})
export class AnggotaModule { }
