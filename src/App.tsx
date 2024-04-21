import { Header } from "./components/Header/Header.js";
import { FilterPanel } from "./components/FilterPanel/FilterPanel.js";
import { JobList } from "./components/JobList/JobList.js";
import { Footer } from "./components/Footer/Footer.js";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
      <Footer />
    </>
  );
}

export default App;
