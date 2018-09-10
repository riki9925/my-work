import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.scss'],
    animations: [routerTransition()]
})
export class GridComponent implements OnInit {
    time: Date;
    date: Date;
    constructor() {
        this.date =  new Date(); 
        
        setInterval(() => {
            this.date =  new Date();
         }, 1000);
     }
    ngOnInit() { }
} 
