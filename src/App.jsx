import Sidebar from "./Sidebar";
import QuestionsTable from "./QuestionsTable";
import Header from "./Header";

const App = () => {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <Header />
        <QuestionsTable />
      </main>
    </div>
  );
};

export default App;
