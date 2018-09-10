import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KelurahanComponent } from './kelurahan.component';

const routes: Routes = [
    { path: '', component: KelurahanComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KelurahanRoutingModule { }
