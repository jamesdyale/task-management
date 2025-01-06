import { CreateTaskDto } from './dto/create-task-dto';
import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.model';
import { v4 as generatedId } from 'uuid';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id === id);
  }

  createTask(createTaskDTO: CreateTaskDto): Task {
    const { title, description } = createTaskDTO;

    const task: Task = {
      id: generatedId(),
      title,
      description,
      status: TaskStatus.OPEN,
    };

    this.tasks.push(task);
    return task;
  }

  updateTask(id: string, status: TaskStatus): Task {
    const task = this.getTaskById(id);

    const newUpdatedTask: Task = {
      ...task,
      status,
    };

    this.tasks = this.tasks.map((task) => {
      if (task.id === id) {
        return newUpdatedTask;
      }
      return task;
    });

    return newUpdatedTask;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
