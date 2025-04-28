export function Header({ todos }) {
  const todosCount = todos.length;

  return (
    <header>
      <h1 className="text-gradient">To Do List</h1>
      <h2 className="text-gradient">
        You have {todosCount} open {todos.length != 1 ? "tasks" : "task"}.
      </h2>
    </header>
  );
}
