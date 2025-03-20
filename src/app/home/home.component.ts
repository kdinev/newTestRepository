import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_CHIPS_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxAvatarComponent } from '@infragistics/igniteui-angular';
import { IgxCategoryChartModule } from 'igniteui-angular-charts';
import { Subject, takeUntil } from 'rxjs';
import { RevenueType } from '../models/ecommerce/revenue-type';
import { CustomersType } from '../models/northwind/customers-type';
import { CustomerDto } from '../models/northwind-swagger/customer-dto';
import { MeetingsTasksType } from '../models/crmapp-data/meetings-tasks-type';
import { ECommerceService } from '../services/ecommerce.service';
import { CRMAppDataService } from '../services/crmapp-data.service';
import { NorthwindSwaggerService } from '../services/northwind-swagger.service';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-home',
  imports: [IGX_CHIPS_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxCategoryChartModule, IgxAvatarComponent, RouterLink],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public eCommerceRevenue: RevenueType[] = [];
  public northwindSwaggerCustomerDto: CustomerDto[] = [];
  public northwindCustomers: CustomersType[] = [];
  public cRMAppDataMeetingsTasks: MeetingsTasksType[] = [];

  constructor(
    private eCommerceService: ECommerceService,
    private northwindSwaggerService: NorthwindSwaggerService,
    private northwindService: NorthwindService,
    private cRMAppDataService: CRMAppDataService,
  ) {}


  ngOnInit() {
    this.eCommerceService.getRevenueList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.eCommerceRevenue = data
    );
    this.northwindSwaggerService.getCustomerDtoList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindSwaggerCustomerDto = data
    );
    this.northwindService.getCustomers().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindCustomers = data
    );
    this.cRMAppDataService.getMeetingsTasksList().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.cRMAppDataMeetingsTasks = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
