import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userName'
})
export class UserNamePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === 'user2' || value === 'user1'){
      return 'Mr ' + value;
    }else{
      return 'Ms ' + value;
    }
  }

}
