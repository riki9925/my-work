import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http, Response } from '@angular/http';


@Component({
    selector: 'app-kelurahan',
    templateUrl: './kelurahan.component.html',
    styleUrls: ['./kelurahan.component.scss'],
    animations: [routerTransition()]
})
export class KelurahanComponent implements OnInit {
    dataKec: any;
    kecamatan: any;
    closeResult: string;
    dataKab: any;
    kabupaten: any;
    propinsi: any;
    newVal: any;
    results: any;
    kabu = false;
    camat = false;

    constructor(
        private _http: Http,
    ) {

    }
    ngOnInit() {
        this.getProp();

    }

    // tslint:disable-next-line:member-ordering
    settings = {
        // add: {
        //     addButtonContent: '<i class="ion-ios-plus-outline"></i>',
        //     createButtonContent: '<i class="ion-checkmark" ></i>',
        //     cancelButtonContent: '<i class="ion-close"></i>',
        //     confirmCreate: true,
        //   },
        //   edit: {
        //     editButtonContent: '<i class="ion-edit"></i>',
        //     saveButtonContent: '<i class="ion-checkmark"></i>',
        //     cancelButtonContent: '<i class="ion-close"></i>',
        //         confirmSave: true
        //   },
        //   delete: {
        //     deleteButtonContent: '<i class="ion-trash-a"></i>',
        //     confirmDelete: true
        //   },
        columns: {
            ID_KEL: {
                title: 'ID'
            },
            NAMA_KELURAHAN: {
                title: 'Nama Kelurahan'
            }
        }
    };

    getData() {
        const body = ({
            id: this.dataKab
        });
        this._http.post('http://103.15.226.134:2017/kecamatan', body).map(res => res.json())
            .subscribe(data => {
                this.kecamatan = data['data'];
                // console.log(this.results);
            });

    }
    // tslint:disable-next-line:member-ordering
    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }


    onChange(event) {
        this.newVal = event.target.value;
        this.getKab();
        // console.log(newVal);
    }
    getProp() {
        this._http.get('http://103.15.226.134:2017/propinsi', ).map(res => res.json())
            .subscribe(data => {
                this.propinsi = data['data'];
            });

    }
    getKab() {
        const body = ({
            id: this.newVal
        });
        this._http.post('http://103.15.226.134:2017/kabupaten', body ).map(res => res.json())
            .subscribe(data => {
                this.kabupaten = data['data'];
                this.kabu = true;
            });

    }
    Change(event) {
        this.dataKab = event.target.value;
        this.getData();
        // console.log(newVal);
    }
    idKec(event) {
        this.dataKec = event.target.value;
        this.getKec();
        // console.log(newVal);
    }

    getKec() {
        const body = ({
            id: this.dataKec
        });
        this._http.post('http://103.15.226.134:2017/kelurahan', body).map(res => res.json())
            .subscribe(data => {
                this.results = data['data'];
                // console.log(this.results);
            });

    }

}
