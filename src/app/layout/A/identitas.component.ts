import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-identitas',
    templateUrl: './identitas.component.html',
    styleUrls: ['./identitas.component.scss'],
    animations: [routerTransition()]
})
export class IdentitasComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
