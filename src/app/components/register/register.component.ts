import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    cities: string[] = ['Toronto', 'Ottawa', 'Montreal', 'Vancouver', 'Calgary']

    peopleInfo: any = {
        username: '',
        gender: '',
        city: '',
        hobbies: [
            {
                title: 'Eating',
                checked: false
            },
            {
                title: 'Watching TV',
                checked: false
            },
            {
                title: 'Sleeping',
                checked: false
            },
            {
                title: 'Coding',
                checked: false
            }
        ],
        remark: ''
    }

    getContent() {
        console.log(this.peopleInfo)
    }

}
