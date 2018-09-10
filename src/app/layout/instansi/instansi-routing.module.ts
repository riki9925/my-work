import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstansiComponent } from './instansi.component';

const routes: Routes = [
    { path: '', component: InstansiComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InstansiRoutingModule { }
