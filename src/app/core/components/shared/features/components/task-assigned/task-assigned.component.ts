import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-task-assigned',
  standalone: true,
  imports: [TableModule,CommonModule],
  templateUrl: './task-assigned.component.html',
  styleUrl: './task-assigned.component.css'
})
export class TaskAssignedComponent {
  users: any[] = [
    {
      initial: "GH",
      name: "Guy Hawkins",
      handle: "guy"
    },
    {
      initial: "GH",
      name: "Guy Hawkins",
      handle: "guy"
    },
    {
      initial: "GH",
      name: "Guy Hawkins",
      handle: "guy"
    }
    
  ]
}
