import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-releaseuser',
    templateUrl: './releaseuser.component.html',
    styleUrls: ['./releaseuser.component.scss'],
    animations: [routerTransition()]
})
export class ReleaseUserComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
