import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http, Response } from '@angular/http';


@Component({
    selector: 'app-master-collectibilitas',
    templateUrl: './mastercollectibilitas.component.html',
    styleUrls: ['./mastercollectibilitas.component.scss'],
    animations: [routerTransition()]
})
export class MasterCollectibilitasComponent implements OnInit {
    mastercol: any;
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
            URUT: {
                title: 'Urut'
            },
            COLLECTIBILITAS: {
                title: 'Collectibilitas'
            }
        }
    };

    getData() {
        const body = ({
            CIF : localStorage.getItem('cif')
        })
        this._http.post('http://103.15.226.134:2017/mastercol', body ).map(res => res.json())
            .subscribe(data => {
                this.mastercol = data['data'];
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
