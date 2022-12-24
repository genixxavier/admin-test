import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.scss'],
})
export class PromisesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    this.getUsers().then((users) => console.log('user', users));
    /* const promise = new Promise((resolve, reject) => {
      if (false) {
        resolve('first');
      } else {
        reject('erorr');
      }
    });
    promise
      .then((messague) => {
        console.log('promese resove ' + messague);
      })
      .catch((err) => {
        console.log('promise error: ' + err);
      });
    console.log('end'); */
  }

  getUsers() {
    return new Promise((resolve) => {
      fetch('https://reqres.in/api/users')
        .then((resp) => resp.json())
        .then((body) => resolve(body.data));
    });
  }
}
