import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http, Response, RequestOptions, Headers, RequestOptionsArgs } from '@angular/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng2-alerts';


@Component({
    selector: 'app-pekerjaan',
    templateUrl: './pekerjaan.component.html',
    styleUrls: ['./pekerjaan.component.scss'],
    animations: [routerTransition()]
})

export class PekerjaanComponent implements OnInit {
    msg: any;
    sukses: AlertType = 'success';
    gagal: AlertType = 'error';
    responDelete: any;
    closehapus: string;
    closePekerjaan: string;
    pekerjaan: any;
    URUT: any;
    closeResult: string;

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
        this.getPekerjaan();
    }

    getPekerjaan() {
        let option = new Headers();
        option.append('Authorization', localStorage.getItem('token'))
        let headers = new RequestOptions({ headers: option })
        this._http.get('http://103.15.226.134:9000/emikro/v1/pekerjaan/detail', headers).map(res => res.json())
            .subscribe(data => {
                this.pekerjaan = data['data'];
            });
    }

    tambah(event, urut, pekerjaan) {
        event.preventDefault();
        let option = new Headers();
        option.append('Authorization', localStorage.getItem('token'))
        let headers = new RequestOptions({ headers: option })
        const body = ({
            URUT: urut,
            PEKERJAAN: pekerjaan
        })
        this._http.post('http://103.15.226.134:9000/emikro/v1/pekerjaan/insert', body, headers).map(res => res.json())
            .subscribe(data => {
                this.msg = data['status'];
                if (this.msg == 200) {
                    this._alert.create(this.sukses, 'Data berhasil di tambah');
                } else {
                    this._alert.create(this.gagal, 'Data gagal di tambah');
                }
            });
        this.getPekerjaan();
    }

    delete(event, pekerjaan) {
        event.preventDefault();
        let option = new Headers();
        option.append('Authorization', localStorage.getItem('token'))
        let headers = new RequestOptions({
            headers: option,
            body: {
                PEKERJAAN: pekerjaan
            }
        })
        this._http.delete('http://103.15.226.134:9000/emikro/v1/pekerjaan/hapus', headers).map(res => res.json())
            .subscribe(data => {
                this._alert.create(this.sukses, 'Data berhasil dihapus');
            });
        this.getPekerjaan();
    }

    update(event, urut, pekerjaan, id) {
        event.preventDefault();
        let option = new Headers();
        option.append('Authorization', localStorage.getItem('token'))
        let headers = new RequestOptions({ headers: option })
        const body = ({
            URUT: urut,
            PEKERJAAN: pekerjaan,
        })
        this._http.put('http://103.15.226.134:9000/emikro/v1/pekerjaan/ubah', body, headers).map(res => res.json())
            .subscribe(data => {
                // this.pekerjaan = data['data'];
                this.msg = data['status'];
                if (this.msg == 200) {
                    this._alert.create(this.sukses, 'berhasil');
                } else {
                    this._alert.create(this.gagal, 'Data gagal di edit');
                }
            });
        this.getPekerjaan();
    }



    open(addPekerjaan) {
        this.modalService.open(addPekerjaan).result.then((result) => {
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
            this.closePekerjaan = `Closed with: ${result}`;
        }, (reason) => {
            this.closePekerjaan = `Dismissed ${this.getDismissPekerjaan(reason)}`;
        });
    }
    private getDismissPekerjaan(reason: any): string {
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
