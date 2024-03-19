import { Component } from '@angular/core';
import { Task } from './Modelinterface/task.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list-app';

  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  onTaskAdded(task: Task) {
    this.tasks.push(task);
  }
}
