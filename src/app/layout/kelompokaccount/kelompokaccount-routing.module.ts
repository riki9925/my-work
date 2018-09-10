import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KelompokAccountComponent } from './kelompokaccount.component';

const routes: Routes = [
    { path: '', component: KelompokAccountComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class KelompokAccountRoutingModule { }
