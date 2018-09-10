import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http, Response } from '@angular/http';


@Component({
    selector: 'app-kelompok-account',
    templateUrl: './kelompokaccount.component.html',
    styleUrls: ['./kelompokaccount.component.scss'],
    animations: [routerTransition()]
})
export class KelompokAccountComponent implements OnInit {
    kelompok: any;
    idjenis: any;
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
            ACCKEL: {
                title: 'ID'
            },
            KELOMPOK: {
                title: 'Kelompok'
            },
        }
    };

    getAccJenis() {
        const body = ({
            CIF: localStorage.getItem('cif')
        });
        this._http.post('http://103.15.226.134:2017/acc/jenis', body ).map(res => res.json())
            .subscribe(data => {
                this.results = data['data'];
                console.log(this.results);
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
        this.idjenis = event.target.value;
        this.getKelompok();
        // console.log(newVal);
    }
    getKelompok() {
        const body = ({
            ACCJENIS: this.idjenis,
            CIF: localStorage.getItem('cif')
        });
        this._http.post('http://103.15.226.134:2017/acc/kel', body ).map(res => res.json())
            .subscribe(data => {
                this.kelompok = data['data'];
                this.form = true;
            });
    }
}
