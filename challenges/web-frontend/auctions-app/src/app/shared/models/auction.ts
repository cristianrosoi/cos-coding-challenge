import { AssociatedVehicle } from "./vehicle";

export interface Auction {
  items: AuctionItem[];
  page: number;
  total: number;
}

export interface AuctionItem {
  id: number;
  label: string;
  associatedVehicle: AssociatedVehicle;
  currentHighestBidValue: number;
  remainingTimeInSeconds: number;
  amIHighestBidder: boolean;
}
