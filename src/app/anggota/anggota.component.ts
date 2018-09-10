import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';

@Component({
    selector: 'app-anggota',
    templateUrl: './anggota.component.html',
    styleUrls: ['./anggota.component.scss'],
    animations: [routerTransition()]
})
export class AnggotaComponent implements OnInit {
    time: Date;
    date: Date;

    constructor(
        public router: Router
    ) {
        this.date =  new Date();
        
            setInterval(() => {
                this.date =  new Date();
                this.time= this.date; 
             }, 1000);
    }

    ngOnInit() {
    }

    onLoggedin() {
    }
    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }
    MA() {
        localStorage.setItem('cek', 'MasterAnggota');
    }
}
