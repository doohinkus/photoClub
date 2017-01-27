import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { FirebaseObjectObservable } from 'angularfire2';
import { PhotographerService } from '../photographer.service';

import { Photographer } from '../photographer.model';


@Component({
  selector: 'app-photographer-detail',
  templateUrl: './photographer-detail.component.html',
  styleUrls: ['./photographer-detail.component.css'],
  providers: [PhotographerService]
})
export class PhotographerDetailComponent implements OnInit {

  photographerId: string;
  photographerToDisplay;

  constructor(
  private route: ActivatedRoute,
  private location: Location,
  private photographerService: PhotographerService
) {}

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.photographerId = urlParameters['id'];
    });
    this.photographerToDisplay = this.photographerService.getPhotographerById(this.photographerId);
    // this.albumToDisplay = this.albumService.getAlbumById(this.albumId);
    }
  }

// }
