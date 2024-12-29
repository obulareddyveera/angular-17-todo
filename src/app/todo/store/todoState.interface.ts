export type TodoEntity = {
  id: number;
  subject: string;
  status: 'Start' | 'InProgress' | 'Stop' | 'Completed';
  rating: number;
  createdOn: Date;
  modifiedOn: Date;
};

export type TodoState = {
  todoList: TodoEntity[];
  status: number;
};
