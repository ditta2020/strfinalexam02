import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../model/todo';

@Pipe({
  name: 'sorter'
})
export class SorterPipe implements PipeTransform {

 transform(value: any[] | null, key: string): any[] | null {
    
    if (!Array.isArray(value) || !key || typeof(key) !== 'string') {
      return value;
    }

    return value.sort((a, b) => {
      const strA = ('' + a[key]).toLowerCase();
      const strB = ('' + b[key]).toLowerCase();
      return strA.localeCompare(strB);
    });

  }

}
