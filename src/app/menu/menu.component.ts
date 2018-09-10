import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    animations: [routerTransition()]
})
export class MenuComponent implements OnInit {
    logout: string;
    simp: any;
    param: any;
    cek: any;
    setting: any;
    sett: string;
    administrator: any;
    adm: string;
    time: Date;
    date: Date;

    constructor(
        public router: Router,
        private modalService: NgbModal,
    ) {
        this.date = new Date();
        // this.administrator = 'Administrator';
        this.adm = 'Administrator';
        this.sett = 'Setting';
        this.param = 'Parameter';
        this.simp = 'Simpanan';
        setInterval(() => {
            this.date = new Date();
            this.time = this.date;
        }, 1000);
    }


    ngOnInit() {
    }

    klikAdm() {
        this.cek = this.adm;
        localStorage.setItem('cek', this.cek);
    }
    klikSett() {
        this.cek = this.sett;
        localStorage.setItem('cek', this.cek);
    }

    klikParameter() {
        this.cek = this.param;
        localStorage.setItem('cek', this.cek);
    }

    simpanan() {
        this.cek = this.simp;
        localStorage.setItem('cek', this.cek);
    }
    CIF() {
        localStorage.setItem('cek', 'CIF');
    }
    MA() {
        localStorage.setItem('cek', 'MasterAnggota');
    }
    TAB() {
        localStorage.setItem('cek', 'Tabungan');
    }
    onLoggedin() {
    }
    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    hapus(Hapus) {
        this.modalService.open(Hapus).result.then((result) => {
            this.logout = `Closed with: ${result}`;
        }, (reason) => {
            this.logout = `Dismissed ${this.getDismissHapus(reason)}`;
        });
    }
    private getDismissHapus(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

}
