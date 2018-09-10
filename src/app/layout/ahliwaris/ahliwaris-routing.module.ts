import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AhliwarisComponent } from './ahliwaris.component';

const routes: Routes = [
    { path: '', component: AhliwarisComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AhliwarisRoutingModule { }
