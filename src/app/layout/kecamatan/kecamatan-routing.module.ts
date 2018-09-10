import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KecamatanComponent } from './kecamatan.component';

const routes: Routes = [
    { path: '', component: KecamatanComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KecamatanRoutingModule { }
