import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { Http, Response } from '@angular/http';

@Component({
    selector: 'app-lvuser',
    templateUrl: './lvuser.component.html',
    styleUrls: ['./lvuser.component.scss'],
    animations: [routerTransition()]
})
export class LvuserComponent implements OnInit {
    newVal: any;
    jabatan: any;
    results: any;

    settings = {
        delete: {
            confirmDelete: true,
          },
          add: {
            confirmCreate: true,
          },
          edit: {
            confirmSave: true,
          },
        columns: {
            id_jab: {
                title: 'Id'
            },
            jabatan: {
                title: 'Jabatan'
            }
        }
    };
    constructor(
        private _http: Http,

    ) { }
    ngOnInit() {
        this.getData();
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
        // console.log(body)
        this._http.post('http://103.15.226.134:2017/level/jabatan', body).map(res => res.json())
            .subscribe(data => {
                this.jabatan = data['data'];
                //  console.log(this.jabatan);
            });
    }

    onChange(event) {
        this.newVal = event.target.value;
        this.getJabatan();
        // console.log(newVal);
    }
    onDeleteConfirm(event) {
        if (window.confirm('Are you sure you want to delete?')) {
          event.confirm.resolve();
        } else {
          event.confirm.reject();
        }
      }
    
      onSaveConfirm(event) {
        if (window.confirm('Are you sure you want to save?')) {
          event.newData['name'] += ' + added in code';
          event.confirm.resolve(event.newData);
        } else {
          event.confirm.reject();
        }
      }

      onCreateConfirm(event) {
        const body = ({
            id: this.newVal,
            id_jab : event.newData.id_jab,
            jabatan : event.newData.jabatan,
        });
        this._http.post('http://103.15.226.134:2017/level/jabatan/add', body).map(res => res.json())
            .subscribe(data => {
                this.jabatan = data['data'];
                //  console.log(this.jabatan);
            });
            event.confirm.reject();
      }
}
