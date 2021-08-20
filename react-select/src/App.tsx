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

  for (let i = index + 1; i < 100; i++) {
    options["option_" + i] = "option " + i;
  }

  const [selected, setSelected] = useState(new Set(["option_4"]));

  const [selected2, setSelected2] = useState(
    new Set(["option_3", "option_4", "option_5"])
  );

  // To allow for multiple copies of react select component
  let componentId = 0;

  return (
    <div className="App">
      <>
        <div className="header"> Single Select</div>
        <ReactSelect
          optionsProp={options}
          selectedProp={selected}
          multiselect={false}
          setSelected={setSelected}
          componentId={componentId++}
        />
        <div className="header"> Multi Select</div>
        <ReactSelect
          optionsProp={options}
          selectedProp={selected2}
          multiselect={true}
          setSelected={setSelected2}
          componentId={componentId++}
        />
      </>
    </div>
  );
};

export default App;
