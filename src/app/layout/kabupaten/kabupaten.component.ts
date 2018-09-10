import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http, Response } from '@angular/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-kabupaten',
    templateUrl: './kabupaten.component.html',
    styleUrls: ['./kabupaten.component.scss'],
    animations: [routerTransition()]
})
export class KabupatenComponent implements OnInit {
    propinsi: any;
    newVal: any;
    closeResult: string;
    results: any;
    table = false;

    constructor(
        private _http: Http,
        private modalService: NgbModal
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
            ID_KAB: {
                title: 'ID'
            },
            NAMA_KABUPATEN: {
                title: 'Nama Kabupaten'
            }
        }
    };

    getData() {
        const body = ({
            id: this.newVal
        });
        this._http.post('http://103.15.226.134:2017/kabupaten', body ).map(res => res.json())
            .subscribe(data => {
                this.results = data['data'];
                this.table = true;
                // console.log(this.results);
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

    open(content) {
        this.modalService.open(content).result.then((result) => {
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

    onChange(event) {
        this.newVal = event.target.value;
        this.getData();
        // console.log(newVal);
    }
    getProp() {
        this._http.get('http://103.15.226.134:2017/propinsi', ).map(res => res.json())
            .subscribe(data => {
                this.propinsi = data['data'];
                // console.log(this.results);
            });

    }
}
