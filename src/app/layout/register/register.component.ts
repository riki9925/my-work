import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http, Response } from '@angular/http';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    animations: [routerTransition()]
})
export class RegisterComponent implements OnInit {
    uidForm: any;
    newUid: any;
    level: any;
    uid: any;
    closeResult: string;
    jabatan: any;
    newVal: any;
    results: any;
    form = false;
    constructor(
        private _http: Http,
        private modalService: NgbModal

    ) { }
    ngOnInit() {
        this.newVal = 1;
        this.getData();
        this.getJabatan();
        this.getUID();
    }

    getData() {
        this._http.get('http://103.15.226.134:2017/level/user', ).map(res => res.json())
            .subscribe(data => {
                this.results = data['data'];
                // console.log(this.results);
            });

    }
    getJabatan() {
        const body = ({
            id: this.newVal
        });
        console.log(body)
        this._http.post('http://103.15.226.134:2017/level/jabatan', body).map(res => res.json())
            .subscribe(data => {
                this.jabatan = data['data'];
                console.log(this.jabatan);
            });
    }

    onChange(event) {
        this.level = event.target.value;
        this.getJabatan();
        // console.log(newVal);
    }
    Change(event) {
        this.newVal = event.target.value;
        // console.log(newVal);
    }
    cekUid(event) {
        this.newUid = event.target.value;
        this.uidDetail()
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

    getUID() {
        this._http.get('http://103.15.226.134:2017/uid', ).map(res => res.json())
            .subscribe(data => {
                this.uid = data['data'];
                // console.log(this.results);
            });

    }

    uidDetail() {
        const body = ({
            id: this.newUid
        });
        this._http.post('http://103.15.226.134:2017/uid/detail', body ).map(res => res.json())
            .subscribe(data => {
                this.uidForm = data['data'];
                this.form = true;
                //  console.log(this.uidFrom);
            });

    }

}
