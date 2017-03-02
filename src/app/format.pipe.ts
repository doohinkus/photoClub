import { Pipe, PipeTransform } from '@angular/core';
import { Photographer } from './photographer.model';
import { PhotographerService } from './photographer.service';

@Pipe({
  name: 'format',
  pure: false
})
export class FormatPipe implements PipeTransform {

  transform(input: Photographer[], term: string) {
  var output: Photographer[] = [];
  //for each must be in the if statement to work
  if (term !== "All"){
    input.forEach((data) => {
      if (data.format === term){
        output.push(data);
      }
    });
    return output;
  }
   return input;


 }
}
