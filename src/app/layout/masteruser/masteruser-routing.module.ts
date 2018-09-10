import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterUserComponent } from './masteruser.component';

const routes: Routes = [
    { path: '', component: MasterUserComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterUserRoutingModule { }
