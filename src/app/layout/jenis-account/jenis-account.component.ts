import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http, Response } from '@angular/http';


@Component({
    selector: 'app-jenis-account',
    templateUrl: './jenis-account.component.html',
    styleUrls: ['./jenis-account.component.scss'],
    animations: [routerTransition()]
})
export class JenisAccountComponent implements OnInit {
    results: any;

    constructor(
        private _http: Http,
    ) {

    }
    ngOnInit() {
        this.getData();

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
            ACCJENIS: {
                title: 'ID'
            },
            JENIS: {
                title: 'Jenis'
            }
        }
    };

    getData() {
        const body = ({
            CIF: localStorage.getItem('cif')
        });
        this._http.post('http://103.15.226.134:2017/acc/jenis', body).map(res => res.json())
            .subscribe(data => {
                this.results = data['data'];
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
}
