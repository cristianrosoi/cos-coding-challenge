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
  '-1': 'N/A',
  '0': 'Petrol',
  '1': 'Diesel',
  '2': 'Hybrid',
  '3': 'Electric'
}

export const TransmisionType: any = {
  '-1': 'N/A',
  '0': 'Automatic',
  '1': 'Manual'
}