import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterAnggotaComponent } from './masteranggota.component';

const routes: Routes = [
    { path: '', component: MasterAnggotaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterAnggotaRoutingModule { }
