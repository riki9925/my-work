import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http, Response } from '@angular/http';


@Component({
    selector: 'app-propinsi',
    templateUrl: './propinsi.component.html',
    styleUrls: ['./propinsi.component.scss'],
    animations: [routerTransition()]
})
export class PropinsiComponent implements OnInit {
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
            ID_PROP: {
                title: 'ID'
            },
            NAMA_PROPINSI: {
                title: 'Nama Propinsi'
            }
        }
    };

    getData() {
        this._http.get('http://103.15.226.134:2017/propinsi', ).map(res => res.json())
            .subscribe(data => {
                this.results = data['data'];
                console.log(this.results);
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
}
