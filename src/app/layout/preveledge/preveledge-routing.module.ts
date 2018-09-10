import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreveledgeComponent } from './preveledge.component';

const routes: Routes = [
    { path: '', component: PreveledgeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PreveledgeRoutingModule { }
