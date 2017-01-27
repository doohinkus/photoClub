import { Component, OnInit, Input } from '@angular/core';
import { Photographer } from '../photographer.model';
import { PhotographerService } from '../photographer.service';

@Component({
  selector: 'app-edit-photographer',
  templateUrl: './edit-photographer.component.html',
  styleUrls: ['./edit-photographer.component.css'],
  providers: [ PhotographerService ]
})
export class EditPhotographerComponent implements OnInit {
  @Input() selectedPhotographer;
  constructor( private photographerService: PhotographerService) { }

  ngOnInit() {
  }
  beginUpdatingPhotographer(photographerToUpdate){
   this.photographerService.updatePhotographer(photographerToUpdate);
  }

}
