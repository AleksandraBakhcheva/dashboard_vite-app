import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPositions } from "./store/positions/positionActions.js";
import data from "./mock/data.json";
import { Header } from "./components/Header/Header.js";
import { FilterPanel } from "./components/FilterPanel/FilterPanel.js";
import { JobList } from "./components/JobList/JobList.js";
import { Footer } from "./components/Footer/Footer.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPositions(data));
  }, []);

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
