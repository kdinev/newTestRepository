import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IGX_DIALOG_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_GRID_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IGX_SELECT_DIRECTIVES, IgxButtonDirective, IgxIconComponent, IgxRippleDirective, IgxToggleActionDirective } from '@infragistics/igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { CustomersType } from '../models/northwind/customers-type';
import { NorthwindService } from '../services/northwind.service';

@Component({
  selector: 'app-accounts',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_DROP_DOWN_DIRECTIVES, IGX_SELECT_DIRECTIVES, IGX_DIALOG_DIRECTIVES, IGX_GRID_DIRECTIVES, IgxToggleActionDirective, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, FormsModule, RouterLink],
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public value: string = '2';
  public northwindCustomers: CustomersType[] = [];
  public value1: string = '1';

  constructor(
    private northwindService: NorthwindService,
  ) {}


  ngOnInit() {
    this.northwindService.getCustomers().pipe(takeUntil(this.destroy$)).subscribe(
      data => this.northwindCustomers = data
    );
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
