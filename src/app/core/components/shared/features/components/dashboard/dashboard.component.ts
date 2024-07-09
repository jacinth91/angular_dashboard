import { Component } from '@angular/core';
import { TaskAssignedComponent } from '../task-assigned/task-assigned.component';
import { TaskSummaryComponent } from '../task-summary/task-summary.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TaskAssignedComponent,TaskSummaryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
