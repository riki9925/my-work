import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

// tslint:disable-next-line:one-line
export class SidebarComponent implements OnInit {
    showPengkreditan: any;
    showPendeb: any;
    showPen: any;
    showSet: any;
    showT: any;
    showtrans: any;
    showprod: any;
    cif= false;
    showma: any;
    showkes: any;
    showMaster: any;
    adm = 'Administrator';
    sett = 'Setting';
    param = 'Parameter';
    mstrAng = 'MasterAnggota';
    simpanan = 'Simpanan';
    TAB = 'Tabungan'
    Cif= 'CIF';
    public setting = false;
    public tabung = false;
    public ads = false;
    public parameter = false;
    public masteranggota = false;
    public simp = false;
    isActive = false;
    showMenu = '';
    constructor(
    ) { }



    ngOnInit() {
        if (this.adm == localStorage.getItem('cek')) {
            this.ads = true;
        }
        if (this.sett == localStorage.getItem('cek')) {
            this.setting = true;

        }
        if (this.param == localStorage.getItem('cek')) {
            this.parameter = true;

        }
        if (this.mstrAng == localStorage.getItem('cek')) {
            this.masteranggota = true;

        }
        if (this.simpanan == localStorage.getItem('cek')) {
            this.simp = true;

        }
        if (this.Cif == localStorage.getItem('cek')) {
            this.cif = true;
        }
        if (this.TAB == localStorage.getItem('cek')) {
            this.tabung = true;
        }
        // this.setting = false;
    }
    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(element: any) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        } else {
            this.showMenu = element;
        }
    }
    addExpanMasterdata(element: any) {
        if (element === this.showMaster) {
            this.showMaster = '0';
        } else {
            this.showMaster = element;
        }
    }

    kesehatan(element: any) {
        if (element === this.showkes) {
            this.showkes = '0';
        } else {
            this.showkes = element;
        }
    }

    MA(element: any) {
        if (element === this.showma) {
            this.showma = '0';
        } else {
            this.showma = element;
        }
    }
    produk(element: any) {
        if (element === this.showprod) {
            this.showprod = '0';
        } else {
            this.showprod = element;
        }
    }

    transaksi(element: any) {
        if (element === this.showT) {
            this.showT = '0';
        } else {
            this.showT = element;
        }
    }

    setoran(element: any) {
        if (element === this.showSet) {
            this.showSet = '0';
        } else {
            this.showSet = element;
        }
    }

    penarikan(element: any) {
        if (element === this.showPen) {
            this.showPen = '0';
        } else {
            this.showPen = element;
        }
    }
    pendebetan(element: any) {
        if (element === this.showPendeb) {
            this.showPendeb = '0';
        } else {
            this.showPendeb = element;
        }
    }

    pengkreditan(element: any) {
        if (element === this.showPengkreditan) {
            this.showPengkreditan = '0';
        } else {
            this.showPengkreditan = element;
        }
    }
}
