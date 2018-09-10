import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KodeposComponent } from './kodepos.component';

const routes: Routes = [
    { path: '', component: KodeposComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KodeposRoutingModule { }
