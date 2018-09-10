import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { Http } from '@angular/http';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { ReCaptchaComponent } from 'angular2-recaptcha';




@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    loging: Response;
    @ViewChild(ReCaptchaComponent) captcha: ReCaptchaComponent;
    api: any;
    pesan: any;
    status: any;
    results: any;
    publicIp: any;

    constructor(
        public router: Router,
        public http: Http,

    ) { }

    ngOnInit() {
        this.getLok();
    }

    onLoggedin() {
        localStorage.setItem('isLoggedin', 'true');
    }

    getLok() {
        this.http.get('http://ip-api.com/json')
            .map(res => res.json())
            .subscribe((res: Response) => {
                this.loging = res;
                // console.log(this.loging)
            });
    }


    login(event, username, password) {
        this.pesan = '';
        this.postlog()
        event.preventDefault();
        const body = ({
            username: username,
            password: password
        });
        this.http.post('http://103.15.226.134:9000/emikro/auth/login', body)
            .map(res => res.json())
            .subscribe(
            data => {
                this.status = data['status'];
                // console.log(this.status)
                if (this.status == 200) {
                    localStorage.setItem('nama', data.NAMA);
                    localStorage.setItem('cif', data.CIF);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('isLoggedin', 'true');
                    this.router.navigate(['/menu']);
                    // console.log(localStorage.getItem('token'))
                    // console.log(localStorage.getItem('ID_BAGIAN'))
                } else {

                }
            },
            err => {
                this.results = JSON.parse(err._body);
                console.log(this.results)
                this.pesan = this.results.msg
            });
    }

    postlog() {
        const body = ({
            data: this.loging
        });
        this.http.post('http://103.15.226.134:2017/log', body)
            .map(res => res.json())
            .subscribe((res: Response) => { });
    }


}
