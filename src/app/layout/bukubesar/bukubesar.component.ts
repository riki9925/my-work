import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http, Response } from '@angular/http';


@Component({
    selector: 'app-buku-besar',
    templateUrl: './bukubesar.component.html',
    styleUrls: ['./bukubesar.component.scss'],
    animations: [routerTransition()]
})
export class BukuBesarComponent implements OnInit {
    idForbb: any;
    kelompok: any;
    bukubesar: any;
    idkel: any;
    results: any;
    form = false;

    constructor(
        private _http: Http,
    ) {

    }
    ngOnInit() {
        this.getAccJenis();

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
            ACCBB: {
                title: 'ID'
            },
            BUKUBESAR: {
                title: 'Nama Propinsi'
            }
        }
    };

    getAccJenis() {
        const body = ({
            CIF: localStorage.getItem('cif')
        });
        this._http.post('http://103.15.226.134:2017/acc/jenis', body ).map(res => res.json())
            .subscribe(data => {
                this.results = data['data'];
            });

    }
    // tslint:disable-next-line:member-ordering
    data = this.results;
    onDeleteConfirm(event): void {
        if (window.confirm('Are you sure you want to delete?')) {
            event.confirm.resolve();
        } else {
            event.confirm.reject();
        }
    }
    onChange(event) {
        this.idkel = event.target.value;
        this.getKelompok();

    }

    getbukubesar() {
        const body = ({
            ACCKEL: this.idForbb,
            CIF: localStorage.getItem('cif')
        });
        this._http.post('http://103.15.226.134:2017/bukubesar', body ).map(res => res.json())
            .subscribe(data => {
                this.bukubesar = data['data'];
                // console.log(this.results);
                this.form = true;
            });
    }

    getKelompok() {
        const body = ({
            ACCJENIS: this.idkel,
            CIF: localStorage.getItem('cif')
        });
        this._http.post('http://103.15.226.134:2017/acc/kel', body ).map(res => res.json())
            .subscribe(data => {
                this.kelompok = data['data'];
            });
    }

    onKelompok(event) {
        this.idForbb = event.target.value;
        this.getbukubesar();
    }

}
