import { TodoCard } from "./TodoCard";

export function TodoList({
  todos,
  selectedTab,
  handleDeleteTodo,
  handleCompleteTodo,
}) {
  const tab = selectedTab;
  const filterToDosList =
    tab === "All"
      ? todos
      : tab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);
  return (
    <>
      {filterToDosList.map((todo, todoIndex) => {
        return (
          <TodoCard
            key={todoIndex}
            todoIndex={todos.findIndex((val) => val.input == todo.input)}
            handleDeleteTodo={handleDeleteTodo}
            handleCompleteTodo={handleCompleteTodo}
            todo={todo}
          />
        );
      })}
    </>
  );
}
