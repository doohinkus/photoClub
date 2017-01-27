import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseObjectObservable } from 'angularfire2';
import { Photographer } from '../photographer.model';
import { PhotographerService } from '../photographer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PhotographerService]
})
export class AdminComponent implements OnInit {

  constructor(private photographerService: PhotographerService, private router: Router) { }

  ngOnInit() {
  }

  submitForm(name: string, pic: string, format: string, bio: string, site: string) {
    if (name !="" && pic!="" && format!="" && bio!="" && site!=""){
      var newPhotographer: Photographer = new Photographer(name, pic, format, bio, site);
      this.photographerService.addPhotographer(newPhotographer);
      alert ('Photographer added to the database.');
      
    } else{
      alert ('The computer needs all of inputs. Enter them into the computer screen or zombies will happen.');
    }
  }

}
