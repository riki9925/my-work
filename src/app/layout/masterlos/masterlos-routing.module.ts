import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterLosComponent } from './masterlos.component';

const routes: Routes = [
    { path: '', component: MasterLosComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterLosRoutingModule { }
