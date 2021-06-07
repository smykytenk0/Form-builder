import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simple'
})
export class SimplePipe implements PipeTransform {

  transform(value: string, ...args: any): string {
    if (value == 'general'){
      return value;
    }
    return value.split('_')[0] + " №" + value.split('_')[1];
  }

}
