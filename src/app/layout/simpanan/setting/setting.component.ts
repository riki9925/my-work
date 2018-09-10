import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector: 'app-simpanan-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss'],
    animations: [routerTransition()]
})
export class SettingComponent implements OnInit {
    constructor() { }
    ngOnInit() { }
}
