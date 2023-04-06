interface TodoType {
  _id: string | number;
  task: string;
  completed: boolean;
  _v: number;
}

interface ITodoList {
  todos: TodoType[];
  toggleTodo: ToggleFn;
  deleteTodo: DeleteFn;
}

type AddFn = (text: string) => void;

type ToggleFn = (item: TodoType) => void;

type DeleteFn = (id: string | number) => void;
