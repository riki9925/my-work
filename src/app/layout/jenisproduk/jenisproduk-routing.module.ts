import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JenisprodukComponent } from './jenisproduk.component';

const routes: Routes = [
    { path: '', component: JenisprodukComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class JenisprodukRoutingModule { }
