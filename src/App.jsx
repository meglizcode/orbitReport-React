import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import React, {useState} from "react";
import satData from "./components/satData";

function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newStatDisplay) => {
      return newStatDisplay.orbitType === currentType;
    });
    setSat(displatSats);
  };

  return (
    <div>
      <Banner />
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </div>
  );
}

export default App;