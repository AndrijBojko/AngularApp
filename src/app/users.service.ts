import {Http} from '@angular/http'
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators/'; 

@Injectable()
export class UserService {

    constructor (private http: Http) {}

    getUsers(){
        return this.http.get('https://randomuser.me/api/?inc=gender,name,picture,location&results=8&nat=gb')
        .pipe(map(response => response.json()))
        .pipe(map(response => response.results))
        .pipe(map(users => {
            return users.map(u => {
                return {
                    name: u.name.first + ' ' + u.name.last,
                    geo: u.location.city,
                    image: u.picture.large
                }
            })
        }));
    }
}