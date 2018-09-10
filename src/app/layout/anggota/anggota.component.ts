import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng2-alerts';
import { Http } from '@angular/http';


@Component({
    selector: 'app-anggota',
    templateUrl: './anggota.component.html',
    styleUrls: ['./anggota.component.scss'],
    animations: [routerTransition()]
})

export class AnggotaComponent implements OnInit {
    cari2: any;
    cibi: any;
    filteredArray: any;
    revers: number;
    idInstan: any;
    cari: any;
    order: any;
    urut: any;
    ST: boolean;
    dataHubkel: any;
    dataGolongan: any;
    dataJabatan: any;
    dataPekerjaan: any;
    dataPendidikan: any;
    dataAgama: any;
    dataIdent: any;
    identitas: any;
    dataIdentitas: any;
    hubkeluarga: any;
    jabatan: any;
    pekerjaan: any;
    pendidikan: any;
    jkelamin: any;
    KI: any;
    cib: any;
    agama: any;
    golongan: any;
    instansi: any;
    msg: any;
    sukses: AlertType = 'success';
    gagal: AlertType = 'error';
    responDelete: any;
    closehapus: string;
    closeIdent: string;
    URUT: any;
    closeResult: string;
    fill = false;
    terr =true;

    options: AlertSettings = {
        overlay: true,
        overlayClickToClose: true,
        showCloseButton: false,
        duration: 2000
    };

  

    constructor(
        private _http: Http,
        private modalService: NgbModal,
        private _alert: AlertsService,
        
      
    ) { 
    }
    ngOnInit() {
        this.getInstansi();
        this.getGolongan();
        this.getAgama();
        this.getCib();
        this.getPendidikan();
        this.getJabatan();
        this.getPekerjaan();
        this.getHubkeluarga();
        this.getIdentitas();
        this.restart();
        this.order = 'NAMA';
        this.terr = true;
      
    }
  
   

    userFilter: any = {NAMA:''};
    applyFilter(filter: String) {
        this.filteredArray = this.cib.filter(item => {
              if (item.name.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1) {
                return true;
              }
            return false;
        }
        );
    }

    urutby(event) {
        this.urut = event.target.value;
        this.order = this.urut;
        this.revers = 0;        
    }
    onGolong(event) {
        this.cari = event.target.value;        
    }

    
    urutST(event){
        this.urut = event.target.value;
        this.order = this.urut;
        if(this.urut==1){
            this.order = 'ST';
            this.revers = -1;
        }if(this.urut=='ST'){
            this.order = 'ST';
            this.revers = 0;
        }
        
    }
    instan(event){
        this.terr = false;        
        this.idInstan = event.target.value;        
        this.fill = true;
        this.getfill();
               

    }
    tambah(event, nomeranggota, kartuanggota, nip, nomergaji, namalengkap,
        namapanggilan, tempattgllahir, tgllahir, tglberakhir, alamat,
        telepon, handphone, email, namaahliwaris, alamatahliwaris) {
        event.preventDefault();
        const body = ({
            CIB: localStorage.getItem('cif'),
            NO_ANGGOTA: nomeranggota,
            NOKARTU: kartuanggota,
            NOGAJI: nomergaji,
            NIP: nip,
            NAMA: namalengkap,
            KI: this.KI,
            PANGGILAN: namapanggilan,
            KL: this.jkelamin,
            TMP_LAHIR: tempattgllahir,
            TGL_LAHIR: tgllahir,
            ID: this.dataIdentitas,
            NO_ID: "-",
            TGLEXPIRED: tglberakhir,
            AGAMA: this.dataAgama,
            PENDIDIKAN: this.dataPendidikan,
            PEKERJAAN: this.dataPekerjaan,
            JABATAN: this.dataJabatan,
            GOLONGAN: this.dataGolongan,
            ALAMAT: alamat,
            TELEPON: telepon,
            HANDPHONE: handphone,
            E_MAIL: email,
            NAMAAHLIWARIS: namaahliwaris,
            HUBKEL: this.dataHubkel,
            ALAMATAHLIWARIS: alamatahliwaris,
            TGLBUKA: "-",
            ST: "0",
            WAJIB: "0",
            POKOK: "0",
            TAMBAH_VOUCHER: "0",
            PAKAI_VOUCHER: "0",
            SALDO_VOUCHER: "0",
            TAMBAH_PLAFOND: "0",
            PAKAI_PLAFOND: "0",
            SALDO_PLAFOND: "0",
            TAMBAH_COIN: "0",
            PAKAI_COIN: "0",
            SALDO_COIN: "0",
            TOTAL_BELANJA: "0",
            CIF: localStorage.getItem('cif')
        })
        
        this._http.post('http://103.15.226.134:2017/cib/add', body).map(res => res.json())
        .subscribe(data => {
            this.msg = data['msg'];
            if (this.msg == true) {
                this._alert.create(this.sukses, 'Data berhasil di tambah');
            } else {
                this._alert.create(this.gagal, 'Data gagal di tambah');
            }
            this.getCib();
        });
        this.getCib();

    }
    update(event, nomeranggota, kartuanggota, nip, nomergaji, namalengkap,
        namapanggilan, tempattgllahir, tgllahir, tglberakhir, alamat,
        telepon, handphone, email, namaahliwaris, alamatahliwaris, id) {
        event.preventDefault();
        const body = ({
            CIB: localStorage.getItem('cif'),
            NO_ANGGOTA: nomeranggota,
            NOKARTU: kartuanggota,
            NOGAJI: nomergaji,
            NIP: nip,
            NAMA: namalengkap,
            KI: this.KI,
            PANGGILAN: namapanggilan,
            KL: this.jkelamin,
            TMP_LAHIR: tempattgllahir,
            TGL_LAHIR: tgllahir,
            ID: this.dataIdentitas,
            NO_ID: "-",
            TGLEXPIRED: tglberakhir,
            AGAMA: this.dataAgama,
            PENDIDIKAN: this.dataPendidikan,
            PEKERJAAN: this.dataPekerjaan,
            JABATAN: this.dataJabatan,
            GOLONGAN: this.dataGolongan,
            ALAMAT: alamat,
            TELEPON: telepon,
            HANDPHONE: handphone,
            E_MAIL: email,
            NAMAAHLIWARIS: namaahliwaris,
            HUBKEL: this.dataHubkel,
            ALAMATAHLIWARIS: alamatahliwaris,
            TGLBUKA: "-",
            ST: "0",
            WAJIB: "0",
            POKOK: "0",
            TAMBAH_VOUCHER: "0",
            PAKAI_VOUCHER: "0",
            SALDO_VOUCHER: "0",
            TAMBAH_PLAFOND: "0",
            PAKAI_PLAFOND: "0",
            SALDO_PLAFOND: "0",
            TAMBAH_COIN: "0",
            PAKAI_COIN: "0",
            SALDO_COIN: "0",
            TOTAL_BELANJA: "0",
            id: id
        })
        
        this._http.post('http://103.15.226.134:2017/cib/update', body).map(res => res.json())
        .subscribe(data => {
            this.msg = data['msg'];
            if (this.msg == true) {
                this._alert.create(this.sukses, 'Data berhasil di Update');
            } else {
                this._alert.create(this.gagal, 'Data gagal di tambah');
            }
            this.getCib();
        });
        this.getCib();

    }

    delete(event, id) {
        event.preventDefault();
        const body = ({
            id: id
        })
        this._http.post('http://103.15.226.134:2017/cib/delete', body).map(res => res.json())
        .subscribe(data => {
            // this.identitas = data['data'];
            this._alert.create(this.sukses, 'Data berhasil dihapus');
            this.getCib();
        });
        this.getCib();
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
    getIdentitas() {
        const body = ({
            CIF: localStorage.getItem('cif')
        })
        this._http.post('http://103.15.226.134:2017/identitas', body).map(res => res.json())
            .subscribe(data => {
                this.dataIdent = data['data'];
            });
    }
    getGolongan() {
        const body = ({
            CIF: localStorage.getItem('cif')
        })
        this._http.post('http://103.15.226.134:2017/golongan', body).map(res => res.json())
            .subscribe(data => {
                this.golongan = data['data'];
            });
    }
    getAgama() {
        const body = ({
            CIF: localStorage.getItem('cif')
        })
        this._http.post('http://103.15.226.134:2017/agama', body).map(res => res.json())
            .subscribe(data => {
                this.agama = data['data'];
            });
    }
    getPendidikan() {
        const body = ({
            CIF: localStorage.getItem('cif')
        })
        this._http.post('http://103.15.226.134:2017/pendidikan', body).map(res => res.json())
            .subscribe(data => {
                this.pendidikan = data['data'];
            });
    }
    getPekerjaan() {
        const body = ({
            CIF: localStorage.getItem('cif')
        })
        this._http.post('http://103.15.226.134:2017/pekerjaan', body).map(res => res.json())
            .subscribe(data => {
                this.pekerjaan = data['data'];
            });
    }
    getJabatan() {
        const body = ({
            CIF: localStorage.getItem('cif')
        })
        this._http.post('http://103.15.226.134:2017/jabatan', body).map(res => res.json())
            .subscribe(data => {
                this.jabatan = data['data'];
            });
    }
    getHubkeluarga() {
        const body = ({
            CIF: localStorage.getItem('cif')
        })
        this._http.post('http://103.15.226.134:2017/hubkeluarga', body).map(res => res.json())
            .subscribe(data => {
                this.hubkeluarga = data['data'];
            });
    }

    getCib() {
        const body = ({
            CIF: localStorage.getItem('cif')
        })
        this._http.post('http://103.15.226.134:2017/cib', body).map(res => res.json())
            .subscribe(data => {
                this.cib = data['data'];
            });
    }

    getfill() {
        const body = ({
            CIF: localStorage.getItem('cif')
        })
        this._http.post('http://103.15.226.134:2017/cib/instansi', body).map(res => res.json())
            .subscribe(data => {
                this.cibi = data['data'];
                this.cari2 = this.idInstan;
            });
    }

    restart() {
        this.terr = true;   
        this.fill = false;     
        const body = ({
            CIF: localStorage.getItem('cif')
        })
        this._http.post('http://103.15.226.134:2017/cib', body).map(res => res.json())
            .subscribe(data => {
                this.cib = data['data'];
            });
        this.order = 'NAMA';
    }

    onInstansi(event) {
        this.KI = event.target.value;
    }

    onJkelamin(event) {
        this.jkelamin = event.target.value;
    }

    onIdentitas(event) {
        this.dataIdentitas = event.target.value;
    }
    onAgama(event) {
        this.dataAgama = event.target.value;
    }
    onPendidikan(event) {
        this.dataPendidikan = event.target.value;
    }
    onPekerjaan(event) {
        this.dataPekerjaan = event.target.value;
    }
    onJabatan(event) {
        this.dataJabatan = event.target.value;
    }
    onGolongan(event) {
        this.dataGolongan = event.target.value;
    }
    onHubkel(event) {
        this.dataHubkel = event.target.value;
    }

    approve(event, id) {
        event.preventDefault();
        const body = ({
            ST: '2',
            id: id
        })
        this._http.post('http://103.15.226.134:2017/cib/approve', body).map(res => res.json())
        .subscribe(data => {
            // this.identitas = data['data'];
            this._alert.create(this.sukses, 'Data berhasil di approve');
            this.getCib();
        });
        this.getCib();
    }
    nonaktif(event, id) {
        event.preventDefault();
        const body = ({
            ST: '9',
            id: id
        })
        this._http.post('http://103.15.226.134:2017/cib/nonaktif', body).map(res => res.json())
        .subscribe(data => {
            // this.identitas = data['data'];
            this._alert.create(this.sukses, 'Data berhasil di non aktifkan');
            this.getCib();
        });
        this.getCib();
    }

    open(addIdentitas) {
        this.modalService.open(addIdentitas).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }

    edit(Edit) {
        this.modalService.open(Edit).result.then((result) => {
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
            return `with: ${reason}`;
        }
    }
    hapus(Hapus) {
        this.modalService.open(Hapus).result.then((result) => {
            this.closehapus = `Closed with: ${result}`;
        }, (reason) => {
            this.closehapus = `Dismissed ${this.getDismissHapus(reason)}`;
        });
    }
    private getDismissHapus(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}
