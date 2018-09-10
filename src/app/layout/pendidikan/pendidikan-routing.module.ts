import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendidikanComponent } from './pendidikan.component';

const routes: Routes = [
    { path: '', component: PendidikanComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PendidikanRoutingModule { }
