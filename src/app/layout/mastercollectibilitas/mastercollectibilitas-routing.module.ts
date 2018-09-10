import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterCollectibilitasComponent } from './mastercollectibilitas.component';

const routes: Routes = [
    { path: '', component: MasterCollectibilitasComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MasterCollectibilitasRoutingModule { }
