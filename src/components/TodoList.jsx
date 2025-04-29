import { TodoCard } from "./TodoCard";

export function TodoList({ todos }) {
  const tab = "All";
  const filterToDosList =
    tab === "All"
      ? todos
      : tab === "Completed"
      ? todos.filter((val) => val.complete)
      : todos.filter((val) => !val.complete);
  return (
    <>
      {filterToDosList.map((todo, todoIndex) => {
        return <TodoCard key={todoIndex} todoIndex={todoIndex} todo={todo} />;
      })}
    </>
  );
}
