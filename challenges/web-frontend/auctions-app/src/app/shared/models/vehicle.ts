export interface AssociatedVehicle {
  id: number;
  ez: string;
  fuelType: number; // enum
  transmission: number; // enum
  vehicleImages: VehicleImages[];
  vin: string;
  mileageInKm: number;
}

export interface VehicleImages {
  perspective: number;
  url: string;
}

export const FuelType: any = {
  '0': 'Petrol',
  '1': 'Diesel'
}