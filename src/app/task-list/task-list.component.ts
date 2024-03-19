import { Component, OnInit } from '@angular/core';
import { Task } from '../Modelinterface/task.model';
import { TaskService } from '../task.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [];
  constructor(private taskService: TaskService) {
  }
  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    console.log(this.tasks);
  }

  updateTask(updateTask: Task): void {
    this.taskService.updateTask(updateTask);

  }
  deleteTask(taskId: number): void {
    this.taskService.deleteTask(taskId);
    this.tasks = this.taskService.getTasks();

  }


  getStatusColor(status: string): string {
    switch (status) {
      case 'pending':
        return 'secondary';
      case 'in progress':
        return 'warning';
      case 'completed':
        return 'success';
      default:
        return 'light';
    }
  }

  getPriorityColor(priority: string): string {
    switch (priority) {
      case 'High':
        return 'danger';
      case 'Medium':
        return 'warning';
      case 'Low':
        return 'primary';
      default:
        return ''; // Or a default color
    }
  }
}
