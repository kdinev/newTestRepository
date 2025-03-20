import { Component } from '@angular/core';
import { IGX_ACCORDION_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_EXPANSION_PANEL_DIRECTIVES, IGX_LIST_DIRECTIVES, IGX_TABS_DIRECTIVES, IgxAvatarComponent, IgxButtonDirective, IgxCheckboxComponent, IgxIconComponent, IgxRippleDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-account-sample',
  imports: [IGX_EXPANSION_PANEL_DIRECTIVES, IGX_ACCORDION_DIRECTIVES, IGX_CHIPS_DIRECTIVES, IGX_TABS_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxRippleDirective, IgxIconComponent, IgxAvatarComponent, IgxCheckboxComponent],
  templateUrl: './account-sample.component.html',
  styleUrls: ['./account-sample.component.scss']
})
export class AccountSampleComponent {}
