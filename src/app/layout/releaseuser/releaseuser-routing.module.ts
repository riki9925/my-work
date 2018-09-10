import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReleaseUserComponent } from './releaseuser.component';

const routes: Routes = [
    { path: '', component: ReleaseUserComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ReleaseUserRoutingModule { }
