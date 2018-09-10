import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http, Response } from '@angular/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng2-alerts';

@Component({
    selector: 'app-instansi-grup',
    templateUrl: './instansi.component.html',
    styleUrls: ['./instansi.component.scss'],
    animations: [routerTransition()]
})
export class InstansiComponent implements OnInit {
    msg: any;
    sukses: AlertType = 'success';
    gagal: AlertType = 'error';
    data: any;
    closehapus: string;
    closeIdent: string;
    closeResult: string;
    pendidikan: any;
    settings: AlertSettings = {
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
        this.getData();
    }

    getData() {
        const body = ({
            CIF: localStorage.getItem('cif')
        })
        this._http.post('http://103.15.226.134:2017/instansi', body).map(res => res.json())
            .subscribe(data => {
                this.data = data['data'];
            });
    }

    tambah(event, ki, ni, telepon, handphone, alamat, nb, tb) {
        event.preventDefault();
        const body = ({
           KI: ki,
           NAMA_INSTANSI: ni,
           TELEPON: telepon,
           HANDPHONE: handphone,
           ALAMAT: alamat,
           NAMA_BENDAHARA: nb,
           TELEPON_BENDAHARA: tb,
           CIF: localStorage.getItem('cif')
        })
        this._http.post('http://103.15.226.134:2017/instansi/add', body).map(res => res.json())
            .subscribe(data => {
                // this.identitas = data['data'];
                this.msg = data['msg'];
                if (this.msg == true) {
                    this._alert.create(this.sukses, 'Data berhasil di tambah');
                } else {
                    this._alert.create(this.gagal, 'Data gagal di tambah');
                }
            });
            this.getData();
    }

    delete(event, id) {
        event.preventDefault();
        const body = ({
            id: id
        })
        this._http.post('http://103.15.226.134:2017/instansi/delete', body).map(res => res.json())
        .subscribe(data => {
            // this.identitas = data['data'];
            this._alert.create(this.sukses, 'Data berhasil dihapus');
        });
        this.getData();
    }
    update(event, ki, ni, telepon, handphone, alamat, nb, tb, id) {
        event.preventDefault();
        const body = ({
            KI: ki,
            NAMA_INSTANSI: ni,
            TELEPON: telepon,
            HANDPHONE: handphone,
            ALAMAT: alamat,
            NAMA_BENDAHARA: nb,
            TELEPON_BENDAHARA: tb,
            CIF: localStorage.getItem('cif'),
            id: id
        })
        this._http.post('http://103.15.226.134:2017/instansi/update', body).map(res => res.json())
        .subscribe(data => {
            // this.identitas = data['data'];
            this.msg = data['msg'];
            if (this.msg == true) {
                this._alert.create(this.sukses, data['data']);
            } else {
                this._alert.create(this.gagal, 'Data gagal di edit');
            }
        });
        this.getData();
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
