import { Pipe, PipeTransform } from '@angular/core';
// import { Photographer } from './photographer.model';

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {
//ASK ABOUT THIS
  transform(photographers: any, term: any): any {
    // console.log(photographers); SHOWS OBJECT
    // photographers.forEach(...) DOESN'T WORK NOT WAY TO ITERATE
    //CONSOLE GIVES ERRORS, OBJECT IS NULL??????

    return photographers.format===term;


 }
}
