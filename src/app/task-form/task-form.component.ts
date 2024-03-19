import { Component, OnInit } from '@angular/core';
import { Task } from '../Modelinterface/task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent{
  task:Task
  
  constructor(private taskService:TaskService) { 
    this.task = this.getInitTask();
   }
  addTask(): void {
    console.log('Adding task:', this.task);
    this.taskService.addTask(this.task);
    console.log('Task added successfully.');
    this.task = this.getInitTask();
    
  }

  private getInitTask(): Task {
    return { id: 0, name: '', description: '', status: 'pending', priority: 'Medium' };
  }
}
