import { TransmisionType } from './../models/vehicle';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transmissionType'
})
export class TransmissionTypePipe implements PipeTransform {

  transform(transmission: number,): string {
    const type: string = TransmisionType[transmission];
    if (type && type.length) {
      return type;
    } 

    return transmission.toString();
  }

}
