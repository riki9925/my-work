import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http, Response } from '@angular/http';
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng2-alerts';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyMaskModule } from "ng2-currency-mask";

@Component({
    selector: 'app-produk-simpanan',
    templateUrl: './produksimpanan.component.html',
    styleUrls: ['./produksimpanan.component.scss'],
    animations: [routerTransition()],
    
})
export class ProduksimpananComponent implements OnInit {
    Aktif: string;
    PBGA: any;
    dtPBGA: any;
    _id: any;
    Adm: string;
    Pot: string;
    Pajak: string;
    Bunga: string;
    Setoran: any;
    dataminset: any;
    minset: string;
    setminimal: string;
    BtnUbah= false;
    BtnHapus = false;
    BtnSimpan = false;
    datacoba: any;    
    dta2: any;
    dta1: any;
    accb: any;
    ketb: any;
    accc: any;
    ketc: any;
    dtket: String;
    dtacc: String;
    idCab: any;
    data: any;
    idKel: any;
    idKec: any;
    idKab: any;
    idProp: any;
    kelurahan: any;
    kecamatan: any;
    kabupaten: any;
    propinsi: any;
    cabang: any;
    model: any;
    closeResult: string;
    closeIdent: string;
    closehapus: string;
    msg: any;
    sukses: AlertType = 'success';
    gagal: AlertType = 'error';
    results: any;
    stjenissimp: boolean = false;

    option: AlertSettings = {
        overlay: true,
        overlayClickToClose: true,
        showCloseButton: false,
        duration: 2000
      };

    constructor(
        private _http: Http,
        private modalService: NgbModal,
        private _alert: AlertsService
    ) { }

    ngOnInit() {
        this.getCabang();
        this.getPropinsi();
        this.getData();
        this.getAccount();
        this.resetData();
        this.BtnUbah= false;
        this.BtnHapus = false;
        this.BtnSimpan = false;
        this.stjenissimp = false;
        
    }
    
    getAccount() {
        const body = ({
            CIF: localStorage.getItem('cif')
        });
        this._http.post('http://103.15.226.134:2017/account/informasi' , body ).map(res => res.json())
            .subscribe(data => {
                this.datacoba = data['data'];
            });
    }
    isiS(event, acc, ket){
        event.preventDefault();
        this.dta1 = acc;
        this.dta2 = ket;
    }
    isi(event, acc, ket){
        event.preventDefault();
        this.dtacc = acc;
        this.dtket = ket;
    }
    isiB(event, acc, ket){
        event.preventDefault();
        this.accb = acc;
        this.ketb = ket;
    }
    isiC(event, acc, ket){
        event.preventDefault();
        this.accc = acc;
        this.ketc = ket;
    }
    getData() {
        const body = ({
            CIF: localStorage.getItem('cif')
        });
        this._http.post('http://103.15.226.134:2017/simpanan/produk' , body ).map(res => res.json())
            .subscribe(data => {
                this.data = data['data'];
                this.dataminset = data.data.BGA;
                localStorage.setItem('minset', data.data.BGA);
            });
    }


    tambah(event, acc, bunga, pajak, setawal, setminimal, mintarik, maxtarik, biayaoffrek, salmin, 
        potongan, setoran, adm, accbga, accpjk, accadm, accpot, pb, st, kst, ku) {
        event.preventDefault();
        const body = ({
            ACC : this.dta1,
            BGA : bunga.replace(/[.*+?^${}()|[\]\\]/g, ""),
            PJK : pajak.replace(/[.*+?^${}()|[\]\\]/g, ""),
            SETAWAL : setawal.replace(/[.*+?^${}()|[\]\\]/g, ""),
            SETMIN : setminimal.replace(/[.*+?^${}()|[\]\\]/g, ""),
            MINTARIK : mintarik.replace(/[.*+?^${}()|[\]\\]/g, ""),
            MAXTARIK : maxtarik.replace(/[.*+?^${}()|[\]\\]/g, ""),
            SALMIN : salmin.replace(/[.*+?^${}()|[\]\\]/g, ""),
            POT : biayaoffrek.replace(/[.*+?^${}()|[\]\\]/g, ""),
            SETORAN : setoran.replace(/[.*+?^${}()|[\]\\]/g, ""),
            ADM : adm.replace(/[.*+?^${}()|[\]\\]/g, ""),
            ACCBGA : accbga,
            ACCPJK :  this.dtacc,
            ACCPJKDET :  this.dtket,
            ACCADM : this.accc,
            ACCADMDET : this.ketc,
            ACCPOT : this.accb,
            ACCPOTDET : this.ketb,
            PB : pb,
            ST : st,
            KST : kst,
            KU : ku,
            SJT: this.stjenissimp,
            PBGA: this.dtPBGA,
            CIF: localStorage.getItem('cif')
        })
        this._http.post('http://103.15.226.134:2017/simpanan/produk/add', body).map(res => res.json())
            .subscribe(data => {
                // this.identitas = data['data'];
                this.msg = data['msg'];
                if (this.msg == true) {
                    this._alert.create(this.sukses, 'Data berhasil di tambah');
                } else {
                    this._alert.create(this.gagal, 'Data gagal di tambah');
                }
                this.getData()
            });
            this.getData()
            this.resetData();
    }
    update(event, acc, bunga, pajak, setawal, setminimal, mintarik, maxtarik, biayaoffrek, salmin, 
        potongan, setoran, adm, accbga, accpjk, accadm, accpot, pb, st, kst, ku) {
        event.preventDefault();
        this.BtnSimpan = false;
        this.BtnHapus = false;
        const body = ({
            ACC : this.dta1,
            BGA : bunga.replace(/[.*+?^${}()|[\]\\]/g, ""),
            PJK : pajak.replace(/[.*+?^${}()|[\]\\]/g, ""),
            SETAWAL : setawal.replace(/[.*+?^${}()|[\]\\]/g, ""),
            SETMIN : setminimal.replace(/[.*+?^${}()|[\]\\]/g, ""),
            MINTARIK : mintarik.replace(/[.*+?^${}()|[\]\\]/g, ""),
            MAXTARIK : maxtarik.replace(/[.*+?^${}()|[\]\\]/g, ""),
            SALMIN : salmin.replace(/[.*+?^${}()|[\]\\]/g, ""),
            POT : biayaoffrek.replace(/[.*+?^${}()|[\]\\]/g, ""),
            SETORAN : setoran.replace(/[.*+?^${}()|[\]\\]/g, ""),
            ADM : adm.replace(/[.*+?^${}()|[\]\\]/g, ""),
            ACCBGA : accbga,
            ACCPJK :  this.dtacc,
            ACCPJKDET :  this.dtket,
            ACCADM : this.accc,
            ACCADMDET : this.ketc,
            ACCPOT : this.accb,
            ACCPOTDET : this.ketb,
            PB : pb,
            ST : st,
            KST : kst,
            KU : ku,
            SJT: this.stjenissimp,
            PBGA: this.dtPBGA,
            id: this._id,
        })
        this._http.post('http://103.15.226.134:2017/simpanan/produk/update', body).map(res => res.json())
            .subscribe(data => {
                // this.identitas = data['data'];
                this.msg = data['msg'];
                if (this.msg == true) {
                    this._alert.create(this.sukses, 'Data berhasil di update');
                } else {
                    this._alert.create(this.gagal, 'Data gagal di update');
                }
                this.getData()
            });
            this.getData()
    }

    delete() {
        event.preventDefault();
        const body = ({
            id: this._id
        })
        this._http.post('http://103.15.226.134:2017/simpanan/produk/delete', body).map(res => res.json())
        .subscribe(data => {
            // this.identitas = data['data'];
            this._alert.create(this.sukses, 'Data berhasil dihapus');
            this.getData();
        });
        this.getData();
    }
    approve(event, id) {
        event.preventDefault();
        const body = ({
            ST: '2',
            id: id
        })
        this._http.post('http://103.15.226.134:2017/cif/approve', body).map(res => res.json())
        .subscribe(data => {
            // this.identitas = data['data'];
            this._alert.create(this.sukses, 'Data berhasil di approve');
            this.getData();
        });
        this.getData();
    }
    onChange(event) {
        this.dtPBGA = event.target.value;
    }
    nonaktif(event, id) {
        event.preventDefault();
        const body = ({
            ST: '9',
            id: id
        })
        this._http.post('http://103.15.226.134:2017/cif/nonaktif', body).map(res => res.json())
        .subscribe(data => {
            // this.identitas = data['data'];
            this._alert.create(this.sukses, 'Data berhasil di non aktifkan');
            this.getData();
        });
        this.getData();
    }

    getCabang() {
        this._http.get('http://103.15.226.134:2017/cabang', ).map(res => res.json())
            .subscribe(data => {
                this.cabang = data['data'];
            });

    }
    getPropinsi() {
        this._http.get('http://103.15.226.134:2017/propinsi', ).map(res => res.json())
            .subscribe(data => {
                this.propinsi = data['data'];
            });
    }

    getKab() {
        const body = ({
            id: this.idProp
        });
        this._http.post('http://103.15.226.134:2017/kabupaten', body ).map(res => res.json())
            .subscribe(data => {
                this.kabupaten = data['data'];
            });
    }

    getKec() {
        const body = ({
            id: this.idKab
        });
        this._http.post('http://103.15.226.134:2017/kecamatan' , body ).map(res => res.json())
            .subscribe(data => {
                this.kecamatan = data['data'];
            });
    }

    getKel() {
        const body = ({
            id: this.idKec
        });
        this._http.post('http://103.15.226.134:2017/kelurahan', body ).map(res => res.json())
            .subscribe(data => {
                this.kelurahan = data['data'];
            });
    }
    changeProp(event) {
        this.idProp = event.target.value;
        this.getKab();
    }
    changeKab(event) {
        this.idKab = event.target.value;
        this.getKec();
    }
    changeKec(event) {
        this.idKec = event.target.value;
        this.getKel();
    }
    changeKel(event) {
        this.idKel = event.target.value;
        // this.getKab();
    }
    onCabang(event) {
        this.idCab = event.target.value;
    }

    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }

    buka(addIdentitas) {
        this.resetData();
        this.BtnSimpan = true;
        this.BtnUbah = false;
        this.BtnHapus = false;
        if( this.stjenissimp == false){
            this.Aktif = 'Nonaktif'
            
        }if(this.stjenissimp == true){
            
            this.Aktif = 'Aktif'
        } 
        this.modalService.open(addIdentitas).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    

    edit(addIdentitas, event, id, acc, keterangan, bungan, pajak, maxtarik, salmin, setmin, setoran, pot, adm, accpjk, accpot, accadm, accpjkdet, accpotdet, accadmdet, sjt, pbga) {
        event.preventDefault();
        this.resetData();
        this._id = id;
        this.BtnSimpan = false;
        this.BtnUbah = true;
        this.BtnHapus = false;
        this.minset= setmin;
        this.Setoran= setoran;
        this.Bunga= bungan;        
        this.Pajak= pajak;        
        this.Pot= pot;        
        this.Adm= adm;
        this.dta1 = acc;
        this.dta2 = keterangan;
        this.dtacc = accpjk,
        this.dtket = accpjkdet,
        this.accc = accadm,
        this.ketc = accadmdet,
        this.accb = accpot,
        this.ketb = accpotdet,
        this.PBGA = pbga

        if( sjt == 'false'){
            this.Aktif = 'Nonaktif'
            this.stjenissimp = false
        }if(sjt == 'true'){
            this.stjenissimp = true
            this.Aktif = 'Aktif'
        }

        // this.dtacc = accpjk;

        this.modalService.open(addIdentitas).result.then((result) => {
            this.closeIdent = `Closed with: ${result}`;
        }, (reason) => {
            this.closeIdent = `Dismissed ${this.getDismissIdentitas(reason)}`;
        });
    }
    hapus(Hapus, event, id, acc, keterangan, bungan, pajak, maxtarik, salmin, setmin, setoran, pot, adm, accpjk, accpot, accadm, accpjkdet, accpotdet, accadmdet, sjt, pbga) {
        this.resetData();
        this._id = id;
        this.minset= setmin;
        this.Setoran= setoran;
        this.Bunga= bungan;        
        this.Pajak= pajak;        
        this.Pot= pot;        
        this.Adm= adm;
        this.dta1 = acc;
        this.dta2 = keterangan; 
        this.BtnSimpan = false;
        this.BtnUbah = false;
        this.BtnHapus = true;
        this.dtacc= accpjk,
        this.dtket = accpjkdet,
        this.accc = accadm,
        this.ketc = accadmdet,
        this.accb = accpot,
        this.ketb = accpotdet,
        this.PBGA = pbga
        if( sjt == 'false'){
            this.Aktif = 'Nonaktif'
            this.stjenissimp = false
        }if(sjt == 'true'){
            this.stjenissimp = true
            this.Aktif = 'Aktif'
        }
        this.modalService.open(Hapus).result.then((result) => {
            this.closehapus = `Closed with: ${result}`;
        }, (reason) => {
            this.closehapus = `Dismissed ${this.getDismissHapus(reason)}`;
        });
    }
    resetData(){
        this.dta1 = '';
        this.dta2 = '';
        this.dtacc = '';
        this.dtket = '';
        this.accb = '';
        this.ketb = '';
        this.accc = '';
        this.ketc = '';
        this.minset= '';
        this.Setoran= '';
        this.Bunga= '';        
        this.Pajak= '';        
        this.Pot= '';        
        this.Adm= '';
        this._id = '';
        this.dtPBGA = '';
        this.PBGA = '';
        this.stjenissimp = false;
        this.Aktif = '';
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    

    search(chari) {
        this.modalService.open(chari).result.then((result) => {
            this.closeIdent = `Closed with: ${result}`;
        }, (reason) => {
            this.closeIdent = `Dismissed ${this.getDismissIdentitas(reason)}`;
        });
    }
    searchpjb(pjb) {
        this.modalService.open(pjb).result.then((result) => {
            this.closeIdent = `Closed with: ${result}`;
        }, (reason) => {
            this.closeIdent = `Dismissed ${this.getDismissIdentitas(reason)}`;
        });
    }
    searchC(C) {
        this.modalService.open(C).result.then((result) => {
            this.closeIdent = `Closed with: ${result}`;
        }, (reason) => {
            this.closeIdent = `Dismissed ${this.getDismissIdentitas(reason)}`;
        });
    }
    searchA(A) {
        this.modalService.open(A).result.then((result) => {
            this.closeIdent = `Closed with: ${result}`;
        }, (reason) => {
            this.closeIdent = `Dismissed ${this.getDismissIdentitas(reason)}`;
        });
    }
    bukan(yesorno) {
        this.modalService.open(yesorno).result.then((result) => {
            this.closeIdent = `Closed with: ${result}`;
        }, (reason) => {
            this.closeIdent = `Dismissed ${this.getDismissIdentitas(reason)}`;
        });
    }
    private getDismissIdentitas(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
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
