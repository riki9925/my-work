import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { masterdatatabComponent } from './masterdatatab.component';

const routes: Routes = [
    { path: '', component: masterdatatabComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class masterdatatabRoutingModule { }
