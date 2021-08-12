import { useState } from "react";
import "./App.css";
import ReactSelect from "./select/ReactSelect";

const App = () => {
  let index = 0;
  const options = {
    ["option_" + ++index]: "Select All",
    ["option_" + ++index]: "Deselect All",
    ["option_" +
    ++index]: "option 1 be a reallly long option feajw;feja;fejafoeijfeiajfiehifewiafjeiofjaeiwfjioejafiojfiojaeofiaewiofjeioajfiaewjfiaoejfoiea;f",
    ["option_" + ++index]: "option 2",
    ["option_" + ++index]: "option 3",
    ["option_" + ++index]: "option 3",
  };
  const [selected, setSelected] = useState(
    new Set(["option_3", "option_4", "option_5"])
  );

  return (
    <div className="App">
      <>
        <ReactSelect
          optionsProp={options}
          selectedProp={selected}
          multiselect={false}
          setSelected={setSelected}
        />
      </>
    </div>
  );
};

export default App;
