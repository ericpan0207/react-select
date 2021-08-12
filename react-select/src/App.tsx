import { useState } from "react";
import "./App.css";
import ReactSelect from "./select/ReactSelect";

const App = () => {
  const options = [
    "Select All",
    "Deselect All",
    "option 1 be a reallly long option feajw;feja;fejafoeijfeiajfiehifewiafjeiofjaeiwfjioejafiojfiojaeofiaewiofjeioajfiaewjfiaoejfoiea;f",
    "option 2",
    "option 3",
  ];
  const [selected, setSelected] = useState(["test1", "option 2", "option 3"]);

  return (
    <div className="App">
      <ReactSelect
        optionsProp={options}
        selectedProp={selected}
        multiselect={true}
        setSelected={setSelected}
      />
    </div>
  );
};

export default App;
