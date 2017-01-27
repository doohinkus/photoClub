import { Component, OnInit, Input, Output } from '@angular/core';
import { Photographer } from '../photographer.model';
import { Router } from '@angular/router';

import { PhotographerService } from '../photographer.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  selector: 'app-photographers',
  templateUrl: './photographers.component.html',
  styleUrls: ['./photographers.component.css'],
  providers: [ PhotographerService ]
})
export class PhotographersComponent implements OnInit {
  photographers: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByFormat: string = "Film";

  constructor(private router: Router, private photographerService: PhotographerService){}

  ngOnInit() {
    this.photographers = this.photographerService.getPhotographers();
  }
  onChange(optionFromMenu) {
    this.filterByFormat = optionFromMenu;
  }

}
