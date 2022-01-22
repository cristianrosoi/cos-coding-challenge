import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FuelType } from 'src/app/shared/models/vehicle';
import { AuctionItem } from './../../../../shared/models/auction';

@Component({
  selector: 'app-auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuctionCardComponent {
  @Input() item: AuctionItem = {} as AuctionItem;
}
