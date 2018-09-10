import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http, Response } from '@angular/http';
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng2-alerts';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyMaskModule } from "ng2-currency-mask";
import { toString } from '@ng-bootstrap/ng-bootstrap/util/util';
import { print } from 'util';
import { interval } from 'rxjs/observable/interval';


@Component({
    selector: 'app-master-data-tabungan',
    templateUrl: './masterdatatab.component.html',
    styleUrls: ['./masterdatatab.component.scss'],
    animations: [routerTransition()]
})
export class masterdatatabComponent implements OnInit {
    TUTUP: boolean;
    BUKA: boolean;
    transtab: any;
    BtnDetail: boolean;
    orderst: any;
    cari2: any;
    datab: any;
    asli: boolean;
    kebalikan: boolean;
    revers: any;
    st: any;
    nomer: any;
    dataNotab: any;
    ACC: any;
    BtnApp: boolean;
    no: any;
    saldo: any;
    blokir: any;
    kredit: any;
    debet: any;
    tglaktif: any;
    tglbuka: any;
    grup: any;
    _id: any;
    urut: any;
    cari: string;
    order: string;
    dta3: any;
    dtacc: any;
    alamat: any;
    dta1: any;
    dta2: any;
    datacib: any;
    cib: any;
    dtJenistab: any;
    jenistab: any;
    nmInstansi: any;
    orderInstansi: any;
    instansi: any;
    BtnHapus: boolean;
    BtnUbah: boolean;
    BtnSimpan: boolean;
    closeResult: string;
    closehapus: string;
    closeIdent: string;
    sukses: AlertType = 'success';
    gagal: AlertType = 'error';
    msg: any;
    data: any;
    

    options: AlertSettings = {
        overlay: true,
        overlayClickToClose: true,
        showCloseButton: false,
        duration: 2000
      };

    
    constructor(
        private _http: Http,
        private modalService: NgbModal,
        private _alert: AlertsService
    ) {
        // setTimeout(() => {
        //     this.onLoad();
        //   }, 1000);
    }
    ngOnInit() {
        this.getData();
        this.getInstansi();
        this.getJenistab();
        this.getCib();
        this.resetData();
        this.getTranstab();
        // this.onLoad();
        // this.urutby(event);
        // this.instan(event);
        // this.urutST(event);
        // this.onJenistab(event);
        this.alamat = '';
        this.orderInstansi = 'NAMA_INSTANSI';
        // this.order = '';
        // this.orderst = '';
        // this.cari = '';
        // this.cari2 = '';
        this.asli = true;
        this.kebalikan = false;
    }
    
    // TOTAL = parseInt(this.saldo)+parseInt(this.saldo);
    TOTAL = document.getElementById('DATA_SALDO');

    onLoad(){
        this.order = 'null';
        this.orderst = 'null';
        this.cari = 'null';
        this.cari2 = 'null';
    }

    onRowClick(event:any){
        this.TOTAL = event.target.value;
    }

    getSum(index: number) : number {
        let sum = 0;
        for(let i = 0; i < this.data.length; i++) {
          sum += this.data[i][index];
        }
        return sum;
    }

    getData() {
        const body = ({
            CIF: localStorage.getItem('cif')
        });
        this._http.post('http://103.15.226.134:2017/tabungan/masterdata' , body ).map(res => res.json())
            .subscribe(data => {
                this.data = data['data'];
            });
    }
    getTranstab() {
        const body = ({
            CIF: localStorage.getItem('cif')
        });
        this._http.post('http://103.15.226.134:2017/tabungan/masterdata/transtab' , body ).map(res => res.json())
            .subscribe(data => {
                this.transtab = data['data'];
            });
    }
    getDataCib() {
        const body = ({
            CIF: localStorage.getItem('cif')
        });
        this._http.post('http://103.15.226.134:2017/tabungan/masterdata/cib' , body ).map(res => res.json())
            .subscribe(data => {
                this.datab = data['data'];
            });
    }
    getNotab() {
        this._http.get('http://103.15.226.134:2017/tabungan/masterdata/notab').map(res => res.json())
            .subscribe(data => {
                this.dataNotab = data['data'];
                localStorage.setItem('notab', data.data[0].NOTAB);
            });
    }
    getInstansi() {
        const body = ({
            CIF: localStorage.getItem('cif')
        })
        this._http.post('http://103.15.226.134:2017/instansi', body).map(res => res.json())
            .subscribe(data => {
                this.instansi = data['data'];
            });
    }
    getJenistab() {
        const body = ({
            CIF: localStorage.getItem('cif')
        })
        this._http.post('http://103.15.226.134:2017/tabungan/produk', body).map(res => res.json())
            .subscribe(data => {
                this.jenistab = data['data'];
            });
    }

    getCib() {
        const body = ({
            CIF: localStorage.getItem('cif')
        })
        this._http.post('http://103.15.226.134:2017/cib/informasi', body).map(res => res.json())
            .subscribe(data => {
                this.datacib = data['data'];
            });
    }


    isi(event, dta1, dta2, dta3){
        event.preventDefault();
        this.dta1 = dta1;
        this.dta2 = dta2;
        this.dta3 = dta3;
    }

    instan(event){
        // this.terr = false;        
        this.nmInstansi = event.target.value;        
        // this.fill = true;
        // this.getfill();
        this.cari = this.nmInstansi;
    }
    onJenistab(event){
        // this.terr = false;        
        this.dtJenistab = event.target.value;        
        // this.fill = true;
        // this.getfill();
        this.cari2 = this.dtJenistab;
    }

    onAcc(event){
        this.ACC = event.target.value;
    }

    restart(){
        this.resetData();
        this.order = this.order;
        this.orderst = this.orderst;
        this.cari = this.cari;
        this.cari2 = this.cari2;

    }
    urutST(event){
        this.resetData();
        this.orderst = event.target.value;
        if(this.order == '0'){
            this.orderst = 'ST';
            this.revers = 0;
        }
        if(this.order == '9'){
            this.orderst = 'ST';
            this.revers = -1;
        }
        if(this.orderst == '2'){
            this.order = 'ST';
            this.revers = '2';
        }
        
    }

    tambah(event, notab, cib, nama, alamat, tglbuka, 
        tglaktif, debet, kredit, blokir, saldo) {
        event.preventDefault();
        const body = ({
            NOTAB: this.no,
            ACC: this.ACC,
            CIB: this.dta1,
            DEBET: '0',
            KREDIT: '0',
            BLOKIR: blokir,
            SALDO: '0',
            TGLBUKA: tglbuka,
            TGLAKTIF: tglaktif,
            TGLBEBAN: '',
            TGLSETOR: '',
            TGLSETORSBL: '',
            ST: '0',
            KU: '',
            CIF: localStorage.getItem('cif')
        })
        this._http.post('http://103.15.226.134:2017/tabungan/masterdata/add', body).map(res => res.json())
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
    update(event) {
        event.preventDefault();
        const body = ({
            NOTAB: this.no,
            ACC: this.ACC,
            CIB: this.dta1,
            DEBET: this.debet,
            KREDIT: this.kredit,
            BLOKIR: this.blokir,
            SALDO: this.saldo,
            // TGLBUKA: this.tglbuka,
            // TGLAKTIF: this.tglaktif,
            TGLBEBAN: '',
            TGLSETOR: '',
            TGLSETORSBL: '',
            ST: this.st,
            KU: '',
            CIF: localStorage.getItem('cif'),
            id: this._id
        })
        this._http.post('http://103.15.226.134:2017/tabungan/masterdata/update', body).map(res => res.json())
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

    approve() {
        event.preventDefault();
        const body = ({
            ST: '2',
            id: this._id
        })
        this._http.post('http://103.15.226.134:2017/tabungan/masterdata/approve', body).map(res => res.json())
        .subscribe(data => {
            // this.identitas = data['data'];
            this._alert.create(this.sukses, 'Data berhasil di approve');
            this.getData();
        });
        this.getData();
    }
    
    nonaktif(event, id) {
        event.preventDefault();
        const body = ({
            ST: '9',
            id: id
        })
        this._http.post('http://103.15.226.134:2017/tabungan/masterdata/nonaktif', body).map(res => res.json())
        .subscribe(data => {
            // this.identitas = data['data'];
            this._alert.create(this.sukses, 'Data berhasil di non aktifkan');
            this.getData();
        });
        this.getData();
    }

    delete() {
        event.preventDefault();
        const body = ({
            id: this._id
        })
        this._http.post('http://103.15.226.134:2017/tabungan/masterdata/delete', body).map(res => res.json())
        .subscribe(data => {
            // this.identitas = data['data'];
            this._alert.create(this.sukses, 'Data berhasil dihapus');
            this.getData();
        });
        this.getData();
    }

    resetData(){
        this._id = '';
        this.no = '';
        this.dta1 = '';
        this.dta2 = '';
        this.grup = '';
        this.alamat = '';
        this.tglbuka = '';
        this.tglaktif = '';
        this.debet = '';
        this.kredit = '';
        this.blokir = '';
        this.saldo = '';
        this.order = '';
        this.revers = '';
        this.asli = true;
        this.kebalikan = false;
        this.order = 'NOTAB'
    }
    buka(addIdentitas) {
        this.getNotab();
        this.resetData();
        this.TUTUP = true;
        this.BUKA = false;
        this.BtnDetail = false;
        this.BtnSimpan = true;
        this.BtnUbah = false;
        this.BtnHapus = false;
        this.BtnApp = false;
        this.nomer = '1';
        this.no = parseInt(localStorage.getItem('notab'))+parseInt(this.nomer);
        for (let i = 5; i > this.no.length; i++) {
            const element = this.no[i];
            print(element);
            
        }
        this.modalService.open(addIdentitas).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    

    edit(addIdentitas, event, id, notab, cib, nama, ki, acc, alamat, tglbuka, tglaktif, debet, kredit, blokir, saldo, st) {
        event.preventDefault();
        this.resetData();
        this.TUTUP = false;
        this.BUKA = true;
        this.BtnDetail = false;
        this.BtnSimpan = false;
        this.BtnUbah = true;
        this.BtnHapus = false;
        this.BtnApp = false;        
        this._id = id;
        this.no = notab;
        this.ACC = acc;
        this.dta1 = cib;
        this.dta2 = nama;
        this.grup = ki
        this.alamat = alamat;
        this.tglbuka = tglbuka;
        this.tglaktif = tglaktif;
        this.debet = debet;
        this.kredit = kredit;
        this.blokir = blokir;
        this.saldo = saldo;
        this.st = st;
        this.modalService.open(addIdentitas).result.then((result) => {
            this.closeIdent = `Closed with: ${result}`;
        }, (reason) => {
            this.closeIdent = `Dismissed ${this.getDismissIdentitas(reason)}`;
        });
    }
    detail(addIdentitas, event, id, notab, cib, nama, ki, acc, alamat, tglbuka, tglaktif, debet, kredit, blokir, saldo, st) {
        event.preventDefault();
        this.resetData();
        this.TUTUP = true;
        this.BUKA = false;
        this.BtnDetail = true;
        this.BtnSimpan = false;
        this.BtnUbah = false;
        this.BtnHapus = false;
        this.BtnApp = false;        
        this._id = id;
        this.no = notab;
        this.ACC = acc;
        this.dta1 = cib;
        this.dta2 = nama;
        this.grup = ki
        this.alamat = alamat;
        this.tglbuka = tglbuka;
        this.tglaktif = tglaktif;
        this.debet = debet;
        this.kredit = kredit;
        this.blokir = blokir;
        this.saldo = saldo;
        this.st = st;
        this.modalService.open(addIdentitas).result.then((result) => {
            this.closeIdent = `Closed with: ${result}`;
        }, (reason) => {
            this.closeIdent = `Dismissed ${this.getDismissIdentitas(reason)}`;
        });
    }
    hapus(addIdentitas, event, id, notab, cib, nama, ki, acc, alamat, tglbuka, tglaktif, debet, kredit, blokir, saldo) {
        this.resetData();
        this._id = id;
        this.TUTUP = true;
        this.BUKA = false;
        this.BtnDetail = false;
        this.BtnSimpan = false;
        this.BtnUbah = false;
        this.BtnHapus = true;
        this.BtnApp = false;
        this.no = notab;
        this.ACC = acc;
        this.dta1 = cib;
        this.dta2 = nama;
        this.grup = ki
        this.alamat = alamat;
        this.tglbuka = tglbuka;
        this.tglaktif = tglaktif;
        this.debet = debet;
        this.kredit = kredit;
        this.blokir = blokir;
        this.saldo = saldo;
        this.modalService.open(addIdentitas).result.then((result) => {
            this.closehapus = `Closed with: ${result}`;
        }, (reason) => {
            this.closehapus = `Dismissed ${this.getDismissHapus(reason)}`;
        });
    }
    bukaApp(addIdentitas, event, id, notab, cib, nama, ki, acc, alamat, tglbuka, tglaktif, debet, kredit, blokir, saldo) {
        this.resetData();
        this._id = id;
        this.TUTUP = true;
        this.BUKA = false;
        this.BtnDetail = false;
        this.BtnSimpan = false;
        this.BtnUbah = false;
        this.BtnHapus = false;
        this.BtnApp = true;
        this.no = notab;
        this.ACC = acc;
        this.dta1 = cib;
        this.dta2 = nama;
        this.grup = ki
        this.alamat = alamat;
        this.tglbuka = tglbuka;
        this.tglaktif = tglaktif;
        this.debet = debet;
        this.kredit = kredit;
        this.blokir = blokir;
        this.saldo = saldo;
        this.modalService.open(addIdentitas).result.then((result) => {
            this.closeIdent = `Closed with: ${result}`;
        }, (reason) => {
            this.closeIdent = `Dismissed ${this.getDismissIdentitas(reason)}`;
        });
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
    urutby(event) {
        this.urut = event.target.value;
        this.order = this.urut

        if(this.urut=='NAMA'){
            this.getDataCib();
            this.asli = false;
            this.kebalikan = true;
            
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
        this.getCib();
        this.modalService.open(pjb).result.then((result) => {
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
    btnMutasi(bisaaa) {
        this.modalService.open(bisaaa).result.then((result) => {
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
