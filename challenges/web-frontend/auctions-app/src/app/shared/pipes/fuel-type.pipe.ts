import { Pipe, PipeTransform } from '@angular/core';
import { FuelType } from '../models/vehicle';

@Pipe({
  name: 'fuelType'
})
export class FuelTypePipe implements PipeTransform {

  transform(fuelType: number): string {
    const type: string = FuelType[fuelType];
    if (type && type.length) {
      return type;
    } 

    return fuelType.toString();
  }

}
