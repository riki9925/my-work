import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KabupatenComponent } from './kabupaten.component';

const routes: Routes = [
    { path: '', component: KabupatenComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KabupatenRoutingModule { }
