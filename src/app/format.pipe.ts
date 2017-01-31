import { Pipe, PipeTransform } from '@angular/core';
// import { Photographer } from './photographer.model';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {
  
  //this should import both the model and the Service
  //photographers:Photographer
//ASK ABOUT THIS
  
  //transform(input: Photographer[], filter)
  transform(photographers: any, term: any): any {
    // console.log(photographers); SHOWS OBJECT
    // photographers.forEach(...) DOESN'T WORK NOT WAY TO ITERATE
    //CONSOLE GIVES ERRORS, OBJECT IS NULL??????
  if (term !== "All"){
    return photographers.format===term;
  }
    return photographers;



 }
}
