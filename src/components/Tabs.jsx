export function Tabs({ todos, selectedTab, setSelectedTab }) {
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
          <button
            onClick={() => setSelectedTab(tab)}
            key={tabIndex}
            className={
              "tab-button " + (tab === selectedTab ? " tab-selected" : "")
            }
          >
            {tab}
            <span>({numOfTasks})</span>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}
