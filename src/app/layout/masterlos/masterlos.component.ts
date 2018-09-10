import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http, Response } from '@angular/http';


@Component({
    selector: 'app-master-los',
    templateUrl: './masterlos.component.html',
    styleUrls: ['./masterlos.component.scss'],
    animations: [routerTransition()]
})
export class MasterLosComponent implements OnInit {
    masterlos: any;
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
            CIB: {
                title: 'CIB'
            },
            CIF: {
                title: 'CIF'
            },
            UMUR: {
                title: 'Umur'
            }
        }
    };

    getData() {
        this._http.get('http://103.15.226.134:2017/masterlos', ).map(res => res.json())
            .subscribe(data => {
                this.masterlos = data['data'];
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
