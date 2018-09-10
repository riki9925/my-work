import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LvuserComponent } from './lvuser.component';

const routes: Routes = [
    { path: '', component: LvuserComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LvuserRoutingModule { }
