import { useTodoContext } from '../../context/TodoContext';
import { Options } from '../../types/Options';
import { TodoItem } from '../TodoItem/TodoItem';

export const TodoList: React.FC = () => {
  const { todos, status, tempTodo } = useTodoContext();

  const visibleTodos = todos.filter((todo) => {
    switch (status) {
      case Options.ACTIVE:
        return !todo.completed;

      case Options.COMPLETED:
        return todo.completed;

      default:
        return true;
    }
  });

  return (
    <section className="todoapp__main">
      {visibleTodos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
      {tempTodo && <TodoItem todo={tempTodo} isPermanentlyLoading />}
    </section>
  );
};
