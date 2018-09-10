import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http, Response } from "@angular/http";


@Component({
    selector: 'app-masteruser',
    templateUrl: './masteruser.component.html',
    styleUrls: ['./masteruser.component.scss'],
    animations: [routerTransition()]
})
export class MasterUserComponent implements OnInit {
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
            UID: {
                title: 'Uid'
            },
            NAMA: {
                title: 'Nama'
            },
            LEVEL: {
                title: 'Level'
            },
            UNIT: {
                title: 'Unit'
            },
            CIF: {
                title: 'Cif'
            }
        }
    };

    getData() {
        this._http.get('http://103.15.226.134:2017/uid', ).map(res => res.json())
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
