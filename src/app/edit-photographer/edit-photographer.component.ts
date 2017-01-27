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
  beginDeletingPhotographer(photographerToDelete){
    if(confirm("Are you sure you want to delete this photographer from the computer database?")){
      this.photographerService.deletePhotographer(photographerToDelete);
    }
  }

}
