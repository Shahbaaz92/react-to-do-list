export function Tabs({ todos }) {
  const tabs = ["All", "Active", "Completed"];
  return (
    <nav>
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Active"
            ? todos.filter((todo) => !todo.complete).length
            : todos.filter((todo) => todo.complete).length;

        return (
          <button key={tabIndex} className="tab-button">
            {tab}
            <span>({numOfTasks})</span>
          </button>
        );
      })}
    </nav>
  );
}
