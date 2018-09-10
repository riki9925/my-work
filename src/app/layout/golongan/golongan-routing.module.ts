import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GolonganComponent } from './golongan.component';

const routes: Routes = [
    { path: '', component: GolonganComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GolonganRoutingModule { }
