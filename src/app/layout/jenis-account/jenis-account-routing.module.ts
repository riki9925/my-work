import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JenisAccountComponent } from './jenis-account.component';

const routes: Routes = [
    { path: '', component: JenisAccountComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JenisAccountRoutingModule { }
