export interface AssociatedVehicle {
  id: number;
  ez: string;
  fuelType: number; // enum
  transmission: number; // enum
  vehicleImages: VehicleImages[];
  vin: string;
}

export interface VehicleImages {
  perspective: number;
  url: string;
}