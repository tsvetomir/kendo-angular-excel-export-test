import { Component, ViewEncapsulation } from '@angular/core';
import { aggregateBy } from '@progress/kendo-data-query';
import { sampleProducts } from './products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  public title = 'app works!';

  public aggregates: any[] = [{field: 'UnitPrice', aggregate: 'sum'}];

  public products: any[] = sampleProducts;

  public total: any = aggregateBy(this.products, this.aggregates);

  public group: any[] = [{
      field: "Discontinued",
      aggregates: this.aggregates
  }];
}
