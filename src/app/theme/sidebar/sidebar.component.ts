import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';

import { SidemenuComponent } from '../sidemenu/sidemenu.component';
import { UserPanelComponent } from './user-panel.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    SidemenuComponent,
    UserPanelComponent,
  ],
})
export class SidebarComponent implements OnInit {

  @Input() showToggle = true;
  @Input() showUser = true;
  @Input() showHeader = true;
  @Input() toggleChecked = true;

  @Output() toggleCollapsed = new EventEmitter<void>();
  @Output() closeSidenav = new EventEmitter<void>();
  ngOnInit(): void {
    this.closeSidenav.emit()
    this.closeSidenav.emit()
  }
}
