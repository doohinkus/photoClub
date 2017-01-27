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
  getPhotographerById (photographerID: string){
     return this.angularFire.database.object('/photographers/' + photographerID);

  }
  addPhotographer(newPhotographer: Photographer) {
    this.photographers.push(newPhotographer);
  }
  updatePhotographer(localUpdatedPhotographer){
    var photographerEntryInFirebase = this.getPhotographerById(localUpdatedPhotographer.$key);
    photographerEntryInFirebase.update({
      name: localUpdatedPhotographer.name,
      pic: localUpdatedPhotographer.pic,
      format: localUpdatedPhotographer.format,
      bio: localUpdatedPhotographer.bio,
      site: localUpdatedPhotographer.site
      });
  }
  deletePhotographer(localphotographerToDelete){
    var photographerEntryInFirebase = this.getPhotographerById(localphotographerToDelete.$key);
    photographerEntryInFirebase.remove();
  }

}
