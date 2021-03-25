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

  phraseString: string = '';

  selectedTodo: Todo = new Todo();

  constructor(
    private todoService: TodoService,
  ) {}

  onCreate(todo: Todo): void {
     this.todoService.create(todo).subscribe(
      () => console.log("todo created")
    )
  }

  onUpdate(todo: Todo): void {
    todo.active = !todo.active;
    this.todoService.update(todo).subscribe(
      () => console.log("todo updated")
    )
  }

  onDelete(todo: Todo): void {
    this.todoService.delete(todo).subscribe(
      () => console.log("todo deleted")
    )
  }

    onChangePhrase(event: Event): void {
    this.phraseString = (event.target as HTMLInputElement).value;
  }

  onClickSort(): void {
    
  }
}
