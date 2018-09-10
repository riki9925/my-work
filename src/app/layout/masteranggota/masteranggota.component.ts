import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-master-anggota',
    templateUrl: './masteranggota.component.html',
    styleUrls: ['./masteranggota.component.scss'],
    animations: [routerTransition()]
})
export class MasterAnggotaComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
