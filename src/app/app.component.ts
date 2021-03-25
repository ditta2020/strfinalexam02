import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './model/todo';
import { TodoService } from './service/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  todos$: Observable<Todo[]> = this.todoService.getAll();

  selectedTodo: Todo = new Todo();

  newTodo: Todo = new Todo();

  constructor(
    private todoService: TodoService,
  ) {}

  onCreate(newTodo: Todo): void {}

  onUpdate(todo: Todo): void {
    todo.active = !todo.active;
    this.todoService.update(todo).subscribe(
    () => console.log("todo updated")
  )
  }

  onDelete(todo: Todo): void {
    this.todoService.delete(todo);
  }

  onClickSort(): void {
    
  }
}
