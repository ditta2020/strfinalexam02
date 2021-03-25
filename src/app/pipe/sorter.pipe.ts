import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

 transform(value: any[] | null): any[] | null {
   console.log(value);
    
    if (!Array.isArray(value)) {
       return value;
     }

    return value.sort((a, b) => {
      const strA = ('' + a.title).toLowerCase();
      const strB = ('' + b.title).toLowerCase();
      return strA.localeCompare(strB);
    });

  }

}
