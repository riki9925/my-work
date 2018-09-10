import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgamaComponent } from './agama.component';

const routes: Routes = [
    { path: '', component: AgamaComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AgamaRoutingModule { }
