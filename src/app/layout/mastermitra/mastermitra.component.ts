import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http, Response } from '@angular/http';
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng2-alerts';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-master-mitra',
    templateUrl: './mastermitra.component.html',
    styleUrls: ['./mastermitra.component.scss'],
    animations: [routerTransition()]
})
export class MasterMitraComponent implements OnInit {
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

    }
    getData() {
        const body = ({
            CIF: localStorage.getItem('cif')
        });
        this._http.post('http://103.15.226.134:2017/cif' , body ).map(res => res.json())
            .subscribe(data => {
                this.data = data['data'];
            });
    }

    tambah(event, namaklient, statusmitra, alamat, spk, akta, long, latt, telepon, email,
        namaketua, teleponketua, wakilketua, teleponwakilketua, bendahara, teleponbendahara,
        namapic, teleponpic, emailpic, jumlahanggota, ipaddress, tanggalcutoff, website, kodepos, fax) {
        event.preventDefault();
        const body = ({
            NAMA_CLIENT: namaklient,
            NO_SPK: spk,
            LOGO: '',
            AKTA: akta,
            ALAMAT: alamat,
            LONGITUDE: long,
            LATTITUDE: latt,
            TELEPON: telepon,
            FAX: fax,
            EMAIL: email,
            WEBSITE: website,
            IDCAB: this.idCab,
            ID_PROP: this.idProp,
            ID_KAB: this.idKab,
            ID_KEC: this.idKec,
            ID_KEL: this.idKel,
            KODE_POS: kodepos,
            NAMA_KETUA: namaketua,
            TELEPON_KETUA: teleponketua,
            NAMA_WAKIL_KETUA: wakilketua,
            TELEPON_WAKIL_KETUA: teleponwakilketua,
            NAMA_BENDAHARA: bendahara,
            TELEPON_BENDAHARA: teleponbendahara,
            NAMA_PIC: namapic,
            TELEPON_PIC: teleponpic,
            EMAIL_PIC: emailpic,
            ANGGOTA: jumlahanggota,
            IP_ADDRESS: ipaddress,
            TGL_CUTOFF: tanggalcutoff,
            BLN_CUTOFF: '',
            THN_CUTOFF: '',
            TGL_REG: '',
            TGL_APV: '',
            TGL_ACT: '',
            TGL_PBL: '',
            KEY_REGISTRASI: '',
            ST: '0',
            PERUBAHAN: '',
            PENGAJUAN: '',
           CIF: localStorage.getItem('cif')
        })
        this._http.post('http://103.15.226.134:2017/cif/add', body).map(res => res.json())
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
    }
    update(event, namaklient, statusmitra, alamat, spk, akta, long, latt, telepon, email,
        namaketua, teleponketua, wakilketua, teleponwakilketua, bendahara, teleponbendahara,
        namapic, teleponpic, emailpic, jumlahanggota, ipaddress, tanggalcutoff, website, kodepos, fax, id) {
        event.preventDefault();
        const body = ({
            NAMA_CLIENT: namaklient,
            NO_SPK: spk,
            LOGO: '',
            AKTA: akta,
            ALAMAT: alamat,
            LONGITUDE: long,
            LATTITUDE: latt,
            TELEPON: telepon,
            FAX: fax,
            EMAIL: email,
            WEBSITE: website,
            IDCAB: this.idCab,
            ID_PROP: this.idProp,
            ID_KAB: this.idKab,
            ID_KEC: this.idKec,
            ID_KEL: this.idKel,
            KODE_POS: kodepos,
            NAMA_KETUA: namaketua,
            TELEPON_KETUA: teleponketua,
            NAMA_WAKIL_KETUA: wakilketua,
            TELEPON_WAKIL_KETUA: teleponwakilketua,
            NAMA_BENDAHARA: bendahara,
            TELEPON_BENDAHARA: teleponbendahara,
            NAMA_PIC: namapic,
            TELEPON_PIC: teleponpic,
            EMAIL_PIC: emailpic,
            ANGGOTA: jumlahanggota,
            IP_ADDRESS: ipaddress,
            TGL_CUTOFF: tanggalcutoff,
            BLN_CUTOFF: '',
            THN_CUTOFF: '',
            TGL_REG: '',
            TGL_APV: '',
            TGL_ACT: '',
            TGL_PBL: '',
            KEY_REGISTRASI: '',
            ST: '0',
            PERUBAHAN: '',
            PENGAJUAN: '',
            CIF: localStorage.getItem('cif'),
            id: id,
        })
        this._http.post('http://103.15.226.134:2017/cif/update', body).map(res => res.json())
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

    delete(event, id) {
        event.preventDefault();
        const body = ({
            id: id
        })
        this._http.post('http://103.15.226.134:2017/cif/delete', body).map(res => res.json())
        .subscribe(data => {
            // this.identitas = data['data'];
            this._alert.create(this.sukses, 'Data berhasil dihapus');
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
            return  `with: ${reason}`;
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
            return  `with: ${reason}`;
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
            return  `with: ${reason}`;
        }
    }
}
