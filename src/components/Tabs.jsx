export function Tabs() {
  const tabs = ["All", "Active", "Completed"];
  return (
    <nav>
      {tabs.map((tab, tabIndex) => {
        return (
          <button key={tabIndex} className="tab-button">
            {tab}
            <span>(0)</span>
          </button>
        );
      })}
    </nav>
  );
}
