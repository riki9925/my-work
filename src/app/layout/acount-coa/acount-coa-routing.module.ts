import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcountCoaComponent } from './acount-coa.component';

const routes: Routes = [
    { path: '', component: AcountCoaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AcountCoaRoutingModule { }
