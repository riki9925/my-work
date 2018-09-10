import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropinsiComponent } from './propinsi.component';

const routes: Routes = [
    { path: '', component: PropinsiComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PropinsiRoutingModule { }
