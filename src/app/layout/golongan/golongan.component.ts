import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http, Response, RequestOptions, Headers, RequestOptionsArgs } from '@angular/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AlertsService, AlertType, AlertSettings } from '@jaspero/ng2-alerts';


@Component({
    selector: 'app-golongan',
    templateUrl: './golongan.component.html',
    styleUrls: ['./golongan.component.scss'],
    animations: [routerTransition()]
})

export class GolonganComponent implements OnInit {
    msg: any;
    sukses: AlertType = 'success';
    gagal: AlertType = 'error';
    responDelete: any;
    closehapus: string;
    closegolongan: string;
    golongan: any;
    NO: any;
    PANGKAT: any;
    POKOK: any;
    WAJIB: any;
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
        this.getGolongan();
    }

    getGolongan() {
        let option = new Headers();
        option.append('Authorization', localStorage.getItem('token'))
        let headers = new RequestOptions({ headers: option })
        this._http.get('http://103.15.226.134:9000/emikro/v1/golongan/detail', headers).map(res => res.json())
            .subscribe(data => {
                this.golongan = data['data'];
            });
    }

    tambah(event, urut, golongan, pangkat, pokok,wajib) {
        event.preventDefault();
        let option = new Headers();
        option.append('Authorization', localStorage.getItem('token'))
        let headers = new RequestOptions({ headers: option })
        const body = ({
            NO: urut,
            GOLONGAN: golongan,
            PANGKAT: pangkat,
            POKOK: pokok,
            WAJIB: wajib
        })
        this._http.post('http://103.15.226.134:9000/emikro/v1/golongan/insert', body, headers).map(res => res.json())
            .subscribe(data => {
                this.msg = data['status'];
                if (this.msg == 200) {
                    this._alert.create(this.sukses, 'Data berhasil di tambah');
                } else {
                    this._alert.create(this.gagal, 'Data gagal di tambah');
                }
            });
        this.getGolongan();
    }

    delete(event, golongan) {
        event.preventDefault();
        let option = new Headers();
        option.append('Authorization', localStorage.getItem('token'))
        let headers = new RequestOptions({
            headers: option,
            body: {
                GOLONGAN: golongan
            }
        })
        this._http.delete('http://103.15.226.134:9000/emikro/v1/golongan/hapus', headers).map(res => res.json())
            .subscribe(data => {
                this._alert.create(this.sukses, 'Data berhasil dihapus');
            });
        this.getGolongan();
    }

    update(event, urut, golongan, id,pangkat,pokok,wajib) {
        event.preventDefault();
        let option = new Headers();
        option.append('Authorization', localStorage.getItem('token'))
        let headers = new RequestOptions({ headers: option })
        const body = ({
            NO: urut,
            GOLONGAN: golongan,
            PANGKAT: pangkat,
            POKOK: pokok,
            WAJIB: wajib
        })
        this._http.put('http://103.15.226.134:9000/emikro/v1/golongan/ubah', body, headers).map(res => res.json())
            .subscribe(data => {
                // this.golongan = data['data'];
                this.msg = data['status'];
                if (this.msg == 200) {
                    this._alert.create(this.sukses, 'berhasil');
                } else {
                    this._alert.create(this.gagal, 'Data gagal di edit');
                }
            });
        this.getGolongan();
    }



    open(addGolongan) {
        this.modalService.open(addGolongan).result.then((result) => {
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
            this.closegolongan = `Closed with: ${result}`;
        }, (reason) => {
            this.closegolongan = `Dismissed ${this.getDismissGolongan(reason)}`;
        });
    }
    private getDismissGolongan(reason: any): string {
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
