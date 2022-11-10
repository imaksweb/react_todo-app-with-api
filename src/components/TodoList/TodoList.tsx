import React from 'react';
import { Todo } from '../../types/Todo';
import { TodoItem } from './TodoItem';

type Props = {
  todos: Todo[];
  tempTodo: Todo | null;
  isAdding: boolean;
  onDelete: (id: number) => Promise<void>;
  activeTodoIds: number[];
  onToggle: (id: number) => Promise<void>;
};

export const TodoList: React.FC<Props> = ({
  todos,
  tempTodo,
  isAdding,
  onDelete,
  activeTodoIds,
  onToggle,
}) => (
  <section className="todoapp__main" data-cy="TodoList">
    {todos.map(todo => (
      <TodoItem
        todo={todo}
        key={todo.id}
        onDelete={onDelete}
        activeTodoIds={activeTodoIds}
        onToggle={onToggle}
      />
    ))}

    {isAdding && tempTodo && (
      <TodoItem
        todo={tempTodo}
        key={tempTodo.id}
        onDelete={onDelete}
        activeTodoIds={activeTodoIds}
        onToggle={onToggle}
      />
    )}
  </section>
);
