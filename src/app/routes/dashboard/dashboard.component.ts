import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PageHeaderComponent } from '@shared';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [PageHeaderComponent],
})
export class DashboardComponent {
  showPopup = false;

  // Called when the Correct Reply button is clicked
  onCorrectReply(): void {
    this.showPopup = true;
  }

  // Called when the Close button or 'X' icon is clicked
  closePopup(): void {
    this.showPopup = false;
  }

}
