import { Injectable } from '@angular/core';
import { Photographer } from './photographer.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class PhotographerService {
  photographers: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
  this.photographers = angularFire.database.list('/photographers');
}

getPhotographers(){
    return this.photographers;
}

}
