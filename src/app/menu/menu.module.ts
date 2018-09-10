import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    imports: [
        CommonModule,
        MenuRoutingModule,
        NgbModule.forRoot(),
    ],
    declarations: [MenuComponent]
})
export class MenuModule {
}
