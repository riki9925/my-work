import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterMitraComponent } from './mastermitra.component';

const routes: Routes = [
    { path: '', component: MasterMitraComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterMitraRoutingModule { }
