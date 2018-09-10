import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProduksimpananComponent } from './produksimpanan.component';

const routes: Routes = [
    { path: '', component: ProduksimpananComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProduksimpananRoutingModule { }
