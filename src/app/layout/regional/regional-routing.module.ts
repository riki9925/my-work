import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegionalComponent } from './regional.component';

const routes: Routes = [
    { path: '', component: RegionalComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RegionalRoutingModule { }
