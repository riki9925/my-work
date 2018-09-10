import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JabatanComponent } from './jabatan.component';

const routes: Routes = [
    { path: '', component: JabatanComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JabatanRoutingModule { }
