import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  templateUrl: './skeleton-loader.component.html',
  styleUrls: ['./skeleton-loader.component.scss'],
})
export class SkeletonLoaderComponent implements OnChanges {

  @Input() public lines = 4;

  public array: number[];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.array = Array.apply(null, {length: this.lines}).map(Number.call, Number);
  }
}
