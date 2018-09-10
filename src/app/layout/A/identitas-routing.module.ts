import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IdentitasComponent } from './identitas.component';

const routes: Routes = [
    { path: '', component: IdentitasComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class IdentitasRoutingModule { }
