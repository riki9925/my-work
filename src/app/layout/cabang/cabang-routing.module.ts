import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabangComponent } from './cabang.component';

const routes: Routes = [
    { path: '', component: CabangComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CabangRoutingModule { }
