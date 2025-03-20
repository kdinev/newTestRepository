import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { IGX_LIST_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IGX_NAVIGATION_DRAWER_DIRECTIVES, IgxAvatarComponent, IgxIconButtonDirective, IgxIconComponent, IgxRippleDirective, IgxToggleActionDirective } from '@infragistics/igniteui-angular';

@Component({
  selector: 'app-root',
  imports: [IGX_NAVIGATION_DRAWER_DIRECTIVES, IGX_NAVBAR_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxIconButtonDirective, IgxToggleActionDirective, IgxIconComponent, IgxRippleDirective, IgxAvatarComponent, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
