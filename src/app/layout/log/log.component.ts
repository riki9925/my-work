import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-log',
    templateUrl: './log.component.html',
    styleUrls: ['./log.component.scss'],
    animations: [routerTransition()]
})
export class LogComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
