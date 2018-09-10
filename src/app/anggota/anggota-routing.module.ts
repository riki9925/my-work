import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnggotaComponent } from './anggota.component';

const routes: Routes = [
    { path: '', component: AnggotaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnggotaRoutingModule { }
