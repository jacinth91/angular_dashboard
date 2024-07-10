import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-task-assigned',
  standalone: true,
  imports: [TableModule],
  templateUrl: './task-assigned.component.html',
  styleUrl: './task-assigned.component.css'
})
export class TaskAssignedComponent {
  products: any[] = [
    {
      category: "Accessories",
      name: "Bamboo Watch",
      quantity: 24,
      code: "f230fh0g3",

    },
    {
      category: "Accessories",
      name: "Bamboo Watch",
      quantity: 24,
      code: "f230fh0g3",

    },
    {
      category: "Accessories",
      name: "Bamboo Watch",
      quantity: 24,
      code: "f230fh0g3",

    }
  ]
}
